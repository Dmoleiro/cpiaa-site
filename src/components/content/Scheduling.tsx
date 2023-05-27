import React from 'react';
import * as Styled from './Scheduling.styled';

export const SCHEDULING_CONTAINER_TEST_ID = 'scheduling-container-test-id'

const Scheduling: React.FC = () => {
    // const handleSendEmail = () => {
    //     const data = { to: 'danielmoleiro@gmail.com', subject: 'test cpiaa', body: 'test body' };

    //     fetch('http://localhost:3001/send-email', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result.message); // Success message from the server
    //             // Handle any additional logic or UI updates after successful email sending
    //         })
    //         .catch(error => {
    //             console.error('Error sending email:', error);
    //             // Handle error scenarios and display appropriate error messages
    //         });
    // };

    return (
        <Styled.SchedulingContainer data-testid={SCHEDULING_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Marcações'}</Styled.MobileContentTitle>
            <p><span>Para fazer um pedido de marcação pode enviar um email com os detalhes para o endereço:</span></p>
            <p><a href="mailto:cpiaa.2023@gmail.com">cpiaa.2023@gmail.com</a></p>
            <p><span>Responderemos assim que possivel.</span></p>
            {/* TODO: uncomment below to test auto email feature */}
            {/* <p>
                <button onClick={handleSendEmail}>TEST SEND MAIL</button>
            </p> */}
        </Styled.SchedulingContainer>
    )
}

export default Scheduling