import { render, RenderResult, screen } from '@testing-library/react'
import { mainTheme } from '../theme.styled'
import { ThemeProvider } from 'styled-components'
import TopMenu, { TOP_MENU_WRAPPER_TEST_ID } from './TopMenu'

describe('Logo', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof TopMenu>>): RenderResult => {
        return render(
            <ThemeProvider theme={mainTheme}>
                <TopMenu {...additionalProps} />
            </ThemeProvider>
        )
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(TOP_MENU_WRAPPER_TEST_ID)).toBeInTheDocument()
    })
})