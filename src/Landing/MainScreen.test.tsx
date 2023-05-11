import { render, RenderResult, screen } from '@testing-library/react'
import { mainTheme } from '../theme.styled'
import { ThemeProvider } from 'styled-components'
import MainScreen, { MAIN_CONTAINER_TEST_ID } from './MainScreen'

describe('Logo', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof MainScreen>>): RenderResult => {
        return render(
            <ThemeProvider theme={mainTheme}>
                <MainScreen {...additionalProps} />
            </ThemeProvider>
        )
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(MAIN_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})