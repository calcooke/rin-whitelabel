import React from 'react';
//import PropTypes from 'prop-types';

import Article from '../../components/Article';

export default class ArticleWrapper extends React.Component {
  render() {
    return (
      <>
        <Article articleTitle="Default title" text="Brand three article" />
        <Article articleTitle="Default title" text="Second three article" />
      </>
    );
  }
}
