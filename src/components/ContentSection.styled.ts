import styled from 'styled-components';

export const ContentSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    max-height: 100%;
    overflow: hidden
`

export const ContentSectionPanel = styled.section`
    max-width: 70%;
    background: ${props => props.theme.contentSectionBackground};
    color: ${props => props.theme.white};
    border-radius: ${props => props.theme.mainBorderRadius};
    padding: 20px;
    margin: 15px;
    max-height: 100%;
    overflow: auto;
`