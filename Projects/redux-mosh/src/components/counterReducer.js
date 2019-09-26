const INITIAL_STATE = { number: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INC":
      return { ...state, number: state.number + 1 };
    default:
      return state;
  }
}
