import React from 'react';

import NavigationItem from './NavBarItem/NavBarItem';


const navigationItemsL = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
        <NavigationItem link='/hoses' >آگهی ها</NavigationItem>
        <NavigationItem link='/login'>ثبت نام / ورود</NavigationItem>   
    </ul>
    </nav>


);
export default navigationItemsL;