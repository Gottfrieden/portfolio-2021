import React from 'react';
import FadeIn from 'react-fade-in';

import './sidebar.css';

export default function SideBar({ pageName, language, setLanguage }) {
    const choseLanguage = (language) => {
        setLanguage(language)
    }
    
    return (
        <div className='sidebar'>
            <div className='page-name'>
                <FadeIn delay={50}><h2>{pageName === "Selected Work" ? "Work" : "About"}</h2></FadeIn>
            </div>
            {/* <div className='language-switcher'>
                <div onClick={() => choseLanguage('en')} className={language === "Fr" ? 'en' : 'en active'} onClick={() => setLanguage("En")}>
                    En
                </div>
                <div onClick={() => choseLanguage('fr')} className={language === "En" ? 'fr' : 'fr active'} onClick={() => setLanguage("Fr")}>
                    Fr
                </div>
            </div> */}

            <div className='social'>
                <a href='https://www.behance.net/geoffroycrwww' target='_blank' rel="noopener noreferrer"><div className='icon behance' /></a>
                <a href='https://github.com/Gottfrieden' target='_blank' rel="noopener noreferrer"><div className='icon github' /></a>
                <a href='https://www.linkedin.com/in/geoffroy-crabi%C3%A8res/' target='_blank' rel="noopener noreferrer"><div className='icon linkedin' /></a>
                {/* <a href='https://www.behance.net/geoffroycrwww' target='_blank' rel="noopener noreferrer"><span>Behance</span></a>
                <a href='https://github.com/Gottfrieden' target='_blank' rel="noopener noreferrer"><span>Github</span></a>
                <a href='https://www.linkedin.com/in/geoffroy-crabi%C3%A8res/' target='_blank' rel="noopener noreferrer"><span>LinkedIn</span></a> */}
            </div>
        </div>
    )
}