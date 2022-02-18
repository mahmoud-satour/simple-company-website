import React from 'react';
import "./Work.css";
import image1 from "../../images/tech_mic.jpg";
import image2 from "../../images/tech_phone.jpg";
import image3 from "../../images/tech_drone.jpg";
import image4 from "../../images/tech_sound.jpg";
import image5 from "../../images/tech_tablet.jpg";
import image6 from "../../images/tech_camera.jpg";
import image7 from "../../images/tech_typewriter.jpg";
import image8 from "../../images/tech_tableturner.jpg";


function Work() {
    return (
        <>
            <div style={{marginBottom:"100px"}} id='WORK'>
                <h5 className='text-center'>OUR WORK</h5>
                <h6 className='text-center'>What we've done for people</h6>
            </div>
            <div className="container" style={{marginBottom:"100px"}}>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image1}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image2}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image3}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image4}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image5}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image6}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image7}  alt=''/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6'>
                        <img src={image8}  alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;
