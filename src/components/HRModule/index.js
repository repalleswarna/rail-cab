import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaClock,
  FaEllipsisV,
  FaCheck,
  FaTimes,
  FaArrowLeft,
  FaBars,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import EmployeeManagement from "../EmployeeManagement";
import MemosNotices from "../MemosNotices";
import LeaveManagement from "../LeaveManagement";
import AttendanceDashboard from "../AttendanceDashboard";

const GlobalStyle = createGlobalStyle`
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "0")};
  right: 0;
  background: white;
  border-radius: 0 0 9px 9px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  z-index: 1000;
  transition: left 0.3s ease;

  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 5rem 1rem 1rem
    ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "1rem")};
  background-color: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  width: 100%;
  transition: padding-left 0.3s ease;

  @media (max-width: 1024px) {
    padding-left: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const StatBox = styled.div`
  background: white;
  border-radius: 3px;
  padding: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatsContainer = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 0 1.5rem 1rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const EmployeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

const LeaveRequestCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
`;

const MemoCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
  width: 100%;
  max-width: 380px;
  border: 1px solid #ddd;
`;

const AttendanceBox = styled.div`
  padding: 0.8rem;
  border-radius: 8px;
  width: 48%;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const AttendancePresent = styled(AttendanceBox)`
  background-color: #e6f7ee;
  color: #28a745;
`;

const AttendanceAbsent = styled(AttendanceBox)`
  background-color: #fce8e6;
  color: #dc3545;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #4e73df;
  padding: 1rem;
  color: white;
  transition: left 0.3s ease;
  z-index: 1100;
`;

const SidebarItem = styled.div`
  padding: 1rem 0.5rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  background-color: ${({ active }) => (active ? "#3b5bdb" : "transparent")};
  border-radius: 6px;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #3b5bdb;
  }
`;

const HRModule = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const renderContent = () => {
    switch (activeTab) {
      case "employeeManagement":
        return <EmployeeManagement onBack={() => setActiveTab("dashboard")} />;
      case "memosNotices":
        return <MemosNotices onBack={() => setActiveTab("dashboard")} />;
      case "leaveManagement":
        return <LeaveManagement onBack={() => setActiveTab("dashboard")} />;
      case "attendanceDashboard":
        return <AttendanceDashboard onBack={() => setActiveTab("dashboard")} />;
      default:
        return (
          <>
            <StatsContainer>
              <div className="row">
                {[
                  {
                    label: "Total Employees",
                    value: "156",
                    icon: <FaUsers />,
                    bg: "#d0e7ff",
                    color: "#007bff",
                  },
                  {
                    label: "Present Today",
                    value: "142",
                    icon: <FaUserCheck />,
                    bg: "#c2f0d3",
                    color: "#28a745",
                  },
                  {
                    label: "On Leave",
                    value: "14",
                    icon: <FaUserClock />,
                    bg: "#ffe2b2",
                    color: "#ff9900",
                  },
                  {
                    label: "Pending Requests",
                    value: "8",
                    icon: <FaClock />,
                    bg: "#e2d6ff",
                    color: "#6f42c1",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="col-6 col-md-3 mb-3">
                    <StatBox>
                      <div>
                        <h6>{item.label}</h6>
                        <h5>{item.value}</h5>
                      </div>
                      <div
                        className="icon"
                        style={{
                          backgroundColor: item.bg,
                          borderRadius: "4px",
                          padding: "0.4rem",
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          size: 18,
                          color: item.color,
                        })}
                      </div>
                    </StatBox>
                  </div>
                ))}
              </div>
            </StatsContainer>

            <div className="row">
              <div className="col-md-6">
                <Section>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#2c3e50",
                        marginBottom: "200px",
                      }}
                    >
                      Employee Management
                    </h5>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{
                        backgroundColor: "#4e73df",
                        border: "none",
                        fontSize: "0.8rem",
                        padding: "0.25rem 0.5rem",
                        marginBottom: "200px",
                      }}
                      onClick={() => setActiveTab("employeeManagement")}
                    >
                      + Add Employee
                    </Button>
                  </div>
                  <hr />

                  <EmployeeCard>
                    <div
                      className="d-flex align-items-center"
                      style={{ width: "40%" }}
                    >
                      <Avatar
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        alt="Alex Johnson"
                      />
                      <div>
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: "0.85rem",
                          }}
                        >
                          Alex Johnson
                        </div>
                        <div style={{ fontSize: "0.75rem" }}>
                          Software Engineer
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ width: "35%" }}
                    >
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "green",
                          fontWeight: "600",
                        }}
                      >
                        Active
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ width: "20%" }}
                    >
                      <FaEllipsisV
                        color="#4e73df"
                        size={18}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </EmployeeCard>

                  {/* More Employee cards can go here */}
                </Section>
              </div>

              <div className="col-md-6">
                <Section>
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#2c3e50",
                        marginBottom: "200px",
                      }}
                    >
                      Memos & Notices
                    </h5>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{
                        backgroundColor: "#4e73df",
                        border: "none",
                        fontSize: "0.8rem",
                        padding: "0.25rem 0.5rem",
                        marginBottom: "200px",
                      }}
                      onClick={() => setActiveTab("memosNotices")}
                    >
                      + Add Memo
                    </Button>
                  </div>
                  <hr />

                  <MemoCard>
                    <h6
                      style={{
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        color: "#2c3e50",
                      }}
                    >
                      Company Picnic Scheduled
                    </h6>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6c757d",
                        marginTop: "0.3rem",
                      }}
                    >
                      We are organizing a company picnic on July 30th. All
                      employees are invited to join.
                    </p>
                  </MemoCard>

                  {/* More Memo cards can go here */}
                </Section>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <Section style={{ height: "50vh" }}>
                  <h5
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#2c3e50",
                      marginBottom: "1rem",
                    }}
                  >
                    Leave Management
                  </h5>
                  <LeaveRequestCard
                    onClick={() => setActiveTab("leaveManagement")}
                    role="button"
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "0.85rem",
                          marginBottom: "4px",
                        }}
                      >
                        John Doe - Vacation Leave
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6c757d" }}>
                        Jul 10 - Jul 15, 2025
                      </div>
                    </div>
                    <FaEllipsisV
                      color="#4e73df"
                      size={18}
                      style={{ cursor: "pointer" }}
                    />
                  </LeaveRequestCard>

                  {/* More leave requests */}
                </Section>
              </div>

              <div className="col-md-6">
                <Section style={{ height: "50vh" }}>
                  <h5
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#2c3e50",
                      marginBottom: "1rem",
                    }}
                  >
                    Attendance Dashboard
                  </h5>
                  <div className="d-flex justify-content-between">
                    <AttendancePresent
                      onClick={() => setActiveTab("attendanceDashboard")}
                      role="button"
                    >
                      <div>
                        <FaCheck size={24} />
                      </div>
                      <div>Present</div>
                      <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                        142
                      </div>
                    </AttendancePresent>

                    <AttendanceAbsent
                      onClick={() => setActiveTab("attendanceDashboard")}
                      role="button"
                    >
                      <div>
                        <FaTimes size={24} />
                      </div>
                      <div>Absent</div>
                      <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                        14
                      </div>
                    </AttendanceAbsent>
                  </div>
                </Section>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Sidebar sidebarOpen={sidebarOpen}>
        <h4>HR Module</h4>
        <SidebarItem
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          active={activeTab === "employeeManagement"}
          onClick={() => setActiveTab("employeeManagement")}
        >
          Employee Management
        </SidebarItem>
        <SidebarItem
          active={activeTab === "memosNotices"}
          onClick={() => setActiveTab("memosNotices")}
        >
          Memos & Notices
        </SidebarItem>
        <SidebarItem
          active={activeTab === "leaveManagement"}
          onClick={() => setActiveTab("leaveManagement")}
        >
          Leave Management
        </SidebarItem>
        <SidebarItem
          active={activeTab === "attendanceDashboard"}
          onClick={() => setActiveTab("attendanceDashboard")}
        >
          Attendance Dashboard
        </SidebarItem>
      </Sidebar>

      <HeaderContainer sidebarOpen={sidebarOpen} className="d-none d-lg-flex">
        <Header>
          {activeTab !== "dashboard" && (
            <FaArrowLeft
              size={24}
              color="#6c757d"
              onClick={() => setActiveTab("dashboard")}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
          )}

          <h4
            style={{
              fontWeight: "600",
              color: "#2c3e50",
              fontSize: "1.2rem",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="btn d-lg-none me-2"
              onClick={toggleSidebar}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                marginRight: "8px",
              }}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <FaTimes size={24} color="#2c3e50" />
              ) : (
                <FaBars size={24} color="#2c3e50" />
              )}
            </button>

            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "employeeManagement" && "Employee Management"}
            {activeTab === "memosNotices" && "Memos & Notices"}
            {activeTab === "leaveManagement" && "Leave Management"}
            {activeTab === "attendanceDashboard" && "Attendance Dashboard"}
          </h4>
        </Header>
      </HeaderContainer>

      <Container sidebarOpen={sidebarOpen}>{renderContent()}</Container>
    </>
  );
};

export default HRModule;
