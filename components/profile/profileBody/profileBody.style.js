import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    width: "80%",
  },
  profileFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.medium,
  },
  button: {
    borderRadius: SIZES.xSmall / 1.25,
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "DMMedium",
    fontSize: SIZES.medium,
  },
});

export default styles;
