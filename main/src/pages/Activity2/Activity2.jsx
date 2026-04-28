import { useState, useEffect } from "react";
import "./Activity2.css";

const Activity2 = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    setSubmitted(false);
  };

  useEffect(() => {
    if (
      user.email === "" ||
      user.name === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setMessage("");
    } else if (!user.email.includes("@")) {
      setMessage("Invalid email format");
    } else if (user.password.length < 6) {
      setMessage("Password must be at least 6 characters");
    } else if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage("");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (
      user.email &&
      user.name &&
      user.password.length >= 6 &&
      user.password === user.confirmPassword &&
      user.email.includes("@")
    ) {
      alert("Registered Successfully!");

      setUser({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
      });

      setMessage("");
    } else {
      setMessage("Please fill out the form");
    }
  };

  return (
    <main className="container-form">
      <h1>Registration Form</h1>

      <figure className="formCard">
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="e.g juandelacruz@gmail.com"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="e.g Juan Dela Cruz"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password must be at least 6 characters"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Register</button>
        </form>

        {message && <p className="message">{message}</p>}
      </figure>
    </main>
  );
};

export default Activity2;