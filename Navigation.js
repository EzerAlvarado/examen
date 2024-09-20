import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

//icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeStackNavigator = createNativeStackNavigator(); // Aquí está la corrección

function MyStack() {
  return (
    <HomeStackNavigator.Navigator 
    initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen 
      name="HomeScreen" 
      component={HomeScreen} />
      <HomeStackNavigator.Screen 
      name="Stack" 
      component={StackScreen} 
      options={{
        headerBackTitleVisible: false
      }}/>
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "Red",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Coito",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-heart"
              size={size}
              color={color}
            />
          ),
          tabBarBadge: 69,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Confis",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brightness-5"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
