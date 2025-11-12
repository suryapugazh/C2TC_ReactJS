import React, { useState } from "react";

function Child({ parentMessage, sendData }) {
  const [childMsg, setChildMsg] = useState("Hi Parent!");

  return (
    <div style={{
      border: "3px solid #2c9db9ff",
      padding: "20px",
      margin: "20px",
      borderRadius: "5px",
      backgroundColor: "#b0efffff"
    }}>
      <h3 style={{ color: "rgba(0, 124, 135, 1)" }}>Child Component</h3>

      <p><strong>Message from Parent:</strong> <span style={{ color: "#313d44ff" }}>{parentMessage}</span></p>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Reply to Parent: </label>
        <input
          type="text"
          value={childMsg}
          onChange={(e) => setChildMsg(e.target.value)}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #263132ff",
            marginLeft: "10px"
          }}
        />
      </div>

      <button
        onClick={() => sendData(childMsg)}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#000000ff",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Send to Parent
      </button>
    </div>
  );
}

export default Child;