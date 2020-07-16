import React from 'react';
import SiteHeader from '../siteHeader/siteHeader.js';
import SiteFooter from '../siteFooter/siteFooter.js';

function PageLayout({
    children
}) {
    return (
        <>
            <SiteHeader />
            <main className="main">
                {children}    
            </main>
            <SiteFooter />
        </>
    );
}

export default PageLayout;