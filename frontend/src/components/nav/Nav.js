import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <Link to="/"><li>dashboard</li></Link>
                <Link to="/emails"><li>emails</li></Link>
                <Link to="/onboarding"><li>login/signup</li></Link>
                <Link to="/sendemails"><li>send an email</li></Link>
                <Link to="/about"><li>about us</li></Link>
                <Link to="/contact"><li>contact</li></Link>
            </ul>
        </div>
    )
}

export default Nav;