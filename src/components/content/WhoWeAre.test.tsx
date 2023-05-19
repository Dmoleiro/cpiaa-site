import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import WhoWeAre, { WHO_ARE_WE_CONTAINER_TEST_ID } from './WhoWeAre'

describe('WhoWeAre', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof WhoWeAre>>) => {
        renderComponent(<WhoWeAre {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(WHO_ARE_WE_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})