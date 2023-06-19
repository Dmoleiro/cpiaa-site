import styled from 'styled-components'

export const ContactsContainer = styled.div`
    overflow-x: hidden;

    iframe {
        border: 0;
        border-radius: 5px;
        height: 450px;
        width: 600px;
    }
`

export const MobileContentTitle = styled.div`
    display: none;
    color: ${props => props.theme.white};
    font-size: 15px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 799px) {
        display: block;
        max-width: 90%;
    }
`

export const ContactsContent = styled.div`
    min-width: 8000px;
`