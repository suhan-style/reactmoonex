import React, { useState, useEffect } from 'react';
import portfolio from './PortfolioType1_Data';

const ListView = () => {
    document.querySelector('.portfolio-masonry').style.columns = "1";
    document.querySelector('.list-view img').style.filter = "brightness(1)";
    document.querySelector('.grid-view-two img').style.filter = "brightness(0)";
    document.querySelector('.grid-view-three img').style.filter = "brightness(0)";
}
const GridViewTwo = () => {
    document.querySelector('.portfolio-masonry').style.columns = "2";
    document.querySelector('.list-view img').style.filter = "brightness(0)";
    document.querySelector('.grid-view-two img').style.filter = "brightness(1)";
    document.querySelector('.grid-view-three img').style.filter = "brightness(0)";
}
const GridViewThree = () => {
    document.querySelector('.portfolio-masonry').style.columns = "3";
    document.querySelector('.list-view img').style.filter = "brightness(0)";
    document.querySelector('.grid-view-two img').style.filter = "brightness(0)";
    document.querySelector('.grid-view-three img').style.filter = "brightness(1)";
}

const PortfolioTypeTwo = () => {
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
                    <h2 className='text-center'>PORTFOLIO MASONRY</h2>
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
                        <div onClick={ListView} className='list-view'>
                            <img src='images/icons8-list.png' alt='list-layout' />
                        </div>
                        <div onClick={GridViewTwo} className='grid-view-two'>
                            <img src='images/icons8-grid.png' alt='grid-two-layout' />
                        </div>
                        <div onClick={GridViewThree} className='grid-view-three'>
                            <img src='images/icons8-grid-3.png' alt='grid-three-layout' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-row h-pd-bottom-l'>
                <div className="portfolio-masonry portfolio-type-2">
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

export default PortfolioTypeTwo;