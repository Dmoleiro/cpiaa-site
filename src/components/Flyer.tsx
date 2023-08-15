import React, { ReactElement, useEffect, useState } from 'react';
import flyer1 from '../assets/flyers/flyer_questionario.png';
import flyer2 from '../assets/flyers/flyer_rastreio.png';
import * as Styled from './Flyer.styled';

export const FLYER_CONTAINER_TEST_ID = 'flyer-container-test-id'

const Flyer: React.FC = () => {
    const [showFlyer, toggleFlyerVisibility] = useState<boolean>(true)
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleCloseFlyer = () => toggleFlyerVisibility(false)

    const getFlyer = (index: number): ReactElement => {
        if (index === 0) {
            return <Styled.FlyerContent>
                <img src={flyer1} loading="eager" onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => e.stopPropagation()} />
                <a href="https://docs.google.com/forms/d/1-9-8OpAF_15FbjReN8LrFN5a79djbQvYFKno3LIk_tQ/edit?usp=forms_home" target="_blank"><Styled.ButtonForm>Questionário</Styled.ButtonForm></a>
                <Styled.ButtonContinue onClick={handleCloseFlyer}>Continuar para o site</Styled.ButtonContinue>
            </Styled.FlyerContent>
        }

        return <Styled.FlyerContent>
            <img src={flyer2} loading="eager" onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => e.stopPropagation()} />
        </Styled.FlyerContent>
    }

    const slides = [getFlyer(0), getFlyer(1)]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length]);


    return (
        <Styled.FlyerBackground visible={showFlyer} data-testid={FLYER_CONTAINER_TEST_ID} onClick={handleCloseFlyer}>
            <Styled.SlidesContainer>
                {slides.map((slide: ReactElement, index: number) => (
                    <Styled.Slide
                        key={index}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slide}
                    </Styled.Slide>
                ))}
            </Styled.SlidesContainer>
        </Styled.FlyerBackground>
    )

}

export default Flyer