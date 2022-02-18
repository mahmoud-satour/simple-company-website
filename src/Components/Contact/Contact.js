import React from 'react';
import "./Contact.css";
import {Form,Button } from "react-bootstrap";
import theImage from "../../images/map.jpg"

function Contact() {
    return (
        <div id='CONTACT'>
            <div style={{height:"800px",backgroundColor:"#f1f1f1"}}>
                <div className='text-center' style={{paddingTop:"150px"}}>
                    <h5>CONTACT</h5>
                    <h6>Lets get in touch. Send us a message:</h6>
                </div>
                <div className='container' style={{paddingTop:"50px"}}>
                    <span class="fas fa-map-marker-check" style={{fontSize:"50px"}}></span>
                    <span style={{paddingLeft:"43px"}}>Chicago, US</span>
                    <div style={{paddingTop:"30px"}}><i style={{fontSize:"50px",paddingRight:"30px"}} class="fas fa-phone-alt"></i>Phone: +00 151515</div>
                    <div style={{paddingTop:"30px"}}><i style={{fontSize:"50px",paddingRight:"30px"}} class="fas fa-envelope"></i>Email: mail@mail.com</div>
                </div>
                <div className='container' style={{marginTop:"30px"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button id='Btn'>SEND MESSAGE</Button>
                    </Form>
                </div>
            </div>
            <img src={theImage} alt='' className='img-fluid' />
        </div>
    )
}

export default Contact;
