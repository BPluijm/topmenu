import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavBarElements";


function NavBar() {

    return (
      <>
          <Nav>
              <NavLink to="/">
                  Unofficial Netflix Guide for Travellers
              </NavLink>
              <Bars />
              <NavMenu>
                  <NavLink to="/about" activeStyle>
                    About
                  </NavLink>
                  <NavLink to="/service" activeStyle>
                      Service
                  </NavLink>
                  <NavLink to="/contact-us" activeStyle>
                      Contact us
                  </NavLink>
                  <NavLink to="/sign-up" activeStyle>
                      Sign Up
                  </NavLink>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
              </NavBtn>
          </Nav>
      </>
    );
}

export default NavBar;