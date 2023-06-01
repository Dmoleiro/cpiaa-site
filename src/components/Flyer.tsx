import React, { useState } from 'react';
import flyer from '../assets/flyers/opening.png';
import * as Styled from './Flyer.styled';

export const FLYER_CONTAINER_TEST_ID = 'flyer-container-test-id'

const Flyer: React.FC = () => {
    const [showFlyer, toggleFlyerVisibility] = useState<boolean>(true)
    return (
        <Styled.FlyerBackground visible={showFlyer} data-testid={FLYER_CONTAINER_TEST_ID} onClick={() => toggleFlyerVisibility(false)}>
            <Styled.FlyerContent>
                <img src={flyer} loading="eager" />
            </Styled.FlyerContent>
        </Styled.FlyerBackground>
    )
}

export default Flyer