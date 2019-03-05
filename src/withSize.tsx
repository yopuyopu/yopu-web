import preact, { h } from "preact";

export interface ISizeProps {
  width: number;
  height: number;
}

export interface IState {
  width: number;
  height: number;
}

export const withSize = <T extends any>(Comp: preact.AnyComponent<T & ISizeProps, any>) => {
  return class extends preact.Component<T, IState> {
    state = {
      width: 0,
      height: 0,
    };

    ref: HTMLElement | null = null;
    listener: (e: any) => any = this.update.bind(this);

    update() {
      this.setState({
        width: this.base!.clientWidth,
        height: this.base!.clientHeight
      });
    }

    componentDidMount() {
      this.update();
      window.addEventListener("resize", this.listener);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.listener);
    }

    render() {
      return <Comp ref={(ref: any) => this.ref = ref} {...this.props} width={this.state.width} height={this.state.height} />;
    }
  };
};

export const ShowProps = (props: {}) => <div>{JSON.stringify(props)}</div>;
export const ShowSize = withSize(ShowProps);