import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='content'>
            <div className='left-home'>
                <h1> {'>'} Greetings!</h1>
                <p>Welcome to my portfolio page. Feel free to look around!</p>
            </div>
            <div className='right-home'>
                <hr></hr>
                <p>I am a software developer who is looking for new opportunities. 
                    In particular, I am passionate about the potential applications of 
                    artificial intelligence in modern technology. I believe it can be used
                    as a tool to assist people on both a professional and day-to-day basis. 
                    Some of the artwork on this page, including the header, was made with the
                    assistance of artificial intelligence!
                    Additionally, I am adept at data analysis and processing. 
                </p>
            </div>
        </div>
    );
}

export default Home;
