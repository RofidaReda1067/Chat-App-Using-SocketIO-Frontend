// import openIcon from "../../images/openIcon.png";
import RoomJoin from "../RoomJoin/RoomJoin";
import { useState, useEffect } from "react";
import useSearchParams from "use-search-params";
import { io } from "socket.io-client";
import queryString from "query-string";

const Container = ({ users }) => {
  const [state, setstate] = useState(false);

  //
  const ENDPIONT = "http://localhost:3000";
  let socket;

  const location = window.location.href;
  const [query_String, {}] = useSearchParams();
  // searchParams.get("name");

  useEffect(() => {
    console.log(query_String);

    // console.log(queryString.__firebase_request_key());
    const { name } = queryString.parse(query_String);
    console.log(name);
    socket = io(ENDPIONT, {
      query: { name },
    });
    // console.log(name);
  }, []);

  return (
    <div className="txt">
      <div>
        <h1>
          Chat App{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </div>
      <br></br>

      <button
        onClick={() => {
          setstate(true);
          RoomJoin();
        }}
      >
        Go To ChatRoom
      </button>

      {/* <button 
        className="button"
        // value={message}
        onClick={({ target: { value } }) => setROOM(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendROOM(event) : null > */}
      {users ? (
        <div>
          <h1>People are chatting Now:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  {/* <img alt="open Icon" src={openIcon} /> */}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Container;
