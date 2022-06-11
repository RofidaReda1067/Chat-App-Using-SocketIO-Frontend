import React from "react";
const Input = ({ setMessage, sendMessage, message }) => {
  <form className="form">
    <Input
      className="input"
      type="text"
      placeholder="type msg"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />{" "}
  </form>;
};
export default Input;
