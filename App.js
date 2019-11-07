import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './src/pages/Login'
import Explore from './src/pages/Explore'
import LocationList from './src/pages/LocationList'
import Establishment from './src/pages/Establishment'


const TabNavigator = createBottomTabNavigator({
  Explore: Explore,
  Procurar: Explore,
  Perfil: Explore
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Missões') {
        iconName = `check`;
      } else if (routeName === 'Reportar') {
        iconName = `bullhorn`;
      } else if (routeName === 'Recompensas') {
        iconName = `star`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#1B8161',
    inactiveTintColor: 'gray',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login, navigationOptions: {
      header: null
    }
  },
  LocationList: {
    screen: LocationList, navigationOptions: {
      header: null
    }
  },
  Establishment: {
    screen: Establishment, navigationOptions: {
      header: null
    }
  },
  Tab: {
    screen: TabNavigator, navigationOptions: {
      header: null
    }
  },

});




export default createAppContainer(AppNavigator);