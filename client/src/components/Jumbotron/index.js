import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
      {children}
    </div>
  );
}

export default Jumbotron;
