import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import "./Sobre.css"

export default function Sobre() {
    return (
        <div className='sobre'>
            <h1>Sobre</h1>
            <div className='mim'>
                <img src="/img/img-1.png" alt=".." />
                <h3>Me chamo Alexander e sou <ReactTypingEffect
                    className='typing'
                    text={["Desenvolvedor  Web.", "Filmmaker.", "Social Midia."]}
                    cursorRenderer={cursor => <span>{cursor}</span>}
                    displayTextRenderer={(text, i) => {
                        return (
                            <span>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                            style={{ color: "#5c80ec" }}
                                        >{char}</span>
                                    );
                                })}
                            </span>
                        );
                    }}
                /></h3>
                <p>
                    Faço Ciência da Computação na FACAPE em Petrolina - PE, Brasil.
                    Atualmente estou cursando o 1º Período.
                    Vim residir em Petrolina com o intuito de cursar a Ciência da Computação e buscar experiencias para minha pessoa e convertendo em money futuramente, visando em me estabilizar e ter grandes oportunidades de portas de emprego, sendo assim conseguir finalmente ajudar minha família.
                </p>
                <button>Doar</button>
            </div>
        </div>
    )
}
