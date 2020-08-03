//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//author, timeAgo, avatar, comment are the props available

//Create a react component
const App = () => {
  return (
    <React.Fragment>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.internet.userName()}
          comment={faker.hacker.phrase()}
          timeAgo={faker.date.month()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.internet.userName()}
          //comment={faker.company.catchPhrase()}
          comment={faker.hacker.phrase()}
          timeAgo={faker.date.month()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.internet.userName()}
          comment={faker.hacker.phrase()}
          timeAgo={faker.date.month()}
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.internet.userName()}
        comment={faker.hacker.phrase()}
        timeAgo={faker.date.month()}
      />
    </React.Fragment>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
