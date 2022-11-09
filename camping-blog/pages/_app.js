import '../styles/main.scss'
import "antd/dist/antd.css"

import Header from '../components/Header' 


function MyApp({ Component, pageProps }) {
  return (
    <div id='wrap'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
