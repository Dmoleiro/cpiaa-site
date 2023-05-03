import React from 'react'
import { ReactSVG } from "react-svg";

import logo from '../assets/cpiaa-logo.svg'

import { LogoContainer } from './Logo.styled'

const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <ReactSVG src={logo} />
        </LogoContainer>
    )
  }
  
  export default Logo