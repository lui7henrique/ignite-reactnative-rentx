import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";

import theme from "./src/styles/theme";
import { Toast } from "./src/components/Toast";
import { AppProvider } from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
        <Toast />
      </NavigationContainer>
    </ThemeProvider>
  );
}
