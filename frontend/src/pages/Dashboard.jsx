import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast, ToastContainer, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/backgroundImage.jpg';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const offers = [
    { id: 1, description: "Explore the Wonders: Flat 50% Off on All Tours!" },
    { id: 2, description: "Summer Special: Rs 1000/- Off on Your Next Adventure!" },
    { id: 3, description: "Book Now and Save: Buy 1 Get 1 Free on Select Tours!" },
    { id: 4, description: "Limited Time Offer: 30% Off on All Beach Resorts!" },
    { id: 5, description: "Family Package Deal: Kids Stay Free!" },
    { id: 6, description: "Early Bird Discount: 20% Off on Bookings Made 3 Months in Advance!" },
    { id: 7, description: "Festive Season Special: Complimentary City Tour with Every Booking!" },
    { id: 8, description: "Last Minute Deal: Save 40% on Next Week's Trips!" },
    { id: 9, description: "Adventure Awaits: 25% Off on Mountain Expeditions!" },
    { id: 10, description: "Luxury Retreat: Get a Free Spa Day with Every 5-Night Stay!" }
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [show, setShow] = useState(Array(offers.length).fill(false));

  useEffect(() => {
    if (currentOfferIndex < offers.length) {
      const timer = setTimeout(() => {
        setShow((prevShow) => {
          const newShow = [...prevShow];
          newShow[currentOfferIndex] = true;
          return newShow;
        });

        setTimeout(() => {
          setShow((prevShow) => {
            const newShow = [...prevShow];
            newShow[currentOfferIndex] = false;
            return newShow;
          });

          setCurrentOfferIndex((prevIndex) => prevIndex + 1);
        }, 3000); 
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentOfferIndex]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw', 
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: '5px',
    marginTop: '10px'
  };
  
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.75)', 
    border: 'none',
    boxShadow: 'none',
    maxWidth: '90%',
    padding: '2rem',
    paddingBottom: '500px'
  };
  

  const toastStyle = {
    backgroundColor: '#f5ca0b',
    fontWeight: 'bold',
    color: 'red',
    marginBottom: '10px'
  };

  const toastHeaderStyle = {
    backgroundColor: 'white'
  };

  const toastBodyStyle = {
    border: "2px solid red",
    borderRadius: '5px'
  };

  return (
    <div style={backgroundStyle}>
      <Card style={cardStyle} className="p-4 mb-4">
        <Card.Body>
          <h2 className="text-dark">
            User's Details: <span style={{ fontSize: '22px' }}>{user?.email}</span>
          </h2>
        </Card.Body>
      </Card>

      <div>
        <ToastContainer position="bottom-start" className="p-3">
          {offers.filter((_, index) => index % 3 === 0).map((offer) => (
            <Toast
              key={offer.id}
              onClose={() => setShow((prevShow) => {
                const newShow = [...prevShow];
                newShow[offer.id - 1] = false;
                return newShow;
              })}
              show={show[offer.id - 1]}
              delay={2000}
              autohide
              style={toastStyle}
            >
              <Toast.Header style={toastHeaderStyle}>
                <strong className="me-auto text-danger">Special Offer</strong>
              </Toast.Header>
              <Toast.Body style={toastBodyStyle}>{offer.description}</Toast.Body>
            </Toast>
          ))}
        </ToastContainer>

        <ToastContainer position="top-start" className="p-3">
          {offers.filter((_, index) => index % 3 === 1).map((offer) => (
            <Toast
              key={offer.id}
              onClose={() => setShow((prevShow) => {
                const newShow = [...prevShow];
                newShow[offer.id - 1] = false;
                return newShow;
              })}
              show={show[offer.id - 1]}
              delay={2000}
              autohide
              style={toastStyle}
            >
              <Toast.Header style={toastHeaderStyle}>
                <strong className="me-auto text-danger">Special Offer</strong>
              </Toast.Header>
              <Toast.Body style={toastBodyStyle}>{offer.description}</Toast.Body>
            </Toast>
          ))}
        </ToastContainer>

        <ToastContainer position="bottom-end" className="p-3">
          {offers.filter((_, index) => index % 3 === 2).map((offer) => (
            <Toast
              key={offer.id}
              onClose={() => setShow((prevShow) => {
                const newShow = [...prevShow];
                newShow[offer.id - 1] = false;
                return newShow;
              })}
              show={show[offer.id - 1]}
              delay={2000}
              autohide
              style={toastStyle}
            >
              <Toast.Header style={toastHeaderStyle}>
                <strong className="me-auto text-danger">Special Offer</strong>
              </Toast.Header>
              <Toast.Body style={toastBodyStyle}>{offer.description}</Toast.Body>
            </Toast>
          ))}
        </ToastContainer>
      </div>
    </div>
  );
};

export default Dashboard;
