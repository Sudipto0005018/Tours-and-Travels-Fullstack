import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Orderitem } from '../components/Orderitem';
import emptyOrderImage from "../assets/empty-order.webp";
import axios from 'axios';

const Order = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)

    const getorder = async () => {
        setLoading(true);
        let token = localStorage.getItem('usertoken');

        let response = await axios.get(`http://localhost:7000/user/getorders`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log("orders list : ", response.data);
        setOrders(response.data.orders);
        setLoading(false);
    }

    useEffect(() => {
        getorder();
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {loading ? (
                <div className='h3'>Loading...</div>
            ) : (
                <>
                    <div className='my-1 mt-5 h2' style={{fontFamily: "serif"}}>Order History :</div>
                    {orders.length > 0 ? (
                        <section className='col-12 col-sm-10 col-md-8'>
                            {orders.map((item, index) => (
                                <Orderitem key={index} item={item} />
                            ))}
                        </section>
                    ) : (
                        <div>
                             <img src={emptyOrderImage} alt="Order empty" style={{ maxWidth: '400px', margin: '20px 0' }} /> 
                             <p className="text-center" style={{ fontSize: '22px', marginBottom: '80px' }}>Order List is <strong style={{color: 'red'}}>Empty!</strong></p>
                        </div>
                       
                        // <div className="text-center h1">Order List is Empty</div>
                    )}
                </>
            )}
        </div>
    );
    
}

export default Order;
