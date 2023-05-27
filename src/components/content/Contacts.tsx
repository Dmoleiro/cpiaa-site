import React from 'react';
import * as Styled from './Contacts.styled';

export const CONTACTS_CONTAINER_TEST_ID = 'contacts-container-test-id'

const Contacts: React.FC = () => {
    return (
        <Styled.ContactsContainer data-testid={CONTACTS_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Contactos'}</Styled.MobileContentTitle>
            <Styled.ContactsContent>
                <p></p>
                <ul>
                    <p><li><a href="mailto:cpiaa.2023@gmail.com">cpiaa.2023@gmail.com</a></li></p>
                    <p><li>937316560</li></p>
                </ul>
            </Styled.ContactsContent>
        </Styled.ContactsContainer>
    )
}

export default Contacts