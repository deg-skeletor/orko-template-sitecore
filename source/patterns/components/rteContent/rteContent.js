import React from 'react';
import classnames from 'classnames';

const defaultContent = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';

function RteContent({
    cssClass,
    children,
    content=defaultContent
}) {
    const cssClasses = classnames('rte-content', cssClass);
   
    return (
        <div 
            className={cssClasses} 
            dangerouslySetInnerHTML={children ? null : {__html: content}}>
            {children ? children : null}
        </div>
    );
}

export default RteContent;