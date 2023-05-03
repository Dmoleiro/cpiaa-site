import styled from 'styled-components'

export const LogoContainer = styled.div`
    svg {
        max-width: 100vw;
        
        rect {
            fill: transparent;
        }
        #sub-text {
            path {
                fill: ${props => props.theme.underConstructionBgColor};
            }
        }
    }
`