import React from 'react';


const Page = () => {
    return (
        <div className="contact-container">
            <div className="title-container">
                <p className="contact-title">Contact Me</p>
                <div className="contact-underline"></div>
            </div>
            
            <div className="form-container">      
                <form className="contact-form">
                    <input className="input-field" type="text" placeholder="Name" required />
                    <input className="input-field" type="email" placeholder="Email" required />
                    <input className="input-field" type="tel" placeholder="Phone" required />
                    <textarea className="input-field message-field" placeholder="Message" required></textarea>
                </form>
            </div>
            
            <div className="submit-button-container">
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
}

export default Page;
