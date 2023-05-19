import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import ComplementaryAreas, { COMPLEMENTARY_AREAS_CONTAINER_TEST_ID } from './ComplementaryAreas'

describe('ComplementaryAreas', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof ComplementaryAreas>>) => {
        renderComponent(<ComplementaryAreas {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(COMPLEMENTARY_AREAS_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})