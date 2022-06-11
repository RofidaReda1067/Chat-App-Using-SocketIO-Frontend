import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import Container from "../Container/Container";
import Messages from "../Messages/Messages";
import BarForm from "../BarForm/BarForm";
import Input from "../Input/Input";
// import { Input } from 'semantic-ui-react';

const ENDPIONT = "http://localhost:3000";

let socket;

const Chat = ({ location, match }) => {
  const [NAME, setNAME] = useState("");
  const [ROOM, setROOM] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { NAME, ROOM } = queryString.parse(location);
    socket = io(ENDPIONT);

    setROOM(ROOM);
    setNAME(NAME);
    console.log("location.name", queryString.parse(location).NAME);

    //
    socket.emit("join", { NAME, ROOM }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPIONT, location]);
  //
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("ROOMData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="BasicContainer">
      <div className="Container">
        <BarForm ROOM={ROOM} />
        <Messages messages={messages} NAME={NAME} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <Container users={users} />
    </div>
  );
};
export default Chat;
