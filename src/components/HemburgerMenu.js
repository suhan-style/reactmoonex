import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LineIcon from "react-lineicons";
import HeaderMenuList from './HeaderMenuList';

const MobileMenuOpen = () => {
    let mobile_menu = document.getElementById('mobile_menu');
    mobile_menu.classList.add('show');
}

const MobileMenuClose = () => {
    let mobile_menu = document.getElementById('mobile_menu');
    mobile_menu.classList.remove('show');
}

const RemoveEmptySubmenu = () => {
    const submenu = document.getElementsByClassName('sub-menu');
    for(let i = 0; i < submenu.length; i++) {
        const emptyNode = submenu[i].childNodes.length === 0;
        if(emptyNode) {
            submenu[i].previousSibling.remove();
            submenu[i].remove();
        }
        if(!emptyNode) {
            submenu[i].parentElement.classList.add('has-children');
        }
    }
}

// const ToggleDropdown = (event) => {
//     // console.log(event.currentTarget.classList.toggle('show'));
//     event.currentTarget.classList.toggle('show');
// }

const HemburgerMenu = () => {
    useEffect(() => {
        RemoveEmptySubmenu();
    });

    return(
        <>
            <div className='header-right-wrapper'>
                <div className='search-icon'>
                    <LineIcon name='search-alt' />
                </div>
                <div className='hemburger-icon'>
                    <LineIcon name='menu' onClick={MobileMenuOpen} />
                </div>
            </div>

            <nav id='mobile_menu'>
                <div className='close-icon'>
                    <LineIcon name='cross-circle' onClick={MobileMenuClose} />
                </div>
                <div className='mobile-menu-wrapper'>
                    <ul>
                        {
                            HeaderMenuList.map((item,index) => {
                                return(
                                    <li key={index}>
                                        <NavLink to={item.navLink} onClick={MobileMenuClose}>{item.navItem}</NavLink>
                                        <span className='dropdown'></span>
                                        <ul className='sub-menu' /*onClick={ToggleDropdown}*/>
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
                    <div id='mobile_menu_social'>
                        <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                            <LineIcon name='facebook' />
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer">
                            <LineIcon name='twitter' />
                        </a>
                        <a href='https://instagram.com/' target='_blank' rel="noopener noreferrer">
                            <LineIcon name='instagram' />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HemburgerMenu;