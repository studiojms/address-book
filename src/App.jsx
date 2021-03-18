import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AddressBook from './AddressBook';
import './App.css';

const App = ({ store }) => (
  <Provider store={store}>
    <main className="app">
      <AddressBook />
    </main>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
