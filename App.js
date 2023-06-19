import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const HeadingComponent = () => (
  // React Element
  <div id="container">
    <h1 className="heading" tabIndex="5">
      I am Jsx heading
    </h1>
  </div>
);

const elem = <span>I am an element</span>;
const title = (
  <>
    <div>
      <h1 className="title1" tabIndex="5">
        {elem}
        Heading Title
      </h1>
      <HeadingComponent />
    </div>
    <div>
      <h1 className="title1" tabIndex="5">
        {elem}
        Heading Title
      </h1>
      <HeadingComponent />
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
