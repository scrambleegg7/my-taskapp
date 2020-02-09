import React  from 'react'
import { Link } from 'react-router-dom';

import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';

import  { connect } from 'react-redux'; 

const Navbar= (props) => {

    const { auth } = props;
    console.log("Navbar firebase state props", auth )

    const links = auth.uid ? <SignedInLInks /> : <SignedOutLInks />
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">

            <Link to="/" className="brand-logo">myTaskApp Link </Link>
            {links}
        </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log("navbar ",state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);