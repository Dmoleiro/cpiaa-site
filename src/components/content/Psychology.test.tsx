import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import Psychology, { PSYCHOLOGY_CONTAINER_TEST_ID } from './Psychology'

describe('Psychology', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Psychology>>) => {
        renderComponent(<Psychology {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(PSYCHOLOGY_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})