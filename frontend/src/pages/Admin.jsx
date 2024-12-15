import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Admintours } from '../components/Admintours';

export const Admin = () => {

    const navigate = useNavigate();
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false)

    const getours = async () => {
        setLoading(true);
        let token = localStorage.getItem('token');

        let response = await axios.get('http://localhost:7000/admin/getalltour', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        console.log('response : ', response.data.tour);
        setTours(response.data.tour)
        setLoading(false);
    }

    useEffect(() => {
        getours();
    }, []);

    return (
        <div className='super-sub'>
            {loading ? (
                <div className='h3'>Loading...</div>
            ) : (
                <>
                    <div className="title" style={{fontFamily: "serif"}}>ALL TOURS:</div>
                    <div className='d-flex flex-wrap justify-content-center cards container mb-4'>
                        {tours && tours.length > 0 ? (
                            tours.map((tour) => (
                                <Admintours tour={tour} key={tour.id} getours={getours} />
                            ))
                        ) : (
                            <div>Empty No tours</div>
                        )}
                    </div>
                </>
            )}
        </div>
    )  
}
