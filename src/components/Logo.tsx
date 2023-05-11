import React from 'react'
import { ReactSVG } from "react-svg";

import logo from '../assets/cpiaa-logo.svg'

import { LogoContainer } from './Logo.styled'

export const LOGO_TEST_ID = 'logo-test-id'

const Logo: React.FC = () => {
    return (
        <LogoContainer data-testid={LOGO_TEST_ID}>
            <ReactSVG src={logo} />
        </LogoContainer>
    )
  }
  
  export default Logo