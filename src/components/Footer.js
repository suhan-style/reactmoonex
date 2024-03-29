import React from 'react';
import LineIcon from 'react-lineicons';

const Footer = () => {
    return(
        <>
            <div className='h-container h-footer'>
                <div className='h-row d-flex-center h-pd-top-bottom-s'>
                    <div className='h-footer-col-1'>
                        <div className='h-footer-logo'>
                            <img src='images/logo-dark.png' alt='logo' />
                        </div>
                    </div>
                    <div className='h-footer-col-2'>
                        <p className='text-center'>&copy; 2024 | Moonex by Himalay. All Rights Reserved.</p>
                    </div>
                    <div className='h-footer-col-3'>
                        <div className='h-social-icon'>
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
                </div>
            </div>
        </>
    )
}

export default Footer;