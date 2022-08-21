import Link from 'next/link'
import { Col, Row } from 'antd'
import { CodeOutlined } from '@ant-design/icons'
import { useEffect } from 'react'

export default function Header(){
    useEffect(() => {
        document.querySelectorAll('.pf-btn').forEach(button => {

            let div = document.createElement('div'),
                letters = button.textContent.trim().split('');
        
            function elements(letter, index, array) {
        
                let element = document.createElement('span'),
                    part = (index >= array.length / 2) ? -1 : 1,
                    position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
                    move = position / (array.length / 2),
                    rotate = 1 - move;
        
                element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
                element.style.setProperty('--move', move);
                element.style.setProperty('--rotate', rotate);
                element.style.setProperty('--part', part);
        
                div.appendChild(element);
        
            }
        
            letters.forEach(elements);
        
            button.innerHTML = div.outerHTML;
        
            button.addEventListener('mouseenter', e => {
                if(!button.classList.contains('out')) {
                    button.classList.add('in');
                }
            });
        
            button.addEventListener('mouseleave', e => {
                if(button.classList.contains('in')) {
                    button.classList.add('out');
                    setTimeout(() => button.classList.remove('in', 'out'), 950);
                }
            });
        
        });
    },[])


    return(
        <Row>
            <Col span={24}>
                <header className="header">
                    <h1 className='header-title'>
                        <Link href="/">
                            <a>
                                <CodeOutlined></CodeOutlined>Camphing Blog
                            </a>
                        </Link>
                    </h1>
                    <nav className='header-list sm-hidden'>
                        <ul >
                            <li className="header-list-item">
                                <Link href="/">
                                   <a>Home</a> 
                                </Link>
                            </li>
                            <li className="header-list-item">
                                <Link href="/post/camping">
                                   <a>Post</a> 
                                </Link>
                            </li>
                            <a href='https://donggyunportfolio.netlify.app/' target="_blank" rel="noreferrer">
                                <li className="header-list-item pf-btn">
                                    Portfolio 
                                </li>
                            </a>
                        </ul>
                    </nav>
                </header>
            </Col>
      </Row>
    )
}