import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

//components
import Routes from './components/Routes';
import Viewport from './common/components/Viewport';

import configureStore from './appRedux/store';

const propTypes = {
}

const defaultProps = {
}

const store = configureStore();

//eslint-disable-next-line
const App = ({ }) => {
  return (
    <ReduxProvider store={store}>
      <Viewport>
        <Routes />
      </Viewport>
    </ReduxProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;