import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import HomeScreen from '@screens/Home'
import SettingScreen from '@screens/Setting'

import { LocalizationContext } from '@contexts/LocalizationContext'
import Colors from '@utils/colors'

const HomeStackNav = createStackNavigator()
const HomeNavigator = () => (
    <HomeStackNav.Navigator>
        <HomeStackNav.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    </HomeStackNav.Navigator>
)

const SettingStackNav = createStackNavigator()
const SettingNavigator = () => {
    const { translate } = useContext(LocalizationContext)
    return (
        <SettingStackNav.Navigator>
            <SettingStackNav.Screen options={{ title: translate('selectLanguage') }} name="Setting" component={SettingScreen} />
        </SettingStackNav.Navigator>
    )
}

export const MainTabNavigator = () => {
    const MainTabNav = createBottomTabNavigator()
    const { translate } = useContext(LocalizationContext)
    return (
        <MainTabNav.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.lightgrey,
            }}
        >
            <MainTabNav.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    title: translate('home'),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='home-variant'
                            type='material-community'
                            color={focused ? Colors.primary : Colors.lightgrey}
                            size={24}
                        />
                    )

                }}
            />
            <MainTabNav.Screen
                name="Settings"
                component={SettingNavigator}
                options={{
                    title: translate('setting'),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='settings'
                            type='material-community'
                            color={focused ? Colors.primary : Colors.lightgrey}
                            size={24}
                        />
                    )
                }}
            />
        </MainTabNav.Navigator>
    )
}