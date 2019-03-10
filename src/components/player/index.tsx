import picostyle from "picostyle";
import preact, { h } from 'preact';
const style = picostyle(h as any);

const Container = style("div")(_props => ({
  height: '100%',
  width: '100%',
}));

const Left = style("div")(_props => ({
  backgroundColor: 'red',
  height: '50px',
  width: '50px',
}));

export const Keypad: preact.FunctionalComponent = () => (
  <Container>
    <Left />
    <Left />
    <Left />
    <Left />
  </Container>
);
