import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App/App';

import './index.css';
import '@fontsource/montserrat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        // basename="goit-test"
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
