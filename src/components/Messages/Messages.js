import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

const Messages = ({ messages, NAME }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={NAME} />
      </div>
    ))}
  </ScrollToBottom>
);
export default Messages;
