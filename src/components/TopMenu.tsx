import React, { ReactElement, useState } from 'react'

import * as Styled from './TopMenu.styled'

export const TOP_MENU_WRAPPER_TEST_ID = 'top-menu-wrapper-test-id'

const TopMenu: React.FC = () => {
    const [open, toggleOpenMenu] = useState<boolean>(false);

    const handleClick = () => {
        toggleOpenMenu(!open);
    };

    const getMenuItems = (): ReactElement[] => {
        return [<Styled.MenuItem>O Projecto CPIAA</Styled.MenuItem>,
        <Styled.MenuItem>Quem Somos</Styled.MenuItem>,
        <Styled.MenuItem>Psicologia</Styled.MenuItem>,
        <Styled.MenuItem>Apoio às Aprendizagens</Styled.MenuItem>,
        <Styled.MenuItem>Áreas Complementares</Styled.MenuItem>,
        <Styled.MenuItem>Contactos</Styled.MenuItem>,
        <Styled.MenuItem>Marcações</Styled.MenuItem>,
        <Styled.MenuItem>Parcerias</Styled.MenuItem>,
        <Styled.MenuItem>Acordos Seguradoras</Styled.MenuItem>]
    }

    return (
        <Styled.TopMenuWrapper data-testid={TOP_MENU_WRAPPER_TEST_ID}>
            <Styled.MenuButtonContainer>
                <Styled.MenuButton onClick={handleClick}>
                    <Styled.TopBar open={open} />
                    <Styled.MiddleBar open={open} />
                    <Styled.BottomBar open={open} />
                    <Styled.MobileMenuPanel open={open}>
                        {getMenuItems()}
                    </Styled.MobileMenuPanel>
                </Styled.MenuButton>
            </Styled.MenuButtonContainer>
            <Styled.DesktopMenuPanel>
                {getMenuItems()}
            </Styled.DesktopMenuPanel>
        </Styled.TopMenuWrapper>
    );
}

export default TopMenu