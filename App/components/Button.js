import React from "react";
import { TouchableOpacity } from "react-native";
import AppTextWrapper from "AppTextWrapper";
import ButtonStyles from "ButtonStyles";

const styles = ButtonStyles;

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "large") {
    buttonStyles.push(styles.buttonLarge);
    textStyles.push(styles.textDouble);
  }
  if (size === "small") {
    buttonStyles.push(styles.buttonSmall);
    textStyles.push(styles.textSmall);
  }
  if (size === "medium") {
    buttonStyles.push(styles.buttonMedium);
    textStyles.push(styles.textMedium);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <AppTextWrapper style={textStyles}>{text}</AppTextWrapper>
    </TouchableOpacity>
  );
};
