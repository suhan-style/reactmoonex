import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderMenuList from './HeaderMenuList';

const RemoveEmptySubmenu = () => {
    const submenu = document.getElementsByClassName('sub-menu');
    for(let i = 0; i < submenu.length; i++) {
        const emptyNode = submenu[i].childNodes.length === 0;
        if(emptyNode) {
            submenu[i].remove();
        }
        if(!emptyNode) {
            submenu[i].parentElement.classList.add('has-children');
        }
    }
}

const Menu = () => {
    useEffect(() => {
        RemoveEmptySubmenu();
    });

    return(
        <>
            <nav>
                <ul className='main-menu'>
                    {
                        HeaderMenuList.map((item,index) => {
                            return(
                                <li key={index}>
                                    <NavLink to={item.navLink}>{item.navItem}</NavLink>
                                    <span className='dropdown'></span>
                                    <ul className='sub-menu'>
                                    {
                                        item.children ?
                                        item.children.map( (children, index) => (
                                            <li key={index}>
                                                <NavLink to={children.navLink}>{children.navItem}</NavLink>
                                            </li>
                                        ))
                                        :null
                                    }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Menu;