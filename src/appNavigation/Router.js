import React from 'react'
import { Text, Animated, Easing, TouchableOpacity } from 'react-native'
import { StackNavigator, createDrawerNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'
import SettingScreen from '../screens/SettingScreen'
import FshareScreen from '../screens/FshareScreen'
import DetailsScreen from '../screens/DetailsScreen'
import Bookmarks from '../screens/Bookmarks'
import FshareMovieScreen from '../screens/FshareMovieScreen'
import AboutScreen from '../screens/AboutScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomNavBar from './CustomNavBar'
import DrawerContent from './DrawerContent'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import { Colors } from '../themes';


export const resetAction = (name) => NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: name })],
});

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const stackHome = StackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      // header: <CustomNavBar navigation={navigation} />
      // title: "Movie hih",
      // headerLeft: (
      //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
      //     <Ionicons name="ios-menu" size={30} style={{paddingHorizontal: 10}} />
      //   </TouchableOpacity>
      // ),
      // headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  MovieScreen: {
    screen: MovieScreen,
    navigationOptions: (props) => ({
      title: "Movie",
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: Colors.background
      },
      headerTintColor: '#fff'
    }),
  },
},{
  transitionConfig: getSlideFromRightTransition
})

const stackBookMarks = StackNavigator({
  bookmark: {
    screen: Bookmarks,
    navigationOptions: ({ navigation }) => ({
      // header: <CustomNavBar navigation={navigation} />
      // title: "Movie hih",
      // headerLeft: (
      //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
      //     <Ionicons name="ios-menu" size={30} style={{paddingHorizontal: 10}} />
      //   </TouchableOpacity>
      // ),
      // headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  MovieScreen: {
    screen: MovieScreen,
    navigationOptions: (props) => ({
      title: "Movie",
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: Colors.background
      },
      headerTintColor: '#fff'
    }),
  },
},{
  transitionConfig: getSlideFromRightTransition
})

const stackGetLink = StackNavigator({
  FshareScreen: {
    screen: FshareScreen,
    navigationOptions: ({ navigation }) => ({
      // header: <CustomNavBar navigation={navigation} />
      title: "Fshare Service",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} style={{paddingHorizontal: 10}} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  FshareMovieScreen: {
    screen: FshareMovieScreen,
    navigationOptions: (props) => ({
      title: "Movie",
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: Colors.background
      },
      headerTintColor: '#fff'
    }),
  },
},{
  transitionConfig: getSlideFromRightTransition
})


const stackAbout = StackNavigator({
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      // header: <CustomNavBar navigation={navigation} />
      title: "About",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} style={{paddingHorizontal: 10}} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  // FshareMovieScreen: {
  //   screen: FshareMovieScreen,
  //   navigationOptions: (props) => ({
  //     title: "Movie",
  //     tabBarVisible: false,
  //     headerStyle: {
  //       backgroundColor: Colors.background
  //     },
  //     headerTintColor: '#fff'
  //   }),
  // },
},{
  transitionConfig: getSlideFromRightTransition
})

stackHome.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const tabNav = TabNavigator({
  tabHome: {
    screen: stackHome,
    navigationOptions: {
      tabBarLabel: "Movie",
      // tabBarVisible: false
      // tabBarIcon: ({ tintColor }) => <Ionicons name={"glass"} size={30} color={tintColor} />
    }
  },
  bookMarks: {
    screen: stackBookMarks,
    navigationOptions: {
      tabBarLabel: "Bookmarks",
      // tabBarIcon: ({ tintColor }) => <Ionicons name={"glass"} size={30} color={tintColor} />
    }
  }

}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'tabHome') {
        iconName = `ios-home${focused ? '' : '-outline'}`
      } else if (routeName === 'bookMarks') {
        iconName = `ios-bookmarks${focused ? '' : '-outline'}`
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  initialRouteName: 'tabHome',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  },
  animationEnabled: false,
  swipeEnabled: false,
  });


// Manifest of possible screens
const PrimaryNav = createDrawerNavigator({
  HomeItem: {
    screen: tabNav,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} />
    },
  },
  FshareItem: {
    screen: stackGetLink,
    // navigationOptions: {
    //   drawerLabel: "Fshare",
    //   drawerIcon: ({ tintColor }) => <Ionicons name="logo-foursquare" size={24} />
    // },
    navigationOptions: ({ navigation }) => ({
      // header: <CustomNavBar navigation={navigation} />
      // title: "Movie hih",
      drawerLabel: "Fshare Film",
      drawerIcon: ({ tintColor }) => <Ionicons name="logo-foursquare" size={24} />,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} style={{paddingHorizontal: 10}} />
        </TouchableOpacity>
      ),
      // headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  AboutScreen: {
    screen: stackAbout,
    navigationOptions: {
      drawerLabel: "About",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-bug" size={24} />
    },
  }
}, {
  // contentComponent: DrawerContent
})

export default PrimaryNav
