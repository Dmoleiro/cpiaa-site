import {render, RenderResult, screen} from '@testing-library/react'
import { mainTheme } from '../theme.styled'
import { ThemeProvider } from 'styled-components'
import Logo, {LOGO_TEST_ID} from './Logo'

describe('Logo', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Logo>>): RenderResult => {
        return render(
            <ThemeProvider theme={mainTheme}>
                <Logo {...additionalProps}/>
            </ThemeProvider>
        )
    }

    it ('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(LOGO_TEST_ID)).toBeInTheDocument()
    })
})