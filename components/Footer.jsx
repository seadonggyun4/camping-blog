import { Col, Row } from 'antd'
import { createElement, useEffect } from 'react'

export default function Footer(){
    useEffect(() => {
        const bubbles = document.querySelector('.bubbles')

        //create bubble
        for (let i = 0; i < 128; i++) {
            const bubble = document.createElement('div')
            bubble.setAttribute('class', 'bubble')
            bubble.setAttribute('style', `--size:${2+Math.random()*4}rem; --distance:${6+Math.random()*4}rem; --position:${-5+Math.random()*110}%; --time:${2+Math.random()*2}s; --delay:${-1*(2+Math.random()*2)}s;`)
            bubbles.appendChild(bubble)
        }
    },[])


    return(
        <Row align='middle'>
            <Col span={24}>
                <footer className="footer">
                    <div className="bubbles">
                        {/* bubble */}
                    </div>
                    <div className="footer-textBox">
                        <h2>Thankyou for visiting my blog</h2>
                        <span>@ 2022 DongGyun Seo. All rights reserved.</span>
                    </div>
                    <svg style={{position: 'fixed', top: '100vh'}}>
                        <defs>
                            <filter id="blob">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                            </filter>
                        </defs>
                    </svg>
                </footer>
            </Col>
        </Row>
    )
}