import { QUERY_REPRESENTATIVES } from '../actions/index';
export default (state = [], action) => {
 switch (action.type) {
    case QUERY_REPRESENTATIVES:
      return [ action.payload.data, ...state ];
    break;

 }
 return state;
}
