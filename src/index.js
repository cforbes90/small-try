//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// import faker, { date } from "faker";
import CommentDetail from "./CommentDetail";

//author, timeAgo, avatar, comment are the props available

//Create a react component
const App = () => {
  return (
    <React.Fragment>
      <CommentDetail
      // avatar={faker.image.avatar()}
      // author={faker.internet.userName()}
      // //comment={faker.company.catchPhrase()}
      // comment={faker.hacker.phrase()}
      // timeAgo={faker.date.month()}
      />

      <CommentDetail
      // avatar={faker.image.avatar()}
      // author={faker.internet.userName()}
      // //comment={faker.company.catchPhrase()}
      // comment={faker.hacker.phrase()}
      // timeAgo={faker.date.month()}
      />
      <CommentDetail
      // avatar={faker.image.avatar()}
      // author={faker.internet.userName()}
      // //comment={faker.company.catchPhrase()}
      // comment={faker.hacker.phrase()}
      // timeAgo={faker.date.month()}
      />
      <CommentDetail
      // avatar={faker.image.avatar()}
      // author={faker.internet.userName()}
      // //comment={faker.company.catchPhrase()}
      // comment={faker.hacker.phrase()}
      // timeAgo={faker.date.month()}
      />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />

      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </React.Fragment>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
