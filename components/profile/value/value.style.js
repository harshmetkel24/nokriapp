import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

export default StyleSheet.create({
  container: {
    marginVertical: SIZES.xSmall,
    flex: 1,
    backgroundColor: COLORS.tertiary,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xSmall / 1.25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.large / 1.25,
    fontFamily: "DMMedium",
  },
});
