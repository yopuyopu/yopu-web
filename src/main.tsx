import preact, { h } from "preact";
import "./styles/style.scss";
import { createInitialState, produceNextTick } from 'libyopu';
import BlocksComponent from './components/blocks';

class Main extends preact.Component {
  state = {
    ourGame: createInitialState(20, 8),
    theirGame: createInitialState(20, 8),
  };
  componentWillMount() {
    setInterval(() => this.setState({ ourGame: produceNextTick(this.state.ourGame)}), 50);
  }
  render () {
    return (
      <main>
        <div>
          <BlocksComponent blocks={this.state.ourGame.blocks} />
        </div>
        <div><p>ad</p></div>
        <div>right</div>
      </main>
    );
  }
}

document.body.innerHTML = "";
preact.render(<Main />, document.body);


