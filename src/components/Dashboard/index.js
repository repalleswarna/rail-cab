import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BiCalendar,
  BiRupee,
  BiUser,
  BiHeadphone,
  BiErrorCircle,
  BiCheckCircle,
  BiInfoCircle,
  BiGroup,
  BiSupport,
  BiBarChartAlt2,
  BiNews,
  BiBell,
  BiArrowBack,
} from "react-icons/bi";
import SupportTickets from "../SupportTickets";

const DashboardContainer = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  padding-top: 100px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h5`
  font-weight: 600;
  color: #64748b;
`;

const StatValue = styled.h3`
  font-weight: 700;
  color: #0f172a;
`;

const StatChange = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${(props) => (props.positive ? "#16a34a" : "#dc2626")};
`;

const StatIcon = styled.div`
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
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
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BellIconWrapper = styled.div`
  position: relative;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  &:hover {
    color: #0f172a;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EarningsBox = styled.div`
  height: 200px;
  background-color: white;
  border-radius: 10px;
`;

const NotificationItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

const TimeText = styled.span`
  font-size: 0.8rem;
  color: #94a3b8;
`;

const QuickLinkButton = styled.button`
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0f172a;
  font-weight: 500;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #e2e8f0;
  }
`;

function Dashboard() {
  const [showSupportTickets, setShowSupportTickets] = useState(false);

  const handleSupportTicketsClick = () => {
    setShowSupportTickets(true);
  };

  const handleBackToDashboard = () => {
    setShowSupportTickets(false);
  };

  if (showSupportTickets) {
    return (
      <>
        <Header>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BiArrowBack
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={handleBackToDashboard}
            />
            <h4>Support Tickets</h4>
          </div>
          <HeaderRight>
            <BellIconWrapper>
              <BiBell />
            </BellIconWrapper>
            <Profile>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Smith"
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
              />
              <span style={{ color: "#0f172a", fontWeight: 500 }}>
                John Smith
              </span>
            </Profile>
          </HeaderRight>
        </Header>
        <DashboardContainer>
          <SupportTickets />
        </DashboardContainer>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <Header className="d-none d-lg-flex">
        <h4>Dashboard</h4>
        <HeaderRight>
          <BellIconWrapper>
            <BiBell />
          </BellIconWrapper>
          <Profile>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Smith"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
            <span style={{ color: "#0f172a", fontWeight: 500 }}>
              John Smith
            </span>
          </Profile>
        </HeaderRight>
      </Header>

      {/* Main Container */}
      <DashboardContainer>
        {/* Stats */}
        <div className="row g-4 mb-4">
          <div className="col-md-3 col-sm-6">
            <Card>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Title>Total Bookings</Title>
                  <StatValue>2,451</StatValue>
                  <StatChange positive>↑ 12% from last month</StatChange>
                </div>
                <StatIcon bg="#e0f2fe">
                  <BiCalendar color="#0284c7" />
                </StatIcon>
              </div>
            </Card>
          </div>

          <div className="col-md-3 col-sm-6">
            <Card>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Title>Revenue</Title>
                  <StatValue>₹1.2M</StatValue>
                  <StatChange positive>↑ 8% from last month</StatChange>
                </div>
                <StatIcon bg="#dcfce7">
                  <BiRupee color="#22c55e" />
                </StatIcon>
              </div>
            </Card>
          </div>

          <div className="col-md-3 col-sm-6">
            <Card>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Title>Active Drivers</Title>
                  <StatValue>847</StatValue>
                  <StatChange>↓ 3% from last month</StatChange>
                </div>
                <StatIcon bg="#ede9fe">
                  <BiUser color="#8b5cf6" />
                </StatIcon>
              </div>
            </Card>
          </div>

          <div className="col-md-3 col-sm-6">
            <Card onClick={handleSupportTicketsClick}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Title>Support Tickets</Title>
                  <StatValue>24</StatValue>
                  <StatChange positive>↑ 18% from last month</StatChange>
                </div>
                <StatIcon bg="#fef3c7">
                  <BiHeadphone color="#f97316" />
                </StatIcon>
              </div>
            </Card>
          </div>
        </div>

        {/* Charts */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <Card>
              <h6 className="fw-semibold">Earnings Overview</h6>
              <EarningsBox />
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <h6 className="fw-semibold">Booking Distribution</h6>
              <EarningsBox />
            </Card>
          </div>
        </div>

        {/* Notifications & Quick Links */}
        <div className="row g-4">
          <div className="col-md-6">
            <Card>
              <h6 className="fw-semibold mb-3">Recent Notifications</h6>
              <NotificationItem>
                <div className="d-flex">
                  <BiErrorCircle color="#ef4444" size={20} />
                  <div className="ms-3 w-100">
                    <div className="fw-medium">
                      High priority support ticket #2458 requires attention
                    </div>
                    <TimeText>2 hours ago</TimeText>
                  </div>
                </div>
              </NotificationItem>
              <NotificationItem>
                <div className="d-flex">
                  <BiCheckCircle color="#22c55e" size={20} />
                  <div className="ms-3 w-100">
                    <div className="fw-medium">
                      New driver KYC verified successfully
                    </div>
                    <TimeText>4 hours ago</TimeText>
                  </div>
                </div>
              </NotificationItem>
              <NotificationItem>
                <div className="d-flex">
                  <BiInfoCircle color="#3b82f6" size={20} />
                  <div className="ms-3 w-100">
                    <div className="fw-medium">
                      System maintenance scheduled for tonight
                    </div>
                    <TimeText>5 hours ago</TimeText>
                  </div>
                </div>
              </NotificationItem>
            </Card>
          </div>

          <div className="col-md-6">
            <Card>
              <h6 className="fw-semibold mb-3">Quick Links</h6>
              <div className="row g-3">
                <div className="col-6">
                  <QuickLinkButton>
                    <BiNews size={20} color="#0284c7" />
                    CMS Portal
                  </QuickLinkButton>
                </div>
                <div className="col-6">
                  <QuickLinkButton>
                    <BiGroup size={20} color="#8b5cf6" />
                    HR Portal
                  </QuickLinkButton>
                </div>
                <div className="col-6">
                  <QuickLinkButton>
                    <BiSupport size={20} color="#10b981" />
                    Support
                  </QuickLinkButton>
                </div>
                <div className="col-6">
                  <QuickLinkButton>
                    <BiBarChartAlt2 size={20} color="#f97316" />
                    Reports
                  </QuickLinkButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
