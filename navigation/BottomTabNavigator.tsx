import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {
  BottomTabParamList,
  HomeNavigatorParamList,
  TabTwoParamList
} from '../types'

import ProfilePicture from '../components/ProfilePicture'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator () {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='md-home' color={color} />
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-search' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='Notifications'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-notifications-outline' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='Messages'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-mail' color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon (props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>()

function HomeNavigator () {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Ionicons
              name={'logo-twitter'}
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'star-four-points-outline'}
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 15
          },
          headerLeft: () => (
            <ProfilePicture
              size={45}
              image={
                'https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/45285489_1926266244094561_5514450094931312640_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=Ez4EzOiVtXMAX-8l9Ci&_nc_ht=scontent.fqsc1-1.fna&oh=146fad2b16a21a2668e8aa68e4279e9a&oe=5F6DB3A8'
              }
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15
          }
        }}
      />
    </TabOneStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator () {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='TabTwoScreen'
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  )
}
