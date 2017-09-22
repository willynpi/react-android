//place code in here for IOS
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

//Creating a componet
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App); // Only root component uses 'AppRegistry'

