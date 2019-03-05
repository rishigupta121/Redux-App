import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    // Provider Tag Facilitates the communication between react and redux they are two Separate library
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Redux App" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;