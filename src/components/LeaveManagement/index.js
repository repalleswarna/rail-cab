import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCheck, FaTimes, FaEye, FaBell } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiArrowBack } from "react-icons/bi";

const PageContainer = styled.div`
  background-color: #f5f6fa;
  padding: 20px;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 700;
  margin: 0;
  font-size: 1.5rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const BellIcon = styled(FaBell)`
  font-size: 1.2rem;
  color: #343a40;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-weight: 500;
  color: #343a40;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dee2e6;
  margin: 15px 0 25px 0;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 2px solid #dee2e6;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.active ? "#007bff" : "#000")};
  border-bottom: ${(props) => (props.active ? "3px solid #007bff" : "none")};
`;

const FilterContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const Dropdown = styled.button`
  border: 1px solid #ced4da;
  border-radius: 4px;
  background: #fff;
  padding: 6px 12px;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Search = styled.input`
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  min-width: 200px;
  flex: 1;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  white-space: nowrap;
  margin-left: auto;
`;

const TableHeader = styled.div`
  display: flex;
  font-weight: 600;
  padding: 10px 0;
  color: #6c757d;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 15px 0;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
`;

const Column = styled.div`
  flex: ${(props) => props.flex || 1};
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusBadge = styled.span`
  background-color: #ffeeba;
  color: #856404;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1rem;
`;

const LeaveManagement = ({ onback }) => {
  return (
    <PageContainer>
      {/* Header */}

      {/* Divider */}
      <Divider />

      {/* Tabs */}
      <Tabs>
        <Tab active>Leave Requests</Tab>
        <Tab>Leave Balance</Tab>
      </Tabs>

      {/* Filter Panel */}
      <FilterContainer>
        <Dropdown>
          All Departments <MdKeyboardArrowDown />
        </Dropdown>
        <Dropdown>
          All Status <MdKeyboardArrowDown />
        </Dropdown>
        <Search placeholder="Search employee..." />
        <AddButton>+ New Leave Request</AddButton>
      </FilterContainer>

      {/* Table Header */}
      <TableHeader>
        <Column flex={2}>EMPLOYEE</Column>
        <Column>LEAVE TYPE</Column>
        <Column>FROM</Column>
        <Column>TO</Column>
        <Column>STATUS</Column>
        <Column>ACTIONS</Column>
      </TableHeader>

      {/* Data Row */}
      <TableRow>
        <Column flex={2}>
          <ProfileImg
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Cooper"
          />
          <div>
            <div style={{ fontWeight: "500" }}>John Cooper</div>
            <div style={{ fontSize: "0.85rem", color: "#6c757d" }}>
              Operations
            </div>
          </div>
        </Column>
        <Column>Sick Leave</Column>
        <Column>May 15, 2025</Column>
        <Column>May 17, 2025</Column>
        <Column>
          <StatusBadge>Pending</StatusBadge>
        </Column>
        <Column>
          <IconGroup>
            <FaCheck color="green" />
            <FaTimes color="red" />
            <FaEye color="#6c757d" />
          </IconGroup>
        </Column>
      </TableRow>
    </PageContainer>
  );
};

export default LeaveManagement;
