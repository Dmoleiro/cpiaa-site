import React from 'react';
import * as Styled from './Psychology.styled';

export const PSYCHOLOGY_CONTAINER_TEST_ID = 'psychology-container-test-id'

const Psychology: React.FC = () => {
    return (
        <Styled.PsychologyContainer data-testid={PSYCHOLOGY_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Psicologia'}</Styled.MobileContentTitle>
            <span>
                <b>Marcação de 1ª consulta</b>
                <p>Consultas para despiste neuropsicológico nas seguintes áreas:</p>
                <ul>
                    <li>Despiste de dificuldades de aprendizagem (DAE´S)</li>
                    <li>Défice de atenção, concentração e hiperatividade (PHDA)</li>
                    <li>Despiste de alterações ao desempenho cognitivo</li>
                    <li>Perturbações do Neurodesenvolvimento</li>
                    <li>Entrada no 1º ciclo</li>
                    <li>Despiste de alterações emocionais</li>
                    <li>Orientação Vocacional e Escolar (básico; secundário)</li>
                    <li>Dinâmicas de grupo/Workshops - do 5º ao 12º ano de acordo com os temas (até 8 elementos)</li>
                    <li>Tertúlias de Pais, Educadores, Cuidadores e Família (até 8 elementos)</li>

                </ul>
            </span>
        </Styled.PsychologyContainer>
    )
}

export default Psychology