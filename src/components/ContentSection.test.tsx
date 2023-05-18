import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import ContentSection, { CONTENT_SECTION_CONTAINER_TEST_ID } from './ContentSection'

describe('ContentSection', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof ContentSection>>) => {
        renderComponent(<ContentSection {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(CONTENT_SECTION_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})