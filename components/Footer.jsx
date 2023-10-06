import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiFacebook, CiInstagram } from 'react-icons/ci';

const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (

        <footer>
            <div className='footer_left-container'>
                <h1 className='brand'>SouthShore<span>Digital</span></h1>
                <h2 className='font-acumin'>Let's Work Together.</h2>
                <button type='button' className='button_orange'>Get Started.</button>
                <p className='font-nimbus'>&copy; {currentYear} Southshore Digital Pty Ltd. All Rights Reserved.</p>



            </div>
            <div className='footer_right-container'>
                <div className='footer_links-container'>
                    <Link className='font-acumin' href='/'>Privacy Policy</Link>
                    <Link className='font-acumin' href='/'>Terms & Conditions</Link>
                    <div>
                        <CiFacebook className='overlay_icon' alt='facebook' />

                        <CiInstagram className='overlay_icon' alt='instagram' />
                    </div>
                </div>
                <hr />
                <p className='font-nimbus'>Give us a call <span className='font-nimbus'>(+61) 432 638 637</span></p>
                <button className='font-acumin' type='button'>Contact Us.</button>
            </div>
        </footer>
    )
}

export default Footer