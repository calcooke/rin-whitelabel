import React from "react";
import { View, Text } from "react-native";

import ArticleStyles from "ArticleStyles";

const styles = ArticleStyles;

export default ({ articleTitle, text }) => (
  <View style={styles.article}>
    <Text style={styles.title}>{articleTitle}</Text>
    <Text>{text}</Text>
  </View>
);
