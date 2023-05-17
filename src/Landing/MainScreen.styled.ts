import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url('under-construction-bg-small.jpg');
    background-position: bottom;
    background-size: cover;
`

export const BackgroundImage = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: -1;
`