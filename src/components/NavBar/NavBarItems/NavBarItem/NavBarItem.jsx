import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBarItem = (props) =>{



  return(<li className="nav-item"> 
  <NavLink 
  className="nav-link"
   to ={props.link} 
   exact
   activeClassName='active'
   
>
 {props.children }</NavLink>
</li>)
} 
export default NavBarItem;  