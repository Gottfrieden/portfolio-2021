import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import '../../utils/i18n';
import { Trans } from 'react-i18next';

import './header.css';
import logo from '../../images/logo-empty.png';

export default withTranslation()(function Header({ pageName, setPageName }) {
    const { t } = useTranslation();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const openMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    return (
        <Suspense fallback="loading">
            <header>
                <Link to='/'>
                    <div className='logo' style={{ backgroundImage: `url(${logo})` }}/>
                </Link>
                    <nav className='desktop-nav'>
                        <ul>
                            <Link to="/" className='desktop-nav'>
                                <li onClick={() => setPageName("Selected Work")} className={pageName === "Selected Work" ? "active" : ""}>
                                    {t('Selected Work')}
                                </li>
                            </Link>
                            <Link to="/about" className='desktop-nav'>
                                <li onClick={() => setPageName("About")} className={pageName === "About" ? "active" : ""}>
                                    <Trans>About</Trans>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <a href='mailto:geoffroy.crabieres@gmail.com' className='hire-me'>
                        <div>{t('Hire me')}</div>
                    </a> 
                    <div className='mobile-navigation'>
                        <div className={isMobileNavOpen ? 'burger-menu active' : 'burger-menu'} onClick={openMobileNav}>
                            <span className={isMobileNavOpen ? 'close' : ''}/>
                            <span className={isMobileNavOpen ? 'close' : ''}/>
                            <span className={isMobileNavOpen ? 'close' : ''}/>
                        </div>
                    </div>               
                <nav className={isMobileNavOpen ? 'mobile-nav active' : 'mobile-nav'}>
                    <ul>
                        <Link to="/" onClick={openMobileNav}>
                            <li onClick={() => setPageName("Selected Work")} className={pageName === "Selected Work" ? "active" : ""}>
                                {t('Selected Work')}
                            </li>
                        </Link>
                        <Link to="/about" onClick={openMobileNav}>
                            <li onClick={() => setPageName("About")} className={pageName === "About" ? "active" : ""}>
                                <Trans>About</Trans>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </Suspense>
    )
})