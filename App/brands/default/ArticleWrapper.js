/* eslint-disable quotes */
import React from "react";

import Article from "../../components/Article";

export default class ArticleWrapper extends React.Component {
  render() {
    return (
      <>
        <Article
          articleTitle="Default title"
          text="This is a default brand article"
        />
        <Article
          articleTitle="Default title"
          text="This is a default brand article"
        />
      </>
    );
  }
}
