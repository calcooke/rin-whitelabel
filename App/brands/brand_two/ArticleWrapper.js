/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";

import Article from "../../components/Article";

export default class ArticleWrapper extends React.Component {
  render() {
    return (
      <>
        <Article
          articleTitle="Brand two article title"
          text="Liam Bradley, who owns 17 pharmacy branches across Northern Ireland, says he hopes the Windsor Framework will help with the availability of medicines on the shelves in NI."
        />
        <Article
          articleTitle="Another Brand two article title"
          text="'It will hopefully remove any confusion over the availability of medication in Northern Ireland,' he tells BBC Radio Foyle."
        />
        <Article
          articleTitle="Yet another Brand two article title"
          text="Up to now manufacturers of drugs had to produce two different types of packs, one for use in the rest of the UK and one for use in Northern Ireland"
        />
      </>
    );
  }
}
