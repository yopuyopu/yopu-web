import { Component, h } from "hyperapp";
import { IControlBlockState } from "libyopu/dist/control_block";

export const ControlBlockComponent: Component<{ controlBlock: null | IControlBlockState}> = ({ controlBlock }) => {
  return (
    <div oncreate={console.log}>{ JSON.stringify(controlBlock) }</div>
  );
};
