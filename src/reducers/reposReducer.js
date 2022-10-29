import { SET_COUNT } from '../actionsAndCreators/index';

const defaultState = {
  count: 0,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
}
