import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import { AppStackRoutes } from "./app.stack.routes";

import { SignUpSecondStep } from "../screen/SignUp/SignUpSecondStep";
import { Home } from "../screen/Home";
import { MyCars } from "../screen/MyCars";

import CarSvg from "../assets/car.svg";
import HomeSvg from "../assets/home.svg";
import PeopleSvg from "../assets/people.svg";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarLabel: "",
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 100,
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} color={color} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} color={color} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} color={color} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
};
