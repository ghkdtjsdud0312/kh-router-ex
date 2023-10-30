import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <h1>MyPage</h1>
      <p>여기는 MyPage 입니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );
};

export default MyPage;
