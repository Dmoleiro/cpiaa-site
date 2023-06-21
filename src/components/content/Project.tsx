import React from 'react';
import * as Styled from './Project.styled';

export const PROJECT_CONTAINER_TEST_ID = 'project-container-test-id'

const Project: React.FC = () => {
    return (
        <Styled.ProjectContainer data-testid={PROJECT_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'O CPIAA'}</Styled.MobileContentTitle>
            <span>Brevemente...</span>
        </Styled.ProjectContainer>
    )
}

export default Project