import { REPRESENTATIVE_SELECTED } from '../actions/index';
export default (state = null, action) => {
  switch(action.type){
   case REPRESENTATIVE_SELECTED:
     return action.payload;
  }
  return state;
}
