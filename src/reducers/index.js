import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';
import { reducer as FormReducer } from 'redux-form';


const rootReducer = combineReducers({

  articles: ArticleReducer,
  form : FormReducer
});

export default rootReducer;
