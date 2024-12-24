// import React from 'react';
// import aboutImage from '../assets/about-image.png'; 
// import featureImage1 from '../assets/about1.jpg'; 
// import featureImage2 from '../assets/about2.jpg'; 
// import featureImage3 from '../assets/about3.jpg'; 

// export const About = () => {
//   return (
//     <div>
//       <div className="about-page" style={{ marginBottom: '0px', marginTop: '20px' }}>
//         <div className="about-content">
//           <h1 className="about-heading">Discover the World with Wanderlust</h1>
//           <p className="about-caption">Unveiling the Beauty of Global Destinations</p>
//           <img src={aboutImage} alt="Wanderlust" className="about-image" />
//           <div className="about-description">
//             <p>At Wanderlust, we believe in the power of exploration and the allure of discovery. Our mission is to inspire and guide travelers to uncover the stunning aesthetic vibes that different parts of the world have to offer.
//             From the vibrant streets of Tokyo to the serene landscapes of the Swiss Alps, from the bustling markets of Marrakech to the sun-kissed beaches of the Maldives, every corner of the globe holds its unique charm waiting to be explored.
//             Join us on a journey to experience the world through a lens of wonder and adventure. Let Wanderlust be your companion as you embark on unforgettable trips, create lifelong memories, and find inspiration in the beauty of diverse cultures and landscapes.</p>
//           </div>
//         </div>
//       </div>

//       <div className="features-section">
//         <h2 className="features-heading">Explore Our Top Destinations</h2>
//         <div className="feature-row">
//           <img src={featureImage1} alt="Feature 1" className="feature-image" />
//           <div className="feature-text">
//             <h3>Stunning Landscapes</h3>
//             <p>Experience breathtaking views of nature's most beautiful landscapes. From majestic mountains to serene lakes, our destinations offer unparalleled scenic beauty.</p>
//           </div>
//         </div>
//         <div className="feature-row reverse">
//           <div className="feature-text">
//             <h3>Vibrant Cities</h3>
//             <p>Immerse yourself in the energy of bustling cities. Explore diverse cultures, vibrant street life, and historical landmarks that tell the stories of their past.</p>
//           </div>
//           <img src={featureImage2} alt="Feature 2" className="feature-image" />
//         </div>
//         <div className="feature-row">
//           <img src={featureImage3} alt="Feature 3" className="feature-image" />
//           <div className="feature-text">
//             <h3>Relaxing Beaches</h3>
//             <p>Unwind on pristine beaches with golden sands and crystal-clear waters. Our beach destinations are perfect for a relaxing getaway or adventurous water sports.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMountain, FaUmbrellaBeach, FaLandmark, FaBus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import germany from "../assets/germany.jpeg";
import london from "../assets/London.webp";
import relax from "../assets/relax and unwind.jpeg";
import home1 from "../assets/home1.jpg";
import vizag from "../assets/vizag.jpg";
import home3 from "../assets/home3.jpg";
import cityPhoto from "../assets/home4.jpg";
import naturePhoto from "../assets/home5.jpg";
import luxuryPhoto from "../assets/home6.jpg";
import { Image } from 'react-bootstrap';
import aboutImage from '../assets/about-image.png'; 

export const About = () => {
  return (
    <div>
    <div className="about-page" style={{ marginBottom: '0px', marginTop: '20px' }}>
    <div className="about-content">
      <h1 className="about-heading">Discover the World with Wanderlust</h1>
      <p className="about-caption">Unveiling the Beauty of Global Destinations</p>
      <img src={aboutImage} alt="Wanderlust" className="about-image" />
      <div className="about-description">
        <p>At Wanderlust, we believe in the power of exploration and the allure of discovery. Our mission is to inspire and guide travelers to uncover the stunning aesthetic vibes that different parts of the world have to offer.
        From the vibrant streets of Tokyo to the serene landscapes of the Swiss Alps, from the bustling markets of Marrakech to the sun-kissed beaches of the Maldives, every corner of the globe holds its unique charm waiting to be explored.
        Join us on a journey to experience the world through a lens of wonder and adventure. Let Wanderlust be your companion as you embark on unforgettable trips, create lifelong memories, and find inspiration in the beauty of diverse cultures and landscapes.</p>
      </div>
    </div>
  </div>
  
    <div className="home">
      <header className="home-header">
        <Container>
          <Row>
            <Col>
              <Carousel className="home-carousel">
                <Carousel.Item interval={500}>
                  <img className="d-block w-100" src={germany} alt="First slide" />
                  <Carousel.Caption>
                    <h3>Explore Exotic Destinations</h3>
                    <p>Discover the beauty of the world with our exclusive tours.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img className="d-block w-100" src={london} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Adventure Awaits</h3>
                    <p>Experience thrilling adventures around the globe.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img className="d-block w-100" src={relax} alt="Third slide" />
                  <Carousel.Caption>
                    <h3>Relax and Unwind</h3>
                    <p>Find peace and tranquility with our relaxation packages.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Link to="/tours">
                <Button variant="danger" className="explore-button" style={{color: "#FFF125"}}>Explore Tours</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="home-services">
        <Container>
          <Row>
            <Col>
              <h2>Our Services</h2>
              <p>We offer a variety of services to make your travel experience unforgettable.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="h-80 w-100">
                <Card.Img variant="top" src={home1} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Adventure Tours</Card.Title>
                  <Card.Text>Experience thrilling adventures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Img variant="top" src={vizag} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Relaxation Packages</Card.Title>
                  <Card.Text>Relax and unwind with our exclusive relaxation packages.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Img variant="top" src={home3} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Cultural Experiences</Card.Title>
                  <Card.Text>Immerse yourself in the rich cultures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* New Service Cards */}
          <Row style={{ marginTop: "30px" }}>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Img variant="top" src={cityPhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>City Escapes</Card.Title>
                  <Card.Text>Discover the vibrant life of bustling cities in the World.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Img variant="top" src={naturePhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Nature Escapes</Card.Title>
                  <Card.Text>Reconnect with nature through our scenic nature escapes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Img variant="top" src={luxuryPhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Luxury Travel</Card.Title>
                  <Card.Text>Indulge in opulent travel experiences with our luxury packages.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h2 style={{ marginTop: "60px" }}>Key Features</h2>
          <p>Discover the perfect getaway where majestic mountains, pristine beaches, iconic landmarks, and seamless transport come together for an unforgettable adventure.</p>

          <Row className="additional-services">
            <Col md={3}>
              <div className="service-icon">
                <FaMountain className="icon" />
                <h4>Mountains</h4>
                <p>Thrilling adventure tours tailored for adrenaline seekers.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaUmbrellaBeach className="icon" />
                <h4>Beach</h4>
                <p>Relax on beautiful beaches with our beach vacation packages.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaLandmark className="icon" />
                <h4>Landmarks</h4>
                <p>Discover cultural heritage and traditions around the world.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaBus className="icon" />
                <h4>Transport</h4>
                <p>Reliable and comfortable transport services for you.</p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      <section className="home-testimonials">
        <Container>
          <Row>
            <Col>
              <h2>What Our Customers Say</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"Amazing experience! Highly recommended. I was impressed with how quickly i got a response to my inquiry. Their recommendations were spot-on, making my trip incredibly memorable.</Card.Text>
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <Card.Footer>
                    <Image
                      src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
                      roundedCircle
                      style={{ width: '80px', height: '80px' }}
                      className="mb-2"
                    />
                    <br/>
                    John Doe
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"A truly unforgettable journey. Will travel again next year. Wanderlust made planning my vacation effortless. Their suggestions were fantastic, and the attention to detail was remarkable.</Card.Text>
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <Card.Footer>
                    <Image
                      src="https://salondesmaires-gard.com/wp-content/uploads/2015/04/speaker-1-v2.jpg"
                      roundedCircle
                      style={{ width: '80px', height: '80px' }}
                      className="mb-2"
                    />
                    <br/>
                    Jane Smith
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <Card className="w-100">
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"Great service and beautiful destinations.It was a great experience overall. They were friendly and knowledgeable, and they really went above and beyond to ensure everything was perfect.</Card.Text>
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <Card.Footer>
                    <Image
                      src="https://salondesmaires-gard.com/wp-content/uploads/2014/10/speaker-2-v2.jpg"
                      roundedCircle
                      style={{ width: '80px', height: '80px' }}
                      className="mb-2"
                    />
                    <br/>
                    Emily Johnson
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </div>
  );
};
