import React from 'react'
import ExpeCard from '../Expe/ExpeCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import "./Expe.css"

const expeData = [
    {
        imgExpe: "portfolio/img/logoExpe/admLogo.png",
        expeItemName: "Administrador",
        psExpe: "Técnico em Administração"
    },
    {
        imgExpe: "portfolio/img/logoExpe/LogoSiteInova.png",
        expeItemName: "Desenvolvedor",
        psExpe: "Front-end da INTJR"
    },
    {
        imgExpe: "portfolio/img/logoExpe/loading.gif",
        expeItemName: "EM BREVE",
        psExpe: "Em busca de novas experiências"
    }
]

export default function Expe() {
    return (
        <div className="expe">
            <h1>Experiências</h1>
            <Swiper
                className='cardItem'
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                centerInsufficientSlides={true}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {expeData.map((item, index) => {
                    return (
                        <SwiperSlide className="slide-item" key={index}>
                            <ExpeCard
                                imgExpe={item.imgExpe}
                                expeItemName={item.expeItemName}
                                psExpe={item.psExpe}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
