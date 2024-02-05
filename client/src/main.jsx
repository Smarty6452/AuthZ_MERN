import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '/src/redux/store.js';
import { Provider } from 'react-redux'
import {persistor} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
PersistGate

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <App />
    </PersistGate>
  </Provider>,
)
