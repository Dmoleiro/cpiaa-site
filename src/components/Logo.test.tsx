import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import Logo, { LOGO_TEST_ID } from './Logo'

describe('Logo', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Logo>>) => {
        renderComponent(<Logo {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(LOGO_TEST_ID)).toBeInTheDocument()
    })
})