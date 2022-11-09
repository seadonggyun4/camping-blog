import { Card, Col, Row } from 'antd'
import Link from 'next/link'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'

export default function BlogList({posts}){
    useEffect(() => {
        const controller = new ScrollMagic.Controller(); //scrollMagic 라이브러리 컨트롤러 생성

        const listTitle = document.querySelector('.bloglist-title')

        new ScrollMagic
            .Scene({
            triggerElement:listTitle,
            triggerHook:.8,
            })
            .setClassToggle(listTitle,'active')
            .addTo(controller)
    })



    return(
        <section className="bloglist">
            <h2 className='bloglist-title'>
                Latest Posts
            </h2>
            <Row gutter={16} align="top">
                {posts.map((post , i) => {
                    return(
                        <Col span={6} key={i}>
                            <Link href={`/post/${post.slug}`}>
                                <a>
                                    <article className="bloglist-item">
                                        <Card cover={<img alt={post.thumbnail.alt} src={post.thumbnail.imageUrl}></img>} />
                                        <div className="bloglist-textBox">
                                            <h3>{post.title}</h3>
                                            <span>{post.author.name} · {dayjs(post.createdAt).format('MMMM D')}</span>
                                        </div>
                                    </article>
                                </a>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </section>
    )
}