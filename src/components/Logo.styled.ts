import styled from 'styled-components'

interface LogoStyleProps {
    isClickable: boolean
}

export const LogoContainer = styled.div<LogoStyleProps>`
    svg {
        max-width: 100vw;
        
        rect {
            cursor: ${props => props.isClickable ? 'pointer' : 'default'};
            fill: transparent;
        }
        #sub-text {
            path {
                fill: ${props => props.theme.underConstructionBgColor};
            }
        }
    }
`