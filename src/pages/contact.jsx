import React from 'react';

function Contact() {
    return (
        <div className='cards'>
            <div className="image-card"></div>
            <div className="contact-card">
                <div className="contact-header">
                    <h2>Contact Information</h2>
                </div>
                <div className="contact-body">
                    <p><strong>Email:</strong> catheriny09@gmail.com</p>
                    <p><strong>Phone:</strong> +1(510)386-6980</p>
                    <p><strong>Address:</strong> California, United States</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-header">
                    <h2>Relevant Links</h2>
                </div>
                <div className="contact-body">
                    <p><strong>LinkedIn:</strong> linkedin.com/in/catherine-yaroslavtseva/</p>
                    <p><strong>GitHub:</strong> github.com/catheriny09</p>
                    <p><strong>Portfolio:</strong> catherineyaroslavtseva.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
