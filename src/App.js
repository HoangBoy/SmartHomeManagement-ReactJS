import logo from "./logo.svg";
import "./App.css";
import "./YoutubeData.js";
import { apiData } from "./YoutubeData.js";

// parent component
function App() {
  console.log(apiData);
  const numbers = [1, 2, 3, 4, 5];
  const double = numbers.map((item) => item * 2);
  console.log(double);
  return (
    <div className="app">
      <Container />

      <div className="youtube-list">
        {apiData.map((item, index) => (
          <YoutubeItem
            key={index}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="feature">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s"
        alt=""
        className="feature-image"
      />
      <h3 className="feature-title"></h3>
      <p className="feature"></p>
    </div>
  );
}

function YoutubeItem(propss) {
  console.log(propss);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={propss.image} alt="" />
        <div className="youtube-footer">
          <img src={propss.avatar} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {propss.title || "This is example of title"}
            </h3>
            <h4 className="youtube-author">{propss.author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container(itemCtn) {
  console.log(itemCtn);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a
        href="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        className="container-logo"
      >
        <div
          className="logo"
          style={{
            with: "100px",
            height: "100px",
          }}
        >
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
            style={{
              with: "100px",
              height: "100px",
            }}
          />
        </div>
      </a>
      <nav className="container-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Instructors</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>
      </nav>
      <div className="container-search"></div>
      <div className="container-subjectMenu">
        <a href="">Học tập</a>
      </div>
      <div className="container-favouriteCourses">
        <a href="">Yêu thích</a>
      </div>
      .
      <div className="container-cart">
        <a href="">Giỏ hàng</a>
      </div>
      <div className="container-notifications">
        <a href="">Thông báo</a>
      </div>
      <div className="container-userMenu">
        <a href="">Người dùng</a>
      </div>
    </div>
  );
}

export default App;
