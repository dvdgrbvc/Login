import React from "react";
import Login from "./Pages/Login";
import Tag from "./assets/tag.png";
import Layer from "./assets/Polygon 3.png";
function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <img
        src={Tag}
        alt="tag"
        className="z-50 h-36 w-36 absolute top-0 left-0"
      />
      <Login />
      <img src={Layer} alt="layer" className="absolute bottom-0 right-0" />
    </div>
  );
}

export default App;
