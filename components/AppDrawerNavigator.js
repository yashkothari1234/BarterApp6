import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import  SettingScreen  from '../screens/SettingScreen'
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
Barter : {
    screen : AppTabNavigator
    },
      Settings : {
    screen : SettingScreen
    },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Barter'
  })