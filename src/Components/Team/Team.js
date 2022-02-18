import React from 'react';
import "./Team.css";
import {Card ,Button} from "react-bootstrap";
import image1 from "../../images/team2.jpg";
import image2 from "../../images/team1.jpg";
import image3 from "../../images/team3.jpg";
import image4 from "../../images/team4.jpg";

function Team() {
    return (
        <>
            <div className=''  id="TEAM">
                <h5 className='text-center' style={{marginTop:"50px"}}>THE TEAM</h5>
                <h6 className='text-center' style={{marginBottom:"50px"}}>The ones who runs this company</h6>
            </div>
            <div className='container' >
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Card className='MainCard shadow'>
                            <Card.Img variant="top" src={image1} />
                            <Card.Body>
                                    <h4>John Doe</h4>
                                    <h6>CEO & Founder</h6>
                                    <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
                            </Card.Body>
                            <Button className='btn'><span><i style={{fontSize:"15px" ,paddingRight:"5px"}} className="fas fa-envelope"></i></span>Contact</Button>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Card className='MainCard shadow'>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                    <h4>Anja Doe</h4>
                                    <h6>Art Director</h6>
                                    <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
                            </Card.Body>
                            <Button className='btn'><span><i style={{fontSize:"15px" ,paddingRight:"5px"}} className="fas fa-envelope"></i></span>Contact</Button>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Card className='MainCard shadow'>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                    <h4>Mike Ross</h4>
                                    <h6>Web Designer</h6>
                                    <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
                            </Card.Body>
                            <Button className='btn'><span><i style={{fontSize:"15px" ,paddingRight:"5px"}} className="fas fa-envelope"></i></span>Contact</Button>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Card className='MainCard shadow'>
                            <Card.Img variant="top" src={image4} />
                            <Card.Body>
                                    <h4>Dan Star</h4>
                                    <h6>Designer</h6>
                                    <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
                            </Card.Body>
                            <Button className='btn'><span><i style={{fontSize:"15px" ,paddingRight:"5px"}} className="fas fa-envelope"></i></span>Contact</Button>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='container-fluid NumDiv'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-12 NumEle'>
                        <h3>14+</h3>
                        <h6>Partners</h6>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 NumEle'>
                        <h3>55+</h3>
                        <h6>Projects Done</h6>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 NumEle'>
                        <h3>89+</h3>
                        <h6>Happy Clients</h6>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 NumEle'>
                        <h3>150+</h3>
                        <h6>Meetings</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
