import React from 'react';
import Iframe from 'react-iframe';

const CodingTask = () => {
    return(
        <>
            <div className='h-row h-pd-top-bottom-l titlebar-bg'>
                <div className='h-col-12'>
                    <h2 className='text-center'>Coding Task</h2>
                </div>
            </div>

            <div className='h-row h-pd-top-bottom-s'>
                <div className='h-col-10'>
                    <div className='task-wrapper'>
                        <div className='task-title'>
                            <h5>Load More Boxes On Button Click</h5>
                        </div>
                        <div className='task-code'>
                            <Iframe url="https://codepen.io/himalay-waghela/embed/jOXwbWK?default-tab=html%2Cresult"
                                width="100%"
                                height="420px"
                                frameBorder="no"
                                loading="lazy"
                                allowTransparency="true"
                                allowFullScreen="true"
                                display="block"
                                position="relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodingTask;