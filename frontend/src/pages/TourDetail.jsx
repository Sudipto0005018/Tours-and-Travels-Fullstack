import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { addtourid, removetourid } from "../redux/reduxslices/touridslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";

export const TourDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tour, setTour] = useState({});
  const [cart, setCart] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTour = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:7000/user/getour/${id}`);
    setTour(response.data.tour);
    setLoading(false);
  };

  const getCart = async () => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      const response = await axios.get("http://localhost:7000/user/getcart", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response?.data?.cart || []);
    }
  };

  const clickHandler = async () => {
    if (submitted) {
      toast.info("Tour already booked!");
      dispatch(removetourid());
      navigate("/cart");
    } else {
      const token = localStorage.getItem("usertoken");
      if (!token) {
        toast.success("Going for Sign in!");
        dispatch(addtourid(id));
        navigate("/login");
      } else {
        const response = await axios.post(
          "http://localhost:7000/user/postcart",
          {
            name: tour.name,
            image: tour.image1,
            person: 1,
            price: tour.price,
            total: tour.price,
            startdate: tour.startdate,
            tourid: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(removetourid());
        toast.success("Tour added to Cart!");
        navigate("/cart");
      }
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      const isInCart = cart.some((item) => item.tour === id);
      setSubmitted(isInCart);
    }
  }, [cart]);

  useEffect(() => {
    getTour();
    getCart();
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "60px" }} className="bg-dark details-top">
      {loading ? (
        <div className="h3 text-center text-light">Loading...</div>
      ) : (
        <>
          <h3 className="tour-name-heading">{tour?.name} in Pictures</h3>
          <Carousel>
            {[tour.image1, tour.image2, tour.image3, tour.image4, tour.image5, tour.image6]
              .filter(Boolean)
              .map((image, index) => (
                <Carousel.Item key={index} interval={3000}>
                  <img
                    className="d-block w-100 carousel-image"
                    src={image}
                    alt={`${tour?.name} Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
          <Card.Body>
            <Card.Title className="tour-name">{tour?.name}</Card.Title>
            <Card.Text className="tour-description">{tour?.tagline}</Card.Text>
          </Card.Body>
          <div className="tour-overview">
            <h3 className="tour-overview-heading">Quick Tour Overview</h3>
            <p className="text-warning">Duration: {tour?.duration} days</p>
            <p className="text-warning">Starting Date: {tour?.startdate}</p>
            <div className="text-warning">
              {tour.tourplan?.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          <Button
            className={`add-to-cart ${submitted ? "remove-from-cart" : ""}`}
            onClick={clickHandler}
          >
            {submitted ? "Already added to cart" : (
              <>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
              </>
            )}
          </Button>
        </>
      )}
    </div>
  );
};


