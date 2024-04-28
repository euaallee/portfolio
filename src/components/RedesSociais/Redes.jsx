import React from 'react'

export default function Redes({ id, iconRede, nameRede, userRede, linkRede, label }) {
    return (
        <a href={linkRede} target="_blank" rel="noopener noreferrer">
            <div id={id} className="rede">
            <ion-icon name={iconRede} role="img" class="md hydrated" aria-label={label}></ion-icon>
                <h3>{nameRede}</h3>
                <span>{userRede}</span>
            </div>
        </a>
    )
}
