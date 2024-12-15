import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adminauthroute({ children }) {

    let navigate = useNavigate();

    const getadmin = () => {
        let token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }

    useEffect(() => {
        getadmin()
    },[])

    return (
        <div>{children}</div>
    )
}

