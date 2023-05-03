import * as Styled from "./UnderConstruction.styled"
import underConstructionBg from '../assets/backgrounds/under-construction-bg.jpg'
import Logo from "../components/Logo"


export const IN_CONSTRUCTION_TEXT = `SITE EM CONSTRUÇÃO, PROMETEMOS SER BREVES.`

const UnderConstruction: React.FC = () => {
    return (
      <Styled.MainContainer>
        <Styled.LogoContainer>
            <Logo />
        </Styled.LogoContainer>
        <Styled.TextContainer>
          <Styled.TextPanel>
            {IN_CONSTRUCTION_TEXT}
          </Styled.TextPanel>
        </Styled.TextContainer>
        <Styled.BackgroundImage src={underConstructionBg}/>
      </Styled.MainContainer>
    )
  }
  
  export default UnderConstruction