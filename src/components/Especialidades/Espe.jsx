import React from 'react'
import Bars from './Bars'
import '../Especialidades/Espe.css'

const espeData = [
    {
        nameTech: "html5",
        percentualTech: 10
    },
    {
        nameTech: "css3",
        percentualTech: 47
    },
    {
        nameTech: "javascript",
        percentualTech: 40.5
    },
    {
        nameTech: "python",
        percentualTech: 4.7
    },
]

export default function Espe() {
    return (
        <div className='espe'>
            <h1>Especialidades</h1>

            <div className="campoEspe">
                <div className="left">
                    <h3>Minhas habilidades criativas e experiêcias</h3>
                    <p>Aqui está algumas porcentagens das minhas habilidades e experiêcias =)</p>
                    <button>Mais Informações</button>
                </div>
                <div className="right">
                    {
                        espeData.map(function (item) {
                            return (
                                <Bars nameTech={item.nameTech} percentualTech={item.percentualTech} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

