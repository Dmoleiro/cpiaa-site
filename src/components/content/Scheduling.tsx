import React, { useState } from 'react'
import * as Styled from './Scheduling.styled'

export const SCHEDULING_CONTAINER_TEST_ID = 'scheduling-container-test-id'

const Scheduling: React.FC = () => {
    const [name, setName] = useState<string>()
    const [isNameValid, toggleNameValid] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [isPhoneNumberValid, togglePhoneNumberValid] = useState<boolean>(false)
    const [email, setEmail] = useState<string>()
    const [isEmailValid, toggleEmailValid] = useState<boolean>(false)
    const [message, setMessage] = useState<string>()
    const [isMessageValid, toggleMessageValid] = useState<boolean>(false)
    const [haveFieldsBeenTouched, toggleFieldsTouched] = useState<boolean>(false)
    const [emailHasBeenSent, toggleEmailHasBeenSent] = useState<boolean>(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !haveFieldsBeenTouched && toggleFieldsTouched(true)

        const nameText = e.target.value

        setName(nameText)

        if (nameText.trim() === '') {
            toggleNameValid(false)
            return
        }

        toggleNameValid(true)
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !haveFieldsBeenTouched && toggleFieldsTouched(true)

        const numberRegex = /^\d{9}$/
        const phoneNumberText = e.target.value

        setPhoneNumber(phoneNumberText)

        if (!numberRegex.test(phoneNumberText)) {
            togglePhoneNumberValid(false)
            return
        }

        togglePhoneNumberValid(true)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !haveFieldsBeenTouched && toggleFieldsTouched(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const emailText = e.target.value

        setEmail(emailText)
        if (!emailRegex.test(emailText)) {
            toggleEmailValid(false)
            return
        }
        toggleEmailValid(true)
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !haveFieldsBeenTouched && toggleFieldsTouched(true)

        const messageText = e.target.value

        setMessage(messageText)

        if (messageText.trim() === '') {
            toggleMessageValid(false)
            return
        }

        toggleMessageValid(true)
    }

    const getErrorPanel = () => {
        if (!haveFieldsBeenTouched || emailHasBeenSent || (isNameValid && isPhoneNumberValid && isEmailValid && isMessageValid)) return

        return (
            <Styled.ErrorPanelContainer>
                {!isNameValid && <span>O campo nome não pode ser vazio</span>}
                {!isPhoneNumberValid && <span>O número de telemóvel tem de ser composto por 9 digitos</span>}
                {!isEmailValid && <span>O email tem de ser no formato "abcd@mail.pt</span>}
                {!isMessageValid && <span>O campo razão para o pedido não pode ser vazio</span>}
            </Styled.ErrorPanelContainer>
        )
    }

    const generateEmailBody = (): string => {
        // return `<b>Pedido de marcação para ${name}.</b>\n\n<b>Email:</b> ${email} \n<b>Telemóvel:</b> ${phoneNumber} \n<b>Mensagem:</b> ${message}
        // `
        return `
        <html>
            <body>
                <h1><b>Pedido de marcação para ${name}.</b></h1>
                <p><b>Email: </b>${email}</p>
                <p><b>Telemóvel: </b>${phoneNumber}</p>
                <p><b>Mensagem: </b>${message}</p>
            </body>
        </html>
        `
    }

    const handleSendEmail = () => {
        const data = {
            to: 'cpiaa.2023@gmail.com', subject: `Pedido de marcação "${name}"`, html: generateEmailBody()
        }

        // fetch('http://localhost:3001/send-email', {
        fetch('https://cpiaa.site/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.message) // Success message from the server
                // Handle any additional logic or UI updates after successful email sending
                setName('')
                toggleNameValid(false)
                setPhoneNumber('')
                togglePhoneNumberValid(false)
                setEmail('')
                toggleEmailValid(false)
                setMessage('')
                toggleMessageValid(false)
                toggleFieldsTouched(false)
                toggleEmailHasBeenSent(true)
            })
            .catch(error => {
                console.error('Error sending email:', error)
                // Handle error scenarios and display appropriate error messages
            })
    }

    return (
        <Styled.SchedulingContainer data-testid={SCHEDULING_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Marcações'}</Styled.MobileContentTitle>
            <p><span>Para fazer um pedido de marcação pode preencher os campos em baixo com os seus dados e prometemos responder o mais rápido possível.</span></p>
            <Styled.SchedulingFormContainer>
                <Styled.SchedulingForm>
                    <Styled.SchedulingFormItem>
                        <Styled.SchedulingFormItemLabel>Nome:
                        </Styled.SchedulingFormItemLabel>
                        <Styled.SchedulingFormItemInput type="text" value={name} onChange={handleNameChange} />
                    </Styled.SchedulingFormItem>
                    <Styled.SchedulingFormItem>
                        <Styled.SchedulingFormItemLabel>Telemóvel:
                        </Styled.SchedulingFormItemLabel>
                        <Styled.SchedulingFormItemInput type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </Styled.SchedulingFormItem>
                    <Styled.SchedulingFormItem>
                        <Styled.SchedulingFormItemLabel>Endereço de email:
                        </Styled.SchedulingFormItemLabel>
                        <Styled.SchedulingFormItemInput type="text" value={email} onChange={handleEmailChange} />
                    </Styled.SchedulingFormItem>
                    <Styled.SchedulingFormItem>
                        <Styled.SchedulingFormItemLabel>Razão para pedido de marcação: <br></br>(Por favor indique também a(s) especialidade(s) pretendida(s))
                        </Styled.SchedulingFormItemLabel>
                        <Styled.SchedulingFormItemTextArea value={message} maxLength={5000} onChange={handleMessageChange} />
                    </Styled.SchedulingFormItem>
                </Styled.SchedulingForm>
            </Styled.SchedulingFormContainer>
            {getErrorPanel()}
            {emailHasBeenSent && <span><b>Pedido enviado com sucesso.</b></span>}
            <p>
                <Styled.SendMailButton disabled={!isNameValid || !isPhoneNumberValid || !isEmailValid || !isMessageValid} onClick={handleSendEmail}>Enviar</Styled.SendMailButton>
            </p>
        </Styled.SchedulingContainer>
    )
}

export default Scheduling