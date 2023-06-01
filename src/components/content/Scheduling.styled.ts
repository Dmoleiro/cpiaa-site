import styled from 'styled-components'

export const SchedulingContainer = styled.div`
`

export const MobileContentTitle = styled.div`
    display: none;
    color: ${props => props.theme.white};
    font-size: 15px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 799px) {
        display: block;
        max-width: 90%;
    }
`

export const SchedulingFormContainer = styled.div`
    padding-left: 50px;
`

export const SchedulingForm = styled.form``

export const SchedulingFormItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const SchedulingFormItemLabel = styled.label`
    font-weight: 500;
    margin-bottom: 5px;
`

export const SchedulingFormItemInput = styled.input`
    max-width: 40%;

    @media (max-width: 799px) {
        max-width: 100%;
    }

    border-radius: ${props => props.theme.mainBorderRadius};
    min-height: 40px;
    line-height: 40px;
    outline: none;
    background-color: ${props => props.theme.contentEvenSectionBackground};
    font-size: 16px;
    box-shadow: none;
    border: 0;
    margin-bottom: 25px;
    padding-left: 10px;
    padding-right: 10px;
`

export const SchedulingFormItemTextArea = styled.textarea`
    max-width: 40%;

    @media (max-width: 799px) {
        max-width: 100%;
    }

    border-radius: ${props => props.theme.mainBorderRadius};
    min-height: 140px;
    outline: none;
    background-color: ${props => props.theme.contentEvenSectionBackground};
    font-size: 16px;
    box-shadow: none;
    resize: none;
    padding-left: 10px;
    padding-right: 10px;

    /* For WebKit-based browsers (Chrome, Safari, Opera) */
    &::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #8888888B;
    border-radius: 4px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #5555558B;
    }

    scrollbar-color: gray transparent;
    scrollbar-width: thin;
    
    &::-moz-scrollbar-track {
    border-radius: 4px; /* Adjust the value as needed */
    }
`

export const ErrorPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: brown;
    font-weight: bold;
`

export const SendMailButton = styled.button`
    background-color: ${props => props.theme.contentEvenSectionBackground};
`