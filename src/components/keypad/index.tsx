import picostyle from "picostyle";
import preact, { h } from "preact";
import { withSize } from "../withSize/withSize";
import { moveDown, moveLeft, moveRight, rotate } from "../../state";
const style = picostyle(h as any);

const Container = style("div")(_props => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // alignItems: "stretch",
  alignItems: "center",
}));

const Top = style("div")(_props => ({
  flex: "1",
  height: 0,
}));

const Bottom = style("div")(_props => ({
  flex: "1",
  height: 0,
  display: "flex",
}));

const Button = withSize(style("div")(_props => ({
  backgroundColor: "black",
  height: "100%",
  lineHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  width: `${_props.parentHeight}px`,
  ":active": {
    backgroundColor: "blue",
  }
}))) as any;

export const Keypad: preact.FunctionalComponent = () => (
  <Container>
    <Top>
      <Button onclick={rotate}>Rotate</Button>
    </Top>
    <Bottom>
      <Button onclick={moveLeft}>Left</Button>
      <Button onclick={moveDown}>Down</Button>
      <Button onclick={moveRight}>Right</Button>
    </Bottom>
  </Container>
);
