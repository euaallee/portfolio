import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import "./Sobre.css"

import myPhoto from '/img/img1.png'

export default function Sobre() {
    return (
        <div className='sobre'>
            <h1>Sobre</h1>
            <div className='mim'>
                <img src={myPhoto} alt="Foto @euaallee" />
                <div>
                    <h3>Me chamo Alexander e sou<br /><ReactTypingEffect
                        speed={150}
                        eraseSpeed={100}
                        typingDelay={1500}
                        eraseDelay={1500}
                        className='typing'
                        text={["desenvolvedor  web.", "o menino da computação.", "filmmaker.", "social midia.", " o cara do TI."]}
                        cursorRenderer={cursor => <h3>{cursor}</h3>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h2>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={{ color: "#5c80ec" }}
                                            >{char}</span>
                                        );
                                    })}
                                </h2>
                            );
                        }}
                    /></h3>
                    <p>
                        Alexander Joshua é um estudante de Ciência da Computação na FACAPE, atualmente no terceiro período do ano letivo de 2024. Originário do interior de Pernambuco, ele demonstra habilidades como desenvolvedor web, com mais de um ano de experiência na equipe Front-end da InovaTech Jr., sediada em sua instituição de ensino. Alexander é reconhecido por sua facilidade de entendimento e rápido aprendizado, sempre buscando aplicar seus conhecimentos em projetos práticos.
                    </p>
                    <p>
                        Suas principais tecnologias incluem React, HTML, CSS, JavaScript, Python e C. Além de sua paixão pela tecnologia, ele também demonstra interesse nas áreas de T.I, Social Mídia, Filmmaker e Marketing, tendo diversos sonhos a serem realizados, e também está em espera de boas oportunidades.
                    </p>
                    <button>Doar</button>
                </div>
            </div>
        </div>
    )
}
