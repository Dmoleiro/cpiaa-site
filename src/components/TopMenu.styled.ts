import styled from 'styled-components';

interface TopMenuStyleProps {
  open?: boolean,
  selected?: boolean
}

export const TopMenuWrapper = styled.div``

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    height: 200px;
    margin-top: -70px;
    margin-bottom: -70px;

    @media (max-width: 799px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const MenuButtonContainer = styled.div`
  padding: 0;
  
  @media (max-width: 799px) {
    padding: 20px;
  }
`

export const MenuButton = styled.div`
visibility: hidden;
display: none;

@media (max-width: 799px) {
  visibility: visible;
  display: block;
}

  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 999;
`

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  position: absolute;
  transition: all 0.2s ease;
`

export const TopBar = styled(Bar) <TopMenuStyleProps>`
  top: ${({ open }) => (open ? '50%' : '0')};
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
`

export const MiddleBar = styled(Bar) <TopMenuStyleProps>`
  top: 50%;
  opacity: ${({ open }) => (open ? '0' : '1')};
`

export const BottomBar = styled(Bar) <TopMenuStyleProps>`
  top: ${({ open }) => (open ? '50%' : '100%')};
  transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
`

export const MobileMenuPanel = styled.div<TopMenuStyleProps>`
  position: absolute;
  border-radius: ${props => props.theme.mainBorderRadius};
  top: 40px;
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #f1f1f1;
  display: ${({ open }) => (open ? 'block' : 'none')};
  color: ${props => props.theme.white};
  font-size: 15px;
  background: ${props => props.theme.mobileMenuBackground};
`

export const DesktopMenuPanelWrapper = styled.div`
  display: none;
  visibility: hidden;

  @media (min-width: 800px) {
    visibility: visible;
    display: flex;
  }

  height: 70px;
  width: 100%;
  justify-content: center;
  /* https://cssgradient.io/ */
  background: ${props => props.theme.topMenuBackground};
`

export const DesktopMenuPanel = styled.div`
  visibility: hidden;

  @media (min-width: 800px) {
    visibility: visible;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.white};
  font-size: 15px;
  font-weight: 600;
  height: 100%;
`

export const MenuItem = styled.div<TopMenuStyleProps>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;

  /* Desktop */
  @media (min-width: 800px) {
    border-bottom: 4px solid ${props => props.selected ? 'white' : 'transparent'};
  }

  /* Mobile */
  @media (max-width: 799px) {
    height: 50px;
    margin: 0;
    font-weight: ${props => props.selected ? 'bold' : 'regular'};
    border-bottom: 0.5px solid ${props => props.theme.white};

    &:last-child{
      border-bottom: 0;
    }
  }
`