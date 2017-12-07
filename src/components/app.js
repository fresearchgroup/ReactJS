import React, { Component } from 'react';

import SearchBar from '../containers/search';
import ArticleList from '../containers/article';
import Homepage from '../containers/homepage';
export default class App extends Component {
  render() {
    return (
      <div>



           <SearchBar />
           <ArticleList />
      </div>
    );
  }
}
