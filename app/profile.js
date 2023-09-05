import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { ProfileBody, ProfileHeader } from "../components";
import { COLORS, SIZES } from "../constants";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <ProfileHeader />
          <ProfileBody />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
