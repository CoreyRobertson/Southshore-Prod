import Image from 'next/image'
import React from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Process = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // This ensures there's no auto-scrolling.
        arrows: false,
    };

    return (
        <section className='process_container'>
            <div className='process_content-container'>
                <div className='services_content-top'>
                    <div className='section_header'>

                        <Image src='/images/flag3.svg' alt='flag3' height={30} width={30} />

                        <h2 className='font-nimbus'>Our Services</h2>
                    </div>
                    <h3 className='font-acumin section_subheading'>Our services are next level. </h3>
                    <p className='font-nimbus section_paragraph'>Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity. Beyond just design, our expertise in SEO and eCommerce ensures your brand remains buoyant amidst industry challenges. With collaboration as our compass, we aim for a partnership that exceeds typical digital boundaries.</p>
                </div>
                <div className='process_card-container'>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>01</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag1 dark.svg' alt='flag1' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>02</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag2 dark.svg' alt='flag2' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>03</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag3 dark.svg' alt='flag3' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>04</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag4 dark.svg' alt='flag4' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>05</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag5 dark.svg' alt='flag5' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card-last'>
                        <Image className='last_card-image' src='/images/background10.png' alt='background' layout='fill' />
                        <BsFillArrowUpRightCircleFill className='card_arrow' />
                        <h1 className='brand'>SouthShore<span>Digital</span></h1>
                    </div>
                </div>
                <Slider {...settings} className='slider'>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>01</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag1 dark.svg' alt='flag1' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>02</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag2 dark.svg' alt='flag2' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>03</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag3 dark.svg' alt='flag3' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>04</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag4 dark.svg' alt='flag4' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card'>
                        <p className='card_number font-acumin'>05</p>
                        <div className='section_header-dark'>

                            <Image src='/images/flag5 dark.svg' alt='flag5' height={30} width={30} />

                            <h2 className='font-nimbus'>Development</h2>
                        </div>
                        <p className='font-nimbus'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='process_card-last'>
                        <Image className='last_card-image' src='/images/background10.png' alt='background' layout='fill' />
                        <BsFillArrowUpRightCircleFill className='card_arrow' />
                        <h1 className='brand'>SouthShore<span>Digital</span></h1>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Process