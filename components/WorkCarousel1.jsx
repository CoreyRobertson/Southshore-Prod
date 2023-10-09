import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const WorkCarousel1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // This ensures there's no auto-scrolling.
        arrows: false,
        pauseOnHover: false,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 440, // this means below 768px viewport width
                settings: {
                    slidesToShow: 2,  // show only 1 slide on viewport widths below 768px
                    slidesToScroll: 1,
                }
            },
            // You can add more responsive breakpoints if needed
        ]
    };

    return (
        <section className='work_carousel-container'>
            <Slider {...settings} className='work_slider'>
                <div className='work_carousel-card'>
                    <Image src='/images/phone1.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
                <div className='work_carousel-card'>
                    <Image src='/images/phone2.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
                <div className='work_carousel-card'>
                    <Image src='/images/phone3.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
                <div className='work_carousel-card'>
                    <Image src='/images/phone5 1.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
                <div className='work_carousel-card'>
                    <Image src='/images/phone5 2.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
                <div className='work_carousel-card'>
                    <Image src='/images/phone13 1.png' alt='iphone Image' layout='fill' quality={100} />
                </div>
            </Slider>
        </section>
    )
}

export default WorkCarousel1