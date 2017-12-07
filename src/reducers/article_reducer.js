import {FETCH_ARTICLES} from '../actions/index'

export default function(state=[],action)
{
  //console.log('Action received',action);
  switch (action.type) {
    case FETCH_ARTICLES:
          return [action.payload.data];

  }

  return state;
}
