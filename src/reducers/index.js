import { combineReducers }         from 'redux';
import RepresentativesReducer      from './reducer_representatives';
import ActiveRepresentativeReducer from './reducer_active_representative';
import StateListReducer            from './reducer_state_list';

const rootReducer = combineReducers({
  stateList: StateListReducer,
  representatives: RepresentativesReducer,
  activeRepresentative: ActiveRepresentativeReducer
});

export default rootReducer;
