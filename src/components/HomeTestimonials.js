import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const HomeTestimonials = () => {
    return(
        <>
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                emulateTouch={true}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <p className='t-content'>
                        “I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support!”
                    </p>
                    <div className='h-pd-top-m'>
                        <p className='t-author'>Pavel. S</p>
                        <p className='t-designation'>CEO at Liarch Studio</p>
                    </div>
                </div>

                <div>
                    <p className='t-content'>
                        “I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support!”
                    </p>
                    <div className='h-pd-top-m'>
                        <p className='t-author'>Pavel. S</p>
                        <p className='t-designation'>CEO at Liarch Studio</p>
                    </div>
                </div>

                <div>
                    <p className='t-content'>
                        “I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support!”
                    </p>
                    <div className='h-pd-top-m'>
                        <p className='t-author'>Pavel. S</p>
                        <p className='t-designation'>CEO at Liarch Studio</p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default HomeTestimonials;