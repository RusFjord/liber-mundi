import { MDBContainer } from 'mdbreact'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <>
      <Header />
      <MDBContainer>{props.children}</MDBContainer>
      <Footer />
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          
        }
      `}</style>
    </>
  );
}

export default Layout;
