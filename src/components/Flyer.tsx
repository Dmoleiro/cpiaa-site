import React, { ReactElement, useEffect, useState } from 'react';
import flyer1 from '../assets/flyers/flyer_questionario.png';
import flyer2 from '../assets/flyers/flyer_rastreio.png';
import * as Styled from './Flyer.styled';

export const FLYER_CONTAINER_TEST_ID = 'flyer-container-test-id'

const Flyer: React.FC = () => {
    let timer: string | number | NodeJS.Timer | undefined
    const [showFlyer, toggleFlyerVisibility] = useState<boolean>(true)
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleCloseFlyer = () => toggleFlyerVisibility(false)

    const getArrow = (rotation: string, placement: string, onClick: () => void): ReactElement => {
        return <Styled.Arrow placement={placement} rotation={rotation} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation()
            onClick()
        }
        }>
            <span></span>
            <span></span>
            <span></span>
        </Styled.Arrow>
    }

    const handleArrowClick = (index: number): void => {
        setCurrentSlide(index)
        clearInterval(timer)
    }

    const getFlyer = (index: number): ReactElement => {
        if (index === 0) {
            return <Styled.FlyerContent>
                <img src={flyer1} loading="eager" onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => e.stopPropagation()} />
                <a href="https://docs.google.com/forms/d/1-9-8OpAF_15FbjReN8LrFN5a79djbQvYFKno3LIk_tQ/edit?usp=forms_home" target="_blank"><Styled.ButtonForm>Questionário</Styled.ButtonForm></a>
                <Styled.ButtonContinue onClick={handleCloseFlyer}>Continuar para o site</Styled.ButtonContinue>
                {getArrow('-90', 'right', () => handleArrowClick(1))}
            </Styled.FlyerContent>
        }

        return <Styled.FlyerContent>
            <img src={flyer2} loading="eager" onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => e.stopPropagation()} />
            <Styled.ButtonContinue onClick={handleCloseFlyer}>Continuar para o site</Styled.ButtonContinue>
            {getArrow('90', 'left', () => handleArrowClick(0))}
        </Styled.FlyerContent>
    }

    const slides = [getFlyer(0), getFlyer(1)]

    useEffect(() => {
        timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(timer)
        };
    }, [slides.length])


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