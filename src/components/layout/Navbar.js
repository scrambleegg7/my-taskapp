import React  from 'react'
import { Link } from 'react-router-dom';

import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';

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

export default Navbar;