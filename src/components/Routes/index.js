import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//components
import Home from 'components/Home';

//constants
import { routes } from 'common/constants';



const FallbackDisplay = () => (<div>loading...</div>);

//eslint-disable-next-line
const Routes = ({ }) => {
  return (
    <Router>
      <Suspense fallback={<FallbackDisplay />}>
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={Home} />
          <Route path="*" render={
            () => (<Redirect to={routes.HOME_PAGE} />)
          } />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;