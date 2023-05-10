import {render, RenderResult, screen} from '@testing-library/react'
import UnderConstruction, { MAIN_CONTAINER_TEST_ID } from './UnderConstruction'
import { mainTheme } from '../theme.styled'
import { ThemeProvider } from 'styled-components'

describe('UnderConstruction', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof UnderConstruction>>): RenderResult => {
        return render(
            <ThemeProvider theme={mainTheme}>
                <UnderConstruction {...additionalProps}/>
            </ThemeProvider>
        )
    }

    it ('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(MAIN_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})