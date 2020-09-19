import React, { useContext, useState } from 'react';
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
    const [user ,setUser] = useState(false)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleLogIn =()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName , email} = result.user;
            const googleNewUser = {name : displayName ,  emails:email}
            setLoggedInUser(googleNewUser);
            history.replace(from);
          })
          .catch(function(error) {
            const newUserInfo = { ...loggedInUser };
                newUserInfo.message = error.message;
                setLoggedInUser(newUserInfo);
          });
    }
    
    const fbLogIn =()=>{
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {
            const {displayName , email} = result.user;
            const googleNewUser = {name : displayName ,  emails:email}
            setLoggedInUser(googleNewUser);
            history.replace(from);

        }).catch(function(error) {
            const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    setLoggedInUser(newUserInfo);
          });
    }
    // submit form all function
    const handleSubmit = (e) => {
        if (user && loggedInUser.emails && loggedInUser.password) {
           firebase.auth().createUserWithEmailAndPassword(loggedInUser.emails, loggedInUser.password)
            .then(res => {
                // const {displayName , email} = res.user;
                // const googleNewUser = {name : displayName ,  emails:email}
                // setLoggedInUser(googleNewUser);
                history.replace(from);
                user.updateProfile({
                    displayName:loggedInUser.name ,
                })
                
        })
        .catch(function(error) {
            const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
          });
        }
        if(!user && loggedInUser.emails && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.emails, loggedInUser.password)
            .then(res => {
                const {displayName , email} = res.user;
                const googleNewUser = {name : displayName , emails:email}
                setLoggedInUser(googleNewUser);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = { ...loggedInUser };
                newUserInfo.message = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            });
        } 
        e.preventDefault();
    }
    const handleChange = (e) => {
        let emailValid = true;
            if (e.target.name === 'emails'){
              emailValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid;

        }
        if(emailValid) {
            const newUserInfo = {...loggedInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
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
            <Form className='log_form' onSubmit={handleSubmit}>
                <h4>Login</h4>
                {user && <Form.Group >
                    <Form.Control name='name' onBlur= {handleChange} className='form_border' type="text" placeholder="Enter Your Name" />
                    </Form.Group>}
                <Form.Group >
                    <Form.Control name='emails' onBlur= {handleChange} className='form_border' type="email" placeholder="UserName Or Email" />
                </Form.Group>

                <Form.Group >
                    <Form.Control name='password' onBlur= {handleChange} className='form_border' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className='forgot d-flex justify-content-between'>
                    <Form.Check type="checkbox" label="Remember Me " />
                    <Link className='password'>Forgot Password</Link>
                </Form.Group>

                <div className='d-flex justify-content-center login_btn'>
                    <input className='submit_btn' variant="primary" type="submit" value='Log In' />
                </div> 
               <div className='text-center text-light span_link'>
                   {user ? 
                       <span>You alrady have an account? <button className='btn btn-outline-warning' onClick={() =>setUser(!user)}> Log in </button> </span> : <span>Don’t have an account? <button className='btn btn-outline-warning' onClick={() => setUser(!user)}> Create an account</button> </span>
                   }
               </div>
            </Form>

            <div className="form_bottom">
                <div className='d-flex justify-content-center'>
                    <span></span> <h6>OR</h6>
                    <span></span>
                </div>
                {/* fb login btn */}
                <div className='fbToGoogle'>
                    <button className='fb-btn' onClick={fbLogIn}>
                        <img src={fb} style={{width:'30px', float:'left',marginLeft:'20px'}} alt=""/> Continue with Facebook
                        </button>
                {/* //google signin button */}
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