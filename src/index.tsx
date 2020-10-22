import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Palette from '../src/components/Palette';

const App = () => (
  <Provider store={store}>
    <Palette />
  </Provider>
);

render(<App />, document.querySelector('#root'));
