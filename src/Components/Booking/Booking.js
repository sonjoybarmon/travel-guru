import React, { useState } from 'react';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import place from '../../FakeData/Place';
import { Form } from 'react-bootstrap';
import './Booking.css'

const Booking = () => {
    const {Id} = useParams();
    const booking = place.find(bk => bk.id === Id); 
    const {name , details,origin} = booking;
    return (
        <div className="banner_area">
            <div className="menu_area">
                <Header></Header>
            </div>
            <div className="banner_wrapper">
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <div className='banner_info'>
                                    <h1>{name}</h1>
                                    <p>{details}</p>
                                </div>
                            </div>
                            
                            <div className="col-md-5 offset-1 d-flex ">
                                <div className='booking-input'>
                                    <Form.Group>
                                        <label>Origin</label>
                                        <Form.Control className='bkg_input' type="text" placeholder={origin} disabled/>
                                        <label>Destination</label> 
                                        <Form.Control className='bkg_input' type="text" placeholder={name} disabled/>
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="">Form</label>
                                            <label htmlFor="">To</label>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <input className='bkg_input1' type="date" />
                                            <input className='bkg_input1' type="date" />
                                        </div>
                                       <Link to='/destination'><button className='btn bkg_btn'>Start Booking</button></Link> 
                                    </Form.Group>
                                </div>
                            </div>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;




