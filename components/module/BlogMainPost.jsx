import { Card, Col, Row } from 'antd'
import Link from 'next/link'
import dayjs from 'dayjs'
import ScrollMagic from 'scrollmagic'
import { useEffect } from 'react'


export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}){
    useEffect(() => {
        const controller = new ScrollMagic.Controller(); //scrollMagic 라이브러리 컨트롤러 생성

        const mainPostTitle = document.querySelector('.mainpost-title')

        new ScrollMagic
            .Scene({
            triggerElement:mainPostTitle,
            triggerHook:.8,
            })
            .setClassToggle(mainPostTitle,'active')
            .addTo(controller)
    },[])


    return(
        <Row align='middle' style={{height: "auto"}}>
            <Col span={24}>
                <section className='mainpost'>
                    <div className="mainpost-title lg-only">mainpost</div>
                    <Link href={`/post/${slug}`}>
                        <a>
                            <div className="mainpost-content">
                                <Card cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}  />
                                <div className="mainpost-textBox">
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                    <span>{author.name} · {dayjs(createdAt).format("MMMM D")}</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </section>
            </Col>
        </Row>
    )
}