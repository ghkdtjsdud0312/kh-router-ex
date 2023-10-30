import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/about">소개페이지로 이동</Link>
      <br />
      <Link to="/MyPage">마이페이지로 이동</Link>
      <br />
      <Link to="/Setting">세팅페이지로 이동</Link>
      <br />
      <ul>
        <li>
          <Link to="/profiles/frontend">frontend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/backend">backend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/database">database 프로필</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
