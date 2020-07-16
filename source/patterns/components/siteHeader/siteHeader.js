import React from 'react';
import Logo from '../../basics/logos/logo.js';
import PrimaryNav from '../primaryNav/primaryNav.js';

function SiteHeader() {
    return (
        <header className="site-header" role="banner">
            <Logo />
            <PrimaryNav />
        </header>
    );
}

export default SiteHeader;