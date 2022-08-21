import SanityService from '../services/SanityService'
import dynamic from 'next/dynamic'

const BlogHeadline = dynamic(() => import('../components/Home/BlogHeadline'), {ssr: false})// dymaic import -> 클라이언트 단에서 사용되는 scrollmaic 패키지가 포함되어있어 이는 csr 방식으로 import한다.
const BlogMainPost = dynamic(() => import('../components/module/BlogMainPost'), {ssr: false})
const BlogList = dynamic(() => import('../components/Home/BlogList'), {ssr: false})
import Footer from '../components/Footer'
import { useEffect } from 'react'



export default function Home({ home, posts }) {

  const mainPost = posts.find(p => p.slug === home.mainPostUrl)
  const otherPosts = posts.filter(p => p.slug !== home.mainPostUrl)

  // console.log(mainPost)
  // console.log(otherPosts)


  useEffect(() => {
    const parallaxLayers = document.querySelectorAll('.parallax__layer')
    parallaxLayers.forEach((layer) => {
      layer.classList.add('active')
    })

    const title = document.querySelector('.title')
    title.classList.add('active')

  },[])


  return (
    <>
      <div className="parallax-wrap">
            <div className="parallax__layer parallax__layer__0" aria-hidden="true">
                <img src="/img/layer_0.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__1" aria-hidden="true">
                <img src="/img/layer_1.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__2" aria-hidden="true">
                <img src="/img/layer_2.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__3" aria-hidden="true">
                <img src="/img/layer_3.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__4" aria-hidden="true">
                <img src="/img/layer_4.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__5" aria-hidden="true">
                <img src="/img/layer_5.png"  alt="parallax image"/>
            </div>
            <div className="parallax__layer parallax__layer__6" aria-hidden="true">
                <img src="/img/layer_6.png"  alt="parallax image"/>
            </div>
            <div className="parallax__cover">
              <h1 className='title'>
                <svg className="svg-text2" viewBox="0 0 540 60">
                  <text x="0" y="50%" dy=".35em">
                    Camping Blog
                  </text>
                </svg>
              </h1>
              <div className="parallax__content home">
                <BlogHeadline />
                <BlogMainPost {...mainPost}/>
                <BlogList posts={otherPosts} />
                <Footer />
              </div>
              <div className="parallax__cover__bg" aria-hidden="true"></div>
            </div>
      </div> 
    </>
  )
}


export async function getStaticProps(){
  // SanityService 로부터 데이터를 가져온다.
  const sanituService = new SanityService()
  const home = await sanituService.getHome()
  const posts = await sanituService.getPosts()

  return {
    props: {
      home,
      posts
    }
  }
}