import { Block } from "libyopu";

import picostyle from "picostyle";
import preact, { h } from 'preact';
const style = picostyle(h as any);
import './style.scss';
import { ISizeProps, withSize } from '../../withSize';


interface IProps {
  blocks: Block[][];
}

class BlocksComponent extends preact.Component<IProps & ISizeProps> {
  getBlockSize = () => {
    const rows = this.props.blocks.length;
    const cols = this.props.blocks[0].length;
    if (rows / cols < this.props.height / this.props.width) {
      return this.props.width / cols;
    } else {
      return this.props.height / rows;
    }
  };

  getBlocks = () => {
    const blockSize = this.getBlockSize();
    return this.props.blocks.map((row, i) => row.map((col, j) => col && (
      <Block row={i} col={j} blockSize={blockSize} type={col}/>
    ))).filter(b => b);
  };

  render() {
    return (
      <div style="height: 100%">
        { this.getBlocks() }
      </div>
    );
  }
}


const Block = style("div")(props => ({
  backgroundColor: `rgb(${255 - 50*props.type}, ${0 + 50*props.type}, ${100} )`,
  position: 'absolute',
  left: '0',
  bottom: '0',
  transform: `translateX(${props.col * props.blockSize}px) translateY(${-props.row * props.blockSize}px)`,
  width: `${props.blockSize}px`,
  height: `${props.blockSize}px`,
  borderRadius: `${props.blockSize}px`,
}));


export default withSize(BlocksComponent);