import React from 'react'
import * as Styled from './ComplementaryAreas.styled'

export const COMPLEMENTARY_AREAS_CONTAINER_TEST_ID = 'complementary-areas-container-test-id'

const ComplementaryAreas: React.FC = () => {
    return (
        <Styled.ComplementaryAreasContainer data-testid={COMPLEMENTARY_AREAS_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Áreas Complementares'}</Styled.MobileContentTitle>
            <span>
                <p>Como a saúde mental tem vindo a ter um crescente aumento de procura nos serviços de psicologia e áreas subjacentes achamos que há áreas que se complementam e das quais sentimos necessidade de disponibilizar para que haja uma maior harmonia entre o trabalho realizado.</p>
                <ul>
                    <li>Terapia da Fala</li>
                    <li>Psicomotricidade</li>
                    <li>Terapia Ocupacional</li>
                    <li>Pediatria do Desenvolvimento</li>
                    <li>Pedopsiquiatria</li>
                    <li>Fisioterapia</li>
                </ul>
            </span>
        </Styled.ComplementaryAreasContainer>
    )
}

export default ComplementaryAreas