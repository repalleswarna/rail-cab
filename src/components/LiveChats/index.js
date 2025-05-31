import React from "react";
import styled from "styled-components";
import {
  FaCheck,
  FaExclamationTriangle,
  FaArrowUp,
  FaArrowLeft,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

// Container for the entire chat interface
const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
  padding-top: 80px; /* Added to account for fixed header */
`;

// Fixed Header styling
const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .user-profile {
    display: flex;
    align-items: center;
  }

  .user-img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }

  .notification-icon {
    margin-right: 20px;
    font-size: 20px;
  }
`;

// Wrapper to hold sidebar and chat box
const ChatWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: calc(85vh - 60px); /* Adjusted for fixed header */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 300px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;
  max-height: 100%;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const ChatBox = styled.div`
  flex: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ChatHeader = styled.div`
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Badge = styled.span`
  background: #f8d7da;
  color: #721c24;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
`;

const ChatContent = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MessageRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  flex-direction: ${(props) => (props.isUser ? "row-reverse" : "row")};
`;

const MessageAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 8px;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 10px;
  background: ${(props) => (props.isUser ? "#0d6efd" : "#f1f1f1")};
  color: ${(props) => (props.isUser ? "white" : "black")};
  ${(props) =>
    props.isUser ? "border-top-right-radius: 0;" : "border-top-left-radius: 0;"}
`;

const Timestamp = styled.div`
  font-size: 11px;
  color: #888;
  margin: 4px ${(props) => (props.isUser ? "0 44px 0 auto" : "0 auto 0 44px")};
  text-align: ${(props) => (props.isUser ? "right" : "left")};
`;

const ChatFooter = styled.div`
  border-top: 1px solid #dee2e6;
  padding: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const TemplateDropdown = styled.select`
  padding: 6px 10px;
  border-radius: 6px;
`;

const NoteButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 12px;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const SendButton = styled.button`
  background: #0d6efd;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
`;

const ChatCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  background: #eef3fb;
  padding: 10px;
  border-radius: 8px;
`;

const ChatAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChatText = styled.div`
  flex: 1;
`;

const ChatTitle = styled.div`
  font-weight: bold;
`;

const ChatSnippet = styled.div`
  font-size: 13px;
  color: #666;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.button`
  background: ${(props) => (props.active ? "#0d6efd" : "#e9ecef")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const LiveBadge = styled.span`
  background: #d4edda;
  color: #155724;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
  margin-left: 10px;
`;

function LiveChats({ setActiveTab }) {
  return (
    <>
      {/* Fixed Header */}
      <FixedHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaArrowLeft
            onClick={() => setActiveTab("supportPortal")}
            style={{ cursor: "pointer", fontSize: "20px" }}
          />
          <h4 style={{ fontSize: "24px", fontWeight: 600, margin: 0 }}>
            Live Chats
          </h4>
        </div>
        <div className="user-profile">
          <span className="notification-icon">
            <FaExclamationTriangle />
          </span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="user-img"
          />
          <h6 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>
            Sarah Wilson
          </h6>
        </div>
      </FixedHeader>

      {/* Main Content */}
      <Container>
        <ChatWrapper>
          {/* Sidebar */}
          <Sidebar>
            <TabHeader>
              <div>
                <strong>Live Chats</strong> <LiveBadge>12 Active</LiveBadge>
              </div>
            </TabHeader>
            <Tabs>
              <Tab active>All</Tab>
              <Tab>New</Tab>
              <Tab>My Chats</Tab>
            </Tabs>
            <input
              className="form-control my-3"
              placeholder="Search conversations..."
            />

            <ChatCard>
              <ChatAvatar src="https://randomuser.me/api/portraits/men/75.jpg" />
              <ChatText>
                <ChatTitle>John Cooper</ChatTitle>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  Booking #2458
                </div>
                <ChatSnippet>I haven't received my refund yet...</ChatSnippet>
              </ChatText>
              <div style={{ fontSize: "12px", color: "#888" }}>2m ago</div>
            </ChatCard>
          </Sidebar>

          {/* Chat Panel */}
          <ChatBox>
            <ChatHeader>
              <UserInfo>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="User Avatar"
                />
                <div>
                  <strong>John Cooper</strong>
                  <br />
                  <span style={{ fontSize: "13px", color: "#666" }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <Badge>Payment Issue</Badge>
              </UserInfo>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary btn-sm">
                  <FaExclamationTriangle /> Escalate
                </button>
                <button className="btn btn-success btn-sm">
                  <FaCheck /> Resolve
                </button>
              </div>
            </ChatHeader>

            <ChatContent>{/* Messages would go here */}</ChatContent>

            <ChatFooter>
              <InputGroup>
                <TemplateDropdown>
                  <option value="">Select Template</option>
                </TemplateDropdown>
                <NoteButton>Add Note</NoteButton>
                <MessageInput placeholder="Type a message..." />
                <SendButton>Send</SendButton>
              </InputGroup>
            </ChatFooter>
          </ChatBox>
        </ChatWrapper>
      </Container>
    </>
  );
}

export default LiveChats;
