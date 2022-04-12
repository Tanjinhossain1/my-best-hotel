import React, { useEffect, useState } from 'react';
import Hotels from './Hotels/Hotels';
import './Home.css';

const Home = () => {
    const [hotels, setHotel] = useState([]);
    useEffect(() => {
        fetch('hotels.json')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [])

    return (
        <div className='home-container'>
            <h1>The Best Hotels</h1>
            <div className='hotels-container'>
                {
                    hotels.map(hotel => <Hotels hotel={hotel} key={hotel.id}></Hotels>)
                }
            </div>

        </div>
    );
};

export default Home;