import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';

export const Admintours = ({ tour, getours }) => {
    const navigate = useNavigate();

    const edithandler = () => {
        navigate(`/edit/${tour._id}`, { state: { tour } });
    };

    const deletehandler = async () => {
        let token = localStorage.getItem('token');

        const response = await axios.delete(`http://localhost:7000/admin/deletetour/${tour._id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('delete response : ', response);
        getours();
    };

    return (
        <Container className="my-4">
            <Card className="shadow-sm w-100 mx-auto">
                <Card.Body className='bg-dark text-warning'>
                    <Card.Title
                        className="text-center mb-4"
                        style={{ fontFamily: 'serif', fontSize: '24px' }}
                    >
                        {tour?.name}
                    </Card.Title>

                    <Carousel className="mb-4">
                        {tour?.image1 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image1}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 1`}
                                />
                            </Carousel.Item>
                        )}
                        {tour?.image2 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image2}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 2`}
                                />
                            </Carousel.Item>
                        )}
                        {tour?.image1 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image3}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 3`}
                                />
                            </Carousel.Item>
                        )}
                        {tour?.image1 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image4}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 4`}
                                />
                            </Carousel.Item>
                        )}
                        {tour?.image1 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image5}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 5`}
                                />
                            </Carousel.Item>
                        )}
                        {tour?.image1 && (
                            <Carousel.Item>
                                <img
                                    src={tour.image6}
                                    style={{ width: "100%", height: "auto", maxHeight: "550px" }}
                                    className="d-block w-100"
                                    alt={`${tour.name} Image 6`}
                                />
                            </Carousel.Item>
                        )}
                        
                    </Carousel>

                    <Card.Text className="mb-4">
                        <strong>Tagline:</strong> {tour?.tagline}
                    </Card.Text>

                    <Row className="gy-3">
                        <Col xs={12} sm={6}>
                            <strong>Price:</strong> $ {tour?.price}
                        </Col>
                        <Col xs={12} sm={6}>
                            <strong>Start Date:</strong> {tour?.startdate}
                        </Col>
                        <Col xs={12} sm={6}>
                            <strong>Duration:</strong> {tour?.duration} days
                        </Col>
                    </Row>

                    <Card.Text className="mb-4">
                        <strong>Tour Info:</strong>
                        <div>{tour?.info}</div>
                    </Card.Text>

                    <Card.Text>
                        <strong>Tour Plan Overview:</strong>
                        <div>
                            {tour?.tourplan.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </Card.Text>

                    <div className="d-flex flex-column flex-md-row justify-content-between mt-4">
                        <Button
                            className="mb-3 mb-md-0 continue mt-0"
                            onClick={edithandler}
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                fontFamily: 'serif',
                            }}
                        >
                            Edit Details
                        </Button>
                        <Button
                            onClick={deletehandler}
                            className='empty-cart'
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                fontFamily: 'serif',
                            }}
                        >
                            Delete <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};












// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { Button, Card, Row, Col, Container } from 'react-bootstrap';

// export const Admintours = ({ tour, getours }) => {
//     const navigate = useNavigate();

//     const edithandler = () => {
//         navigate(`/edit/${tour._id}`, { state: { tour } });
//     };

//     const deletehandler = async () => {
//         let token = localStorage.getItem('token');

//         const response = await axios.delete(`http://localhost:7000/admin/deletetour/${tour._id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         console.log('delete response : ', response);
//         getours();
//     };

//     return (
//         <Container className="my-4">
//             <Card className="shadow-sm w-100 mx-auto">
//                 <Card.Body className='bg-dark text-warning'>
//                     <Card.Title className="text-center mb-4" style={{ fontFamily: 'serif', fontSize: '24px' }}>
//                         {tour?.name}
//                     </Card.Title>

//                     <Carousel className="mb-4">
//                         {tour?.image1 && (
//                             <Carousel.Item>
//                                 <img src={tour.image1}  style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 1`} />
//                             </Carousel.Item>
//                         )}
//                         {tour?.image2 && (
//                             <Carousel.Item>
//                                 <img src={tour.image2} style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 2`} />
//                             </Carousel.Item>
//                         )}
//                         {tour?.image3 && (
//                             <Carousel.Item>
//                                 <img src={tour.image3} style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 3`} />
//                             </Carousel.Item>
//                         )}
//                         {tour?.image4 && (
//                             <Carousel.Item>
//                                 <img src={tour.image4} style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 4`} />
//                             </Carousel.Item>
//                         )}
//                         {tour?.image5 && (
//                             <Carousel.Item>
//                                 <img src={tour.image5} style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 5`} />
//                             </Carousel.Item>
//                         )}
//                         {tour?.image6 && (
//                             <Carousel.Item>
//                                 <img src={tour.image6} style={{width:"100%", height:"600px"}} className="d-block w-100" alt={`${tour.name} Image 6`} />
//                             </Carousel.Item>
//                         )}
//                     </Carousel>

//                     <Card.Text className="mb-4">
//                         <strong>Tagline:</strong> {tour?.tagline}
//                     </Card.Text>

//                     <Row>
//                         <Col xs={12} md={6} className="mb-3">
//                             <strong>Price:</strong> $ {tour?.price}
//                         </Col>
//                         <Col xs={12} md={6} className="mb-3">
//                             <strong>Start Date:</strong> {tour?.startdate}
//                         </Col>
//                         <Col xs={12} md={6} className="mb-3">
//                             <strong>Duration:</strong> {tour?.duration} days
//                         </Col>
//                     </Row>

//                     <Card.Text className="mb-4">
//                         <strong>Tour Info:</strong>
//                         <div>{tour?.info}</div>
//                     </Card.Text>

//                     <Card.Text>
//                         <strong>Tour Plan Overview:</strong>
//                         <div>
//                             {tour?.tourplan.split('\n').map((line, index) => (
//                                 <p key={index}>{line}</p>
//                             ))}
//                         </div>
//                     </Card.Text>

//                     <div className="d-flex justify-content-between mt-4">
//                         <Button className='continue mt-0' onClick={edithandler} style={{width: "300px", fontFamily: 'serif' }}>
//                             Edit Details
//                         </Button>
//                         <Button className='empty-cart' onClick={deletehandler} style={{width: "300px", fontFamily: 'serif' }}>
//                             Delete <FontAwesomeIcon icon={faTrash} />
//                         </Button>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };
