import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio'
import Sobre from './components/Sobre/Sobre'
import RedesSociais from './components/RedesSociais/RedesSociais'
import Espe from './components/Especialidades/Espe'
import Expe from './components/Expe/Expe'

import './App.css'

export default function App() {

    return (
        <>
            <Header />
            <Inicio id="inicio" />
            <Sobre id="sobre" />
            <RedesSociais id="redes" />
            <Espe id="espe" />
            <Expe id="expe" />
        </>
    )
}
