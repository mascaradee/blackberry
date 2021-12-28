import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  return <span>hello</span>;
}

// class Detail extends React.Component {
//   componentDidMount() {
//     console.log(this.props); // 이게 없어서 아래 로직은 무용지물임
//     // const { location, history } = this.props;
//     // if (location.state === undefined) {
//     //   history.push("/");
//     // }
//   }
//   render() {
//     return <span>hello</span>;
//   }
// }
export default Detail;
