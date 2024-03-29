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
import BidPerformance from 'components/BidPerformance';
import Chat from 'components/Chat';
import AccountsAndCards from 'components/AccountsAndCards';
import UserSecurity from 'components/UserSecurity';
import UserProfile from 'components/UserProfile';
import PaymentActivity from 'components/PaymentActivity';
import PublicProfile from 'components/PublicProfile';
import OAuth2RedirectHandler from 'components/OAuth2RedirectHandler';
import ContactUs from 'components/ContactUs';
import Reports from 'components/Reports';

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
          <Route exact path={routes.DOMAINS_PAGE} render={props => <Domains title='Domains' {...props}/>} />
          <Route exact path={routes.DOMAINS_VIEW_PAGE} render={() => <DomainDetails/>} />
          <Route exact path={routes.SELLING_PAGE} render={() => <Selling />} />
          <Route exact path={routes.SELLING_DOMAINS_PAGE} render={props => <SellingDomain {...props} />} />
          <Route exact path={routes.MY_BIDS} render={() => <UserBids />} />
          <Route exact path={routes.MY_ORDERS} render={() => <UserOrders />} />
          <Route exact path={routes.MY_WATCHINGS} render={() => <UserWatchings />} />
          <Route exact path={routes.DASHBOARD_PAGE} render={() => <Dashboard />} />
          <Route exact path={routes.CUSTOMER_ORDERS} render={() => <CustomerOrders />} />
          <Route exact path={routes.LISTING_AND_STATUS} render={() => <ListingAndStatus />} />
          <Route exact path={routes.BIDS_PERFORMANCE} render={() => <BidPerformance />} />
          <Route exact path={routes.CHAT} render={props => <Chat {...props} />} />
          <Route exact path={routes.ACCOUNTS_AND_CARDS} render={() => <AccountsAndCards />} />
          <Route exact path={routes.ACCOUNTS_AND_SECURITY} render={() => <UserSecurity />} />
          <Route exact path={routes.USER_PROFILE} render={() => <UserProfile />} />
          <Route exact path={routes.PAYMENT_ACTIVITY} render={() => <PaymentActivity />} />
          <Route exact path={routes.PUBLIC_PROFILE} render={() => <PublicProfile />} />
          <Route exact path={routes.OAUTH2_REDIRECT_HANDLER} render={() => <OAuth2RedirectHandler />} />
          <Route exact path={routes.CONTACT_US} render={() => <ContactUs />} />
          <Route exact path={routes.REPORT} render={() => <Reports />} />
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