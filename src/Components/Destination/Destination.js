import React from 'react';
import Header from '../Header/Header';
import './Destinition.css'

const Destination = () => {
    return (
        <div className="banner_area ">
            <div className="menu_area">
                <Header></Header>
            </div>
            <div className="banner_wrapper room_wrapper">
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7">
                                <div style={{color:'#fff', marginTop:'10px'}}> 
                                        <h6>252 stays Apr 13-17 3 guests</h6>
                                        <h5>Stay in Cox’s Bazar</h5>
                                    </div>
                                    <div className='single_room d-flex'>
                                        <div className="room_img">
                                            <img style={{ height:'150px', width:'200px'}} src='https://i.ibb.co/5WHJQGK/Rectangle-26.png' alt=""/>
                                        </div>
                                    <div className="room_info">
                                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                                        <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                                        <div className='d-flex justify-content-between'>
                                            <span>4.9 (20)</span>
                                            <span>$52/ night</span>
                                        </div>
                                    </div>
                                </div>
                             {/* 2nd box  */}
                                <div className='single_room d-flex'>
                                        <div className="room_img">
                                            <img style={{ height:'150px', width:'200px'}} src='https://i.ibb.co/tMWtpKr/Rectangle-27.png' alt=""/>
                                        </div>
                                    <div className="room_info">
                                        <h5>Apartment in Lost Panorama</h5>
                                        <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                                        <div className='d-flex justify-content-between'>
                                            <span>4.9 (20)</span>
                                            <span>$52/ night</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 3rd box */}
                                <div className='single_room d-flex'>
                                        <div className="room_img">
                                            <img style={{ height:'150px', width:'200px'}} src='https://i.ibb.co/Yyh3Dns/Rectangle-28.png' alt=""/>
                                        </div>
                                    <div className="room_info">
                                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                                        <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                                        <div className='d-flex justify-content-between'>
                                            <span>4.9 (20)</span>
                                            <span>$52/ night</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2766243.7879151287!2d89.97055095426357!3d24.142547837459787!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1600294700894!5m2!1sen!2sbd" width="500px" height="600px" frameborder="0" style={{border:'0' }}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Destination;