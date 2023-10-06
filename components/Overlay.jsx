import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';


const mainOverlayVariants = {
    hidden: {
        y: '100%',
    },
    visible: {
        y: '0%',
        transition: {
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1], // Bezier curve for easeOutBack
            duration: 0.7 // adjust as required
        }
    },
    exit: {
        y: '100%',
        transition: {
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1], // Bezier curve for easeOutBack
            duration: 0.7 // adjust as required
        }
    }
};

const stripOverlayVariants = {
    hidden: {
        y: '-100%',
    },
    visible: {
        y: '0%',
        transition: {
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1], // Bezier curve for easeOutBack
            duration: 0.7 // adjust as required
        }
    },
    exit: {
        y: '-100%',
        transition: {
            delay: 0.3,
            ease: [0.23, 1, 0.32, 1], // Bezier curve for easeOutBack
            duration: 0.7 // adjust as required
        }
    }
};

const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1 } }, // delay the appearance a bit more than the overlay
    exit: { opacity: 0 }
};

const Overlay = ({ setOverlayOpen }) => {
    const [linksAnimationState, setLinksAnimationState] = useState('hidden');

    useEffect(() => {
        // Once the overlay has finished its entering transition, fade in the links.
        if (linksAnimationState === 'hidden') {
            setLinksAnimationState('visible');
        }
    }, [linksAnimationState]);

    // Handle the link click
    const handleLinkClick = () => {
        setLinksAnimationState('exit');
        setTimeout(() => setOverlayOpen(false), 700); // Delay closing the overlay to let the links fade out
    };



    return (
        <motion.div className="overlay">
            {/* Main overlay that slides in from bottom */}
            <motion.div
                variants={mainOverlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mainOverlay">
                <motion.div variants={linkVariants}
                    initial="hidden"
                    animate={linksAnimationState}
                    exit="exit">
                    <Image className='overlay_flag' src='/images/logoflaglight.svg' alt='FlagLight' height={50} width={50} />
                </motion.div>
                <ul>
                    <Link href='/' className='overlay_link'>
                        <motion.li className='font-acumin'
                            onClick={handleLinkClick}
                            variants={linkVariants}
                            initial="hidden"
                            animate={linksAnimationState}
                            exit="exit">Why Us?</motion.li>
                    </Link>
                    <Link href='/' className='overlay_link'>
                        <motion.li className='font-acumin'
                            onClick={handleLinkClick}
                            variants={linkVariants}
                            initial="hidden"
                            animate={linksAnimationState}
                            exit="exit">Our Solutions.</motion.li>
                    </Link>
                    <Link href='/' className='overlay_link'>
                        <motion.li className='font-acumin'
                            onClick={handleLinkClick}
                            variants={linkVariants}
                            initial="hidden"
                            animate={linksAnimationState}
                            exit="exit">Our Work.</motion.li>
                    </Link>
                    <Link href='/' className='overlay_link'>
                        <motion.li className='font-acumin'
                            onClick={handleLinkClick}
                            variants={linkVariants}
                            initial="hidden"
                            animate={linksAnimationState}
                            exit="exit">Our Process.</motion.li>
                    </Link>
                    <Link href='/' className='overlay_link'>
                        <motion.li className='font-acumin'
                            onClick={handleLinkClick}
                            variants={linkVariants}
                            initial="hidden"
                            animate={linksAnimationState}
                            exit="exit">Contact Us.</motion.li>
                    </Link>
                </ul>
            </motion.div>

            <motion.div
                variants={stripOverlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="stripOverlay">
                <motion.div className='overlay_legal-links' variants={linkVariants}
                    initial="hidden"
                    animate={linksAnimationState}
                    exit="exit">
                    <ul>
                        <Link href='/' className='legal_link'>
                            <li className='font-nimbus'>
                                Privacy Policy
                            </li>
                        </Link>
                        <Link href='/' className='legal_link'>
                            <li className='font-nimbus'>
                                Terms & Conditions
                            </li>
                        </Link>
                    </ul>
                </motion.div>
                <motion.div className='overlay_icons' variants={linkVariants}
                    initial="hidden"
                    animate={linksAnimationState}
                    exit="exit">
                    <div className='overlay_icon-container'>
                        <CiFacebook className='overlay_icon' alt='facebook' />
                    </div>
                    <div className='overlay_icon-container'>
                        <CiInstagram className='overlay_icon' alt='instagram' />
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Overlay;
