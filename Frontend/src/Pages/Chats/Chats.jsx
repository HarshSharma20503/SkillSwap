import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useUser } from "../../util/UserContext";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const Chats = () => {
  const [scheduleModalShow, setScheduleModalShow] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [chatLoading, setChatLoading] = useState(true);
  const [chatMessageLoading, setChatMessageLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { user, setUser } = useUser();

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch chats from the backend
    const fetchChats = async () => {
      try {
        setChatLoading(true);
        const tempUser = JSON.parse(localStorage.getItem("userInfo"));
        const { data } = await axios.get("http://localhost:8000/chat");
        console.log("Chats", data.data);
        toast.success(data.message);
        if (tempUser?._id) {
          const temp = data.data.map((chat) => {
            return {
              id: chat._id,
              name: chat?.users.find((u) => u?._id !== tempUser?._id).name,
              picture: chat?.users.find((u) => u?._id !== tempUser?._id).picture,
              username: chat?.users.find((u) => u?._id !== tempUser?._id).username,
            };
          });
          setChats(temp);
        }

        // console.log(temp);
      } catch (err) {
        console.log(err);
        if (err?.response?.data?.message) {
          toast.error(err.response.data.message);
          if (err.response.data.message === "Please Login") navigate("/login");
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setChatLoading(false);
      }
    };
    fetchChats();
  }, []);

  const handleScheduleClick = () => {
    setScheduleModalShow(true);
  };

  const handleChatClick = async (chatId) => {
    try {
      setChatMessageLoading(true);
      const { data } = await axios.get(`http://localhost:8000/message/getMessages/${chatId}`);
      setChatMessages(data.data);
      setMessage("");
      console.log("Chats: ", chats);
      const chatDetails = chats.find((chat) => chat.id === chatId);
      setSelectedChat(chatDetails);
      console.log("selectedChat", chatDetails);
      // console.log("Data", data.message);
      toast.success(data.message);
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
        if (err.response.data.message === "Please Login") navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setChatMessageLoading(false);
    }
  };

  const sendMessage = async (e) => {
    try {
      if (message === "") {
        toast.error("Message is empty");
        return;
      }
      const { data } = await axios.post("/message/sendMessage", { chatId: selectedChat.id, content: message });
      console.log("after sending message", data);
      setChatMessages((prevState) => [...prevState, data.data]);
      setMessage("");
      // console.log("Data", data.message);
      toast.success(data.message);
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
        if (err.response.data.message === "Please Login") navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: "#2d2d2d", minHeight: "100vh", fontFamily: "Montserrat, sans-serif", color: "white" }}
    >
      <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
        {/* Chat History */}
        <div style={{ flex: "3", backgroundColor: "#2d2d2d", minHeight: "100vh" }}>
          <h2 style={{ padding: "10px" }}>Chat History</h2>
          <ListGroup style={{ padding: "10px" }}>
            {chatLoading ? (
              <div className="row m-auto">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <>
                {chats.map((chat) => (
                  <ListGroup.Item
                    key={chat.id}
                    onClick={() => handleChatClick(chat.id)}
                    style={{
                      cursor: "pointer",
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: selectedChat === chat.id ? "#3BB4A1" : "lightgrey",
                      borderRadius: "5px",
                    }}
                  >
                    {chat.name}
                  </ListGroup.Item>
                ))}
              </>
            )}
          </ListGroup>
        </div>
        {/* Right Section */}
        <div style={{ minWidth: "70vw" }}>
          {/* Profile Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #2d2d2d",
              minHeight: "50px",
            }}
          >
            {/* Profile Info (Placeholder) */}
            {selectedChat && (
              <>
                <div>
                  <img
                    src={selectedChat?.picture ? selectedChat.picture : "https://via.placeholder.com/150"}
                    alt="Profile"
                    style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                  />
                  <span style={{ fontFamily: "Montserrat, sans-serif", color: "#2d2d2d" }}>
                    {selectedChat?.username}
                  </span>
                </div>
                <Button variant="info" onClick={handleScheduleClick}>
                  Schedule Video Call
                </Button>
              </>
            )}

            {/* Schedule Video Call Button */}
          </div>

          {/* Chat Interface */}
          <div style={{ flex: "7", position: "relative", height: "calc(100vh - 160px)" }}>
            {/* Chat Messages */}
            <div
              style={{
                height: "calc(100% - 50px)",
                color: "#3BB4A1",
                padding: "20px",
                overflowY: "auto",
                position: "relative",
              }}
            >
              {selectedChat ? (
                <>
                  {chatMessages.map((message, index) => {
                    // console.log("user:", user._id);
                    // console.log("sender:", message.sender);
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: message.sender == user._id ? "flex-end" : "flex-start",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: message.sender === "me" ? "#3BB4A1" : "#2d2d2d",
                            color: "#ffffff",
                            padding: "10px",
                            borderRadius: "10px",
                            maxWidth: "70%",
                            textAlign: message.sender == user._id ? "right" : "left",
                          }}
                        >
                          {message.content}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {chatMessageLoading ? (
                    <div className="row h-100 d-flex justify-content-center align-items-center">
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
                      <h3 className="row w-100 d-flex justify-content-center align-items-center">
                        Select a chat to start messaging
                      </h3>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Chat Input */}
            {selectedChat && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "10px",
                  borderTop: "1px solid #2d2d2d",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    flex: "1",
                    padding: "10px",
                    borderRadius: "5px",
                    marginRight: "10px",
                    border: "1px solid #2d2d2d",
                  }}
                />
                <Button variant="success" style={{ padding: "10px 20px", borderRadius: "5px" }} onClick={sendMessage}>
                  Send
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Schedule Video Call Modal */}
      {scheduleModalShow && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#2d2d2d",
              color: "#3BB4A1",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <h3>Schedule Video Call</h3>
            <Form>
              <Form.Group controlId="formName" style={{ marginBottom: "20px" }}>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" style={{ marginBottom: "20px" }}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formDate" style={{ marginBottom: "20px" }}>
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formTime" style={{ marginBottom: "20px" }}>
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={() => setScheduleModalShow(false)} style={{ marginLeft: "10px" }}>
                Cancel
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
