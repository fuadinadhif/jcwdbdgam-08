export function counterReducer(state, action) {
  if (action === "increment") {
    return {
      counter: state.counter + 1,
      history: [...state.history, "Increment By 1"],
    };
  }

  if (action === "decrement") {
    return {
      counter: state.counter - 1,
      history: [...state.history, "Decrement By 1"],
    };
  }
}
