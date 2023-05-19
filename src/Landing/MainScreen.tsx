import { Suspense } from "react"
import ContentSection from "../components/ContentSection"
import TopMenu from "../components/TopMenu"


import Loading from "./Loading"
import * as Styled from './MainScreen.styled'

export const MAIN_CONTAINER_TEST_ID = 'main-container-test-id'

const MainScreen: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Styled.MainContainer data-testid={MAIN_CONTAINER_TEST_ID}>
        <TopMenu />
        <ContentSection />
      </Styled.MainContainer>
    </Suspense>
  )
}

export default MainScreen