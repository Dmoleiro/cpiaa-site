import React from 'react';
import alexandra from '../../assets/photos/alexandra.jpeg';
import daniela from '../../assets/photos/daniela.png';
import * as Styled from './WhoWeAre.styled';

export const WHO_ARE_WE_CONTAINER_TEST_ID = 'who-are-we-container-test-id'

const WhoWeAre: React.FC = () => {
    return (
        <Styled.WhoWeAreContainer data-testid={WHO_ARE_WE_CONTAINER_TEST_ID}>
            <Styled.MobileContentTitle>{'Quem somos'}</Styled.MobileContentTitle>
            <p><b>O Projecto CPIAA</b></p>
            <span>
                <p>Este projeto ao qual, carinhosamente, apelidamos de CPIAA – Centro de Psicologia Infantojuvenil e Apoio às Aprendizagens, surgiu de uma parceria entre duas profissionais, colegas e amigas cuja paixão pela educação tem vindo a dar frutos.
                    A paixão, dedicação e empenho com o qual trabalhamos tem vindo a ser um fator de desenvolvimento pessoal e profissional, todos os dias.
                    O Projeto CPIAA – Centro de Psicologia Infantojuvenil e Apoio às Aprendizagens, vem complementar cada uma de nós, cada criança e jovem com o qual nos cruzamos, que conjuntamente com a família, com educadores e professores fazendo com que as aprendizagens sejam harmoniosas e gratificantes.
                    Estamos gratas pela presença de todas as crianças e jovens com quem trabalhamos e acreditamos, genuinamente, que somos sempre recordadas com muito carinho, admiração e amor. Cada obstáculo enfrentado é uma conquista que, juntos, conseguimos contornar.
                    A sensação de dever cumprido é um sinal de felicidade constante para transmitirmos o bem-estar a todos os que, com gratidão, nos cruzamos.</p>
                <p>Com muito carinho,
                    Alexandra e Daniela.</p>
            </span>
            <br></br>
            <br></br>
            <p><b>Drª Daniela Santos</b></p>

            <img src={daniela} loading="eager" />
            {/* react-image */}
            {/* <Img src={daniela} alt="daniela" loader={<Loading />} /> */}

            <span>
                <p>Sou Psicóloga Educacional, tendo terminado o mestrado em Psicologia, na área Educacional, em 2014 no ISPA-IU. Desde cedo que a minha paixão sempre foram as crianças/jovens e, por isso, a minha motivação sempre foi trabalhar com crianças e adolescentes independentemente das suas dificuldades. O meu percurso passou por diferentes centros de desenvolvimento infantil realizando diversos tipos de apoio, ao nível da intervenção precoce, da estimulação de competências nos diversos domínios da Psicologia, na avaliação de crianças e jovens, na elaboração de projetos de intervenção em diferentes áreas e na intervenção direta com as crianças, jovens e, sobretudo no estabelecimento de estratégias diretamente com Pais. Tendo sempre em consideração os diferentes contextos onde a criança está inserida, intervindo tanto em contexto escolar como em contexto de gabinete. O trabalho direto com todos os intervenientes do processo é uma prioridade, havendo a necessidade de estabelecer e partilhar estratégias de colaboração entre todos para que a criança/jovem obtenha as aquisições pretendidas. Sou membro efetivo da OPP – Ordem dos Psicólogos Portugueses desde 2014 e trabalho, essencialmente, com crianças com perturbações do neurodesenvolvimento.</p></span>
            <br></br>
            <p><b>Professora Alexandra Enes</b></p>
            <img src={alexandra} loading="eager" />
            {/* <Img src={alexandra} alt="alexandra" loader={<Loading />} /> */}
            <span>
                <p>O gosto pela área de educação veio desde cedo. Desde os primeiros anos que brincava às escolas, fazia o papel de professora e explicava as coisas como se tivesse uma turma de alunos à minha frente.
                    Após a primeira licenciatura, o gosto pela área de educação foi aumentando, o interesse em formações e especializações também, tornando-se um interesse recorrente e uma busca incessante de novas áreas.
                    Com o tempo, fui-me apercebendo das lacunas existentes no ensino, nas dificuldades das crianças nas suas aprendizagens e nas dificuldades dos pais em ter tempo, no meio da sua vida cada vez mais agitada, no acompanhamento dos seus filhos na sua vida escolar.
                    A sociedade impõe-nos cada vez mais tempo, as horas no trabalho, a logística da casa, o desgaste e stress diário, complementado com a exigência da escola que é imposta às crianças, fez-me perceber que existia a necessidade de apoiar tanto os pais como as crianças e jovens na sua vida escolar.
                    Neste sentido, simultaneamente com o trabalho de Educadora de Infância, iniciei as explicações do 1.º ao 3.º ciclo. Com cada vez mais procura, em 2015 iniciei um projeto que se baseava na abertura de um centro de explicações em Vale do Paraíso, Azambuja.
                    Dando conta da necessidade de apoio psicopedagógico por parte dos alunos e com as lacunas existentes nas escolas em prol dos apoios técnicos dos alunos, juntamente com uma amiga e colega, a Daniela, surgiu a ideia e o entusiasmo cada vez maior por este projeto – o CPIAA.</p>

                <ul>
                    <li>Licenciada em Educação de Infância desde 2008, pelo Instituto Superior de Educação e Ciências (ISEC).</li>
                    <li>CAP/CCP – Certificado de Aptidão Profissional NHK – Formação e Novas Tecnologias, em 2009.</li>
                    <li>Pós-Graduação em Supervisão Pedagógica pelo Instituto Superior de Educação e Ciências (ISEC), em 2010.</li>
                    <li>Técnica Profissional de Assistente Administrativa e Rececionista, pela Master-D – Formação Profissional, Unipessoal, Lda.</li>
                    <li>Licenciatura em Educação Básica, pelo Instituto Politécnico De Santarém - Escola Superior De Educação De Santarém, em 2020</li>
                    <li>Finalista do Mestrado em Ensino do 1.º CEB e de Matemática e Ciências Naturais no 2.º CEB</li>
                    <li>Curso Especializado, pela Academia Dislexia, em Dificuldades de Aprendizagem Especificas: Discalculia e Baixo Desempenho em Matemática: Da identificação à intervenção; Disgrafia e Disortografia e Dislexia: Da Caracterização à Intervenção.</li>
                </ul>
                Frequência e participações:
                <ul>
                    <li>Conferência “Coaching em Educação”</li>
                    <li>Ação de formação em “As TIC aplicadas à Supervisão Pedagógica”</li>
                    <li>Ação de formação em “Psicologia do Desenvolvimento e Aprendizagem do Adulto”</li>
                    <li>Ação de formação em “modelos e Práticas de Supervisão Pedagógica”</li>
                    <li>Ação de formação “Processos de Formação e Desenvolvimento do Professor”</li>
                    <li>Ação de formação em “Conceção e Gestão de Projetos”</li>
                    <li>Ação de formação em Ética, Deontologia e Profissionalidade”</li>
                    <li>Sessão de Pedagogia/Educação - "Conto a Conto"</li>
                    <li>Oficina de escrita clássica - "(outras) escritas dos clássicos: entre o canónico e o contemporâneo na Literatura Portuguesa"</li>
                    <li>Novas Cartas Portuguesas: subversão e feminismo</li>
                    <li>Metodologias ativas e Participação</li>
                    <li>Utilização de recursos didáticos na prática profissional; definição do conceito; critérios para a utilização dos recursos didáticos; relação entre recursos didáticos e aprendizagem pelos cinco sentidos; análise de um caso prático.</li>
                    <li>O papel da Filosofia e da (reflexão) Ética na prática educativa</li>
                    <li>Projeto Educativo de Escola (PEE): definição do conceito, enquadramento legal e princípios orientadores. Processo de elaboração do PEE.</li>
                    <li>PPIP (Projeto Piloto de Inovação Pedagógica) e PAFC (Projeto de Autonomia e Flexibilidade curricular): restruturação da escola.</li>
                    <li>Direção de turma: planos de recuperação, planos de acompanhamento. Monodocência: professor titular de turma. Oferta formativa das escolas.</li>
                    <li>A importância da planificação docente no processo de ensino/aprendizagem</li>
                    <li>A Estratégia Nacional de Educação para a Cidadania (ENEC): do enquadramento às práticas</li>
                    <li>Bullying e cyberbullying</li>
                    <li>Estilos de liderança em Sala de Aula</li>
                    <li>Projetos Socioeducativos</li>

                    <li>Experiência profissional como Educadora de Infância em contexto de creche e jardim de infância (8 anos).</li>
                    <li>Explicadora e coordenadora de apoio ao estudo, desde o 1.º ciclo ao 3.º Ciclo, desde 2009. </li>
                </ul>
            </span>
        </Styled.WhoWeAreContainer>
    )
}

export default WhoWeAre