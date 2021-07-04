
import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';

function PizzaAppTrack() {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default PizzaAppTrack;
