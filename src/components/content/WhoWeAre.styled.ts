import styled from 'styled-components'

export const WhoWeAreContainer = styled.div`
    img {
        max-width: 300px;
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