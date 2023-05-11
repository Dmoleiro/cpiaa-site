import styled from 'styled-components'

export const MainContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: white;
    background: ${props => props.theme.underConstructionBgColor};
    display: flex;
    flex-direction: column;
    user-select: none;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
`

export const TextContainer = styled.div`
    width: 100%;
    text-align: center;
    color: black;
    z-index: 1;
    margin-top: -120px;
`

export const TextPanel = styled.span`
    font-weight: bold;
    padding: 0 10px;
`

export const BackgroundImage = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
`