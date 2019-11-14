import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, NavItem} from 'react-bootstrap';

class Routes extends Component {
    render() {
        return(
            <React.Fragment>
                <Router>
                    <div className = "navBar">
                    <Navbar variant = "dark"  expand="lg">  
                        <Navbar.Brand href="Homepage">
                        
                        <img
                            alt=""
                            src= "https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg"
                            width="220"
                            height="75"
                            className="d-inline-block align-top"
                        />
                    
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{color: "#E19B24"}}  />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Homepage" style ={{color: "#E19B24"}}>Home</Nav.Link>
                        <Nav.Link href="About" style ={{color: "#E19B24"}}>About</Nav.Link>
                        <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={Nav.Link} style = {{color: "#E19B24"}}>Events</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="Residential" style ={{color: "#E19B24", backgroundColor: "black"}}>Track</Dropdown.Item>
                            <Dropdown.Item href="Commercial" style ={{color: "#E19B24", backgroundColor: "black"}}>Field</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>      
                        <Nav.Link href="Appointment" style ={{color: "#E19B24"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    </div>
                </Router>
                <h1>Hello</h1>
                <footer className = "footer">
                    <br></br>
                    <Button 
                            variant="outline-warning" 
                            href = "Contact" 
                            className= "footerb" 
                            size = "lg"
                            >Contact Us</Button><br></br>
                    <img
                            alt=""
                            src='https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg'
                            width="220"
                            height="75"
                            className="d-inline-block align-top"
                            />
                    </footer>
            </React.Fragment>
        )
    }
}
export default Routes;