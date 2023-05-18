import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import UnderConstruction, { MAIN_CONTAINER_TEST_ID } from './UnderConstruction'

describe('UnderConstruction', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof UnderConstruction>>) => {
        renderComponent(<UnderConstruction {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(MAIN_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})