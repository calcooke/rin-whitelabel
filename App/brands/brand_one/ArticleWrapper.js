import React from "react";
//import PropTypes from 'prop-types';

import Article from "../../components/Article";

export default class ArticleWrapper extends React.Component {
  render() {
    return (
      <>
        <Article
          articleTitle="Default title"
          text="But he denied all of Fox backed Donald Trump's baseless claims of widespread fraud after his election defeat.
Mr Murdoch's comments were revealed in a legal filing as part of a defamation lawsuit brought by ballot tech company Dominion Voting Systems.
"
        />
        <Article
          articleTitle="Default title"
          text="Fox News denies defamation - saying the hosts' words were taken out of context."
        />
      </>
    );
  }
}
