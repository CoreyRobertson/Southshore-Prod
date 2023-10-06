import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

import Overlay from './Overlay'; // Make sure to adjust the path

const Navbar = () => {
    const [overlayOpen, setOverlayOpen] = useState(false);

    return (
        <>
            <nav>
                <button
                    type='button'
                    className={`nav_button font-nimbus ${overlayOpen ? 'button-open' : ''}`}
                >
                    Set Sail Together.
                </button>
                <div
                    className='burger_container'
                    aria-label="Toggle Menu"
                    onClick={() => setOverlayOpen(!overlayOpen)}
                >
                    <AnimatePresence mode='wait'>
                        {overlayOpen ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="closeIcon"
                            >
                                <AiOutlineClose className='burger' />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="menuIcon"
                            >
                                <HiOutlineMenuAlt3 className='burger' />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            <AnimatePresence>
                {overlayOpen && <Overlay setOverlayOpen={setOverlayOpen} />}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
