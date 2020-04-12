/* eslint-disable no-useless-escape */
import React from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';

//actions
import { user } from 'appRedux/actions/user';


//constants
import { routes } from 'common/constants';



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

        if(token) {
            //localStorage.setItem('access_token', token);

            dispatch(user.successViaGoogleLogin(token));
            return <Redirect to={{
                pathname: routes.DASHBOARD_PAGE,
                //state: { from: this.props.location }
            }}/>;
        } else {
            dispatch(user.failedGoogleLogin());
            return <Redirect to={{
                pathname: routes.HOME_PAGE, // <- redirect to homepage
                // state: {
                //     from: this.props.location,
                //     error: error
                // }
            }}/>;
        }

}
export default OAuth2RedirectHandler;