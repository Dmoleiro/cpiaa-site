import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import LandingPage, { LANDING_PAGE_CONTAINER_TEST_ID } from './LandingPage'

describe('LandingPage', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof LandingPage>>) => {
        renderComponent(<LandingPage {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(LANDING_PAGE_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})