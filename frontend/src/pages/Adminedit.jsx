import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Adminedit = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [tour, setTour] = useState('');

    const [id, setId] = useState('');
    const [nam, setNam] = useState('');
    const [tagline, setTagline] = useState('');
    const [info, setInfo] = useState('');

    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    const [image6, setImage6] = useState('');

    const [price, setPrice] = useState(10000);
    const [duration, setDuration] = useState(5);
    const [startdate, setStartdate] = useState('');
    const [tourplan, setTourplan] = useState('');

    const getour = () => {
        setTour(location.state?.tour);
    }

    useEffect(() => {
        getour();
    }, [])

    useEffect(() => {

        setId(tour?.id)
        setNam(tour?.name)
        setTagline(tour?.tagline)
        setInfo(tour?.info)
        setImage1(tour?.image1)
        setImage2(tour?.image2)
        setImage3(tour?.image3)
        setImage4(tour?.image4)
        setImage5(tour?.image5)
        setImage6(tour?.image6)
        setPrice(tour?.price)
        setDuration(tour?.duration)
        setStartdate(tour?.startdate)
        setTourplan(tour?.tourplan)

    }, [tour]);

    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        if (name == 'id') {
            setId(value)
        }
        else if (name == 'nam') {
            setNam(value)
        }
        else if (name == 'tagline') {
            setTagline(value)
        }
        else if (name == 'info') {
            setInfo(value)
        }
        else if (name == 'image1') {
            setImage1(value)
        }
        else if (name == 'image2') {
            setImage2(value)
        }
        else if (name == 'image3') {
            setImage3(value)
        }
        else if (name == 'image4') {
            setImage4(value)
        }
        else if (name == 'image5') {
            setImage5(value)
        }
        else if (name == 'image6') {
            setImage6(value)
        }
        else if (name == 'price') {
            setPrice(value)
        }
        else if (name == 'duration') {
            setDuration(value)
        }
        else if (name == 'startdate') 
        {
            const inputDate = new Date(value);
            const currentDatePlus10Days = new Date();
            currentDatePlus10Days.setDate(currentDatePlus10Days.getDate() + 10);

            if (inputDate >= currentDatePlus10Days) {
                setStartdate(value);
            }
            else {
                alert('Start date must be at least 10 days from today.');
            }
        }
        else if (name == 'tourplan') {
            setTourplan(value)
        }
    }

    const edithandler = async (event) => 
    {
        event.preventDefault();

        if (duration < 5) {
            alert('Tour duration must be at least 5 days.');
            return;
        }

        if (price < 100) {
            alert('Price must be at least 100.');
            return;
        }

        let token = localStorage.getItem('token');
        console.log("token ", token);

        if (id && nam && tagline && info && image1 && image2 && image3 && image4 && image5 && image6 && price
            && duration && startdate && tourplan) 
        {
            const response = await axios.put(`http://localhost:7000/admin/editour/${tour._id}`, {
                id, name: nam, tagline, info, image1, image2, image3, image4, image5, image6, price, duration,
                startdate, tourplan
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('New tour created:', response.data);
            navigate('/admin');
        }
        else {
            alert('PLEASE FILL IN ALL THE FIELDS');
        }
    }

    const cancelhandler = () => {
        navigate('/admin')
    }

    return (
        <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3">

            <div className="col-12 d-flex flex-column justify-content-center align-items-center">

                <div className="h1" style={{fontFamily: "serif"}}>Edit Tour</div>

                <form className="d-flex flex-column justify-content-center align-items-center p-3 w-100 mt-3 gap-3 ">

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="id" className="fontstyle" >Id</label>
                        <input name="id" type="text" placeholder="enter your id"
                            value={id} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="nam" className="fontstyle" >Name</label>
                        <input name="nam" type="text" placeholder="enter your name"
                            value={nam} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="tagline" className="fontstyle" >Tagline</label>
                        <textarea name="tagline" type="text" placeholder="enter your tagline"
                            value={tagline} onChange={handleChange} className='w-100' rows={5} />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="info" className="fontstyle" >Info</label>
                        <textarea name="info" type="text" placeholder="enter your info"
                            value={info} onChange={handleChange} rows={10} />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image1" className="fontstyle" >Image1</label>
                        <input name="image1" type="text" placeholder="enter your image url"
                            value={image1} onChange={handleChange} className='w-100' />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image2" className="fontstyle" >Image2</label>
                        <input name="image2" type="text" placeholder="enter your image url"
                            value={image2} onChange={handleChange} className='w-100' />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image3" className="fontstyle" >Image3</label>
                        <input name="image3" type="text" placeholder="enter your image url"
                            value={image3} onChange={handleChange} className='w-100' />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image4" className="fontstyle" >Image4</label>
                        <input name="image4" type="text" placeholder="enter your image url"
                            value={image4} onChange={handleChange} className='w-100' />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image5" className="fontstyle" >Image5</label>
                        <input name="image5" type="text" placeholder="enter your image url"
                            value={image5} onChange={handleChange} className='w-100' />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <label htmlFor="image6" className="fontstyle" >Image6</label>
                        <input name="image6" type="text" placeholder="enter your image url"
                            value={image6} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="price" className="fontstyle" >Price</label>
                        <input name="price" type="number" placeholder="enter your price"
                            value={price} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="duration" className="fontstyle" >Duration</label>
                        <input name="duration" type="number" placeholder="enter your duration"
                            value={duration} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="startdate" className="fontstyle" >Startdate</label>
                        <input name="startdate" type="date" placeholder="enter your starting date"
                            value={startdate} onChange={handleChange} className='w-100' />
                    </div>

                    <div className="d-flex flex-column w-100">
                        <label htmlFor="tourplan" className="fontstyle" >Tourplan</label>
                        <textarea name="tourplan" type="text" placeholder="enter your tour plan"
                            value={tourplan} onChange={handleChange} rows={20} />
                    </div>

                    <button id="btn" className='bg-dark add-edit-tour-btn' type="button" style={{fontFamily: "serif", color: "whitesmoke"}}
                        onClick={edithandler}>Edit</button>

                    <button id="btn" className='empty-cart' type="button" style={{fontFamily: "serif"}}
                        onClick={cancelhandler}>Cancel</button>

                </form>

            </div>
        </div>
    )
}
