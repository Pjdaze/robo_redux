import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

const searchInitialState = {
  searchField: ""
};

const robotsInitialState = {
  isPending: false,
  robots: [],
  err: ""
};
export const searchRobots = (state = searchInitialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {
        ...state,
        searchField: action.payload
      });

    default:
      return state;
  }
};

export const requestRobots = (state = robotsInitialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false };

    case REQUEST_ROBOTS_FAILED:
      return { ...state, err: action.payload, isPending: false };

    default:
      return state;
  }
};
