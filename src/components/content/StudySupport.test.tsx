import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import StudySupport, { STUDY_SUPPORT_CONTAINER_TEST_ID } from './StudySupport'

describe('StudySupport', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof StudySupport>>) => {
        renderComponent(<StudySupport {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(STUDY_SUPPORT_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})