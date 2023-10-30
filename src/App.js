import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

// MyPage와 Setting 페이지 추가 해보기
// Home에서 About,MyPage,Setting 페이지 링크 보여주고 이동
// 이동된 각 페이지에서는 홈으로 이동하는 링크 만들고 Home 이동

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Profiles/:username" element={<Profile />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Articles/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
