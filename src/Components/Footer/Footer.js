import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <footer className='mainFooter'>
            <div className="text-center" style={{color:"white",paddingTop:"100px"}}>
                <i className="fab fa-facebook-square icon"></i>
                <i className="fab fa-snapchat-ghost icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-linkedin-in icon"></i>
            </div>
            <div className='text-center' style={{color:"white"}}>
            <h6>Powered by <a href='https://mahmoud-satour.github.io/My-Website/'>Eng Mahmoud Satour</a></h6>
            </div>
        </footer>
    )
}

export default Footer;
