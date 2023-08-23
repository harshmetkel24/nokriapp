import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "expo-router/drawer";
import { ScreenHeaderBtn } from "../components";
import { icons } from "../constants";

SplashScreen.preventAutoHideAsync();

export default function Layout({ navigation }) {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // only show the homescreen if fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // use Drawer for the main screens
  return (
    <Drawer
      screenOptions={{
        headerTitle: "",
        // headerLeft: () => {
        //   return (
        //     <ScreenHeaderBtn
        //       // handlePress={() => navigation.toggleDrawer()}
        //       iconUrl={icons.menu}
        //       dimension="60%"
        //     />
        //   );
        // },
      }}
    />
  );
}
