import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import Scheduling, { SCHEDULING_CONTAINER_TEST_ID } from './Scheduling'

describe('Scheduling', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Scheduling>>) => {
        renderComponent(<Scheduling {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(SCHEDULING_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})