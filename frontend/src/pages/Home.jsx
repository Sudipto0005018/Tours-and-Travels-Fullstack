import React from "react";
import { useNavigate } from "react-router-dom";
import germany2 from "../assets/germany2.jpeg";

export const Home = () => {
  let navigate = useNavigate();

  function clickHandler() {
    navigate("/tours");
  }

  return (
    <div className="bg-dark position-relative home-container">
      <img src={germany2} className="w-100 h-100" />
      <button
        className="bg-danger explore-button position-absolute home-button"
        style={{ color: "#FFF125" }}
        onClick={clickHandler}
      >
        Explore Tours
      </button>
    </div>
  );
};

{
  /* <img src='https://img.freepik.com/free-photo/neuschwanstein-castle-germany_395237-205.jpg?t=st=1734056745~exp=1734060345~hmac=204e901494c6c4cd8a852dd442b07d739a08eb6d5c41cc63ac8e91d11eeadeb6&w=996' className='w-100 h-100' /> */
}

// import React from "react";
// import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaMountain, FaUmbrellaBeach, FaLandmark, FaBus } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
// import germany from "../assets/germany.jpeg";
// import london from "../assets/London.webp";
// import relax from "../assets/relax and unwind.jpeg";
// import home1 from "../assets/home1.jpg";
// import vizag from "../assets/vizag.jpg";
// import home3 from "../assets/home3.jpg";
// import cityPhoto from "../assets/home4.jpg";
// import naturePhoto from "../assets/home5.jpg";
// import luxuryPhoto from "../assets/home6.jpg";
// import { Image } from 'react-bootstrap';

// export const Home = () => {
//   return (
//     <div className="home">
//       <header className="home-header">
//         <Container>
//           <Row>
//             <Col>
//               <Carousel className="home-carousel">
//                 <Carousel.Item interval={3000}>
//                   <img className="d-block w-100" src={germany} alt="First slide" />
//                   <Carousel.Caption>
//                     <h3>Explore Exotic Destinations</h3>
//                     <p>Discover the beauty of the world with our exclusive tours.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <img className="d-block w-100" src={london} alt="Second slide" />
//                   <Carousel.Caption>
//                     <h3>Adventure Awaits</h3>
//                     <p>Experience thrilling adventures around the globe.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <img className="d-block w-100" src={relax} alt="Third slide" />
//                   <Carousel.Caption>
//                     <h3>Relax and Unwind</h3>
//                     <p>Find peace and tranquility with our relaxation packages.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>
//               <Link to="/tours">
//                 <Button variant="danger" className="explore-button" style={{color: "#FFF125"}}>Explore Tours</Button>
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </header>

//       <section className="home-services">
//         <Container>
//           <Row>
//             <Col>
//               <h2>Our Services</h2>
//               <p>We offer a variety of services to make your travel experience unforgettable.</p>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={home1} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>Adventure Tours</Card.Title>
//                   <Card.Text>Experience thrilling adventures around the world.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={vizag} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>Relaxation Packages</Card.Title>
//                   <Card.Text>Relax and unwind with our exclusive relaxation packages.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={home3} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>Cultural Experiences</Card.Title>
//                   <Card.Text>Immerse yourself in the rich cultures around the world.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           {/* New Service Cards */}
//           <Row style={{ marginTop: "30px" }}>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={cityPhoto} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>City Escapes</Card.Title>
//                   <Card.Text>Discover the vibrant life of bustling cities.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={naturePhoto} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>Nature Escapes</Card.Title>
//                   <Card.Text>Reconnect with nature through our scenic nature escapes.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Img variant="top" src={luxuryPhoto} />
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Title>Luxury Travel</Card.Title>
//                   <Card.Text>Indulge in opulent travel experiences with our luxury packages.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           <h2 style={{ marginTop: "60px" }}>Key Features</h2>
//           <p>Discover the perfect getaway where majestic mountains, pristine beaches, iconic landmarks, and seamless transport come together for an unforgettable adventure.</p>

//           <Row className="additional-services">
//             <Col md={3}>
//               <div className="service-icon">
//                 <FaMountain className="icon" />
//                 <h4>Mountains</h4>
//                 <p>Thrilling adventure tours tailored for adrenaline seekers.</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="service-icon">
//                 <FaUmbrellaBeach className="icon" />
//                 <h4>Beach</h4>
//                 <p>Relax on beautiful beaches with our beach vacation packages.</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="service-icon">
//                 <FaLandmark className="icon" />
//                 <h4>Landmarks</h4>
//                 <p>Discover cultural heritage and traditions around the world.</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="service-icon">
//                 <FaBus className="icon" />
//                 <h4>Transport</h4>
//                 <p>Reliable and comfortable transport services for you.</p>
//               </div>
//             </Col>
//           </Row>

//         </Container>
//       </section>
//       <section className="home-testimonials">
//         <Container>
//           <Row>
//             <Col>
//               <h2>What Our Customers Say</h2>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <Card>
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Text>"Amazing experience! Highly recommended. I was impressed with how quickly i got a response to my inquiry. Their recommendations were spot-on, making my trip incredibly memorable.</Card.Text>
//                   <FontAwesomeIcon icon={faQuoteRight} />
//                   <Card.Footer>
//                     <Image
//                       src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
//                       roundedCircle
//                       style={{ width: '80px', height: '80px' }}
//                       className="mb-2"
//                     />
//                     <br/>
//                     John Doe
//                   </Card.Footer>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Text>"A truly unforgettable journey. Will travel again. Wanderlust made planning my vacation effortless. Their suggestions were fantastic, and the attention to detail was remarkable.</Card.Text>
//                   <FontAwesomeIcon icon={faQuoteRight} />
//                   <Card.Footer>
//                     <Image
//                       src="https://salondesmaires-gard.com/wp-content/uploads/2015/04/speaker-1-v2.jpg"
//                       roundedCircle
//                       style={{ width: '80px', height: '80px' }}
//                       className="mb-2"
//                     />
//                     <br/>
//                     Jane Smith
//                   </Card.Footer>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card>
//                 <Card.Body className="bg-dark text-warning">
//                   <Card.Text>"Great service and beautiful destinations.It was a great experience overall. They were friendly and knowledgeable, and they really went above and beyond to ensure everything was perfect.</Card.Text>
//                   <FontAwesomeIcon icon={faQuoteRight} />
//                   <Card.Footer>
//                     <Image
//                       src="https://salondesmaires-gard.com/wp-content/uploads/2014/10/speaker-2-v2.jpg"
//                       roundedCircle
//                       style={{ width: '80px', height: '80px' }}
//                       className="mb-2"
//                     />
//                     <br/>
//                     Emily Johnson
//                   </Card.Footer>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };
