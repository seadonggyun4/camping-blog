import { Col, Row } from 'antd'
import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'





export default function BlogHeadline(){
    useEffect(() => {
        const controller = new ScrollMagic.Controller(); //scrollMagic 라이브러리 컨트롤러 생성

        const mainText = document.querySelector('.headline-maintext')
        const subText = document.querySelector('.headline-subtext')

        new ScrollMagic
            .Scene({
                triggerElement:mainText,
                triggerHook:.8,
                reverse: false
            })
            .setClassToggle(mainText,'active')
            .addTo(controller)

        new ScrollMagic
            .Scene({
                triggerElement:subText,
                triggerHook:.8,
                reverse: false
            })
            .setClassToggle(subText,'active')
            .addTo(controller)
        
    },[])





    return(
        <Row align='middle'>
            <Col span={24}>
                <section className='headline'>    
                    <div className="headline-textBox">    
                        <h2 className='headline-maintext'>the Camping Blog for my hobby</h2>
                        <p className='headline-subtext'>
                            This site is where I record my experiences while camping.<br/>
                            Please enjoy my vivid experiences!
                        </p>
                    </div>
                    <img className='headline-img' src="./img/headline-img.webp" alt="headline-img" aria-hidden="true"/>
                    <div className="flame" aria-hidden="true"></div>
                </section>
            </Col>
        </Row>
    )
}