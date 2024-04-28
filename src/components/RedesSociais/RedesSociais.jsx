import React from 'react'
import Redes from './Redes'
import '../RedesSociais/RedesSociais.css'

const dataRedes = [
    {
        id: 1,
        iconRede: "logo-linkedin",
        label: "logo linkedin",
        nameRede: "LinkedIn",
        userRede: "euaallee-dev",
        linkRede: "https://"
    },
    {
        id: 2,
        iconRede: "logo-instagram",
        label: "logo instagram",
        nameRede: "Instagram",
        userRede: "@euaallee",
        linkRede: "https://"
    },
    {
        id: 3,
        iconRede: "logo-github",
        label: "logo github",
        nameRede: "GitHub",
        userRede: "euaallee",
        linkRede: "https://"
    },
    {
        id: 4,
        iconRede: "logo-whatsapp",
        label: "logo whatsapp",
        nameRede: "WhatsApp",
        userRede: "chame",
        linkRede: "https://"
    },
    {
        id: 5,
        iconRede: "logo-facebook",
        label: "logo facebook",
        nameRede: "Facebook",
        userRede: "euaallee",
        linkRede: "https://"
    },
    {
        id: 6,
        iconRede: "logo-youtube",
        label: "logo youtube",
        nameRede: "YouTube",
        userRede: "Inscreva-se",
        linkRede: "https://"
    },
]

export default function RedesSociais() {
    return (
        <div className='redes'>
            <h1>Redes Sociais</h1>
            <div id="redes">
                {
                    dataRedes.map((rede) => {
                        return (
                            <Redes
                                id={rede.id}
                                iconRede={rede.iconRede}
                                nameRede={rede.nameRede}
                                userRede={rede.userRede}
                                linkRede={rede.linkRede}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
