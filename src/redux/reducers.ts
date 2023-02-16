import {combineReducers} from 'redux';
import signUpReducer from '../modules/passengerDetails/reducer';
import authReducer from '@cardapp/modules/auth/reducer';

// combineReducers

export const RootReducer = combineReducers({
  // signUpReducer,
  authReducer,
});
