
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://t3.ftcdn.net/jpg/15/16/82/00/360_F_1516820062_zSUS1sY2teJ5tW3SmSsX1y06rhkrglfB.jpg" style={{borderRadius:"50%"}} width={"50px"} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

export default Header
