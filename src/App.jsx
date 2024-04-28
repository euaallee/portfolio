import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio'
import Sobre from './components/Sobre/Sobre'
import RedesSociais from './components/RedesSociais/RedesSociais'
import './App.css'

export default function App() {

    return (
        <>
            <Header />
            <Inicio id="inicio"/>
            <Sobre id="sobre"/>
            <RedesSociais id="redes" />
        </>
    )
}
