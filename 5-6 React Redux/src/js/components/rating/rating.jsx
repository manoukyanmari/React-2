import React from 'react';
import '../../../style.scss';

const Rating = (props) => {
    return (
        <div className='rate'>
            <h3>{props.children}</h3>
        </div>
    )
};

export default Rating;
