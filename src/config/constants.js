import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export const ActionTypes = {
  BUDGETS_ADD_ITEM: 'BUDGETS_ADD_ITEM',
  BUDGETS_REMOVE_ITEM: 'BUDGETS_REMOVE_ITEM',
  BUDGETS_SEARCH: 'BUDGETS_SEARCH',
  BUDGETS_SUBSCRIBE: 'BUDGETS_SUBSCRIBE',
  BUDGETS_SWAP_STATE: 'BUDGETS_SWAP_STATE',
  BUDGETS_TOGGLE_COL: 'BUDGETS_TOGGLE_COL',
  BUDGETS_UPDATE: 'BUDGETS_UPDATE',
  BUDGETS_UPDATE_ITEM: 'BUDGETS_UPDATE_ITEM',
  ERROR: 'ERROR',
  FIREBASE_SET_ERROR: 'FIREBASE_SET_ERROR',
  FIREBASE_SET_REQUEST: 'FIREBASE_SET_REQUEST',
  FIREBASE_SET_SUCCESS: 'FIREBASE_SET_SUCCESS',
  LOADED: 'LOADED',
  PROJECTS_UPDATE: 'PROJECTS_UPDATE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  TICKETS_REMOVE: 'TICKETS_REMOVE',
  TICKETS_SEARCH: 'TICKETS_SEARCH',
  TICKETS_SUBSCRIBE: 'TICKETS_SUBSCRIBE',
  TICKETS_UPDATE: 'TICKETS_UPDATE',
  TICKETS_DISPATCH: 'TICKETS_DISPATCH',
  TICKETS_DISPATCH_SUCCESS: 'TICKETS_DISPATCH_SUCCESS',
  TOGGL_START: 'TOGGL_START',
  USER_UPDATE: 'USER_UPDATE',
};
