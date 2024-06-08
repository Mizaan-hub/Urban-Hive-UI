import { useContext, useState } from "react";
import "./Chat.scss";
import { AuthContext } from "../../context/AuthContext";
import ApiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await ApiRequest("/chats/" + id);
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;
    try {
      const res = await ApiRequest.post("/messages/" + chat.id, {
        text,
      });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chat">
      <div className="messages">
        <h1>Messages</h1>
        {/* <div className="message">
          <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
          <span>Lana Rhoades</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
          <span>Lana Rhoades</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
          <span>Lana Rhoades</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
          <span>Lana Rhoades</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
          <span>Lana Rhoades</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div> */}

        {chats?.map((chat) => (
          <div
            className="message"
            key={chat.id}
            style={{
              backgroundColor: chat.seenBy.includes(currentUser.id)
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleOpenChat(chat.id, chat.receiver)}
          >
            <img
              src={
                chat.receiver.avatar ||
                "../../../public/assets/pics/noAvatar.jpg"
              }
              alt=""
            />
            <span>{chat.receiver.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={
                  chat.receiver.avatar ||
                  "../../../public/assets/pics/noAvatar.jpg"
                }
                alt=""
              />
              <span>{chat.receiver.username}</span>
            </div>
            <div className="close" onClick={() => setChat(null)}>
              X
            </div>
          </div>
          <div className="center">
            {chat.messages.map((message) => {
              return (
                <div
                  className="chatMessage"
                  style={{
                    alignSelf:
                      message.userId === currentUser.id
                        ? "flex-end"
                        : "flex-start",
                    textAlign:
                      message.userId === currentUser.id ? "right" : "left",
                  }}
                  key={message.id}
                >
                  <p>{message.text}</p>
                  <span
                    style={{
                      backgroundColor:
                        message.userId === currentUser.id
                          ? "rgba(2, 255, 2, 0.400)"
                          : "var(--color-template)",
                      alignSelf:
                        message.userId === currentUser.id
                          ? "flex-end"
                          : "flex-start",
                      textAlign:
                        message.userId === currentUser.id ? "right" : "left",
                    }}
                  >
                    {format(message.createdAt)}
                  </span>
                </div>
              );
            })}

            {/* <div className="chatMessage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <span>1 hour ago</span>
            </div> */}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Chat;
