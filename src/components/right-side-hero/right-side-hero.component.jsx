import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import Banner1 from '../../assets/banners/right-side-hero/1.jpg'
import Banner2 from '../../assets/banners/right-side-hero/2.jpg'
import Banner3 from '../../assets/banners/right-side-hero/3.jpg'

import {Layout, Slide} from './right-side-hero.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const RightSideHero = () => {
    return <Layout> 
        <Carousel showArrows={0} showThumbs={0} showStatus={0} infiniteLoop={1} autoPlay={1} interval={5000} showIndicators={0}>
            <Slide>
                <img
                    src={Banner1}
                    width="45%"
                    height="100%"
                    alt="1.jpg"
                />
            </Slide>
            <Slide>
                <img
                    src={Banner2}
                    width="45%"
                    height="100%"
                    alt="1.jpg"
                />
            </Slide>
            <Slide>
                <img
                    src={Banner3}
                    width="45%"
                    height="100%"
                    alt="1.jpg"
                />
            </Slide>     
    </Carousel>
</Layout>
}

export default RightSideHero;