import preact, { h } from "preact";
import "./styles/style.scss";
import { Layout } from './components/layout';
import { updateState } from './state';
import { produceNextTick } from 'libyopu';

class Main extends preact.Component {
  render () {
    return (
      <Layout />
    );
  }
}

setInterval(() => updateState(state => ({ ...state, ourGame: produceNextTick(state.ourGame)})), 50);

document.body.innerHTML = "";
preact.render(<Main />, document.body);


