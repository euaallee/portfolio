import React, { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./Header.css"

export default function Header() {

    const [isOpen, setOpen] = useState(false)

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
            if (window.scrollY > 0) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={scrolling ? 'scrolling' : ''}>
            <h3>Port</h3>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <nav className={isOpen ? 'mobile' : ''}>
                <ul>
                    <li><Link onClick={() => {setOpen(false)}} to="inicio" smooth={true} duration={800}>Início</Link></li>
                    <li><Link onClick={() => {setOpen(false)}} to="sobre" smooth={true} duration={800}>Sobre mim</Link></li>
                    <li><Link onClick={() => {setOpen(false)}} to="redes" smooth={true} duration={800}>Redes Sociais</Link></li>
                    <li><Link onClick={() => {setOpen(false)}} to="espe" smooth={true} duration={800}>Especialidade</Link></li>
                    <li><Link onClick={() => {setOpen(false)}} to="expe" smooth={true} duration={800}>Experiências</Link></li>
                    <li><Link onClick={() => {setOpen(false)}} to="ctt" smooth={true} duration={800}>Contatar</Link></li>
                </ul>
            </nav>
        </header>
    )
}
