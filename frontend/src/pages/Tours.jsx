import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Tourcard } from '../components/Tourcard'

export const Tours = () => {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)

  const getalltours = async () => 
  {
    setLoading(true);

    const response = await axios.get("http://localhost:7000/user/getalltour");
    console.log("response : ", response.data);
    
    setTours(response.data.alltour);
    setLoading(false);
  }

  useEffect(() => {
    getalltours()
  }, [])

  return (
    // <div className='super-sub'>
    //   <div className="title">Tours</div>
    <div className="tour-list">
      <h1 className="tour-list-heading">Explore Our Exciting Tours</h1>
      <p className="tour-list-caption">Discover the world with our exclusive tour packages. Whether you're looking for adventure, relaxation, or cultural experiences, we have the perfect tour for you.</p>
      <div className='d-flex flex-wrap justify-content-center cards container mb-4'>
        {
          loading ? (
            <div className='h3' style={{color: "whitesmoke"}}>Loading...</div> 
          ) : (
            tours.length > 0 ? (tours.map((tour) => (
              <Tourcard key={tour.id} tour={tour} ></Tourcard>
            )))
              :
              (<div>Empty no tours</div>)
          )
        }
      </div>
    </div>
  )
}
