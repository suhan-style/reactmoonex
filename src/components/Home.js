import React, { useState } from 'react';
import HomeHeroData from './HomeHeroData';
import HomeService from './HomeService';
import { Link } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';
import HomeTestimonials from './HomeTestimonials';

const OurServiceData = (val,index) => {
    return (
        <div key={index} className='h-service-box' data-aos='fade'>
            <Link className='h-service-box-link' to={val.box_link} />
            <div className='h-service-box-icon'>
                <LineIcon name={val.box_icon} />
            </div>
            <h5 className='h-service-box-title'>
                {val.box_title}
            </h5>
            <div className='h-service-box-content'>
                <p>{val.box_desc}</p>
            </div>
            <div className='h-service-box-arrow'>
                <LineIcon name={val.box_arrow} />
            </div>
        </div>
    )
}

const Home = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    const onVWEnter = () => {
        setViewPortEntered(true);
    }

    return(
        <>
            <div className='h-container h-hero-bg-img'>
                <div className='h-row h-pd-top-bottom-l'>
                    <div className='h-col-9'>
                        <div className='h-wrapper'>
                            <h1 data-aos='fade'>{HomeHeroData[0].headline}</h1>
                            <h4 className='h-text-uppercase h-text-white' data-aos='fade'>CRAFTING DIGITAL <br/>AGENCY</h4>
                        </div>

                        <div className='h-wrapper h-pd-top-bottom-m'>
                            <h2 className='h-font-md h-text-white' data-aos='fade'>{HomeHeroData[0].title}</h2>
                        </div>
                        <div className='h-pd-top-bottom-s h-w-56'>
                            <hr className='h-hr-dark' />
                        </div>
                        <div className='h-w-56 h-pd-top-bottom-m'>
                            <p className='h-bodyFont-md h-text-dark' data-aos='fade'>
                                {HomeHeroData[0].description}
                            </p>
                        </div>
                        <div className='h-wrapper h-pd-top-s' data-aos='fade'>
                            <a href={HomeHeroData[0].btnLink} className='h-btn-primary'>{HomeHeroData[0].btnText}</a>
                        </div>
                    </div>
                    <div className='h-col-3 h-hide-xl'>
                        <div className='h-pd-top-m'></div>
                        <div className='h-pos-relative' data-aos='fade'>
                            <img src="images/circle-text.png" alt="circle-text" className='spin-circle' />
                            <img src="images/circle-logo.png" alt="circle-logo h-img-w" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container primaryBgColor h-hide-xl'>
                <div className='h-row h-pd-top-l'></div>
            </div>

            <div className='h-container'>
                <div className='h-row h-pd-top-xl h-pd-bottom-l'>
                    <div className='h-col-3'>
                        <div className='h-wrapper h-pd-bottom-s'>
                            <h2 className='h-mr-top-0' data-aos='fade'>Our Services</h2>
                            <p className='h-font-18' data-aos='fade'>
                                We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.
                            </p>
                        </div>
                    </div>
                    <div className='h-col-8 h-col-offset-1'>
                        <div className='h-wrapper'>
                            <div id='service_box_wrapper'>
                                {HomeService.map(OurServiceData)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-container'>
                <div className='h-row'>
                    <div className='h-col-12'>
                        <div className='h-pd-bottom-s' data-aos='fade'>
                            <h2>Counter</h2>
                        </div>
                    </div>
                </div>
                <div className='h-row h-pd-bottom-xl'>
                    <div className='h-counter-item'>
                        <div data-aos='fade'>
                            <div className='h-counter-value'>
                                <h3>
                                    <Waypoint onEnter={onVWEnter} >
                                        <div>
                                            {viewPortEntered && <CountUp start={0} end={120} delay={1} /> }
                                        </div>
                                    </Waypoint>
                                </h3>
                            </div>
                            <div className='h-counter-title'>YEARS OF <br />EXPERIENCE</div>
                        </div>
                    </div>
                    <div className='h-counter-item'>
                        <div data-aos='fade'>
                            <div className='h-counter-value'>
                                <h3>
                                    <Waypoint onEnter={onVWEnter} >
                                        <div>
                                            {viewPortEntered && <CountUp start={0} end={820} delay={1} /> }
                                        </div>
                                    </Waypoint>
                                </h3>
                            </div>
                            <div className='h-counter-title'>SATISFACTION <br />CLIENTS</div>
                        </div>
                    </div>
                    <div className='h-counter-item'>
                        <div data-aos='fade'>
                            <div className='h-counter-value'>
                                <h3>
                                    <Waypoint onEnter={onVWEnter} >
                                        <div>
                                            {viewPortEntered && <CountUp start={0} end={6430} delay={1} /> }
                                        </div>
                                    </Waypoint>
                                </h3>
                            </div>
                            <div className='h-counter-title'>EMPLOYEES ON <br />WORLDWIDE</div>
                        </div>
                    </div>
                    <div className='h-counter-item'>
                        <div data-aos='fade'>
                            <div className='h-counter-value'>
                                <h3>
                                    <Waypoint onEnter={onVWEnter} >
                                        <div>
                                            {viewPortEntered && <CountUp start={0} end={78750} delay={1} /> }
                                        </div>
                                    </Waypoint>
                                </h3>
                            </div>
                            <div className='h-counter-title'>PROJECTS COMPLETED <br />ON 60 COUNTRIES</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-container h-t-bg'>
                <div className='h-row h-pd-top-bottom-l'>
                    <div className='h-col-4'>
                        <img src='/images/quote.png' alt='quote-img' />
                    </div>
                    <div className='h-col-8'>
                        <div className='t-wrapper'>
                            <HomeTestimonials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;