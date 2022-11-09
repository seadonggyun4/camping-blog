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


  // 쿠키 저장 메서드
  const setParallaxCookie = () => {
    var parallaxCookie = "";
    parallaxCookie += "parallax=on;";

    // 쿠키에 넣는다.
    document.cookie = parallaxCookie;
  }
  
  
  // 쿠키 가져오기 메서드
  const getCookie = (Name) => {
      let search = Name + "="
      if (document.cookie.length > 0) {
          let offset = document.cookie.indexOf(search)
          if (offset !== -1) {
              offset += search.length
                  
              let end = document.cookie.indexOf(";", offset)
              
              if (end === -1) end = document.cookie.length
              return unescape(document.cookie.substring(offset, end))
          }
      }
      return "";
  }


  useEffect(() => {
    const parallaxLayers = document.querySelectorAll('.parallax__layer')
    const title = document.querySelector('.title')

    if(getCookie('parallax') === 'on'){
      parallaxLayers.forEach((layer) => {
        layer.style.transition = 'none'
      })

      parallaxLayers[0].style.transform = 'translateZ(-300px) scale(4) translateY(-20px)' 
      parallaxLayers[0].style.opacity = 1
      parallaxLayers[1].style.transform = 'translateZ(-250px) scale(3.15) translateY(-20px)'
      parallaxLayers[2].style.transform = 'translateZ(-200px) scale(2.65) translateY(-30px)'
      parallaxLayers[3].style.transform = 'translateZ(-150px) scale(2.15)'
      parallaxLayers[4].style.transform = 'translateZ(-100px) scale(1.65)'
      parallaxLayers[5].style.transform = 'translateZ(-50px) scale(1.15)'
      parallaxLayers[6].style.transform = 'translateZ(0px) scale(.65) translateX(120px)'

      title.style.transition = 'none'
      title.style.opacity = 1
    } else{
      parallaxLayers.forEach((layer) => {
        layer.classList.add('active')
      })
      
      title.classList.add('active')

      setTimeout(() => {
        setParallaxCookie()//쿠키 저장
      },2000)
    }

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