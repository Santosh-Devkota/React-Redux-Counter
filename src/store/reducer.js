import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  logs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        logs: state.logs.concat({ id: Date.now(), log: state.counter + 1 }),
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
        logs: state.logs.concat({ id: Date.now(), log: state.counter - 1 }),
      };
    case actionTypes.ADDITION:
      return {
        ...state,
        counter: state.counter + action.value,
        logs: state.logs.concat({
          id: Date.now(),
          log: state.counter + action.value,
        }),
      };
    case actionTypes.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value,
        logs: state.logs.concat({
          id: Date.now(),
          log: state.counter - action.value,
        }),
      };
    case actionTypes.DELETE_LOGS: {
      //console.log(action.id);
      const deleteLog = state.logs.find((log) => log.id === action.id);
      const index = state.logs.indexOf(deleteLog);
      const newArray = [...state.logs];
      newArray.splice(index, 1);

      return {
        ...state,

        logs: newArray,
      };
    }
    default:
      return state;
  }
  //return state;
};

export default reducer;
