import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCloud,
  FaExclamationTriangle,
  FaSmile,
  FaBan,
  FaEye,
  FaTimesCircle,
  FaArrowLeft,
} from "react-icons/fa";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  margin-top: 60px;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
`;

const StatValue = styled.h4`
  font-weight: bold;
  margin: 0;
`;

const Tabs = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0 10px 0;
  border-bottom: 2px solid #dee2e6;
`;

const Tab = styled.div`
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#0d6efd" : "transparent")};
  color: ${(props) => (props.active ? "#0d6efd" : "#000")};
  cursor: pointer;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const UserCell = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Badge = styled.span`
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bg || "#ccc"};
  color: ${(props) => props.color || "#fff"};
  font-weight: 500;
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background: #f8f9fa;
  text-transform: uppercase;
  font-size: 12px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 12px;
  vertical-align: middle;
`;

const Th = styled.th`
  padding: 12px;
  vertical-align: middle;
  font-weight: 600;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const FeedbackAndCompliance = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("Complaints");

  return (
    <Container className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div></div>
        <div>
          <button className="btn btn-outline-dark me-2">
            <FaCloud style={{ marginRight: 5 }} /> Export Report
          </button>
          <button className="btn btn-primary">+ Add Manual Entry</button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <StatCard>
            <IconWrapper>
              <FaCloud className="text-primary" title="Total Feedback" />
            </IconWrapper>
            <div className="text-muted">Total Feedback</div>
            <StatValue>1,284</StatValue>
            <div>Last 30 Days</div>
          </StatCard>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <StatCard>
            <IconWrapper>
              <FaExclamationTriangle
                className="text-danger"
                title="Active Complaints"
              />
            </IconWrapper>
            <div className="text-muted">Active Complaints</div>
            <StatValue>86</StatValue>
            <div className="text-danger">+12 new today</div>
          </StatCard>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <StatCard>
            <IconWrapper>
              <FaSmile className="text-success" title="Positive Sentiment" />
            </IconWrapper>
            <div className="text-muted">Positive Sentiment</div>
            <StatValue>78.5%</StatValue>
            <div className="text-success">↑ 2.4% this week</div>
          </StatCard>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <StatCard>
            <IconWrapper>
              <FaBan className="text-warning" title="Blocked Users" />
            </IconWrapper>
            <div className="text-muted">Blocked Users</div>
            <StatValue>24</StatValue>
            <div className="text-warning">Review required</div>
          </StatCard>
        </div>
      </div>

      <Tabs>
        {["Complaints", "Feedback", "Blocked Users"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>

      <FilterRow>
        <input
          type="date"
          className="form-control"
          style={{ maxWidth: "180px" }}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <select className="form-select" style={{ maxWidth: "150px" }}>
          <option>All Types</option>
          <option>Complaint</option>
          <option>Feedback</option>
        </select>
        <select className="form-select" style={{ maxWidth: "150px" }}>
          <option>All Status</option>
          <option>Pending</option>
          <option>Reviewed</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          style={{ maxWidth: "200px" }}
        />
      </FilterRow>

      <Table className="table">
        <Thead>
          <Tr>
            <Th>Ticket ID</Th>
            <Th>User</Th>
            <Th>Type</Th>
            <Th>Message</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <tbody>
          <Tr>
            <Td>#FB25489</Td>
            <Td>
              <UserCell>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                />
                <div>
                  <div>Michael Brown</div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    m.brown@example.com
                  </div>
                </div>
              </UserCell>
            </Td>
            <Td>
              <Badge bg="#f8d7da" color="#dc3545">
                Complaint
              </Badge>
            </Td>
            <Td>Driver was extremely rude and...</Td>
            <Td>
              <Badge bg="#ffeeba" color="#856404">
                Pending Review
              </Badge>
            </Td>
            <Td>
              <ActionIcons>
                <FaEye className="text-primary" title="View" />
                <FaTimesCircle className="text-danger" title="Delete" />
              </ActionIcons>
            </Td>
          </Tr>
          <Tr>
            <Td>#FB25488</Td>
            <Td>
              <UserCell>
                <Avatar
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                />
                <div>
                  <div>Emily Chen</div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    emily.c@example.com
                  </div>
                </div>
              </UserCell>
            </Td>
            <Td>
              <Badge bg="#d4edda" color="#28a745">
                Feedback
              </Badge>
            </Td>
            <Td>Great service! The driver was very...</Td>
            <Td>
              <Badge bg="#d1ecf1" color="#0c5460">
                Reviewed
              </Badge>
            </Td>
            <Td>
              <ActionIcons>
                <FaEye className="text-primary" title="View" />
                <FaTimesCircle className="text-danger" title="Delete" />
              </ActionIcons>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default FeedbackAndCompliance;
