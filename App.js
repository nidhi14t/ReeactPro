import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "rootDiv", abra: "nidhi" }, [
  React.createElement("div", { id: "child1", abra: "nidhi" }, [
    React.createElement("div", { id: "child2", abra: "nidhi" }, [
      React.createElement(
        "h1",
        { id: "h1", abra: "nidhi" },
        "Hello I am Nidhi child 1 yo 1"
      ),
      React.createElement(
        "h2",
        { id: "h2", abra: "nidhi" },
        "Hello I am Nidhi child 1 heading 2"
      ),
    ]),
    React.createElement("div", { id: "child2", abra: "nidhi" }, [
      React.createElement(
        "h1",
        { id: "h1", abra: "nidhi" },
        "Hello I am Nidhi child 2 heading 1"
      ),
      React.createElement(
        "h2",
        { id: "h2", abra: "nidhi" },
        "Hello I am Nidhi child 2 heading 2"
      ),
    ]),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
