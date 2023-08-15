import React from 'react';
import { ReactSVG } from 'react-svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import instagram from '../../assets/icons/icon-instagram.svg';
import reclamacoes from '../../assets/icons/livro_reclamacoes.png';
import cpiaaDoor from '../../assets/photos/cpiaa-door.png';
import entrance from '../../assets/photos/entrance.jpeg';
import room1 from '../../assets/photos/room1.jpeg';
import room2 from '../../assets/photos/room2.jpeg';
import * as Styled from './Project.styled';

export const PROJECT_CONTAINER_TEST_ID = 'project-container-test-id'

const Project: React.FC = () => {
    return (
        <Styled.ProjectContainer data-testid={PROJECT_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'O CPIAA'}</Styled.MobileContentTitle>
            <p><b>O Projecto CPIAA</b></p>
            <span>
                <p>Este projeto ao qual, carinhosamente, apelidamos de CPIAA – Centro de Psicologia Infantojuvenil e Apoio às Aprendizagens, surgiu de uma parceria entre duas profissionais, colegas e amigas cuja paixão pela educação tem vindo a dar frutos.
                    A paixão, dedicação e empenho com o qual trabalhamos tem vindo a ser um fator de desenvolvimento pessoal e profissional, todos os dias.</p>

                <p>O Projeto CPIAA – Centro de Psicologia Infantojuvenil e Apoio às Aprendizagens, vem complementar cada uma de nós, cada criança e jovem com o qual nos cruzamos, que conjuntamente com a família, com educadores e professores fazendo com que as aprendizagens sejam harmoniosas e gratificantes.</p>
                <p>Estamos gratas pela presença de todas as crianças e jovens com quem trabalhamos e acreditamos, genuinamente, que somos sempre recordadas com muito carinho, admiração e amor. Cada obstáculo enfrentado é uma conquista que, juntos, conseguimos contornar.</p>
                <p>A sensação de dever cumprido é um sinal de felicidade constante para transmitirmos o bem-estar a todos os que, com gratidão, nos cruzamos.</p>
                <p>Com muito carinho,
                    Alexandra e Daniela.</p>
            </span>
            <Styled.SocialLinksContainer>
                <Styled.SocialItem>
                    <a href="https://www.livroreclamacoes.pt/" target="_blank"><img src={reclamacoes} /></a>
                </Styled.SocialItem>
                <Styled.SocialItem>
                    <a href="https://www.facebook.com/CPIAA2023" target="_blank"><ReactSVG src={facebook} useRequestCache={true} /></a>
                </Styled.SocialItem>
                <Styled.SocialItem>
                    <a href="https://www.instagram.com/cpiaa.2023/" target="_blank"><ReactSVG src={instagram} useRequestCache={true} /></a>
                </Styled.SocialItem>
            </Styled.SocialLinksContainer>
            <p><b>As nossas instalações</b></p>
            <Styled.PhotosWrapper>
                <img src={cpiaaDoor} />
                <img src={entrance} />
                <img src={room1} />
                <img src={room2} />
            </Styled.PhotosWrapper>
        </Styled.ProjectContainer>
    )
}

export default Project