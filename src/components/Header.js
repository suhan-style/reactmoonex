import React from 'react';
import useDimensions from 'react-use-dimensions';
import Menu from './Menu';
import HemburgerMenu from './HemburgerMenu';
import '../header.css';

const Header = () => {
    const [screenRef, screenWidth] = useDimensions();

    return(
        <>
            <header ref={screenRef}>
                <div className='header-wrapper'>
                    <div id='logo'>
                        <a href="/"><img src='images/logo-dark.png' alt='Logo' /></a>
                    </div>
                    {
                        screenWidth.width > 1000 ? <div id='menu'><Menu /></div> : null
                    }
                    <div id='hemburger_menu'><HemburgerMenu /></div>
                </div>
            </header>
        </>
    )
}

export default Header;