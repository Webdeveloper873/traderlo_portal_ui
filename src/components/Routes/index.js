import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//common components
import UserSideBar from 'common/components/UserSidebar';
import Header from 'common/components/Header';
import Login from 'components/Login';
import Footer from 'common/components/Footer';

//components
import Home from 'components/Home';
import Selling from 'components/Selling';
import SellingSub from 'components/SellingSub';
import Domains from 'components/Domains';
import UserBuyActivity from 'components/UserBuyActivity';

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
          <Route exact path={routes.SELLING_SUB_PAGE} render={() => <SellingSub />} />
          <Route exact path={routes.CHAT_PAGE} render={() => <UserSideBar />} />
          <Route exact path={routes.MY_BIDS} render={() => <UserBuyActivity />} />
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