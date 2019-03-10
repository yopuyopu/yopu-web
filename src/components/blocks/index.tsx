import { Block, IState } from "libyopu";

import picostyle from "picostyle";
import preact, { h } from "preact";
const style = picostyle(h as any);
import "./style.scss";
import { ISizeProps, withSize } from "../withSize/withSize";

enum Orientation {
  HORIZONTAL = 0,
  VERTICAL = 1
}

interface IProps {
  blocks: Block[][];
  controlBlock: IState["controlBlock"];
}

class BlocksComponent extends preact.Component<IProps & ISizeProps> {
  getBlockSize = () => {
    const rows = this.props.blocks.length;
    const cols = this.props.blocks[0].length;
    if (rows / cols < this.props.parentHeight / this.props.parentWidth) {
      return this.props.parentWidth / cols;
    } else {
      return this.props.parentHeight / rows;
    }
  };

  getBlocks = () => {
    const blockSize = this.getBlockSize();
    return this.props.blocks.map((row, i) => row.map((col, j) => col !== 0 && (
      <Block row={i} col={j} blockSize={blockSize} type={col}/>
    )).filter(b => b));
  };

  getControlBlocks = () => {
    if (!this.props.controlBlock) {
      return null;
    } else {
      const blockSize = this.getBlockSize();
      return [
        <Block row={this.props.controlBlock.positionY} col={this.props.controlBlock.positionX} blockSize={blockSize} type={this.props.controlBlock.firstBlock}/>,
        <Block row={this.props.controlBlock.positionY + (this.props.controlBlock.orientation === Orientation.VERTICAL ? 1 : 0)}
               col={this.props.controlBlock.positionX + (this.props.controlBlock.orientation === Orientation.HORIZONTAL ? 1 : 0)}
               blockSize={blockSize}
               type={this.props.controlBlock.secondBlock}
        />
      ];
    }
  }

  render() {
    const blocks = this.getBlocks();
    console.log(blocks);
    return (
      <div style={`background-color: black; height: 100%; position: relative; width: ${this.getBlockSize() * this.props.blocks[0].length}px`}>
        { this.getBlocks() }
        { this.getControlBlocks() }
      </div>
    );
  }
}


const Block = style("div")(props => ({
  backgroundColor: `rgb(${255 - 50 * props.type}, ${0 + 50 * props.type}, ${100} )`,
  position: "absolute",
  left: "0",
  bottom: "0",
  transform: `translateX(${props.col * props.blockSize}px) translateY(${-props.row * props.blockSize}px)`,
  width: `${props.blockSize}px`,
  height: `${props.blockSize}px`,
  borderRadius: `${props.blockSize}px`,
}));


export const Blocks = withSize(BlocksComponent);