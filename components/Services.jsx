import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"


const pulsateVariants = {
    scale: [1, 1.15, 1],  // start at 100%, scale to 105%, then back to 100%
};

const Services = () => {
    return (
        <section className='services_container'>
            <div className='services_content-container'>
                <div className='services_content-top'>
                    <div className='section_header'>

                        <Image src='/images/flag2.svg' alt='flag2' height={30} width={30} />

                        <h2 className='font-nimbus'>Our Services</h2>
                    </div>
                    <h3 className='font-acumin section_subheading'>Our services are next level. </h3>
                    <p className='font-nimbus section_paragraph'>Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity. Beyond just design, our expertise in SEO and eCommerce ensures your brand remains buoyant amidst industry challenges. With collaboration as our compass, we aim for a partnership that exceeds typical digital boundaries.</p>
                </div>
                <div className='services_card-container'>
                    <div className='services_card'>
                        <div className='section_header-dark'>

                            <Image src='/images/flag1 dark.svg' alt='flag1 dark' height={30} width={30} />
                            <h2 className='font-nimbus'>Design.</h2>
                        </div>
                        <motion.div
                            className='card_image-container'
                            animate={{ scale: pulsateVariants.scale }}
                            transition={{

                                duration: 5,       // duration for one cycle (2s for 100% -> 105% -> 100%)
                                repeat: Infinity,  // repeat animation indefinitely
                                ease: "easeInOut"  // smooth easing
                            }}
                        >
                            <Image className='card_image' src='/images/card1.png' alt='card1' layout='fill' quality={100} />
                        </motion.div>
                        <div className='card_content'>
                            <p className='font-nimbus'>
                                Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity.
                            </p>
                            <button type='button' className='button_orange'>Get Started.</button>
                        </div>
                    </div>
                    <div className='services_card'>
                        <div className='section_header-dark'>
                            <Image src='/images/flag2 dark.svg' alt='flag2 dark' height={30} width={30} />
                            <h2 className='font-nimbus'>Develop.</h2>
                        </div>
                        <motion.div
                            className='card_image-container'
                            animate={{ scale: pulsateVariants.scale }}
                            transition={{
                                delay: .5,
                                duration: 5,       // duration for one cycle (2s for 100% -> 105% -> 100%)
                                repeat: Infinity,  // repeat animation indefinitely
                                ease: "easeInOut"  // smooth easing
                            }}
                        >
                            <Image className='card_image' src='/images/card2.png' alt='card2' layout='fill' quality={100} />
                        </motion.div>
                        <div className='card_content'>
                            <p className='font-nimbus'>
                                Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity.
                            </p>
                            <button type='button' className='button_orange'>Get Started.</button>
                        </div>
                    </div>
                    <div className='services_card'>
                        <div className='section_header-light'>
                            <Image src='/images/flag3 light.svg' alt='flag3 light' height={30} width={30} />
                            <h2 className='font-nimbus'>Support.</h2>
                        </div>
                        <motion.div
                            className='card_image-container'
                            animate={{ scale: pulsateVariants.scale }}
                            transition={{
                                delay: 1,
                                duration: 5,       // duration for one cycle (2s for 100% -> 105% -> 100%)
                                repeat: Infinity,  // repeat animation indefinitely
                                ease: "easeInOut"  // smooth easing
                            }}
                        >
                            <Image className='card_image' src='/images/card3.png' alt='card3' layout='fill' quality={100} />
                        </motion.div>
                        <div className='card_content'>
                            <p className='font-nimbus light-text'>
                                Chart a course with us towards digital excellence. We specialize in tailored web solutions that reflect your brand's unique identity.
                            </p>
                            <button type='button' className='button_orange'>Get Started.</button>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Services