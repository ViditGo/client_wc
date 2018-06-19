import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var signedIn = true;
var userStatus = signedIn ? 'Sign Out' : 'Sign In';
const background_URL = "https://www.fifa.com/assets/img/tournaments/17/2018/common/fwc_darkbluebg.png";

const NavBar = () => {
   return (
     <div  style={{ backgroundImage : `url(${background_URL})`}}>
           <Navbar inverse collapseOnSelect  style={{ backgroundImage : `url(${background_URL})`}}>
               <Navbar.Header>
                   <Navbar.Brand>
                       <a href="#brand">Home</a>
                   </Navbar.Brand>
                   <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                   <Nav>
                       <NavItem eventKey={1} href="#">
                           Predictions
      </NavItem>
                       <NavItem eventKey={2} href="#">
                           Leagues
      </NavItem>
      <NavItem eventKey={3} href="#">
                           Leaderboards
      </NavItem>
      <NavItem eventKey={4} href="#">
                           How to play
      </NavItem>
      </Nav>
                    <Nav pullRight>
                       <NavDropdown eventKey={5} title="My Account" id="basic-nav-dropdown">
                           <MenuItem eventKey={5.1}>Action</MenuItem>
                           <MenuItem eventKey={5.2}>Another action</MenuItem>
                           <MenuItem eventKey={5.3}>Something else here</MenuItem>
                           <MenuItem divider />
                           <MenuItem eventKey={5.4}>{ userStatus }</MenuItem>
                       </NavDropdown>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
     </div>
     
   );
 }

 export default NavBar;