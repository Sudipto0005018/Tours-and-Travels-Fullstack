import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Authroute = ({ children }) => {

    const navigate = useNavigate();

    let islogin = localStorage.getItem('usertoken');

    useEffect(()=>{
        if (!islogin) {
            navigate("/login")
        }    
    },[])

    return (
        <div>{children}</div>
    )
}



