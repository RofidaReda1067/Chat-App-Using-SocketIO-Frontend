import React from "react";

import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import RoomJoin from "./components/RoomJoin/RoomJoin";
import Container from "./components/Container/Container";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<RoomJoin />} component={RoomJoin} />
        <Route path="/Chat" element={<Container />} component={Container} />
      </Routes>
    </Router>
  );
};
export default App;
