import React, { Component, useEffect } from 'react'
import '../../styles/frontoffice/home.css'
import { Spring, useSpring } from 'react-spring'

import Aos from 'aos'

export default function Home() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 })
    // }, [])

    const styles: any = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
    })

    return (
        <div className="container-fluid home-tsx">
            <div data-aos="fade-up" className="row">
                <h1 style={styles} className="offset-lg-1 col-lg-8 text-start animate__fadeInUp" >This is a title</h1>
            </div>
            <div className="row">
                <p className="offset-lg-1 col-lg-5 text-start" > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dicta id asperiores, rerum, ipsam nulla corporis minus voluptate tenetur ab ipsa, illum placeat molestias! Voluptate quidem ab error explicabo corporis?</p>
            </div>
        </div>
    )
}

