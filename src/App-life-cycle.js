import React from "react";
import PropTypes from "prop-types";

/**
 *  react는 React.Component 내에서 자동으로 렌더링을 한다.
 * setState는 내부적으로 rendering을 한다.
 * Mounting : 컴포넌트 마운트 함수
 *  - constructor()가 가장 먼저 실행되는 함수
 *  - static getDerivedStateFrom,,    -> 거의 안 씀
 *  - render()
 *  https://reactjs.org/docs/implementation-notes.html#mounting-as-a-recursive-process
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  }; // useState(0)
  add = () => {
    // this.state.count = 1;
    this.setState((current) => ({ count: current.count + 1 })); //setState((count) => count + 1)
  };
  minus = () => {
    // this.state.count = -1;
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goobye, crul world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
