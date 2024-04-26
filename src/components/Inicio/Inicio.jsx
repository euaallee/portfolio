import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./Inicio.css"

export default function Inicio() {

    return (
        <div className='inicio'>
            <div className='bgBlack'></div>
            <div className="display">
                <p>Olá, me chamo</p>
                <h1>Alexander Joshua</h1>
                <span>sou
                    <ReactTypingEffect
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
                    />
                </span>
            </div>
            <button><Link to="" smooth={true} duration={800}>Contratar-me</Link></button>

        </div>
    )
}
