import React from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';

//actions
import { user } from 'appRedux/actions/user';


const OAuth2RedirectHandler  = () => {
    const dispatch = useDispatch();
    const getUrlParameter =(name) => {
        console.log(name);
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    
        
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');
        console.log(error,'error')

        console.log("Token" + token)
        if(token) {
            //localStorage.setItem('access_token', token);
            console.log(token,'to user action')
            dispatch(user.successViaGoogleLogin(token));
            return <Redirect to={{
                pathname: "/user/dashboard",
                //state: { from: this.props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/public_profile",
                // state: { 
                //     from: this.props.location,
                //     error: error 
                // }
            }}/>; 
        }
    
}
export default OAuth2RedirectHandler;