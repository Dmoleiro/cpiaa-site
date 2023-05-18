import React, { ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSelectedTabIndex } from '../state/mainScreenSlice'
import Logo from './Logo'
import * as Styled from './TopMenu.styled'

export const TOP_MENU_WRAPPER_TEST_ID = 'top-menu-wrapper-test-id'

const TopMenu: React.FC = () => {
    const [open, toggleOpenMenu] = useState<boolean>(false)

    const selectedTabIndex = useSelector((state: StoreState) => state.mainScreenSlice.selectedTabIndex)

    const dispatch = useDispatch()

    const menuItemDescriptions: string[] = [
        'Quem Somos',
        'Psicologia',
        'Apoio às Aprendizagens',
        'Áreas Complementares',
        'Contactos',
        'Marcações',
        'Parcerias',
        'Acordos Seguradoras'
    ]

    const handleClick = () => {
        toggleOpenMenu(!open);
    };

    const handleMenuItemClick = (index: number) => {
        dispatch(setSelectedTabIndex(index))
    }

    const getMenuItems = (): ReactElement[] => {
        return menuItemDescriptions.map((item: string, index: number) => {
            return <Styled.MenuItem selected={selectedTabIndex === index} onClick={() => handleMenuItemClick(index)}>{item}</Styled.MenuItem>
        })
    }

    return (
        <Styled.TopMenuWrapper data-testid={TOP_MENU_WRAPPER_TEST_ID}>
            <Styled.LogoContainer>
                <Logo />
            </Styled.LogoContainer>
            {/* mobile menu */}
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
            {/* desktop menu */}
            <Styled.DesktopMenuPanelWrapper>
                <Styled.DesktopMenuPanel>
                    {getMenuItems()}
                </Styled.DesktopMenuPanel>
            </Styled.DesktopMenuPanelWrapper>
        </Styled.TopMenuWrapper>
    );
}

export default TopMenu