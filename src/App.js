import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

/**
 * 라우터 적용
 * - 니코쌤에 의하면 browserRouter는 깃허브페이지에 적용하기 힘들어서 hashrouter로 사용 한다고 함.
 * TODO 이건 추가로 정리해 놓을 것
 *
 * 니꼬쌤   "react-router-dom": "^5.1.2",
 * 내꺼    "react-router-dom": "^6.2.1",
 * 버전차이인지 오류가 남 실제로 니꼬 쌤 처럼 나오려면
 * 아래처럼 <Routes></Routes>로 감싸고 component 속성대신 element 속성을 넣으면 됨
 * exact 속성은 불필요한듯
 */
function App() {
  return (
    // 니꼬쌤 버전 - 화면이 안나옴
    // <HashRouter>
    //   <Route path="/" exact={true} component={Home} />
    //   <Route path="/about" component={About} />
    // </HashRouter>

    // 페이지가 나눠지지 않음 -라우터 작동안함
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" />
    //   </Routes>
    //   <Home />
    //   <Routes>
    //     <Route path="/about" />
    //   </Routes>
    //   <About />
    // </HashRouter>

    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie-detail" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
