import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [item, setItem] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function cancelhandler() {
        navigate("/tours");
    }

    async function handleBuy() {
        if (name && email) {
            let token = localStorage.getItem('usertoken');
            console.log(item._id);

            const response = await axios.post('http://localhost:7000/user/tourorder', {
                username: name, email, tourname: item.name, person: item.person, price: item.price,
                total: item.total, tour: item._id, startdate: item.startdate, image: item.image
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log('order : ', response.data);
            navigate("/order");
        }
    }

    const getuser = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.get('http://localhost:7000/user/getuser', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        console.log('user : ', response.data);

        setName(response.data.user.name);
        setEmail(response.data.user.email);
    };

    useEffect(() => {
        setItem(location.state?.item);
        getuser();
    }, []);

    return (
        <Card className="mb-4" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', marginTop: '60px' }}>
            <Row className="g-0">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Card.Img 
                        variant="top" 
                        src={item?.image} 
                        alt="Tour" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </Col>

                <Col md={6} className="p-4">
                    <Card.Body>
                        <Card.Title className="h4 mb-4 text-center" style={{ fontFamily: "serif" }}>Booking Details:</Card.Title>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="small text-muted">Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="small text-muted">Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Col xs={6}>
                                    <p className="small text-muted mb-1">Tour Name</p>
                                    <p className="fw-normal">{item?.name}</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="small text-muted mb-1">Person</p>
                                    <p className="fw-normal">{item?.person}</p>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col xs={6}>
                                    <p className="small text-muted mb-1">Price</p>
                                    <p className="fw-normal">${item?.price}</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="small text-muted mb-1">Total</p>
                                    <p className="fw-normal">${item?.total}</p>
                                </Col>
                            </Row>

                            <div className="d-flex justify-content-between">
                                <Button className='buy btn btn-primary btn-lg me-2 mb-2'  onClick={handleBuy}>
                                    Buy
                                </Button>
                                <Button className='empty-cart btn btn-primary btn-lg me-2 mb-2'  onClick={cancelhandler}>
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};
