import { Component } from "preact";

declare module "picostyle" {
  export default function picostyle(vdom: createNode): (element: string | Component) =>
    (styles: Styles | StyleProps) => any;
}