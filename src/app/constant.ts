import { environment } from "src/environments/environment";

export const API_USERS = environment.BASE_URL + 'user/'

export const API = {
    allUsers: API_USERS + 'allUsers',
}

export enum EStatusCode {
    'OK' = 200,
    'CREATED' = 201,
    'CONFLICT' = 409,
    'INVALID_DATA' = 422,
    'LOCKED' = 423,
    'FAILURE' = 404,
    'INTERNAL_SERVER_ERROR' = 500,
    'Unauthorized' = 401,
    'tokenExpired' = 419,
    'BAD_REQUEST' = 400,
    'NOT_ACCEPTABLE' = 406
  }
  