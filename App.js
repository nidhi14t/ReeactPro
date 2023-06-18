import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1 className="title1">Heading Title</h1>;
};

const TitleComponentFunc = function () {
  return <h1 className="title1">Heading Title</h1>;
};

// React Component
const HeadingComponent = () => (
  // React Element
  <div id="container">
    <TitleComponent />
    <h1 className="heading" tabIndex="5">
      I am Jsx heading
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
