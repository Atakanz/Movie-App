import React from 'react';
import {MainStack} from './Navigation/MainStack';
import {store} from './Management/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
