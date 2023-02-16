// import {ENDPOINTS} from '@firm/utils/endPoints';
import {AUTH_SET} from '@cardapp/utils/actionTypes';
import {ENDPOINTS} from '@cardapp/utils/endPoints';
import {POST_API_CALL} from '@cardapp/utils/services';
export const doLogIn = (data: any, resp: Function) => {
  console.log('6378495', data);
  return (dispatch: any) => {
    dispatch({type: AUTH_SET.AUTH_SET_LOGIN, payload: data});
    // POST_API_CALL(ENDPOINTS.auth.logIn, data, (response: any) => {
    //   // console.log('data from resp', response);
    //   // dispatch({type: AUTH_SET, payload: response});
    // });
  };
};
export const doSignUp = (data: any, resp: Function) => {
  return (dispatch: any) => {
    dispatch({type: AUTH_SET.AUTH_SET_SIGNUP, payload: data});
    // POST_API_CALL(ENDPOINTS.auth.signUp, data, (response: any) => {
    //   // console.log('data from resp', response);
    // });
  };
};
