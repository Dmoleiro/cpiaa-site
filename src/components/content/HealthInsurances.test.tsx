import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import HealthInsurances, { HEALTH_INSURANCES_CONTAINER_TEST_ID } from './HealthInsurances'

describe('HealthInsurances', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof HealthInsurances>>) => {
        renderComponent(<HealthInsurances {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(HEALTH_INSURANCES_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})