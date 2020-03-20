import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//components
import Routes from 'components/Routes';
import Viewport from 'common/components/Viewport';

//utils
import { store, persistor } from 'appRedux/store';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const propTypes = {
}

const defaultProps = {
}

//eslint-disable-next-line
const App = ({ }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Viewport>
          <Routes />
        </Viewport>
      </PersistGate>
    </ReduxProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;