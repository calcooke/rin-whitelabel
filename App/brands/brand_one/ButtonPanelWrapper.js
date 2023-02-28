import React from "react";
import { View } from "react-native";

import ButtonPanel from "../../components/ButtonPanel";

export default class ButtonPanelWrapper extends React.Component {
  render() {
    const buttonsMatrix = [
      [
        { text: "Medium", theme: "secondary", size: "medium" },
        { text: "Large", theme: "secondary", size: "large" },
        { text: "Small", theme: "secondary", size: "small" },
      ],
    ];

    return (
      <View style={{ alignItems: "center" }}>
        <ButtonPanel buttonsMatrix={buttonsMatrix} />
      </View>
    );
  }
}
