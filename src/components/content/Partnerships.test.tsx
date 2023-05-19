import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import Partnerships, { PARTNERSHIPS_CONTAINER_TEST_ID } from './Partnerships'

describe('Partnerships', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Partnerships>>) => {
        renderComponent(<Partnerships {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(PARTNERSHIPS_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})