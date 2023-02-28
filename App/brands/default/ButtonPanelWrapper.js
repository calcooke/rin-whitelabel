import React from "react";

import ButtonPanel from "../../components/ButtonPanel";

export default class ButtonPanelWrapper extends React.Component {
  // static propTypes = {
  //   handleTap: true,
  // };

  render() {
    const buttonsMatrix = [
      [
        { text: "Home", theme: "secondary" },
        { text: "Tour", theme: "secondary" },
        { text: "Info", theme: "secondary" },
        {
          text: "Map",
          theme: "secondary",
        },
      ],
    ];

    return <ButtonPanel buttonsMatrix={buttonsMatrix} />;
  }
}
