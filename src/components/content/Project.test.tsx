import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import Project, { PROJECT_CONTAINER_TEST_ID } from './Project'

describe('Project', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Project>>) => {
        renderComponent(<Project {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(PROJECT_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})