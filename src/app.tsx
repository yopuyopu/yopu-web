import { Actions, State } from "./types";
import { Store } from "./store";
import { Logo } from "./components/logo";
import "./styles/style.scss";
import { BlocksComponent } from "./components/blocks";
import { ControlBlockComponent } from "./components/controlBlock";
import { Component } from 'preact';

export const state: State = Store.state;
export const actions: ActionsType<State, Actions> = Store.actions;

export class withSize extends Component {

  componentWillMount() {
    debugger;
  }

  render() {
    return this.props.children;
  }
}

export const view: View<State, Actions> = ({ourGame}) => (
  <main class="root">
    <div>
     <BlocksComponent blocks={ourGame.blocks} />
     {/*<ControlBlockComponent controlBlock={ourGame.controlBlock} />*/}
    </div>
    <div><p><Logo/></p></div>
    <div>right</div>
  </main>
);

