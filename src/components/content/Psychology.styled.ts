import styled from 'styled-components'

export const PsychologyContainer = styled.div`
    a {
        color: blue;
        font-weight: 500;
        margin-left: 20px;
        text-decoration: underline;
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