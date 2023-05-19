

import * as Styled from './Loading.styled'

export const LOADING_CONTAINER_TEST_ID = 'loading-container-test-id'

const Loading: React.FC = () => {
    return (
        <Styled.RippleWrapper data-testid={LOADING_CONTAINER_TEST_ID}>
            <Styled.RippleContainer>
                <Styled.RippleDiv />
                <Styled.RippleDiv style={{ animationDelay: '-0.5s' }} />
            </Styled.RippleContainer>
            <Styled.LoadingText>Loading ...</Styled.LoadingText>
        </Styled.RippleWrapper>
    )

}

export default Loading