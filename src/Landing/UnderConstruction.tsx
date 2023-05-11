import * as Styled from "./UnderConstruction.styled"
import underConstructionBg from '../assets/backgrounds/under-construction-bg.jpg'
import Logo from "../components/Logo"
import { useState } from "react"
import MainScreen from "./MainScreen"

export const MAIN_CONTAINER_TEST_ID = 'main-container-test-id'
export const IN_CONSTRUCTION_TEXT = `SITE EM CONSTRUÇÃO, PROMETEMOS SER BREVES.`

const UnderConstruction: React.FC = () => {
  const [showMainScreen, toggleShowMainScreen] = useState<boolean>(false)

  if (showMainScreen) return <MainScreen />
  return (
    <Styled.MainContainer data-testid={MAIN_CONTAINER_TEST_ID}
      tabIndex={1}
      onDoubleClick={() => toggleShowMainScreen(true)}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === '7') toggleShowMainScreen(true)
      }}>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      <Styled.TextContainer>
        <Styled.TextPanel>
          {IN_CONSTRUCTION_TEXT}
        </Styled.TextPanel>
      </Styled.TextContainer>
      <Styled.BackgroundImage src={underConstructionBg} />
    </Styled.MainContainer>
  )
}

export default UnderConstruction