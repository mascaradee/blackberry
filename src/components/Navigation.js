import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      {/* 
      아래처럼 <a>태그를 사용하면 새로고침을 하고 리액트를 새로 시작해 버린다. Link를 사용하면 그걸 방지 할수 있다.
      <a href="/">Home</a>
      <a href="/about">About</a> */}
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
}

export default Navigation;
