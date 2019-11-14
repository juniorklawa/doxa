import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native'
import Login from './src/pages/Login'
import Explore from './src/pages/Explore'
import LocationList from './src/pages/LocationList'
import Establishment from './src/pages/Establishment'
import Ranking from './src/pages/Ranking'
import Profile from './src/pages/Profile'


const TabNavigator = createBottomTabNavigator({
  Explorar: Explore,
  Ranking: Ranking,
  Promoções: Explore,
  Perfil: Profile
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Explorar') {
        return <Image
          style={{ width: 25, height: 25, resizeMode: 'cover'}}
          source={require('./src/assets/explorar.png')}
        />
      } else if (routeName === 'Promoções') {
        return <Image
          style={{ width: 25, height: 25, resizeMode: 'cover' }}
          source={require('./src/assets/promocao.png')}
        />
      } else if (routeName === 'Perfil') {
        return <Image
          style={{ width: 25, height: 25, resizeMode: 'cover'}}
          source={require('./src/assets/perfil.png')}
        />
      } else if (routeName === 'Ranking') {
        return <Image
          style={{ width: 25, height: 25, resizeMode: 'cover'}}
          source={require('./src/assets/ranking.png')}
        />
      }

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