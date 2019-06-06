// place.js

import { UPDATE_USER_INFO } from './types';

export const updateUserInfo = userInfo => {
  return {
    type: UPDATE_USER_INFO,
    payload: userInfo
  }
}