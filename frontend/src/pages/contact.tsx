import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className='cards'>
            <div className="image-card"></div>
            <div className="contact-card">
                <div className="contact-header">
                    <h2> {'>'} Contact Information</h2>
                </div>
                <hr></hr>
                <div className="contact-body">
                    <p><strong>Email:</strong> catheriny09@gmail.com</p>
                    <p><strong>Phone:</strong> +1(510)386-6980</p>
                    <p><strong>Address:</strong> California, United States</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-header">
                    <h2> {'>'} Relevant Links</h2>
                </div>
                <hr></hr>
                <div className="contact-body">
                    <p><strong>LinkedIn:</strong> <a href='http://www.linkedin.com/in/catherine-yaroslavtseva/' target='blank'> linkedin.com/in/catherine-yaroslavtseva/</a></p>
                    <p><strong>GitHub:</strong> <a href='http://www.github.com/catheriny09' target='blank'>github.com/catheriny09</a></p>
                    <p><strong>Portfolio:</strong> catherineyaroslavtseva.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
