import React from 'react';
import * as Styled from './StudySupport.styled';

export const STUDY_SUPPORT_CONTAINER_TEST_ID = 'study-support-container-test-id'

const StudySupport: React.FC = () => {
    return (
        <Styled.StudySupportContainer data-testid={STUDY_SUPPORT_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Apoio às Aprendizagens'}</Styled.MobileContentTitle>
            <span>
                <ul>
                    <li><p><b>Apoio ao estudo do 1º ao 3º Ciclos:</b> Supervisão e apoio na realização dos trabalhos de casa, acompanhamento no estudo diário e desenvolvimento de métodos e técnicas de estudo – grupos de 2 a 7 crianças</p></li>
                    <li><p><b>Explicações individuais/pares:</b> Supervisão e apoio nas matérias em que o aluno sinta mais dificuldades, preparação para testes e exames nacionais, elaboração de planos de estudo e desenvolvimento de métodos e técnicas de estudo - grupos de 1 a 2 crianças</p></li>
                    <li><p><b>Explicações individuais/pares:</b> Supervisão e apoio nas matérias em que o aluno sinta mais dificuldades, preparação para testes e exames nacionais, elaboração de planos de estudo e desenvolvimento de métodos e técnicas de estudo - grupos de 1 a 2 crianças</p></li>
                    <li><p><b>Seminários de Recuperação e Consolidação de Aprendizagens (férias escolares):</b> Seminários temáticos com o intuito de consolidação das bases necessárias dos anos letivos anteriores e recuperação de conceitos fundamentais para os anos subsequentes - grupos de 4 a 5 crianças</p></li>
                    <li><p><b>Apoio nas Dificuldades de Aprendizagem Específicas:</b> Intervenção estratégica em Dificuldades de Aprendizagens Específicas. Discalculia e Baixo Rendimento Matemático, Dislexia, Disgrafia, Disortografia, Perturbação de Hiperatividade com Défice de Atenção</p></li>
                    <li><p><b>Apoio específico para reforço de competências pré-académicas (pré-escolar):</b> (Estimulação no desenvolvimento de competências cognitivas, emocionais, sociais e linguísticas, com o intuito de preparar a criança para a nova etapa do seu percurso escolar)</p></li>
                </ul>
            </span>
        </Styled.StudySupportContainer>
    )
}

export default StudySupport