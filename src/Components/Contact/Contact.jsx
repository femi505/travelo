import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
        <div className='contact'>
            <div className="contact-col1">
                <h3>Send us a message <FontAwesomeIcon icon={faComments} className="msgicon" /></h3>
                <p>We would be delighted to hear any feedback or enquiries. Do not hesitate to send us a message.
                   Happy Travelling!</p>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} className="icons" />contact@example.co.uk</li>
                    <li><FontAwesomeIcon icon={faPhone} className="icons" />+44 123-456-7890</li>
                    <li><FontAwesomeIcon icon={faLocationDot} className="icons" />123 Main Street, City, County, Postcode</li>
                </ul>
            </div>
            <div className="contact-col2">
                <form>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name='name' id='name' placeholder='Enter your name' required />
                    
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name='phone' id='phone' placeholder='Enter your number' required />
                    
                    <label htmlFor="message">Write your messages here</label>
                    <textarea name="message" id="message" cols="30" rows="6" placeholder='Enter your message' required></textarea>
                    
                    <button type='submit' className='rounded-button'>Send Message</button>
                </form>
            </div>
        </div>
        
        <Footer />
        </div>
    )
}

export default Contact;