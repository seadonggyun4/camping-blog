import SanityService from "../../services/SanityService"
import dynamic from 'next/dynamic'


const BlogMainPost = dynamic(() => import('../../components/module/BlogMainPost'), {ssr: false})
import BlogPostDetail from '../../components/Post/BlogPostDetail'
import Footer from "../../components/Footer"
import { useEffect } from "react"


export default function PostAll({slug, post}){
    // console.log(post) 


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

        } else {
            parallaxLayers.forEach((layer) => {
                layer.classList.add('active')
            })
        }

    },[])

    return(
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
                    <div className="parallax__content post">
                        <BlogMainPost {...post}/>
                        <BlogPostDetail blocks={post.content}/>
                        <Footer />
                    </div>
                    <div className="parallax__cover__bg" aria-hidden="true"></div>
                    </div>
            </div>
        </>
    )
}


export async function getStaticPaths(){
   // SanityService 로부터 데이터를 가져온다.
   const posts = await new SanityService().getPosts()

  const paths = posts.map(post => ({
    params: {
        slug: post.slug
    }
  }))


    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    // SanityService 로부터 데이터를 가져온다.
    const posts = await new SanityService().getPosts()

    const {slug} = params
    const post = posts.find(p => p.slug === slug)
    
    return {
        props: {
            slug,
            post
        }
    }
}