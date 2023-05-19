import React from 'react';
import { ReactSVG } from "react-svg";
import logo from '../assets/cpiaa-logo.svg';
import * as Styled from './Logo.styled';

interface LogoProps {
    onClick?: () => void
}

export const LOGO_TEST_ID = 'logo-test-id'

const Logo: React.FC<LogoProps> = ({ onClick }) => {
    return (
        <Styled.LogoContainer data-testid={LOGO_TEST_ID} isClickable={!!onClick}>
            <ReactSVG src={logo} onClick={onClick} useRequestCache={true} />
        </Styled.LogoContainer>
    )
}

export default Logo