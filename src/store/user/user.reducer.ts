import { AnyAction } from 'redux';

import { USER_ACTION_TYPES } from "./user.types";

import { signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess } from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly: null,
};

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
 };
 
 export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  
  if(signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if(signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if(signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if(signInFailed.match(action) || signInFailed.match(action) || signOutFailed.match(action)) {   
        return {...state, currentUser: action.payload };
    }

    return state;
 };