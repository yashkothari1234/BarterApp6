import * as  React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';

import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Home:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

