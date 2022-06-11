import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RoomJoin() {
  const [NAME, setName] = useState("");
  // const [ROOM, setRoom] = useState("");

  return (
    <div className="Outer">
      <div className="Inner">
        <h1 className="Chat Now">Chat Now!</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          {/* <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          /> */}
        </div>
        <Link
          onClick={(e) => (!NAME ? e.preventDefault() : null)}
          to={`/chat?name=${NAME}`}
        >
          <button
            className={"button mt-20"}
            onClick={(e) => e.preventDefault}
            type="submit"
          >
            Welcome
          </button>
        </Link>
      </div>
    </div>
  );
}
