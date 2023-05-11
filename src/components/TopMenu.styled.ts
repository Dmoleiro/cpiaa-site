import styled from 'styled-components';

interface TopMenuStyleProps {
  open: boolean
}

export const TopMenuWrapper = styled.div``

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
`

export const DesktopMenuPanel = styled.div`
  visibility: hidden;

  @media (min-width: 800px) {
    visibility: visible;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MenuItem = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  color: ${props => props.theme.mainTextColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: yellow;
  }

  @media (max-width: 799px) {
    height: 50px;
  }
`