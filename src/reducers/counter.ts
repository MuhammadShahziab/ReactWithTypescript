import type React from "react";
import type { CounterAction, CounterState } from "../components/Counter/type";

export const initialState: CounterState = {
  count: 0,
};

export const reducer: React.Reducer<CounterState, CounterAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
  }
};
