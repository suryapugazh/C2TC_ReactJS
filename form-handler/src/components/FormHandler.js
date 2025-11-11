import React, { useState } from "react";

const FormHandler = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Clicked")
    setSubmit(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Handler</h1>

      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
          type="text"
          name="userName"
          placeholder="Enter Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <br />

        <h3>Email</h3>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <h3>Password</h3>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      {submit && (
        <>
          <h3>Form Submitted Successfully!</h3>
          <h4>Username: {formData.userName}</h4>
          <h4>Email: {formData.email}</h4>
          <h4>Password: {"*".repeat(formData.password.length)}</h4>
        </>
      )}
    </div>
  );
};

export default FormHandler;
