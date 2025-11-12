import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentMsg, setParentMsg] = useState("Hello Child, I am your Parent!");
  const [childReply, setChildReply] = useState("");

  const handleInputChange = (e) => {
    setParentMsg(e.target.value);
  };

  const handleChildData = (message) => {
    setChildReply(message);
  };

  return (
    <div style={{
      border: "3px solid #2980b9",
      padding: "20px",
      margin: "20px",
      borderRadius: "5px",
      backgroundColor: "#00ccffff",
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h2 style={{ color: "#2980b9" }}>Parent Component</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Enter Message to Child: </label>
        <input
          type="text"
          value={parentMsg}
          onChange={handleInputChange}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #7f8c8d",
            marginLeft: "10px"
          }}
        />
      </div>

      <p><strong>Reply from Child:</strong> <span style={{ color: "#2c322eff" }}>{childReply}</span></p>

      <Child parentMessage={parentMsg} sendData={handleChildData} />
    </div>
  );
}

export default Parent;