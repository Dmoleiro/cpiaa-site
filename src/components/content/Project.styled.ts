import styled from 'styled-components'

export const ProjectContainer = styled.div`
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

export const PhotosWrapper = styled.div`
    img {
        width: 100%;
    }
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

export const IconWrapper = styled.div`
img {
        max-height: 50px;
    }
`