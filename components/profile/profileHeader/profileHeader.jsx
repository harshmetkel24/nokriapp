import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./profileHeader.style";

import { images } from "../../../constants";

export default function profileHeader({ profile }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={images.profile} style={styles.image} />
      </View>
    </View>
  );
}
