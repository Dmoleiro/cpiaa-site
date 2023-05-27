import React from 'react';
import * as Styled from './Partnerships.styled';

export const PARTNERSHIPS_CONTAINER_TEST_ID = 'partnerships-container-test-id'

const Partnerships: React.FC = () => {
    return (
        <Styled.PartnershipsContainer data-testid={PARTNERSHIPS_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Parcerias'}</Styled.MobileContentTitle>
            <span>Brevemente...</span>
            {/* <span>
                <p>
                    O CPIAA tem parceria com diversas escolas do Agrupamento e arredores para proporcionar às famílias uma maior facilidade de acesso aos cuidados necessários aos seus filhos. (veja quais os AE com os quais mantemos uma parceria para beneficiar do desconto nos serviços disponíveis – através do email <a href="mailto:cpiaa.2023@gmail.com">cpiaa.2023@gmail.com</a> e através do número 937316560).
                    Temos acordo com várias seguradoras assim como poderá beneficiar da devolução do valor da consulta diretamente pela seguradora, basta para isso enviar a sua fatura-recibo com o preenchimento devido.
                    Mantemos uma parceria com os Agrupamentos de Escola:
                </p>
                <ul>
                    <li>Azambuja</li>
                    <li>Vale Aveiras</li>
                    <li>Alenquer</li>
                </ul>
            </span> */}
        </Styled.PartnershipsContainer>
    )
}

export default Partnerships