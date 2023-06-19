import React from 'react';
import * as Styled from './Contacts.styled';

export const CONTACTS_CONTAINER_TEST_ID = 'contacts-container-test-id'

const Contacts: React.FC = () => {
    return (
        <Styled.ContactsContainer data-testid={CONTACTS_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Contactos'}</Styled.MobileContentTitle>
            <Styled.ContactsContent>
                <p></p>
                <p><b>Email: </b>&nbsp;<a href="mailto:cpiaa.2023@gmail.com">cpiaa.2023@gmail.com</a></p>
                <p><b>Telemóvel: </b>&nbsp;937316560</p>
                <p><b>Morada: </b>&nbsp;Avenida do Valverde N.17 Loja-A 2050-395 Azambuja</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.68478666509498!2d-8.874846664019827!3d39.06697183218813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18dd0bd8f22a93%3A0xf4004c0ffd0e015f!2sCentro%20Psicologia%20Infantojuvenil%20e%20Apoio%20%C3%A0s%20Aprendizagens!5e0!3m2!1sen!2spt!4v1687218678088!5m2!1sen!2spt" loading="lazy" ></iframe>
            </Styled.ContactsContent>
        </Styled.ContactsContainer >
    )
}

export default Contacts