import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'

const FooterPage = () => {
  return (
    <MDBFooter
      color='blue'
      className='font-small py-3 mt-4 footer-copyright text-center fixed-bottom'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:
        <a href='https://ulteam8.ru'> ULTeam8 </a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage
