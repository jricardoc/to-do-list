import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import { 
  useFonts, 
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter';

import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
