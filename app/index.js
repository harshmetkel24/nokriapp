import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home({ navigation }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    // SafeAreaView allows to show content without notches and camera cutouts
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            elevation: 0,
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                handlePress={() => navigation.toggleDrawer()}
                iconUrl={icons.menu}
                dimension="60%"
              />
            );
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            );
          },
          headerTitle: "",
        }}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
