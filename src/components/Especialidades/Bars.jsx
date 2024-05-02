import React from 'react'

export default function Bars({ nameTech, percentualTech }) {
    return (
        <div className='bars'>
            <div className="info">
                <span>
                    <ion-icon name={`logo-${nameTech}`} role="img" className="hydrated" aria-label={`logo ${nameTech}`}></ion-icon>
                    {nameTech}
                </span>
                <span>{percentualTech}%</span>
            </div>
            <div className="line" style={{position: "relative"}}>
                <div className="lineBefore" style={{width: `${percentualTech}%`, position: "absolute", top: 0, left: 0}}></div>
            </div>
        </div>
    )
}
