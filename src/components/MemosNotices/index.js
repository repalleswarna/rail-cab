import React from "react";
import styled from "styled-components";
import { FaEye, FaTrash, FaBell, FaChevronDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-bootstrap";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9fbfd;
  padding: 100px 20px 20px; /* top padding added for fixed header space */
`;

const HeaderContainer = styled.div`
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
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = styled.h3`
  color: #1f2937;
  margin: 0;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  color: #1f2937;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const Divider = styled.hr`
  border: 1px solid #e5e7eb;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;

  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  margin-top: -20px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  select,
  input {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
  }

  button {
    margin-left: auto;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const PlainHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 2fr 1fr;
  padding: 12px 10px;
  font-weight: 600;
  color: #6b7280;
`;

const RowCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 12px 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 2fr 1fr;
  align-items: center;
`;

const Badge = styled.span`
  background-color: #e0f2fe;
  color: #0284c7;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  color: #6b7280;

  svg {
    cursor: pointer;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    color: #111827;
  }
`;

const MemosNotices = ({ onBack }) => {
  return (
    <Container>
      <HeaderContainer>
        <LeftHeader>
          <Button
            variant="link"
            onClick={() => onBack("dashboard")}
            className="me-2 p-0"
          >
            <BiArrowBack size={24} />
          </Button>
          <Header>Memos & Notices</Header>
        </LeftHeader>

        <ProfileSection>
          <FaBell />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Wilson"
          />
          <span>Sarah Wilson</span>
          <FaChevronDown />
        </ProfileSection>
      </HeaderContainer>

      <Divider />

      <FilterContainer>
        <FilterBar>
          <select>
            <option>All Departments</option>
          </select>
          <input type="date" placeholder="mm/dd/yyyy" />
          <input
            type="text"
            placeholder="Search memos..."
            style={{ flex: 1 }}
          />
          <button>+ Create New Memo</button>
        </FilterBar>
      </FilterContainer>

      <PlainHeaderRow>
        <div>Title</div>
        <div>Date Issued</div>
        <div>Issued By</div>
        <div>Target Role</div>
        <div>Attachment</div>
        <div>Actions</div>
      </PlainHeaderRow>

      <RowCard>
        <div>Updated Leave Policy 2025</div>
        <div>May 15, 2025</div>
        <User>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Wilson"
          />
          <span>Sarah Wilson</span>
        </User>
        <Badge>All Staff</Badge>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span role="img" aria-label="file">
            📄
          </span>
          policy_update.pdf
        </div>
        <Actions>
          <FaEye color="blue" />
          <FiDownload color="black" />
          <FaTrash color="red" />
        </Actions>
      </RowCard>
    </Container>
  );
};

export default MemosNotices;
