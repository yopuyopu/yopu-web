import picostyle from "picostyle";
import preact, { h } from "preact";
import { Keypad } from "../keypad";
import { withState } from "../../state";
import { Blocks } from "../blocks";

const style = picostyle(h as any);

const Container = style("div")(_props => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "black",
  textColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  alignItems: "stretch"
}));

const Top = style("div")(_props => ({
  backgroundColor: "red",
  flex: "1",
  height: "0"
}));

const Center = style("div")(_props => ({
  backgroundColor: "blue",
  flex: "2",
  height: "0",
  display: "flex",
  justifyContent: "center",
}));

const Bottom = style("div")(_props => ({
  backgroundColor: "green",
  flex: "1",
  height: "0"
}));


export const OurBlocks = withState(state => ({ controlBlock: state.ourGame.controlBlock, blocks: state.ourGame.blocks}))(
  props => <Blocks blocks={props.blocks} controlBlock={props.controlBlock} />
);
export const TheirBlocks = withState(state => ({ theirBlocks: state.theirGame.blocks}))(props => <div>{JSON.stringify(props}</div>);
export const ControlBlock = withState(state => ({ controlBlock: state.ourGame.controlBlock}))(props => <div>{JSON.stringify(props}</div>);

export const Layout: preact.FunctionalComponent = (props) => (
  <Container>
    <Top>
      <ControlBlock />
    </Top>
    <Center>
      <OurBlocks />
    </Center>
    <Bottom>
      <Keypad />
    </Bottom>
  </Container>
);
