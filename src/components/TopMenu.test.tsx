import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import TopMenu, { TOP_MENU_WRAPPER_TEST_ID } from './TopMenu'

describe('TopMenu', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof TopMenu>>) => {
        renderComponent(<TopMenu {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(TOP_MENU_WRAPPER_TEST_ID)).toBeInTheDocument()
    })
})