import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import Loader from './Loader.jsx'
import { useNavigation } from 'react-router-dom'
const Layout = ()=>{
      const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader/>

    return (
        
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;