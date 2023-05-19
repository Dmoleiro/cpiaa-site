import React from 'react';
import * as Styled from './Contacts.styled';
import GenericContent from './GenericContent';

export const CONTACTS_CONTAINER_TEST_ID = 'contacts-container-test-id'

const Contacts: React.FC = () => {
    return (
        <Styled.ContactsContainer data-testid={CONTACTS_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Contactos'}</Styled.MobileContentTitle>
            <GenericContent />
        </Styled.ContactsContainer>
    )
}

export default Contacts