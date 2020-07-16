import React from 'react';

function ColorSwatches({colors}) {
    return (
        <div className="sg-color-swatches">
            {
                colors.map((color, index) => <ColorSwatch key={index} {...color} />)
            }
        </div>
    );
}

function ColorSwatch({name, code}) {
    return (
        <div className="sg-color-swatch">
            <div className="sg-color-swatch__sample" style={{backgroundColor: code}}></div>
            <div className="sg-color-swatch__name">{name}</div>
            <div className="sg-color-swatch__code">{code}</div>
        </div>
    );
}

export default ColorSwatches;