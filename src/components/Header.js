import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer
} from 'mdbreact'

import logo from '../assets/liber-mundi-logo.png'

function Header() {
  return (
    <>
    <header>
        <nav class="bg-primary">
            <div class="container d-flex flex-row align-items-center">
                <div class="m-2"><img src={logo} alt="" width="80" height="30"   /></div>
                <div class='ps-3 display-6 text-white'><strong>Liber Mundi</strong></div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
