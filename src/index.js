//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

//Create a react component
const App = () => {
  return (
    <React.Fragment>
      <CommentDetail author="Sam" />
      <CommentDetail author=" Alex" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Alexis" />
    </React.Fragment>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
