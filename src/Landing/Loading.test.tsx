import { screen } from '@testing-library/react'
import { renderComponent } from '../setupTest'
import Loading, { LOADING_CONTAINER_TEST_ID } from './Loading'

describe('Loading', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Loading>>) => {
        renderComponent(<Loading {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(LOADING_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})