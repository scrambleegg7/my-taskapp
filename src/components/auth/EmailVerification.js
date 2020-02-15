
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import { Redirect } from 'react-router-dom';

class EmailVerification extends Component {

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
        console.log( "EmailVerification comp this.state on creating user.", this.state);
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;   
        console.log("auth of EmailVerification", auth)     
        if (auth.uid && auth.emailVerified) return <Redirect to='/' />
        
        return (
            <div className="container">
                <p>
                  あなたのE-Mailアカウントを確認してください。: 
                  もしたしたらSpam folderに配信されているかもしれませんので
                  再度確認してください。
                  
                  もし確認メッセージが届いていない場合は下記のボタンで再送してください。
                  メッセージ確認後にシステムに入力できるようになります。
                </p>
                <button
                  type="button"
                  
                >
                  Send confirmation E-Mail
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);
