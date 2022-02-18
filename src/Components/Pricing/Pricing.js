import React from 'react';
import "./Pricing.css";
import {ListGroup} from "react-bootstrap"

function Pricing() {
    return (
        <div className='MainPrice' id='PRICING'>
            <div style={{paddingTop:"150px"}} className='text-center'>
                <h5 style={{color:"white"}}>PRICING</h5>
                <h6 style={{color:"white"}}>Choose a pricing plan that fits your needs.</h6>
            </div>
            <div className='container' style={{paddingTop:"100px"}}>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <ListGroup as="ul" className="text-center">
                            <ListGroup.Item as="li" style={{backgroundColor:"black",color:"white",fontWeight:"600",fontSize:"30px"}}>Basic</ListGroup.Item>
                            <ListGroup.Item as="li">10GB Storage</ListGroup.Item>
                            <ListGroup.Item as="li">10 Emails</ListGroup.Item>
                            <ListGroup.Item as="li">10 Domains</ListGroup.Item>
                            <ListGroup.Item as="li">Endless Support</ListGroup.Item>
                            <ListGroup.Item as="li">$ 10<h6 style={{opacity:"0.6"}}>Per Month</h6></ListGroup.Item>
                            <ListGroup.Item ><button className=' mainBtn'>Sign Up</button></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <ListGroup as="ul" className="text-center">
                            <ListGroup.Item as="li" style={{backgroundColor:"black",color:"white",fontWeight:"600",fontSize:"30px"}}>Pro</ListGroup.Item>
                            <ListGroup.Item as="li">25GB Storage</ListGroup.Item>
                            <ListGroup.Item as="li">25 Emails</ListGroup.Item>
                            <ListGroup.Item as="li">25 Domains</ListGroup.Item>
                            <ListGroup.Item as="li">Endless Support</ListGroup.Item>
                            <ListGroup.Item as="li">$ 25<h6 style={{opacity:"0.6"}}>Per Month</h6></ListGroup.Item>
                            <ListGroup.Item ><button className=' mainBtn'>Sign Up</button></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <ListGroup as="ul" className="text-center">
                            <ListGroup.Item as="li" style={{backgroundColor:"black",color:"white",fontWeight:"600",fontSize:"30px"}}>Premium</ListGroup.Item>
                            <ListGroup.Item as="li">50GB Storage</ListGroup.Item>
                            <ListGroup.Item as="li">50 Emails</ListGroup.Item>
                            <ListGroup.Item as="li">50 Domains</ListGroup.Item>
                            <ListGroup.Item as="li">Endless Support</ListGroup.Item>
                            <ListGroup.Item as="li">$ 50<h6 style={{opacity:"0.6"}}>Per Month</h6></ListGroup.Item>
                            <ListGroup.Item ><button className=' mainBtn'>Sign Up</button></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Pricing;
