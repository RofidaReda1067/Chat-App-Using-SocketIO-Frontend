// import openIcon from "../../images/openIcon.png";
import RoomJoin from "../RoomJoin/RoomJoin";
const Container = ({ users }) => (
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
    <button onClick={() => RoomJoin()}>Go To ChatRoom</button>

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

export default Container;
