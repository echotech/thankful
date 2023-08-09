import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import HistoryPage from './HistoryPage'; // You'll need to create this component

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainPage} />
        <Drawer.Screen name="History" component={HistoryPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
