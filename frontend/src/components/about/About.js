import React from 'react';
import Tim from '../../assets/tim.jpg';
import Chris from '../../assets/chris.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="person-card">
                <div className="img-cont"><img src={Tim} className="picture" alt="Timothy McGowen" /></div>
                <h3>Timothy McGowen</h3>
                <h4>FullStack Developer</h4>
            </div>
            <div className="person-card">
                <h2>About Us and the Project</h2>
                <h5>Chris and Tim's Excellent Emailing Service is a simple idea.</h5>
                <p>You want to send emails to a list of people, but not a list so large that you want to use a large complex marketing system to do it. So where do you go?</p>
                <p>You come to us. With our handy tool we will help you set up your local gmail account to send a few hundred emails a day, but be warned, we do not garntee that you won't be flagged as a spammer by your email cleint. We do our best to prevent such cases, but it is a risk as right now we opperate by way of YOUR email service using our handy tool to make the process easier.</p>
            </div>
            <div className="person-card">
                <div className="img-cont"><img src={Chris} className="picture" alt="Chris York" /></div>
                <h3>Chris York</h3>
                <h4>FullStack Developer</h4>
            </div>
        </div>
    )
}

export default About;