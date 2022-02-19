import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";
import { Scheduling } from "../screen/Scheduling";
import { Success } from "../screen/Success";
import { SchedulingDetails } from "../screen/SchedulingDetails";
import { CarDetails } from "../screen/CarDetails";
import { MyCars } from "../screen/MyCars";
import { Splash } from "../screen/Splash";
import { SignIn } from "../screen/SignIn";
import { SignUpFirstStep } from "../screen/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screen/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Success" component={Success} />
    </Navigator>
  );
};
