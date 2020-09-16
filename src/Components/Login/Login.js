import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Login.css';
import fb from '../../images/Icon/fb.png';
import google from '../../images/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleLogIn =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName , email} = result.user;
            const googleNewUser = {name : displayName ,  email}
            setLoggedInUser(googleNewUser);
            history.replace(from);
            console.log(googleNewUser);
          })
          
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    
    const fbLogIn =()=>{

    }
    
    return (
        <div className="banner_area">
            <div className="menu_area">
                <Header></Header>
            </div>
            <div className="banner_wrapper form_wrapper">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 offset-3">
            <Form className='log_form'>
                <Form.Group >
                    <h4>Login</h4>
                    <Form.Control className='form_border' type="email" placeholder="UserName Or Email" />
                </Form.Group>
                <Form.Group >
                    <Form.Control className='form_border' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className='forgot d-flex justify-content-between'>
                    <Form.Check type="checkbox" label="Remember Me " />
                    <Link className='password'>Forgot Password</Link>
                </Form.Group>

                <div className='d-flex justify-content-center login_btn'>
                    <Button className='submit_btn' variant="primary" type="submit">Login</Button>
                </div>
               <div className='text-center text-light span_link'>
                   <span>Don’t have an account? <Link> Create an account</Link> </span>
               </div>
            </Form>

            <div className="form_bottom">
                <div className='d-flex justify-content-center'>
                    <span></span> <h6>OR</h6>
                    <span></span>
                </div>
                <div className='fbToGoogle'>
                    <button className='fb-btn' onClick={fbLogIn}>

                        <img src={fb} style={{width:'30px', float:'left',marginLeft:'20px'}} alt=""/> Continue with Facebook
                        
                        </button>
                    <button className='fb-btn' onClick={googleLogIn}>

                        <img src={google} style={{width:'30px', float:'left',marginLeft:'20px'}} alt=""/> Continue with Google
                        
                    </button>
                </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;