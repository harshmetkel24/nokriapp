import { View, Text } from "react-native";
import React from "react";

const value = ({ keyVal, value }) => {
  return (
    <View>
      <Text>
        {keyVal}
        {"  "}
        {value}
      </Text>
    </View>
  );
};

export default value;
