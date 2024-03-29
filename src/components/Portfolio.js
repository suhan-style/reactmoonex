import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [data,setData] = useState([]);

    const getData = () => {
        fetch('data/PortfolioData.json')
        .then(response => response.json())
        .then(myjson => {
            // console.log(myjson);
            setData(myjson);
        })
        .catch(error => console.log(error))
    }

    useEffect( () => {
        getData();
    },[]);

    const rm_active_all = () => {
        document.querySelector('.all').classList.remove('active');
    }
    const rm_active_branding = () => {
        document.querySelector('.branding').classList.remove('active');
    }
    const rm_active_animation = () => {
        document.querySelector('.animation').classList.remove('active');
    }

    const All = (event) => {
        event.target.classList.add('active');

        const item_filter = document.getElementsByClassName('item-filter');
        for(let i = 0; i < item_filter.length; i++) {
            item_filter[i].classList.add('show');
        }

        rm_active_branding();
        rm_active_animation();
    }

    const Branding = (event) => {
        event.target.classList.add('active');

        const item_filter = document.getElementsByClassName('item-filter');
        for(let i = 0; i < item_filter.length; i++) {
            item_filter[i].classList.remove('show');
            if(item_filter[i].getAttribute('data-category') === 'Branding') {
                item_filter[i].classList.add('show');
            }
        }

        rm_active_all();
        rm_active_animation();
    }

    const Animation = (event) => {
        event.target.classList.add('active');

        const item_filter = document.getElementsByClassName('item-filter');
        for(let i = 0; i < item_filter.length; i++) {
            item_filter[i].classList.remove('show');
            if(item_filter[i].getAttribute('data-category') === 'Animation') {
                item_filter[i].classList.add('show');
            }
        }

        rm_active_all();
        rm_active_branding();
    }

    return(
        <>
            <div className='h-container'>
                <div className='h-row h-pd-top-l'>
                    <div className='h-col-12'>
                        <h2>PORTFOLIO</h2>
                    </div>
                </div>

                <div className='h-row h-pd-top-s'>
                    <div className='h-col-12'>
                        <div id='filter_wrapper' className='filter-wrapper h-pd-bottom-s'>
                            <button onClick={All} className='btn-filter all active'>All</button>
                            <button onClick={Branding} className='btn-filter branding'>Branding</button>
                            <button onClick={Animation} className='btn-filter animation'>Animation</button>
                        </div>
                    </div>
                </div>

                <div className='h-row h-pd-bottom-l'>
                    <div className='portfolio-grid'>
                        {
                            data.map( (item,index) => (
                                
                                <div key={index} className='item-filter show' data-category={item.category}>
                                    <div className='item-img'>
                                        <img src={item.imgsrc} alt={item.title} className='h-img-w' />
                                    </div>
                                    <div className='item-content'>
                                        <p className='item-category'>{item.category}</p>
                                        <h5 className='item-title'>{item.title}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;