import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const Tourcard = (props) => {
  const { image1, name, info, price, _id } = props.tour;

  const navigate = useNavigate();

  function detailHandler() {
    navigate(`/tourdetails/${_id}`);
  }

  return (
    <Card className="col-11 col-md-5 mb-3">
      <Card.Img variant="top" src={image1} className="w-100" />
      <Card.Body>
        <Card.Title className="tour-name1" style={{textAlign: "center"}}>{name}</Card.Title>
        <Card.Text className="tour-info">{info}</Card.Text>
        <div className="tour-details">
          <Card.Text>
            <span className="tour-price" style={{ color: 'green' }}>
              Price: ${price} </span>
          </Card.Text>
          <Button variant="dark" className="view-details-button" onClick={detailHandler} style={{width: "130px", fontSize: "0.85rem"}}>
          <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.5em' }} />
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
