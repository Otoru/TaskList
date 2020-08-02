import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Global } from 'components/styled';
import store, { persistor } from 'store';
import App from 'components';

const element = (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Global />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(element, document.getElementById('root'));
