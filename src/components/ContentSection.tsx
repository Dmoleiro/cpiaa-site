import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import * as Styled from './ContentSection.styled'
import ComplementaryAreas from './content/ComplementaryAreas'
import Contacts from './content/Contacts'
import GenericContent from './content/GenericContent'
import HealthInsurances from './content/HealthInsurances'
import Partnerships from './content/Partnerships'
import Psychology from './content/Psychology'
import Scheduling from './content/Scheduling'
import StudySupport from './content/StudySupport'
import WhoWeAre from './content/WhoWeAre'

export const CONTENT_SECTION_CONTAINER_TEST_ID = 'content-section-container-test-id'

const ContentSection: React.FC = () => {
    const selectedTabIndex = useSelector((state: StoreState) => state.mainScreenSlice.selectedTabIndex)

    const contentList: ReactElement[] = [<WhoWeAre />, <Psychology />, <StudySupport />, <ComplementaryAreas />, <Contacts />, <Scheduling />, <Partnerships />, <HealthInsurances />]

    const getSelectedContent = (): ReactElement => {
        return <Styled.ContentSectionPanel contentIndex={selectedTabIndex}>
            {contentList[selectedTabIndex] || <GenericContent />}
        </Styled.ContentSectionPanel>
    }

    return (
        <Styled.ContentSectionContainer data-testid={CONTENT_SECTION_CONTAINER_TEST_ID} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            {getSelectedContent()}
        </Styled.ContentSectionContainer>
    )
}

export default ContentSection