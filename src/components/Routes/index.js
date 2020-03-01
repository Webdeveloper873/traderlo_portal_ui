import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//common components

import Header from 'common/components/Header';
import Login from 'components/Login';
import Footer from 'common/components/Footer';

//components
import Dashboard from 'components/Dashboard';
import SellingDomain from 'components/SellingDomain';
import Home from 'components/Home';
import Selling from 'components/Selling';
import Domains from 'components/Domains';
import UserBids from 'components/UserBids';
import UserOrders from 'components/UserOrders';
import UserWatchings from 'components/UserWatchings';
import CustomerOrders from 'components/CustomerOrders';
import ListingAndStatus from 'components/ListingAndStatus';

//subroute component
import DomainDetails from 'components/Domains/components/DomainDetails'

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
          <Route exact path={routes.DOMAINS_PAGE} render={() => <Domains title='Domains'/>} />
          <Route exact path={routes.DOMAINS_VIEW_PAGE} render={() => <DomainDetails/>} />
          <Route exact path={routes.SELLING_PAGE} render={() => <Selling />} />
          <Route exact path={routes.SELLING_DOMAINS_PAGE} render={() => <SellingDomain />} />
          <Route exact path={routes.MY_BIDS} render={() => <UserBids />} />
          <Route exact path={routes.MY_ORDERS} render={() => <UserOrders />} />
          <Route exact path={routes.MY_WATCHINGS} render={() => <UserWatchings />} />
          <Route exact path={routes.DASHBOARD_PAGE} render={() => <Dashboard />} />
          <Route exact path={routes.CUSTOMER_ORDERS} render={() => <CustomerOrders />} />
          <Route exact path={routes.LISTING_AND_STATUS} render={() => <ListingAndStatus />} />
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