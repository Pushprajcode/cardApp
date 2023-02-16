import axios from 'axios';

/**
 * axios instance created
 */
const $https = axios.create({
  baseURL: '',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 * used for  getting data from api call throughout the applciation
 *
 * @param endPoints
 * @param cb
 */
export const GET_APICALL = (endPoints: any, data: any, cb: any) => {
  $https
    .get(endPoints)
    .then((response: any) => {
      cb(response)
      console.log('response', response);
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const POST_API_CALL = (endPoints: any, data: any, response: any) => {
  $https
    .post(endPoints, data)
    .then(resp => {
      response('384956', resp);
    })
    .catch(error => {
      console.log('error', error);
    });
};
