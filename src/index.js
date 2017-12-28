import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import ArticleIndex from './components/articles_index';
import NewArticle from './components/new_article';
import ArticlesShow from './components/articles_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
    <Route path="/articles/new" component={NewArticle} />
    <Route path="/articles/:id" component = {ArticlesShow} />
    <Route path="/" component={ArticleIndex} />


    </Switch>
     </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
