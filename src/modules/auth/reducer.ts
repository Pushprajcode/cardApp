import {authReducerModal} from '@cardapp/modals';
import {AUTH_SET} from '@cardapp/utils/actionTypes';
// const intialState = {
//   // email: '',
//   // name: '',
//   // password: '',
//   // number: '',
//   data: [],
// };
const authReducer = (state = new authReducerModal(), action: any) => {
  console.log('ACTION ', action.payload);
  switch (action.type) {
    case AUTH_SET.AUTH_SET_LOGIN:
      return {state, ...action.payload};
    case AUTH_SET.AUTH_SET_SIGNUP:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default authReducer;
