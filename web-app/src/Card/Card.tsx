import React from 'react';

//Type definition for "props"
type Props = {
    className: string,
    children: any
};

const Card = (props: Props) => {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;