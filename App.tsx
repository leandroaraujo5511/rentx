import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Scheduling } from "./src/screens/Scheduling";
import theme from "./src/styles/theme";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  const initApplication = async () => {
    SplashScreen.preventAutoHideAsync();
    setLoading(false);
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    initApplication();
  }, []);

  if (!fontsLoader) {
    return null;
  }

  return !loading ? (
    <ThemeProvider theme={theme}>
      <Scheduling />
    </ThemeProvider>
  ) : null;
}
