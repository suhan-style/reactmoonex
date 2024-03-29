import React from 'react';
import LineIcon from 'react-lineicons';

const Contact = () => {
    return(
        <>
            <div className='h-row h-pd-top-bottom-l titlebar-bg'>
                <div className='h-col-12'>
                    <h2 className='text-center'>Contact</h2>
                </div>
            </div>
            <div className='h-row h-pd-top-bottom-l'>
                <div className='h-col-12'>
                    <div className='h-row'>
                        <div className='h-col-6 h-border-right'>
                            <div className='h-wrapper d-flex-center d-flex-col gap-15 h-mob-pd-bottom'>
                                <div className='h-icon-style'>
                                    <a href='mailto:domain@gmail.com' target='_blank' rel="noopener noreferrer"><LineIcon name="envelope" /></a>
                                </div>
                                <div>
                                    <a href='mailto:techfreelance90@gmail.com' target='_blank' rel="noopener noreferrer" className='h-bodyFont-md h-dark-link'>techfreelance90@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className='h-col-6'>
                            <div className='h-wrapper d-flex-center d-flex-col gap-15 h-mob-pd-top'>
                                <div className='h-icon-style'>
                                    <a href='mailto:domain@gmail.com' target='_blank' rel="noopener noreferrer"><LineIcon name="instagram" /></a>
                                </div>
                                <div>
                                    <a href='mailto:domain@gmail.com' target='_blank' rel="noopener noreferrer" className='h-bodyFont-md h-dark-link'>web.tech</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-row h-pd-top-bottom-l d-flex-center'>
                <div className='h-col-8'>
                    <div className='h-wrapper text-center'>
                        <p><strong>Note:</strong></p>
                        <p><em>Original design inspired by the Moonex - Portfolio & Agency HTML Template from Themeforest.</em></p>
                        <p><em>This project is created from scratch by myself (Himalay), leveraging my skills and creativity.</em></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;