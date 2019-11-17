import React from 'react';
import AppContainer from './src/Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './src/reducer/Index';

export default class App extends React.Component{

  render(){
    return (
      <Provider store={createStore(reducer)}>
        <AppContainer></AppContainer>
      </Provider>
    );
  }
}