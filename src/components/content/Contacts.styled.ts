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
`

export const SocialLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const SocialItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 15px;

    svg {
        height: 25px;
        width: 25px;
    }

    a {
        color: ${props => props.theme.white};
    }

    img {
        max-height: 50px;
    }
`

