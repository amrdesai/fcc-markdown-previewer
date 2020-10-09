import React from 'react';

const Window = ({ heading, cssClasses, children }) => {
    return (
        <div>
            <h1 className={cssClasses}>{heading}</h1>
            {children}
        </div>
    );
};

export default Window;
