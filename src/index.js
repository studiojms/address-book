import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { FakeHttpApi } from './httpApi';
import { setupStore } from './store';
import App from './App';

export const index = () => {
  const store = setupStore({
    httpApi: new FakeHttpApi(),
  });

  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
  );
};

index();
