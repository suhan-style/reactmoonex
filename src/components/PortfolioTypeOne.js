import React, { useState, useEffect } from 'react';
import portfolio from './PortfolioType1_Data';

const ListView = () => {
    const item_filter = document.getElementsByClassName('item-filter');
    for(let i = 0; i < item_filter.length; i++) {
        item_filter[i].style.flexBasis = "100%";
    }
}
const GridViewTwo = () => {
    const item_filter = document.getElementsByClassName('item-filter');
    for(let i = 0; i < item_filter.length; i++) {
        item_filter[i].style.flexBasis = "49%";
    }
}
const GridViewThree = () => {
    const item_filter = document.getElementsByClassName('item-filter');
    for(let i = 0; i < item_filter.length; i++) {
        item_filter[i].style.flexBasis = "32%";
    }
}

const PortfolioTypeOne = () => {
    const [filter, setFilter] = useState('all');

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        setProjects(portfolio);
    }, []);

    useEffect( () => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p, filtered: p.category.includes(filter)
        }));

        setProjects(filtered);

    }, [filter]);

    return(
        <>
            <div className='h-row h-pd-top-bottom-l titlebar-bg'>
                <div className='h-col-12'>
                    <h2 className='text-center'>PORTFOLIO GRID</h2>
                </div>
            </div>

            <div className='h-row h-pd-top-bottom-s'>
                <div className='h-col-8'>
                    <div className='portfolio__labels'>
                        <span active={filter === 'all' ? 1 : 0} onClick={() => setFilter('all')}>All</span>
                        <span active={filter === 'branding' ? 1 : 0} onClick={() => setFilter('branding')}>Branding</span>
                        <span active={filter === 'animation' ? 1 : 0} onClick={() => setFilter('animation')}>Animation</span>
                    </div>
                </div>
                <div className='h-col-4'>
                    <div className='layout-grid-option'>
                        <div onClick={ListView}>
                            <img src='images/icons8-list.png' alt='list-layout' />
                        </div>
                        <div onClick={GridViewTwo}>
                            <img src='images/icons8-grid.png' alt='grid-two-layout' />
                        </div>
                        <div onClick={GridViewThree}>
                            <img src='images/icons8-grid-3.png' alt='grid-three-layout' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-row h-pd-bottom-l'>
                <div className="portfolio-grid portfolio-type-1">
                    {projects.map((item,index) => item.filtered === true ? (
                        <div key={index} className='item-filter show' data-category={item.category}>
                            <div className='item-img'>
                                <img src={item.imgsrc} alt={item.title} className='h-img-w' />
                            </div>
                            <div className='item-content'>
                                <p className='item-category'>{item.category}</p>
                                <h5 className='item-title'>{item.title}</h5>
                            </div>
                        </div>
                    ) : '')}
                </div>
            </div>
        </>
    )
}

export default PortfolioTypeOne;