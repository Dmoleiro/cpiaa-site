import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import * as Styled from './ContentSection.styled'

export const CONTENT_SECTION_CONTAINER_TEST_ID = 'content-section-container-test-id'

const ContentSection: React.FC = () => {
    const selectedTabIndex = useSelector((state: StoreState) => state.mainScreenSlice.selectedTabIndex)

    const getSelectedContent = (): ReactElement => {
        return <Styled.ContentSectionPanel>
            <div>{selectedTabIndex}</div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio magna, luctus quis nunc id, sollicitudin auctor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ligula eget ante ultrices eleifend. Sed ac est egestas, varius nisl eu, molestie nisi. Duis vitae est at ligula posuere egestas. Etiam non rutrum justo, vel tempor dolor. Suspendisse non efficitur nulla.
                Nam ut blandit arcu. Etiam ultricies purus a tellus suscipit, id euismod dui dignissim. Aenean tincidunt scelerisque placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium metus non dignissim posuere. Sed est mauris, eleifend dictum pellentesque sed, convallis nec arcu. Donec sit amet tellus congue, laoreet felis vitae, efficitur ante. Donec orci leo, aliquet vitae porta euismod, suscipit vitae eros. Ut at tempor purus, id ultrices nunc. Fusce faucibus dolor eros, vitae dignissim justo tristique at. Vestibulum vel arcu cursus, pellentesque mauris non, luctus sem. Vivamus vel mauris vitae turpis blandit dignissim vitae non mi. Aliquam pretium euismod augue, eu hendrerit lectus ornare in. Morbi tellus justo, finibus et facilisis vel, consectetur id lorem. Proin ligula leo, efficitur a libero eu, rutrum posuere arcu.
            </div>
            <p></p>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio magna, luctus quis nunc id, sollicitudin auctor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ligula eget ante ultrices eleifend. Sed ac est egestas, varius nisl eu, molestie nisi. Duis vitae est at ligula posuere egestas. Etiam non rutrum justo, vel tempor dolor. Suspendisse non efficitur nulla.
                Nam ut blandit arcu. Etiam ultricies purus a tellus suscipit, id euismod dui dignissim. Aenean tincidunt scelerisque placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium metus non dignissim posuere. Sed est mauris, eleifend dictum pellentesque sed, convallis nec arcu. Donec sit amet tellus congue, laoreet felis vitae, efficitur ante. Donec orci leo, aliquet vitae porta euismod, suscipit vitae eros. Ut at tempor purus, id ultrices nunc. Fusce faucibus dolor eros, vitae dignissim justo tristique at. Vestibulum vel arcu cursus, pellentesque mauris non, luctus sem. Vivamus vel mauris vitae turpis blandit dignissim vitae non mi. Aliquam pretium euismod augue, eu hendrerit lectus ornare in. Morbi tellus justo, finibus et facilisis vel, consectetur id lorem. Proin ligula leo, efficitur a libero eu, rutrum posuere arcu.
            </div>
            <p></p>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio magna, luctus quis nunc id, sollicitudin auctor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ligula eget ante ultrices eleifend. Sed ac est egestas, varius nisl eu, molestie nisi. Duis vitae est at ligula posuere egestas. Etiam non rutrum justo, vel tempor dolor. Suspendisse non efficitur nulla.
                Nam ut blandit arcu. Etiam ultricies purus a tellus suscipit, id euismod dui dignissim. Aenean tincidunt scelerisque placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium metus non dignissim posuere. Sed est mauris, eleifend dictum pellentesque sed, convallis nec arcu. Donec sit amet tellus congue, laoreet felis vitae, efficitur ante. Donec orci leo, aliquet vitae porta euismod, suscipit vitae eros. Ut at tempor purus, id ultrices nunc. Fusce faucibus dolor eros, vitae dignissim justo tristique at. Vestibulum vel arcu cursus, pellentesque mauris non, luctus sem. Vivamus vel mauris vitae turpis blandit dignissim vitae non mi. Aliquam pretium euismod augue, eu hendrerit lectus ornare in. Morbi tellus justo, finibus et facilisis vel, consectetur id lorem. Proin ligula leo, efficitur a libero eu, rutrum posuere arcu.
            </div>
        </Styled.ContentSectionPanel>
    }

    return (
        <Styled.ContentSectionContainer data-testid={CONTENT_SECTION_CONTAINER_TEST_ID}>
            {getSelectedContent()}
        </Styled.ContentSectionContainer>
    )
}

export default ContentSection