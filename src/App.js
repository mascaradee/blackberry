import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

/**
 * 라우터 적용
 */
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
