import preact, { h } from "preact";

import * as libyopu from "libyopu";
import produce from 'immer';

export interface IRootState {
  ourGame: libyopu.IState;
  theirGame: libyopu.IState;
}

export let currentState: IRootState = {
  ourGame: libyopu.createInitialState(20, 8),
  theirGame: libyopu.createInitialState(20, 8),
};

type ISelector = (newState: IRootState, oldState?: IRootState) => { [key: string]: any };
type IStateChangeListener = (newState: IRootState, oldState: IRootState) => void;

export const stateChangeListeners: Set<IStateChangeListener> = new Set();

export const updateState = (f: (state: IRootState) => IRootState) => {
  const oldState = currentState;
  currentState = f(currentState);
  stateChangeListeners.forEach(listener => listener(currentState, oldState));
};

export const withState = (selector: ISelector) => <T extends any>(Comp: preact.AnyComponent<T & ReturnType<typeof selector>, any>) => {
  return class extends preact.Component<T, IRootState> {
    handleStateChange = (newState: IRootState, oldState: IRootState) => {
      const oldResult = selector(oldState);
      const newResult = selector(newState);
      if (Object.keys(oldResult).some(key => oldResult[key] !== newResult[key])) {
        this.forceUpdate();
      }
    };

    componentWillMount() {
      stateChangeListeners.add(this.handleStateChange);
    }

    componentWillUnmount() {
      stateChangeListeners.delete(this.handleStateChange);
    }

    render() {
      return <Comp {...this.props} { ...selector(currentState) } />;
    }
  };
};

export const moveLeft = () => {
  updateState(state => produce(state, draftState => {
    libyopu.moveLeft(draftState.ourGame);
  }));
};

export const moveRight = () => {
  updateState(state => produce(state, draftState => {
    libyopu.moveRight(draftState.ourGame);
  }));
};

export const moveDown = () => {
  updateState(state => produce(state, draftState => {
    libyopu.moveDown(draftState.ourGame);
  }));
};

export const rotate = () => {
  updateState(state => produce(state, draftState => {
    libyopu.rotate(draftState.ourGame);
  }));
};
