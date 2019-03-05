import { ActionsType } from "hyperapp";
import { Actions, State } from "./types";
import { createInitialState, produceNextTick } from "libyopu";

export namespace Store {
  export const state: State = {
    ourGame: createInitialState(10, 5),
    theirGame: createInitialState(10, 5)
  };

  export const actions: ActionsType<State, Actions> = {
    nextTick: () => (state) => ({ ...state, ourGame: produceNextTick(state.ourGame) }),
  };
}

