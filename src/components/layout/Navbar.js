import React  from 'react'
import { Link } from 'react-router-dom';

import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';

import  { connect } from 'react-redux'; 

const Navbar= () => {
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">

            <Link to="/" className="brand-logo">myTaskApp Link </Link>
            
            <SignedInLInks />
            <SignedOutLInks />
            
        
        </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
    console.log("navbar ",state)
}


export default connect(mapStateToProps)(Navbar);