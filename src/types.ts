import { IState } from "libyopu";

export interface State {
  ourGame: IState;
  theirGame: IState;
}

export interface Actions {
  // down (): State
  // up (): State
  nextTick (): State;
}

export interface Label {
  label: number | string;
}

export interface Button extends Label {
  disabled?: boolean;
  action (): State;
}

export interface Counter extends Actions, Label {}
