import React, { useEffect, useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./Header.css"

export default function Header() {
    
    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart"
        })
    }

    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 0) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    return (
        <header className={scrolling ? 'scrolling' : ''}>
            <h3>Port</h3>
            <div className="nav">
                <ul>
                    <li><Link to="" smooth={true} duration={800}>Início</Link></li>
                    <li><Link to="" smooth={true} duration={800}>Sobre mim</Link></li>
                    <li><Link to="" smooth={true} duration={800}>Rede Social</Link></li>
                    <li><Link to="" smooth={true} duration={800}>Especialista</Link></li>
                    <li><Link to="" smooth={true} duration={800}>Experiência</Link></li>
                    <li><Link to="" smooth={true} duration={800}>Contatar</Link></li>
                </ul>
            </div>
        </header>
    )
}
