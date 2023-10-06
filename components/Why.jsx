import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Why = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const computeDays = (startDate) => {
        const now = new Date();
        const start = new Date(startDate);
        const difference = now - start;
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    };

    const days730 = computeDays('2021-02-22'); // replace with your start date
    const days2190 = computeDays('2017-05-15'); // replace with your start date


    return (
        <section className='why_container' ref={ref}>
            <div className='why_content-container'>
                <div className='section_header'>
                    <Image src='/images/flag1.svg' alt='flag1' height={30} width={30} />
                    <h2 className='font-nimbus'>Why partner with us?</h2>
                </div>
                <h3 className='font-acumin section_subheading'>Our services are next level. </h3>
                <p className='font-nimbus section_paragraph'>Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity. Beyond just design, our expertise in SEO and eCommerce ensures your brand remains buoyant amidst industry challenges. With collaboration as our compass, we aim for a partnership that exceeds typical digital boundaries.</p>
                <button className='button_orange'>Partner up?</button>

                <div className='number_container'>
                    <div className='number_card'>
                        <p className='numbergrey font-acumin'>
                            {inView ? (
                                <CountUp start={0} end={days730} duration={2.5}>
                                    {({ countUpRef }) => (
                                        <>
                                            <span className='numbergrey' ref={countUpRef} />
                                            <span>Days</span>
                                        </>
                                    )}
                                </CountUp>
                            ) : (
                                `${days730} Days`
                            )}
                        </p>
                        <p className='grey-text font-nimbus'>
                            UI/UX Design, React & NextJS Development
                        </p>
                    </div>
                    <div className='number_card'>
                        <p className='numberblue font-acumin'>
                            {inView ? (
                                <CountUp start={0} end={days2190} duration={2.5}>
                                    {({ countUpRef }) => (
                                        <>
                                            <span className='numberblue' ref={countUpRef} />
                                            <span>Days</span>
                                        </>
                                    )}
                                </CountUp>
                            ) : (
                                `${days2190} Days`
                            )}
                        </p>
                        <p className='blue-text font-nimbus'>
                            Software Development, Data Analytics & Project Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why