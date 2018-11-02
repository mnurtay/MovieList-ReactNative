import React from 'react'
import Index from './src/screen1'
// import { createBottomTabNavigator } from 'react-navigation'
// import { Ionicons } from '@expo/vector-icons'
// import { MaterialIcons } from '@expo/vector-icons'
// import { createDrawerNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return <Index />;
  }
}

// export default createDrawerNavigator(
//   {
//     Screen1: {
//       screen: One,
//       navigationOptions: {
//         drawerLabel: 'Stargate',
//         drawerIcon: ({ tintColor }) => (
//           <MaterialIcons name='grade' size={24} style={{color: tintColor}}/>
//         )
//       }
//     },
//     Screen2: {
//       screen: Two,
//       navigationOptions: {
//         drawerLabel: 'Batman',
//         drawerIcon: ({ tintColor }) => (
//           <MaterialIcons name='favorite' size={24} style={{color: tintColor}}/>
//         )
//       }
//     },
//     Screen3: {
//       screen: Three,
//       navigationOptions: {
//         drawerLabel: 'Spiderman',
//         drawerIcon: ({ tintColor }) => (
//           <MaterialIcons name='pets' size={24} style={{color: tintColor}}/>
//         )
//       }
//     }
//   },{
//     initialRouteName: 'Screen1',
//     contentOptions: {
//       activeTintColor: '#30d0fe',
//     }
//   }
// )

// export default createBottomTabNavigator(
//   {
//     Stargate: One,
//     Batman: Two,
//     Spiderman: Three
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state
//         let iconName
//         if (routeName === 'Stargate') {
//           iconName = focused ? 'ios-videocam':'ios-play'
//         } else if (routeName === 'Batman') {
//           iconName = focused ? 'ios-videocam':'ios-play'
//         } else if (routeName === 'Spiderman') {
//           iconName = focused ? 'ios-videocam':'ios-play'
//         }
//         return <Ionicons name={iconName} size={25} color={tintColor}/>
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: '#30d0fe',
//       inactiveTintColor: 'gray'
//     }
//   }
// )

