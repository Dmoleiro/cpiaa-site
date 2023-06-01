import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import Flyer, { FLYER_CONTAINER_TEST_ID } from './Flyer'

describe('Flyer', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Flyer>>) => {
        renderComponent(<Flyer {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(FLYER_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})