import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: 125,
    width: 125,
    borderRadius: SIZES.small / 1.25,
    padding: SIZES.xSmall / 2,
    backgroundColor: COLORS.white,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: SIZES.small / 1.25,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});

export default styles;
