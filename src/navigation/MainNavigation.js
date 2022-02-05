import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './screens/SettingsScreen';
import FunctionalScreeen from './screens/FunctionalScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const settingsScreen = 'Settings';
const funcScreen = 'Main';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={settingsScreen}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let routeName = route.name;

            if (routeName === settingsScreen) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === funcScreen) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={settingsScreen} component={SettingsScreen} />
        <Tab.Screen name={funcScreen} component={FunctionalScreeen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
