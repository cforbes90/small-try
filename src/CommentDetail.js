import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  //author, timeAgo, avatar, comment are the props available
  console.log(props);

  // const avatarName = [faker.name.firstName];
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author"></a>
          {faker.internet.userName()}
          <div className="metadata">
            <span className="date"> {faker.date.month()}</span>
          </div>
          <div className="text"> {faker.hacker.phrase()}</div>
        </div>
      </div>
    </div>
  );
};
export default CommentDetail;
