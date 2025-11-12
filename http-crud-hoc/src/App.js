import React from "react";
import UserManager from "./components/UserManager";

const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      > CRUD | HTTP | HoC</h1>
      <UserManager />
    </div>
  );
};

export default App;
