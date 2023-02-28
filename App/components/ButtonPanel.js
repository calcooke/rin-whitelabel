import React from "react";

import Row from "@genericComponents/Row";
import Button from "@genericComponents/Button";

export default class ButtonPanel extends React.Component {
  render() {
    let matrix = this.props.buttonsMatrix;

    return (
      <>
        {matrix.map((row, index) => {
          return (
            <Row key={index}>
              {row.map((button, index) => {
                return (
                  <Button
                    key={index}
                    text={button.text}
                    theme={button.theme || ""}
                    onPress={() => console.log(button.text, "Button clicked")}
                    size={button.size || ""}
                  />
                );
              })}
            </Row>
          );
        })}
      </>
    );
  }
}
