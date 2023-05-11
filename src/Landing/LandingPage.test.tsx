import { render, RenderResult, screen } from '@testing-library/react'
import { mainTheme } from '../theme.styled'
import { ThemeProvider } from 'styled-components'
import LandingPage, { LANDING_PAGE_CONTAINER_TEST_ID } from './LandingPage'

describe('Logo', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof LandingPage>>): RenderResult => {
        return render(
            <ThemeProvider theme={mainTheme}>
                <LandingPage {...additionalProps} />
            </ThemeProvider>
        )
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(LANDING_PAGE_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})