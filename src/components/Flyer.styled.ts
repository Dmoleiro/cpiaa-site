import styled from 'styled-components';

interface FlyerStyleProps {
    visible?: boolean
    rotation?: string
    placement?: string
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
        cursor: default;
        border-radius:4px;
    }
`

export const ButtonContinue = styled.button`
    font-size: 14px;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%,0);
    background-color: ${props => props.theme.flyerButtonColor};
    color: black;
    outline: none;
    border: 0;

    &:focus {
        outline: none;
    }

    &:hover {
        outline: none;
    }
    @media (max-width: 799px) {
       font-size: 7px;
    }
`

export const ButtonForm = styled(ButtonContinue)`
bottom: 40%;
background-color: ${props => props.theme.flyerButtonColorSecondary};
`

export const SlidesContainer = styled.div`
width: 100%;
position: relative;
  display: flex;
  overflow: hidden;
`

export const Slide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  justify-content: center;
`

export const Arrow = styled.div<FlyerStyleProps>`
    position: absolute;
    top: 50%;
    left: ${props => props.placement === 'left' ? '-10px' : ''};
    right: ${props => props.placement === 'right' ? '-10px' : ''};
    transform: translate(-50%, -50%);
    transform: rotate(90deg);
    cursor: pointer;
    transform: rotate(${props => props.rotation}deg);


& span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid ${props => props.theme.flyerButtonColorSecondary};
    border-right: 5px solid ${props => props.theme.flyerButtonColorSecondary};
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

& span:nth-child(2) {
    animation-delay: -0.2s;
}

& span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
`
