import { alertConstants } from '../constants/alertConstants';
import { success,error,clear} from '../actions/alertActions';
export function alert(state = {}, action) {
  alert("reducer");
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}
