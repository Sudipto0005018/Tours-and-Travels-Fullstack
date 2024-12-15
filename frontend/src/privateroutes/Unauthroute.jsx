import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Unauthroute = ({ children }) => {

    const navigate = useNavigate();

    let islogin = localStorage.getItem('usertoken');

    useEffect(()=>{
        if (islogin)
            {
                console.log(" unauth if ");
                navigate("/dashboard");
            }
    },[])

    return (
        <div> {children} </div>
    )
}




