import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <section className='cta_container'>
            <Image className='cta_image' src='/images/background5.png' alt='background' layout='fill' quality={100} />
            <h1 className='brand'>SouthShore<span>Digital</span></h1>
            <h3 className='font-acumin'>Ready to chart a course?</h3>
            <p className='font-nimbus'>Don't let your website get lost at sea - Discover how we can enhance your online presence today.</p>
            <button type='button' className='button_orange'>Anchor Up</button>
        </section>
    )
}

export default Cta