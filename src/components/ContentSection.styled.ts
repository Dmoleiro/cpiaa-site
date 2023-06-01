import styled from 'styled-components';

interface ContentSectionStyleProps {
    contentIndex: number
}

export const ContentSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    max-height: 100%;
    overflow: hidden;
    z-index: 2;
`

export const ContentSectionPanel = styled.section<ContentSectionStyleProps>`
    background: ${props => props.contentIndex % 2 == 0 ? props.theme.contentEvenSectionBackground : props.theme.contentOddSectionBackground};
    color: ${props => props.theme.white};
    border-radius: ${props => props.theme.mainBorderRadius};
    padding: 20px;
    margin: 15px;
    max-height: 100%;
    overflow: auto;
    max-width: 70%;
    
    @media (max-width: 799px) {
        max-width: 90%;
    }

    /* For WebKit-based browsers (Chrome, Safari, Opera) */
    &::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #8888888B;
    border-radius: 4px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #5555558B;
    }

    scrollbar-color: gray transparent;
    scrollbar-width: thin;
    
    &::-moz-scrollbar-track {
    border-radius: 4px; /* Adjust the value as needed */
    }

`
