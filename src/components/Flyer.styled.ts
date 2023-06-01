import styled from 'styled-components';

interface FlyerStyleProps {
    visible: boolean
}

export const FlyerBackground = styled.div<FlyerStyleProps>`
    cursor: pointer;
    display: ${props => props.visible ? 'flex' : 'none'};
    background: rgba(0, 0, 0, 0.90);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    justify-content: center;
    align-items: center;
`

export const FlyerContent = styled.div`
position: relative;
    display: flex;
    z-index: 6;
    max-width: 30vw;
    max-height: 80vh;

    @media (max-width: 799px) {
        max-width: 50vw;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
`