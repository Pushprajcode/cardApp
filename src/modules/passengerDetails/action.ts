import {GET_API_CALL, POST_API_CALL} from '../../utils/services';
import {END_POINTS} from '../../utils/endPoints';


const passengerApi = (cb: Function) => {
  return (dispatch: any) => {
    GET_API_CALL(END_POINTS.PASSENGER_DETAIL, (resp: any) => {
      cb(resp);
    });
  };
};
export default passengerApi;

export const createPassengerDataApi = (data: any, cb: Function) => {
  return (dispatch: any) => {
    POST_API_CALL(END_POINTS.CREATE_PASSENGER, data, (resp: any) => {
      cb(resp);
    });
  };
};
