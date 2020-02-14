import React, { Component } from 'react'

import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import { Redirect } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
        isAdmin: false
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }

    handleCheck = (e) => {
        this.setState({
            isAdmin: e.target.checked
        })
      }    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SignUp comp this.state on creating user.", this.state);
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        
        const isInValid = this.state.password !== this.state.password2;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password2">Password confirmed</label>
                        <input type="password" id="password2" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="isAdmin">
                            <input type="checkbox" id="isAdmin" checked={this.state.isAdmin} onChange={this.handleCheck} />
                            <span>Administrator ?</span>
                        </label>
                    </div>

                    
                    <div className="input-field">
                        <button disabled={isInValid}  className="btn blue lighten-1 z-depth-0">SIGN UP</button>
                        <div className="red-text center">{ authError ?  <p>  {authError}  </p> : null      }</div>
                    </div>
                    
                </form>
            </div>
        )
       }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch( signUp(newUser) )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
