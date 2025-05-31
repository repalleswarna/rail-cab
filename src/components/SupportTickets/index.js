import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUserCircle,
  FaCheck,
  FaEye,
  FaEdit,
  FaDownload,
  FaPlus,
} from "react-icons/fa";
import Dashboard from "../Dashboard";

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
  width: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TabButton = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? "#0d6efd" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  padding: 4px 10px;
  border-radius: 4px;
  margin-left: 8px;
  font-size: 12px;
  white-space: nowrap;
`;

const Badge = styled.span`
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 10px;
  background-color: ${({ type }) => {
    switch (type) {
      case "payment":
        return "#f8d7da";
      case "open":
        return "#fff3cd";
      default:
        return "#e2e3e5";
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case "payment":
        return "#dc3545";
      case "open":
        return "#856404";
      default:
        return "#000";
    }
  }};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  margin-left: 5px;
  color: #000;
  &:hover {
    color: #0d6efd;
  }
`;

const HeaderRowContainer = styled.div`
  display: flex;
  padding: 0 8px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const HeaderCell = styled.div`
  flex: ${({ flex }) => flex || 1};
  padding: 4px 8px;
`;

const TicketAndPaginationContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const TicketRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #000;
  margin: 12px 0;
`;

const PaginationRow = styled.div`
  margin-top: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SupportTickets() {
  return (
    <Container>
      {/* Header with tabs */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div className="d-flex align-items-center flex-wrap gap-2">
          <h5 className="mb-0 fw-semibold">Support Tickets</h5>
          <TabButton active>All Tickets</TabButton>
          <TabButton>Open</TabButton>
          <TabButton>Resolved</TabButton>
          <TabButton>Escalated</TabButton>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-light border d-flex align-items-center">
            <FaDownload className="me-2" /> Export
          </button>
          <button className="btn btn-primary d-flex align-items-center">
            <FaPlus className="me-2" /> New Ticket
          </button>
        </div>
      </div>

      {/* Search bar and dropdown */}
      <Card>
        <div className="mb-3 row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search tickets..."
            />
          </div>
          <div className="col-md-6 text-md-end mt-2 mt-md-0">
            <select className="form-select w-auto ms-md-auto">
              <option>All Issue Types</option>
              <option>Payment</option>
              <option>Login</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Header row */}
      <HeaderRowContainer>
        <HeaderCell flex="1">TICKET ID</HeaderCell>
        <HeaderCell flex="3">SUBJECT</HeaderCell>
        <HeaderCell flex="2">ISSUE TYPE</HeaderCell>
        <HeaderCell flex="2">ASSIGNED AGENT</HeaderCell>
        <HeaderCell flex="1">STATUS</HeaderCell>
        <HeaderCell flex="1">DATE</HeaderCell>
        <HeaderCell flex="1">ACTIONS</HeaderCell>
      </HeaderRowContainer>

      {/* Ticket and Pagination section */}
      <TicketAndPaginationContainer>
        <TicketRow>
          <div style={{ flex: 1, color: "#0d6efd", fontWeight: "600" }}>
            #TK-2458
          </div>
          <div style={{ flex: 3 }}>Payment Failed - Booking #2458</div>
          <div style={{ flex: 2 }}>
            <Badge type="payment">Payment</Badge>
          </div>
          <div style={{ flex: 2, display: "flex", alignItems: "center" }}>
            <FaUserCircle className="me-1" /> Sarah Wilson
          </div>
          <div style={{ flex: 1 }}>
            <Badge type="open">Open</Badge>
          </div>
          <div style={{ flex: 1 }}>May 15, 2025</div>
          <div style={{ flex: 1 }}>
            <IconButton>
              <FaEye />
            </IconButton>
            <IconButton>
              <FaEdit />
            </IconButton>
            <IconButton>
              <FaCheck />
            </IconButton>
          </div>
        </TicketRow>

        {/* Divider */}
        <Divider />

        {/* Pagination */}
        <PaginationRow>
          <span className="text-muted">Showing 1 to 10 of 42 entries</span>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <button className="page-link">Previous</button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </PaginationRow>
      </TicketAndPaginationContainer>
    </Container>
  );
}

export default SupportTickets;
