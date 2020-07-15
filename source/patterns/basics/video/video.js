import React from 'react';
import classnames from 'classnames';

function Video({
    videoId='Q5NUmLDentM',
    cssClass
}) {
    const cssClasses = classnames('video-wrap', cssClass);

    const src = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className={cssClasses}>
            <iframe 
                className="video" 
                src={src}
                frameborder="0" 
                allowfullscreen></iframe>
        </div>
    );
}

export default Video;