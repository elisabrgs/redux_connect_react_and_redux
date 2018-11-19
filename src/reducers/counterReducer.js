import { ADD1, ADD10, REMOVE1, REMOVE10, RESET_COUNT } from '../actions/types'

const initialState = { 
  value: 0
}

export default (state = initialState, action) => {
  console.log(state.value)
  switch (action.type) {
    case ADD1:
      return {
        ...state, 
        value: state.value + 1
      };
    case REMOVE1:
    return {
      ...state, 
      value: state.value - 1
    };
    case ADD10:
    return {
      ...state, 
      value: state.value + 10
    };
    case REMOVE10:
    return {
      ...state, 
      value: state.value - 10
    };
    case RESET_COUNT:
      return {
        ...state, 
        value: 0
      };
    default:
      return state;
  }
};
