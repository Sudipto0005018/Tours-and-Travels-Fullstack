import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
import { GoChevronLeft } from "react-icons/go";
import emptyCartImage from "../assets/empty-cart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {toast} from "react-toastify";

export const Cart = () => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleTotal();
    }, [cart]);

    useEffect(() => {
        console.log('total updated to : ', total);
    }, [total]);

    const handleTotal = () => {
        if (cart && cart.length > 0) {
            let sum = 0;
            for (let item of cart) {
                let price = item.price * item.person;
                sum += price;
            }
            console.log('sum : ', sum);
            setTotal(sum);
        }
    };

    const handleClearCart = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.delete('http://localhost:7000/user/deleteallcart', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        toast.error("Tour removed from Cart!");
        console.log("clearcart response : ", response);
        getcart();
    };

    const handleItemDelete = () => {
        getcart();
    };

    const handleTotalCost = () => {
        getcart();
    };

    const handleContinue = () => {
        navigate('/tours');
    };

    const getcart = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.get(`http://localhost:7000/user/getcart`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        console.log("response : ", response.data);

        setCart(response.data.cart);
        handleTotal();

        setLoading(false);
    };

    useEffect(() => {
        getcart();
    }, []);

    return (
        <div className="my-5 d-flex flex-column flex-md-row justify-content-center">
            {loading ? (
                <div className='h3'>Loading...</div>
            ) : (
                cart && cart.length > 0 ? (
                    <>
                        <section className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                            {cart.map((item) => (
                                <Cartitem 
                                    key={item._id} 
                                    item={item} 
                                    handleItemDelete={handleItemDelete} 
                                    handleTotalCost={handleTotalCost} 
                                />
                            ))}
                        </section>
    
                        <section className="card mb-4 col-md-3 summary-cart">
                            {/* <div className='card-title h2'>Your Cart:</div> */}
                            <div className='h2' style={{fontFamily: "serif"}}>Your Cart:</div>
                            <div className='card-body py-1'>
                                <p className="font-bold cart-font">Total Items: {cart.length}</p>
                                <p className="font-bold cart-font">Total Amount: ${total}</p>
                            </div>
                            {/* <div className="d-flex justify-content-between g-5"> */}
                            <div className="button-container">
                                <button 
                                    type="button" 
                                    className="empty-cart btn-sm"
                                    onClick={handleClearCart}
                                >
                                    Empty Cart
                                    
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button 
                                    type="button" 
                                    className="continue btn-sm"
                                    onClick={handleContinue}
                                >
                                    Continue
                                </button>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="text-center">
                        <h1 style={{ fontFamily: 'serif' }}>Your Cart :</h1>
                        {cart.length === 0 ? (
                            <div className="empty-cart-message">
                                <img 
                                    src={emptyCartImage} 
                                    alt="Empty Cart" 
                                    style={{ maxWidth: '500px', margin: '20px 0' }} 
                                />
                                <p style={{ fontSize: '22px' }}>Your cart is <strong style={{color: 'red'}}>Empty!</strong></p>
                                <button 
                                    // className="back-to-tours-button btn btn-secondary btn-sm" 
                                    className="back-to-tours-button" 
                                    onClick={() => navigate("/tours")}
                                    // style={{fontSize: "25px"}}
                                >
                                    <GoChevronLeft /> Back to Tours
                                </button>
                            </div>
                        ) : ''}
                    </div>
                )
            )}
        </div>
    );
}

export default Cart;
