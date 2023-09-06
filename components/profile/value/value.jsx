import { View, Text } from "react-native";
import React from "react";

import styles from "./value.style";

const value = ({ keyVal, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {keyVal}
        {" : "}
      </Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default value;
