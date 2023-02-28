import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default StyleSheet.create({
  text: {
    color: "#fdf6e3",
  },
  textAccent: {
    color: "#b58900",
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#073642",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonLarge: {
    width: 130,
    height: 130,
    flex: 0,
    alignItems: "center",
  },
  buttonMedium: {
    width: 80,
    height: 80,
    flex: 0,
    alignItems: "center",
  },
  buttonSmall: {
    width: 60,
    height: 60,
    flex: 0,
    alignItems: "center",
  },
  textSmall: {
    fontSize: 10,
  },
  textMedium: {
    fontSize: 20,
  },
  textDouble: {
    fontSize: 25,
  },
  buttonSecondary: {
    backgroundColor: "#F0F5E8",
  },
  buttonAccent: {
    backgroundColor: "#586e75",
  },
});
