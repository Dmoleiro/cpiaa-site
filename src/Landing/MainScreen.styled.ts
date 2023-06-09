import styled from 'styled-components'
import backgroundMain from '../assets/backgrounds/under-construction-bg-small.jpg'

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundMain});
    background-position: bottom;
    background-size: cover;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`

export const BackgroundImage = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: -1;
`