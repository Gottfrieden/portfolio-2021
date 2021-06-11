import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';

import './pages.css';
import './about.css';

import ideasworxLogo from '../images/ideasworx-white.svg';
import c2Logo from '../images/c2-logo.svg';
import umbrellaHealthLogo from '../images/umbrella-white.svg';
import alexFitnessLogo from '../images/alex-fitness-white.svg'
import appartAmbianceLogo from '../images/appart-ambiance-logo.png';

export default function About({ setActivePage }) {
    useEffect(() => {
        setActivePage("About");
    }, [])

    return (
        <div className='body-container about-page'>
            <div className='intro'>
                <FadeIn delay={50}><h2 className='light'>Get to know more about me</h2></FadeIn>
                <FadeIn delay={100}><p>I’m a <span className='highlighted'>Digital Project Manager / Web Designer / Web Developer</span> based in London, UK. <br/>I help awesome companies to reach their audience and improve their online presence.</p></FadeIn>
            </div>

            <div className='two-columns'>
                <div className='one-third'>
                    <FadeIn delay={50}><h3>Skills</h3></FadeIn>
                    <ul className='white'>
                        <FadeIn delay={100}><li>Web Design</li></FadeIn>
                        <FadeIn delay={150}><li>HTML / CSS / JS / React</li></FadeIn>
                        <FadeIn delay={200}><li>SEO</li></FadeIn>
                        <FadeIn delay={250}><li>Branding</li></FadeIn>
                        <FadeIn delay={300}><li>Emailing</li></FadeIn>
                        <FadeIn delay={350}><li>UX / UI</li></FadeIn>
                        <FadeIn delay={400}><li>Analytics</li></FadeIn>
                    </ul>
                </div>
                <div className='two-third'>
                    <FadeIn delay={50}><h3>Clients</h3></FadeIn>
                    <div className='flex'>
                        <FadeIn delay={100}><a href='https://www.umbrellahealth.com.au' target='_blank' rel='noopener noreferrer'><div className='logo-container' style={{ backgroundImage: `url(${umbrellaHealthLogo})`}} /></a></FadeIn>
                        <FadeIn delay={250}><a href='https://www.ideasworx.com' target='_blank' rel='noopener noreferrer'><div className='logo-container' style={{ backgroundImage: `url(${ideasworxLogo})`}} /></a></FadeIn>
                        <FadeIn delay={300}><a href='https://www.appart-ambiance.com' target='_blank' rel='noopener noreferrer'><div className='logo-container' style={{ backgroundImage: `url(${appartAmbianceLogo})`}} /></a></FadeIn>
                        <FadeIn delay={350}><a href='https://www.alexfitness.ru' target='_blank' rel='noopener noreferrer'><div className='logo-container' style={{ backgroundImage: `url(${alexFitnessLogo})`, width:'80px', minWidth: '80px' }} /></a></FadeIn>
                        <FadeIn delay={400}><a href='https://www.c2capital.com' target='_blank' rel='noopener noreferrer'><div className='logo-container square' style={{ backgroundImage: `url(${c2Logo})`}} /></a></FadeIn>
                    </div>
                </div>
            </div>

            <FadeIn delay={50}><h3>Follow me</h3></FadeIn>
            <ul> 
                <FadeIn delay={100}>
                    <li className='social-links'>
                        <a href="mailto:geoffroy.crabieres@gmail.com">Email</a>
                    </li>
                </FadeIn>
                <FadeIn delay={150}>
                    <li className='social-links'>
                        <a href='https://www.behance.net/geoffroycrwww' target='_blank' rel='noopener noreferrer'>Behance</a>
                    </li>
                </FadeIn>
                <FadeIn delay={200}>
                    <li className='social-links'>
                        <a href='https://github.com/Gottfrieden' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </li>
                </FadeIn>
                <FadeIn delay={250}>
                    <li className='social-links'>
                        <a href='https://www.linkedin.com/in/geoffroy-crabi%C3%A8res/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    </li>
                </FadeIn>
            </ul>
        </div>
    )
}