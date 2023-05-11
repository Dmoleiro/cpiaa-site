import TopMenu from "../components/TopMenu"

import * as Styled from './MainScreen.styled'

export const MAIN_CONTAINER_TEST_ID = 'main-container-test-id'

const MainScreen: React.FC = () => {
  return (
    <Styled.MainContainer data-testid={MAIN_CONTAINER_TEST_ID}>
      <TopMenu />
    </Styled.MainContainer>
  )
}

export default MainScreen