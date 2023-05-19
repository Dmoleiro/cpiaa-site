import React from 'react';
import GenericContent from './GenericContent';
import * as Styled from './Scheduling.styled';

export const SCHEDULING_CONTAINER_TEST_ID = 'scheduling-container-test-id'

const Scheduling: React.FC = () => {
    return (
        <Styled.SchedulingContainer data-testid={SCHEDULING_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Marcações'}</Styled.MobileContentTitle>
            <GenericContent />
        </Styled.SchedulingContainer>
    )
}

export default Scheduling