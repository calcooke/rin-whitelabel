import React from "react";
import { View, Text } from "react-native";

import ArticleWrapper from "ArticleWrapper";
import ButtonPanelWrapper from "ButtonPanelWrapper";
import MainStyles from "MainStyles";

const styles = MainStyles;

export default ({ text, bgColor }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 32, padding: 10, alignSelf: "center" }}>
      {text}
    </Text>
    <ArticleWrapper />
    <ButtonPanelWrapper />
  </View>
);
