import React from 'react';
import "./Home.css";
import {Button} from 'react-bootstrap';
import MacImage from "../../images/mac.jpg";

function Home() {
    return (
        <section >
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>Start something that matters</h1>
                        <p>
                        Stop wasting valuable time with projects that just isn't you.
                        </p>
                        <p>
                            <Button variant="light" size='lg'>Learn more and start today</Button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    ) ;
};

export default Home;
