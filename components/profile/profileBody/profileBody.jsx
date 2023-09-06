import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "../profileBody/profileBody.style";

import Value from "../value/value";

const keyVal = [
  { key: "Name", value: "John Doe" },
  { key: "Email", value: "john@gmail.com" },
  { key: "Phone", value: "123456789" },
  { key: "Address", value: "New York, USA" },
  { key: "Education", value: "Masters" },
  { key: "Experience", value: "5 Years" },
  { key: "Skills", value: "HTML, CSS, JavaScript" },
];

const profileBody = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={keyVal}
        renderItem={({ item }) => (
          <Value keyVal={item.key} value={item.value} />
        )}
        keyExtractor={(item) => item.key + item.value}
      />

      <View style={styles.profileFooter}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default profileBody;
