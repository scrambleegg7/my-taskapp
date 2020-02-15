import React, { Component } from 'react'

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn( this.state )

    }

    render() {
        //console.log("SignIn props ", this.props)
        const { authError, auth } = this.props;
        //alert(JSON.stringify(auth))
        if (auth.uid && auth.emailVerified) return <Redirect to='/' />
        if (!!auth.emailVerified && !!auth.isEmpty) return <Redirect to='/emailverification' />


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignIn</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">{ authError ?  <p>  {authError}  </p> : null      }</div>
                    </div>
                </form>
            </div>
        )
       }

}

const mapStateToProps = (state) => {
    return {
        authError:state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("SignIn state", dispatch)
    return {
        signIn: (cred) => dispatch(signIn(cred))
    }
}


export default connect( mapStateToProps, mapDispatchToProps  )(SignIn);
