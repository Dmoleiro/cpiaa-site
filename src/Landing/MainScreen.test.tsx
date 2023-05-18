import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import MainScreen, { MAIN_CONTAINER_TEST_ID } from './MainScreen'

describe('MainScreen', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof MainScreen>>) => {
        renderComponent(<MainScreen {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(MAIN_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})