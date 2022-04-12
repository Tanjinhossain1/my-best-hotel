import React from 'react';
import './Hotels.css';

const Hotels = ({hotel}) => {
    const {name, img,Price} = hotel;
    return (
        <div className='hotel-container'>
            <h2>hotels</h2>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: ${Price}</h5>
            <button>Checked</button>
        </div>
    );
};

export default Hotels;