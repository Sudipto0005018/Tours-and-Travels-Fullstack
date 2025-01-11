import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Cartitem = ({ item, handleItemDelete, handleTotalCost }) => {
    const navigate = useNavigate();

    const [person, setPerson] = useState(item.person);
    const [total, setTotal] = useState(item.person * item.price);

    console.log('cartitem : ', item);

    async function handleBuy() {
        let token = localStorage.getItem('usertoken')

        const response = await axios.delete('http://localhost:7000/user/deletecart', {
            data: { cartid: item._id },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log('cartitem delete response : ', response);
        navigate('/booking', { state: { item } });
    }

    function increment() {
        const newPerson = person + 1;
        setPerson(newPerson);
    }

    function decrement() {
        if (person > 1) {
            const newPerson = person - 1;
            setPerson(newPerson);
        }
    }

    function personhandler(event) {
        const newPerson = parseInt(event.target.value, 10);

        if (!isNaN(newPerson)) {
            setPerson(newPerson);
        }
    }

    const updatecart = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.put('http://localhost:7000/user/updatecart', {
            person, cartid: item._id, total
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
        console.log('cart update : ', response.data.cart);
    }

    async function cancelhandler() {
        let token = localStorage.getItem('usertoken');

        const response = await axios.delete('http://localhost:7000/user/deletecart', {
            data: {
                cartid: item._id
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        toast.error("Tour removed from Cart!");
        console.log('delete response : ', response);
        handleItemDelete()
    }

    useEffect(() => {
        setTotal(person * item.price);
    }, [person])

    useEffect(() => {
        updatecart();
        handleTotalCost();
    }, [total])

    return (
        <div className="card mb-4">
          <div className="card-body p-4 row">
            <div className="col-12 col-sm-6">
              <div className="col-12">
                <img src={item.image} className="img-fluid mb-3" alt="Generic placeholder image"  style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-12 d-flex flex-column justify-content-center mb-1">
                <p className="small text-muted cart-font">Name</p>
                <p className="lead fw-normal">{item.name}</p>
              </div>
              <div className="col-12 d-flex flex-column justify-content-center mb-1">
                <p className="small text-muted cart-font">Start Date</p>
                <p className="lead fw-normal">{item.startdate}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="col-12 d-flex flex-column justify-content-center mb-3">
                <p className="small text-muted cart-font">Person</p>
                <div className="input-group col-12">
                  <button className="text-white person-button bg-dark col-12 col-md-3 btn btn-info btn-sm" onClick={increment}><b>+</b></button>
                  <input type="number" className="text-center person-input-button col-12 col-md-6" value={person} onChange={personhandler} />
                  <button className="text-white person-button bg-dark col-12 col-md-3 btn btn-info btn-sm" onClick={decrement}><b>-</b></button>
                </div>
              </div>
              <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Price</p>
                <p className="lead fw-normal mb-0">${item.price}</p>
              </div>
              <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Total</p>
                <p className="lead fw-normal mb-0">${total}</p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="checkout btn btn-lg" onClick={handleBuy}>
              Checkout Now
            </button>
            <button type="button" className="btn btn-special btn-lg" style={{fontWeight: "bolder"}} onClick={cancelhandler}>
              Cancel
            </button>
          </div>
        </div>
      );
      
};

export default Cartitem;