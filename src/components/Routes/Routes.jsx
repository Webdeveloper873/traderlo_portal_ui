import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const LANDING_PAGE_PATH = '/traderlo';

const FallbackDisplay = () => (<div>loading...</div>);
const MockComponent = () => <div>Mock Component</div>

//eslint-disable-next-line
const Routes = ({ }) => {
  return (
    <Router>
      <Suspense fallback={<FallbackDisplay/>}>
        <Switch>
          <Route exact path={LANDING_PAGE_PATH} component={MockComponent} />
          <Route path="*" render={
            () => (<Redirect to={LANDING_PAGE_PATH} />)
          } />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;