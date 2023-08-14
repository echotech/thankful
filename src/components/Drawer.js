import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../screens/MainPage';
import HistoryPage from '../screens/HistoryPage'; 

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
     <DrawerNavigator.Navigator initialRouteName="Home">
   <DrawerNavigator.Screen name="Home" component={MainPage} />
   {/* Comment out HistoryPage */}
   {/* <DrawerNavigator.Screen name="History" component={HistoryPage} /> */}
</DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
