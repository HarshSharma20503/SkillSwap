import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const Chats = () => {
  const [scheduleModalShow, setScheduleModalShow] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleScheduleClick = () => {
    setScheduleModalShow(true);
  };

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };

  const chats = [
    { 
      id: 1, 
      name: 'Chat 1', 
      messages: [
        { text: 'Hello', sender: 'me' },
        { text: 'Hi there!', sender: 'other' }
      ]
    },
    { 
      id: 2, 
      name: 'Chat 2', 
      messages: [
        { text: 'Hey!', sender: 'me' },
        { text: 'What\'s up?', sender: 'other' }
      ]
    },
    // Add more chat histories as needed
  ];

  return (
    <div style={{ backgroundColor: '#2d2d2d', minHeight: '100vh', fontFamily: 'Montserrat, sans-serif', color: 'white'}}>
      <div style={{ display: 'flex', backgroundColor: 'lightgrey' }}>
        {/* Chat History */}
        <div style={{ flex: '3', backgroundColor: '#2d2d2d', minHeight: '100vh'}}>
          <h2 style={{ padding: '10px' }}>Chat History</h2>
          <ListGroup style={{ padding: '10px' }}>
            {chats.map((chat) => (
              <ListGroup.Item 
                key={chat.id} 
                onClick={() => handleChatClick(chat.id)} 
                style={{ cursor: 'pointer', marginBottom: '10px', padding: '10px', backgroundColor: selectedChat === chat.id ? '#3BB4A1' : 'lightgrey', borderRadius: '5px' }}
              >
                {chat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div style={{minWidth:"70vw"}}>
          {/* Profile Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #2d2d2d' }}>
            {/* Profile Info (Placeholder) */}
            <div>
              <img src="profile-image-url" alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>Username</span>
            </div>
            {/* Schedule Video Call Button */}
            <Button variant="info" onClick={handleScheduleClick}>
              Schedule Video Call
            </Button>
          </div>

          {/* Chat Interface */}
          <div style={{ flex: '7', position: 'relative', height: 'calc(100vh - 160px)' }}>
            {/* Chat Messages */}
            <div style={{ height: 'calc(100% - 50px)', color: '#3BB4A1', padding: '20px', overflowY: 'auto', position: 'relative' }}>
              {selectedChat && (
                chats.find((chat) => chat.id === selectedChat)?.messages.map((message, index) => (
                  <div 
                    key={index} 
                    style={{ display: 'flex', justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}
                  >
                    <div 
                      style={{ 
                        backgroundColor: message.sender === 'me' ? '#3BB4A1' : '#2d2d2d', 
                        color: '#ffffff', 
                        padding: '10px', 
                        borderRadius: '10px', 
                        maxWidth: '70%', 
                        textAlign: message.sender === 'me' ? 'right' : 'left' 
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Chat Input */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '10px', borderTop: '1px solid #2d2d2d', display: 'flex', alignItems: 'center' }}>
              <input type="text" placeholder="Type your message..." style={{ flex: '1', padding: '10px', borderRadius: '5px', marginRight: '10px', border: '1px solid #2d2d2d' }} />
              <Button variant="success" style={{ padding: '10px 20px', borderRadius: '5px' }}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Video Call Modal */}
      {scheduleModalShow && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#2d2d2d', color: '#3BB4A1', padding: '50px', borderRadius: '10px' }}>
            <h3>Schedule Video Call</h3>
            <Form>
              <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formDate" style={{ marginBottom: '20px' }}>
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formTime" style={{ marginBottom: '20px' }}>
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={() => setScheduleModalShow(false)} style={{ marginLeft: '10px' }}>
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
