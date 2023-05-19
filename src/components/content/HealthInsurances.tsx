import React from 'react';
import * as Styled from './HealthInsurances.styled';

export const HEALTH_INSURANCES_CONTAINER_TEST_ID = 'health-insurances-container-test-id'

const HealthInsurances: React.FC = () => {
    return (
        <Styled.HealthInsurancesContainer data-testid={HEALTH_INSURANCES_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Acordos Seguradoras'}</Styled.MobileContentTitle>
            <span>
                <p>
                    Hoje em dia a Psicologia, e outras áreas da saúde, já são vistas com uma maior importância havendo uma procura incessante destes serviços. Tendo isso em consideração muitas são as seguradoras que permitem ao cliente ter um acesso a estes bens e serviços, reembolsando os valores do seguro aos clientes ou permitindo que os mesmos tenham um desconto nas consultas.
                </p>
                <p>
                    Por essa razão foi importante, para o nosso projeto CPIAA, criar condições mediante as necessidades de cada um. Informe-se connosco se beneficiamos de algum dos serviços com seguradoras ou se poderá utilizar o serviço pedindo, posteriormente, o reembolso à companhia de seguros.
                </p>
            </span>
        </Styled.HealthInsurancesContainer>
    )
}

export default HealthInsurances