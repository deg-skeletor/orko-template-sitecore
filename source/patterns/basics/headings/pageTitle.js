import React from 'react';

function PageTitle({children='Page Title'}) {
    return <h1 className="page-title">{children}</h1>;
}

export default PageTitle;