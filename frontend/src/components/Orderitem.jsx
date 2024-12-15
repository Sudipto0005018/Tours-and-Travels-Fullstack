import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const Orderitem = ({ item }) => {
    return (
        <Card className="mb-4" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <Row className="g-0">
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Card.Img 
                        variant="top" 
                        src={item.image} 
                        alt="Tour" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </Col>

                <Col md={8} className="p-3">
                    <Card.Body>
                        <Card.Title className="h4 mb-3" style={{ fontWeight: 'bold' }}>{item.tourname}</Card.Title>

                        <Row className="mb-2">
                            <Col xs={6}>
                                <p className="small text-muted mb-1">Name</p>
                                <p className="fw-normal">{item.username}</p>
                            </Col>
                            <Col xs={6}>
                                <p className="small text-muted mb-1">Email</p>
                                <p className="fw-normal">{item.email}</p>
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col xs={6}>
                                <p className="small text-muted mb-1">Person</p>
                                <p className="fw-normal">{item.person}</p>
                            </Col>
                            <Col xs={6}>
                                <p className="small text-muted mb-1">Price</p>
                                <p className="fw-normal">${item.price}</p>
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col xs={6}>
                                <p className="small text-muted mb-1">Total</p>
                                <p className="fw-normal">${item.total}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};










// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';

// export const Orderitem = ({ item }) => {
//     return (
//         <Card className="mb-4" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
//             <Row className="g-0">
//                 <Col md={4} className="d-flex justify-content-center align-items-center">
//                     <Card.Img 
//                         variant="top" 
//                         src={item.image} 
//                         alt="Tour" 
//                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                     />
//                 </Col>

//                 <Col md={8} className="p-3">
//                     <Card.Body style={{ paddingRight: '1rem' }}>
//                         <Card.Title className="h4 mb-3" style={{ fontWeight: 'bold' }}>{item.tourname}</Card.Title>

//                         <Row className="mb-2">
//                             <Col xs={6}>
//                                 <p className="small text-muted mb-1">Name</p>
//                                 <p className="fw-normal">{item.username}</p>
//                             </Col>
//                             <Col xs={6}>
//                                 <p className="small text-muted mb-1">Email</p>
//                                 <p className="fw-normal">{item.email}</p>
//                             </Col>
//                         </Row>

//                         <Row className="mb-2">
//                             <Col xs={6}>
//                                 <p className="small text-muted mb-1">Person</p>
//                                 <p className="fw-normal">{item.person}</p>
//                             </Col>
//                             <Col xs={6}>
//                                 <p className="small text-muted mb-1">Price</p>
//                                 <p className="fw-normal">${item.price}</p>
//                             </Col>
//                         </Row>

//                         <Row className="mb-2">
//                             <Col xs={6}>
//                                 <p className="small text-muted mb-1">Total</p>
//                                 <p className="fw-normal">${item.total}</p>
//                             </Col>
//                         </Row>
//                     </Card.Body>
//                 </Col>
//             </Row>
//         </Card>
//     );
// };
