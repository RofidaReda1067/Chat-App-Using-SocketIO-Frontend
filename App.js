import React from "react";

import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import RoomJoin from "./components/RoomJoin/RoomJoin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<RoomJoin />} component={RoomJoin} />
        <Route path="/Chat" element={<Chat />} component={Chat} />
      </Routes>
    </Router>
  );
};
export default App;
