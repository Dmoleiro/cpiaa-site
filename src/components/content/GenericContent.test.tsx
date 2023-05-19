import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import GenericContent, { GENERIC_CONTENT_CONTAINER_TEST_ID } from './GenericContent'

describe('GenericContent', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof GenericContent>>) => {
        renderComponent(<GenericContent {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(GENERIC_CONTENT_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})