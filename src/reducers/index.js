import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';
import { reducer as FormReducer } from 'redux-form';
import AlertReducer from './alert_reducer';

const rootReducer = combineReducers({

  articles: ArticleReducer,
  alerts : AlertReducer,
  form : FormReducer
});

export default rootReducer;
