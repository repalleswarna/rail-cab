import React, { useState } from "react";
import styled from "styled-components";
import {
  FaExclamationTriangle,
  FaCoins,
  FaBell,
  FaUserCircle,
  FaRupeeSign,
  FaToggleOn,
  FaToggleOff,
  FaArrowLeft,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  background: #f9fbfc;
  padding: 100px 20px 20px; /* add top padding to make space for fixed header */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 16px 20px;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;

const SummaryContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const SummaryCard = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

const SummaryTitle = styled.div`
  font-size: 14px;
  color: #555;
`;

const SummaryAmount = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;

const SummaryTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

const Tab = styled.button`
  padding: 10px 16px;
  border: none;
  background: ${({ active }) => (active ? "#e6f0fb" : "transparent")};
  border-bottom: ${({ active }) => (active ? "2px solid #007bff" : "none")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
`;

const TableWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding-bottom: 12px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f3f6f9;
`;

const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #eee;
`;

const Status = styled.span`
  background-color: ${({ type }) =>
    type === "Completed" ? "#e6f4ea" : "#fff7e6"};
  color: ${({ type }) => (type === "Completed" ? "#28a745" : "#f0ad4e")};
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
`;

const Pagination = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 8px 12px 0;
`;

const PaginationButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ccc;
  background: ${({ active }) => (active ? "#007bff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border-radius: 4px;
  cursor: pointer;
`;

const ControlsContainer = styled.div`
  background: #fff;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 12px 0;
`;

const PaymentsDashboard = ({ onBack }) => {
  const [autoPayOn, setAutoPayOn] = useState(true);

  return (
    <Container>
      <HeaderSection>
        <HeaderContainer>
          <HeaderTitle>Payments Management</HeaderTitle>
          <HeaderIcons>
            <FaBell />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="John Smith"
              style={{ borderRadius: "50%" }}
            />
          </HeaderIcons>
        </HeaderContainer>
      </HeaderSection>

      <SummaryContainer>
        <SummaryCard>
          <SummaryTitleContainer>
            <SummaryTitle>Total Payouts</SummaryTitle>
            <FaRupeeSign color="#f0ad4e" />
          </SummaryTitleContainer>
          <SummaryAmount>₹24,45,678</SummaryAmount>
        </SummaryCard>

        <SummaryCard>
          <SummaryTitleContainer>
            <SummaryTitle>Pending</SummaryTitle>
            <FaCoins color="#f0ad4e" />
          </SummaryTitleContainer>
          <SummaryAmount>₹3,82,456</SummaryAmount>
        </SummaryCard>

        <SummaryCard>
          <SummaryTitleContainer>
            <SummaryTitle>Failed</SummaryTitle>
            <FaExclamationTriangle color="#dc3545" />
          </SummaryTitleContainer>
          <SummaryAmount>₹42,222</SummaryAmount>
        </SummaryCard>

        <SummaryCard>
          <SummaryTitle>Auto-Pay Status</SummaryTitle>
          <SummaryAmount
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: autoPayOn ? "#28a745" : "#dc3545",
              }}
            >
              {autoPayOn ? "Active" : "Inactive"}
            </div>
            <div
              style={{ cursor: "pointer", fontSize: "40px" }}
              onClick={() => setAutoPayOn(!autoPayOn)}
            >
              {autoPayOn ? (
                <FaToggleOn color="#007bff" />
              ) : (
                <FaToggleOff color="#ccc" />
              )}
            </div>
          </SummaryAmount>
        </SummaryCard>
      </SummaryContainer>

      <ControlsContainer>
        <TabContainer>
          <Tab active>Salary Payments</Tab>
          <Tab>Vendor Payouts</Tab>
        </TabContainer>
        <hr />
        <Divider />
        <FilterContainer>
          <Input placeholder="Search by name..." />
          <Select>
            <option>All Payment Modes</option>
            <option>Bank Transfer</option>
            <option>UPI</option>
          </Select>
          <Select>
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
          </Select>
          <Button>New Payment</Button>
        </FilterContainer>
      </ControlsContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Employee Name</Th>
              <Th>Amount</Th>
              <Th>Payment Mode</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Rahul Sharma</Td>
              <Td>₹45,000</Td>
              <Td>Bank Transfer</Td>
              <Td>
                <Status type="Completed">Completed</Status>
              </Td>
              <Td>15 May 2025</Td>
              <Td>
                <BsThreeDotsVertical />
              </Td>
            </tr>
            <tr>
              <Td>Priya Patel</Td>
              <Td>₹38,000</Td>
              <Td>UPI</Td>
              <Td>
                <Status type="Pending">Pending</Status>
              </Td>
              <Td>15 May 2025</Td>
              <Td>
                <BsThreeDotsVertical />
              </Td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 12px",
          }}
        >
          <div style={{ color: "#666" }}>Showing 1-10 of 45 payments</div>
          <Pagination>
            <PaginationButton>Previous</PaginationButton>
            <PaginationButton active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>Next</PaginationButton>
          </Pagination>
        </div>
      </TableWrapper>
    </Container>
  );
};

export default PaymentsDashboard;
