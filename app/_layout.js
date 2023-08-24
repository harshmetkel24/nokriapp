import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "expo-router/drawer";
import { ScreenHeaderBtn } from "../components";
import { icons, images } from "../constants";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Layout({ navigation }) {
  const router = useRouter();
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
      initialRouteName="index"
      screenOptions={{
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={images.profile}
            dimension="100%"
            handlePress={() => router.push("profile")}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <ScreenHeaderBtn iconUrl={icons.home} dimension="100%" />
          ),
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
          drawerIcon: () => (
            <ScreenHeaderBtn iconUrl={icons.notification} dimension="100%" />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
        }}
      />
    </Drawer>
  );
}
