import { screen } from '@testing-library/react'
import { renderComponent } from '../../setupTest'
import Contacts, { CONTACTS_CONTAINER_TEST_ID } from './Contacts'

describe('Contacts', () => {
    const setupTest = (additionalProps?: Partial<React.ComponentProps<typeof Contacts>>) => {
        renderComponent(<Contacts {...additionalProps} />)
    }

    it('When the component renders, expect the correct elements to be shown', () => {
        setupTest()
        expect(screen.getByTestId(CONTACTS_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
})