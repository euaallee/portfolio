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
                <ReactTypingEffect
                    staticText='sou'
                    speed={150}
                    eraseSpeed={100}
                    typingDelay={1500}
                    eraseDelay={1500}
                    className='typing'
                    text={["desenvolvedor  web.", "o menino da computação.", "filmmaker.", "social midia.", " o cara do TI."]}
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
            </div>
            <button><Link to="" smooth={true} duration={800}>Contratar-me</Link></button>

        </div>
    )
}
