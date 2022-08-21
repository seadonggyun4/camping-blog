import SanityService from "../../services/SanityService"
import dynamic from 'next/dynamic'


const BlogMainPost = dynamic(() => import('../../components/module/BlogMainPost'), {ssr: false})
import BlogPostDetail from '../../components/Post/BlogPostDetail'
import Footer from "../../components/Footer"
import { useEffect } from "react"


export default function PostAll({slug, post}){
    // console.log(post) 
    
    useEffect(() => {
        const parallaxLayers = document.querySelectorAll('.parallax__layer')
        parallaxLayers.forEach((layer) => {
            layer.classList.add('active')
        })
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