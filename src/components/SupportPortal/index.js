import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTicketAlt,
  FaComments,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaArrowUp,
  FaCheck,
  FaBell,
} from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import FeedbackAndCompliance from "../FeedbackAndCompliance";
import FailedPaymentReport from "../FailedPaymentReport";

// Fixed Header styling
const FixedHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: #ffffff;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  .header-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .notification-icon {
    color: #555;
    font-size: 20px;
    position: relative;
  }

  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
`;

// Main container with padding to account for fixed header
const MainContainer = styled.div`
  padding-top: 70px; /* Same as header height */
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const SummaryCard = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  color: #000;
  background-color: transparent;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  display: flex;
  flex-direction: column;
  position: relative;

  .icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon.red {
    background-color: rgba(255, 0, 0, 0.1);
  }
  .icon.green {
    background-color: rgba(0, 128, 0, 0.1);
  }
  .icon.blue {
    background-color: rgba(0, 0, 255, 0.1);
  }
  .icon.purple {
    background-color: rgba(128, 0, 128, 0.1);
  }

  small {
    font-size: 0.85rem;
  }
`;

const ChatBubble = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  max-width: 100%;
  font-size: 14px;

  &.sent {
    background-color: lightblue;
    color: white;
    text-align: right;
    float: right;
    clear: both;
  }

  &.received {
    float: left;
    clear: both;
  }
`;

const ChatProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

// Live Chats specific styles
const ChatContainer = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
  padding-top: 70px;
`;

const ChatWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: calc(85vh - 70px);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChatSidebar = styled.div`
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

const MainChatBox = styled.div`
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

const BlurButton = styled.button`
  background: rgba(0, 123, 255, 0.1);
  color: #007bff;
  border: 1px solid #007bff;
  backdrop-filter: blur(4px);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 123, 255, 0.2);
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

function SupportPortal() {
  const [activeTab, setActiveTab] = useState("supportPortal");

  const onBack = () => {
    setActiveTab("supportPortal");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "supportPortal":
        return (
          <MainContainer>
            {/* Top Summary Cards */}
            <div className="row text-dark mb-4">
              <div className="col-md-3 col-sm-6 mb-3">
                <SummaryCard>
                  <div className="icon red">
                    <FaTicketAlt size={20} color="red" />
                  </div>
                  <h4
                    style={{ fontSize: "20px", fontWeight: 600, color: "gray" }}
                  >
                    Active Tickets
                  </h4>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 650,
                      color: "black",
                    }}
                  >
                    42
                  </h4>
                  <h4
                    style={{ fontSize: "15px", fontWeight: 650, color: "red" }}
                  >
                    {" "}
                    <BiUpArrowAlt size={23} /> 8 New Today
                  </h4>
                </SummaryCard>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <SummaryCard onClick={() => setActiveTab("liveChats")}>
                  <div className="icon green">
                    <FaComments size={20} color="green" />
                  </div>
                  <h4
                    style={{ fontSize: "20px", fontWeight: 600, color: "gray" }}
                  >
                    Live Chats
                  </h4>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 650,
                      color: "black",
                    }}
                  >
                    12
                  </h4>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      color: "green",
                    }}
                  >
                    <GoDotFill size={22} />3 agents active
                  </h4>
                </SummaryCard>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <SummaryCard>
                  <div className="icon blue">
                    <FaCheckCircle size={20} color="blue" />
                  </div>
                  <h4
                    style={{ fontSize: "20px", fontWeight: 600, color: "gray" }}
                  >
                    Resolved Today
                  </h4>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 650,
                      color: "black",
                    }}
                  >
                    28
                  </h4>
                  <h4
                    style={{ fontSize: "15px", fontWeight: 650, color: "blue" }}
                  >
                    <BiUpArrowAlt size={22} />
                    85% resolution rate
                  </h4>
                </SummaryCard>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <SummaryCard>
                  <div className="icon purple">
                    <FaClock size={20} color="purple" />
                  </div>
                  <h4
                    style={{ fontSize: "20px", fontWeight: 600, color: "gray" }}
                  >
                    Average Response Time
                  </h4>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 650,
                      color: "black",
                    }}
                  >
                    15m
                  </h4>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      color: "green",
                    }}
                  >
                    <FaArrowDown size={20} /> 2m better than target
                  </h4>
                </SummaryCard>
              </div>
            </div>

            {/* Main Content */}
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-8">
                {/* Support Tickets */}
                <div className="card mb-4">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Support Tickets</h6>
                    <button className="btn btn-primary btn-sm">
                      New Ticket
                    </button>
                  </div>
                  <div className="card-body">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Search tickets..."
                    />
                    <ul className="list-group">
                      <li className="list-group-item d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                          <span>
                            {" "}
                            <GoDotFill size={20} color="red" /> Payment Failed -
                            Booking #2458
                          </span>
                          <h6
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "red",
                              backgroundColor: "#f8d7da",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            High
                          </h6>
                        </div>
                        <small className="text-muted mt-1">
                          Updated 5 mins ago
                        </small>
                      </li>
                      <li className="list-group-item d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                          <span>
                            {" "}
                            <GoDotFill size={20} color="orange" /> Driver Late -
                            Trip #8547
                          </span>
                          <h6
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "orange",
                              backgroundColor: "#fff3cd",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            Medium
                          </h6>
                        </div>
                        <small className="text-muted mt-1">
                          Updated 12 mins ago
                        </small>
                      </li>
                      <li className="list-group-item d-flex flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                          <span>
                            {" "}
                            <GoDotFill size={20} color="green" /> App Login
                            Issue - User #1247
                          </span>
                          <h6
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "green",
                              backgroundColor: "#d4edda",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            Low
                          </h6>
                        </div>
                        <small className="text-muted mt-1">
                          Updated 25 mins ago
                        </small>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Recent Feedback */}
                <div className="card mb-4 w-100" style={{ height: "auto" }}>
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Recent Feedback</h6>
                    <BlurButton onClick={() => setActiveTab("feedback")}>
                      View
                    </BlurButton>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>⭐⭐⭐⭐☆ Trip #4521</span>
                        <small className="text-muted">2 hours ago</small>
                      </div>
                      <p className="mb-0">
                        Great service, but the driver was slightly late.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <span>⭐⭐⭐⭐⭐ Trip #4520</span>
                        <small className="text-muted">3 hours ago</small>
                      </div>
                      <p className="mb-0">
                        Excellent experience! Very professional driver.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-4">
                {/* Live Chat */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h6 className="mb-0">Live Chat</h6>
                  </div>
                  <div
                    className="card-body"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    <div className="mb-3 d-flex align-items-start">
                      <ChatProfile
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Boy"
                      />
                      <ChatBubble className="received">
                        <div
                          style={{
                            color: "black",
                            fontWeight: "450",
                            backgroundColor: "whitesmoke",
                          }}
                        >
                          Hi, I'm having trouble with my booking
                        </div>
                        <small>10:24 AM</small>
                      </ChatBubble>
                    </div>
                    <div className="mb-3 d-flex justify-content-end align-items-start">
                      <ChatBubble className="sent">
                        <h6 style={{ color: "black", fontWeight: "450" }}>
                          Hello! I'd be happy to help. Could you please provide
                          your booking number?
                        </h6>
                        <h7 style={{ color: "black", fontWeight: "450" }}>
                          10:25 AM
                        </h7>
                      </ChatBubble>
                      <ChatProfile
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Girl"
                      />
                    </div>
                    <input
                      className="form-control mt-3"
                      placeholder="Type your message..."
                    />
                  </div>
                </div>

                {/* Payment Issues */}
                <div className="card w-100" style={{ height: "auto" }}>
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <button
                      onClick={onBack}
                      className="btn btn-link p-0 me-2"
                      style={{ color: "#0d6efd" }}
                    >
                      <BiArrowBack size={20} />
                    </button>
                    <h6 className="mb-0">Payment Issues</h6>
                    <BlurButton onClick={() => setActiveTab("paymentIssues")}>
                      View
                    </BlurButton>
                  </div>
                  <div className="card-body text-muted">
                    <p>No payment issues reported today.</p>
                  </div>
                </div>
              </div>
            </div>
          </MainContainer>
        );
      case "liveChats":
        return (
          <ChatContainer>
            <ChatWrapper>
              {/* Sidebar */}
              <ChatSidebar>
                <TabHeader>
                  <div>
                    <strong>Live Chats</strong> <LiveBadge>12 Active</LiveBadge>
                  </div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setActiveTab("supportPortal")}
                    style={{ padding: "2px 8px", fontSize: "12px" }}
                  >
                    Back to Support
                  </button>
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
                    <ChatSnippet>
                      I haven't received my refund yet...
                    </ChatSnippet>
                  </ChatText>
                  <div style={{ fontSize: "12px", color: "#888" }}>2m ago</div>
                </ChatCard>
              </ChatSidebar>

              {/* Chat Panel */}
              <MainChatBox>
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

                <ChatContent>
                  <MessageRow>
                    <MessageAvatar src="https://randomuser.me/api/portraits/men/75.jpg" />
                    <MessageBubble>
                      Hi, I made a booking yesterday but the payment was{" "}
                      <b>deducted twice from</b> my account. Booking ID #2458
                    </MessageBubble>
                  </MessageRow>
                  <Timestamp>10:45 AM</Timestamp>

                  <MessageRow isUser>
                    <MessageAvatar src="https://randomuser.me/api/portraits/women/65.jpg" />
                    <MessageBubble isUser>
                      Hello John, I understand your concern. Let me check the
                      transaction details for you.
                    </MessageBubble>
                  </MessageRow>
                  <Timestamp isUser>10:47 AM</Timestamp>
                </ChatContent>

                <ChatFooter>
                  <InputGroup>
                    <TemplateDropdown>
                      <option>Select Template</option>
                    </TemplateDropdown>
                    <NoteButton>Add Note</NoteButton>
                    <MessageInput placeholder="Type your message..." />
                    <SendButton>
                      <FaArrowUp />
                    </SendButton>
                  </InputGroup>
                </ChatFooter>
              </MainChatBox>
            </ChatWrapper>
          </ChatContainer>
        );
      case "feedback":
        return (
          <FeedbackAndCompliance onBack={() => setActiveTab("supportPortal")} />
        );
      case "paymentIssues":
        return (
          <FailedPaymentReport onBack={() => setActiveTab("supportPortal")} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <FixedHeader>
        <h4 className="header-title">
          {activeTab === "supportPortal" && "Support Portal"}
          {activeTab === "liveChats" && (
            <>
              <BiArrowBack
                size={20}
                onClick={onBack}
                style={{ cursor: "pointer" }}
              />
              {" Live Chats"}
            </>
          )}
          {activeTab === "feedback" && (
            <>
              <BiArrowBack
                size={20}
                onClick={onBack}
                style={{ cursor: "pointer" }}
              />
              {" Feedback & Compliance"}
            </>
          )}
          {activeTab === "paymentIssues" && (
            <>
              <BiArrowBack
                size={20}
                onClick={onBack}
                style={{ cursor: "pointer" }}
              />
              {" Failed Payment Report"}
            </>
          )}
        </h4>
        <div className="user-profile">
          <FaBell className="notification-icon" />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="user-img"
          />
          <h6 className="user-name">Sarah Wilson</h6>
        </div>
      </FixedHeader>

      {renderContent()}
    </>
  );
}

export default SupportPortal;
