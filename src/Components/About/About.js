import React from 'react';
import "./About.css";
import {Card ,Button} from "react-bootstrap";
import aboutImage from "../../images/phone_buildings.jpg"; 

function About() {
    return (
        <>
        <div className="container mainDiv" id='ABOUT'>
        <h5 className='text-center'>ABOUT THE COMPANY</h5>
        <h6 className='text-center'>Key features of our company</h6>
        <div className='row MainRow'>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <Card className="MainCard">
                    <i className="fas fa-desktop text-center"></i>
                    <Card.Body className='card-body'>
                        <Card.Title className='text-center'>Responsive</Card.Title>
                        <Card.Body className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <Card className="MainCard">
                    <i className="fas fa-heart text-center"></i>
                    <Card.Body>
                        <Card.Title className='text-center'>Passion</Card.Title>
                        <Card.Body className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <Card className="MainCard">
                    <i className="far fa-gem text-center"></i>
                    <Card.Body>
                        <Card.Title className='text-center'>Design</Card.Title>
                        <Card.Body className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <Card className="MainCard">
                    <i className="fas fa-cog text-center"></i> 
                    <Card.Body>
                        <Card.Title className='text-center'>Support</Card.Title>
                        <Card.Body className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
        <div style={{backgroundColor:"#EEE"}}>
            <div className='container secDiv'>
                <div className='row'>
                    <div className='col-lg-6 col-12' style={{padding:"150px 0"}}>
                        <div>
                            <h4 style={{color:"black"}}>We know design.</h4>
                            <p style={{color:"black"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore.
                            </p>
                            <Button className='mainBtn'>View Our Works</Button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12' style={{padding:"150px 0"}}>
                        <img src={aboutImage} alt='' className='img-fluid' style={{paddingLeft:"30px"}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
}

export default About;
