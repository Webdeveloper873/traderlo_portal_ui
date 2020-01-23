import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//components
import Home from 'components/Home';
import Domains from 'components/Domains';
import Header from 'common/components/Header';
import Login from 'components/Login';
import Footer from 'common/components/Footer';

//constants
import { routes } from 'common/constants';



const FallbackDisplay = () => (<div>loading...</div>);

//eslint-disable-next-line
const Routes = ({ }) => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => setShowLogin(!showLogin)

  return (
    <Router>
      <Suspense fallback={<FallbackDisplay />}>
        <Header onClickSignInUp={toggleShowLogin} />
        <Login show={showLogin} handleClose={toggleShowLogin} />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={Home} />
          <Route exact path={routes.DOMAINS_PAGE} component={Domains} />
          <Route path="*" render={
            () => (<Redirect to={routes.HOME_PAGE} />)
          } />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default Routes;