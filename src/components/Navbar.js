import { Nav,Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <div className='navbar_main'>
        <Navbar bg='dark' variant="dark">
         <Navbar.Brand>
            <Nav.Link as={Link} to='/'>Ryan Zmudka's Portfolio</Nav.Link>
         </Navbar.Brand>
            <Nav variant="pills">
             <Nav.Item>
              <Nav.Link as={Link} to='/'>Projects</Nav.Link>
             </Nav.Item>
             <Nav.Item>
              <Nav.Link as={Link} to='/About'>About</Nav.Link>
             </Nav.Item>
            </Nav>
        </Navbar>
        </div>
    )
}

export default Navigation