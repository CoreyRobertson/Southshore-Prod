import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className='header_container'>
            <div className='header_flag-container'>
                <Image src='/images/logoflaglight.svg' alt='FlagLight' layout='fill' />
            </div>
            <div>
                <Image className='header_image' src='/images/background13.png' layout='fill' quality={100} />
                <h1 className='brand'>SouthShore<span>Digital</span></h1>
                <h2 className='font-acumin'>Time for a digital sea-change?</h2>
                <p className='font-nimbus'>Captivating Design, Cutting-edge Web Development and SEO Mastery: Unlock Your Digital Potential </p>
            </div>
        </header>
    )
}

export default Header