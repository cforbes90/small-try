import React from "react";

const CommentDetail = (props) => {
  //author, timeAgo, avatar, comment are the props available
  console.log(props);

  // const avatarName = [faker.name.firstName];
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author"></a>
          {props.author}
          <div className="metadata">
            <span className="date"> {props.timeAgo}</span>
          </div>
          <div className="text"> {props.comment}</div>
        </div>
      </div>
    </div>
  );
};
export default CommentDetail;
