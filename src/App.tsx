import React from "react";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#6C79E7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#fff" }}>This is what I'll build</h1>
        <p style={{ color: "rgba(0,0,0,0.5)" }}>
          but need some mofidication and the design
        </p>
      </div>
      <img
        src={require("../images/things.png")}
        style={{ width: "auto", height: "100vh" }}
        alt=""
      />
    </div>
  );
};

export default App;
