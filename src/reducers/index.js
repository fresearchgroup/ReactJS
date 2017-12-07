import { combineReducers } from 'redux';
import ArticleReducer from './article_reducer';

const rootReducer = combineReducers({
 articles : ArticleReducer
});

export default rootReducer;
