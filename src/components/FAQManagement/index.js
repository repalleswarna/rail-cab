import React, { useState } from "react";
import styled from "styled-components";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";
import { FiFilter, FiDownload } from "react-icons/fi";

const Container = styled.div`
  font-family: "Segoe UI", sans-serif;
  padding: 20px;
  background: #f9fbfc;
  min-height: 100vh;
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

const TopBarContainer = styled.div`
  margin-top: 72px; /* or the actual height of your HeaderContainer */
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserName = styled.span`
  font-weight: 500;
`;

const TopBar = styled.div`
  margin-top: 1rem;
`;

const SearchAddWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  flex-grow: 1;
  min-width: 100px;
  border-radius: 5px;
`;

const FilterExportWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid #007bff" : "none")};
  background: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f6f8fa;
  border-bottom: 1px solid #eaeaea;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: top;
`;

const Badge = styled.span`
  background: ${(props) =>
    props.type === "published" ? "#d4f5e9" : "#fff3cd"};
  color: ${(props) => (props.type === "published" ? "#2e7d32" : "#856404")};
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
`;

// Custom Toggle Switch
const ToggleSwitch = styled.div`
  width: 34px;
  height: 18px;
  background: ${(props) => (props.active ? "#007bff" : "#ccc")};
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const ToggleCircle = styled.div`
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.active ? "18px" : "2px")};
  transition: left 0.3s ease;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 10px;
`;

const PageButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const PageButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 5px;
`;

export default function FAQManagement({ onBack }) {
  const [publicView1, setPublicView1] = useState(true);
  const [publicView2, setPublicView2] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <HeaderBar>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={onBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              ←
            </button>
            <Title>FAQ Management</Title>
          </div>
          <UserSection>
            <FaBell size={18} />
            <UserProfile>
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="John Smith"
                style={{ borderRadius: "50%" }}
              />
              <UserName>John Smith</UserName>
              <FaChevronDown />
            </UserProfile>
          </UserSection>
        </HeaderBar>
      </HeaderContainer>

      <TopBarContainer>
        <TopBar>
          <SearchAddWrapper>
            <AddButton>
              <FaPlus /> Add New FAQ
            </AddButton>
            <SearchInput placeholder="Search FAQs..." />
            <FilterExportWrapper>
              <IconButton>
                <FiFilter /> Filters
              </IconButton>
              <IconButton>
                <FiDownload /> Export
              </IconButton>
            </FilterExportWrapper>
          </SearchAddWrapper>
        </TopBar>

        <Tabs>
          <Tab active>Rider FAQs</Tab>
          <Tab>Driver FAQs</Tab>
          <Tab>General</Tab>
        </Tabs>
      </TopBarContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>QUESTION</Th>
              <Th>ANSWER PREVIEW</Th>
              <Th>CATEGORY</Th>
              <Th>STATUS</Th>
              <Th>PUBLIC VIEW</Th>
              <Th>ACTIONS</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>How do I book a cab from the train station?</Td>
              <Td>You can book a cab directly from our...</Td>
              <Td>
                <Badge type="published">Rider FAQ</Badge>
              </Td>
              <Td>
                <Badge type="published">Published</Badge>
              </Td>
              <Td>
                <ToggleSwitch
                  active={publicView1}
                  onClick={() => setPublicView1(!publicView1)}
                >
                  <ToggleCircle active={publicView1} />
                </ToggleSwitch>
              </Td>
              <Td>
                <ActionIcons>
                  <FaEdit style={{ color: "#007bff" }} />
                  <FaEye style={{ color: "#6c757d" }} />
                  <FaTrash style={{ color: "#dc3545" }} />
                </ActionIcons>
              </Td>
            </tr>
            <tr>
              <Td>What payment methods are accepted?</Td>
              <Td>We accept all major credit cards, UP...</Td>
              <Td>
                <Badge type="draft">General</Badge>
              </Td>
              <Td>
                <Badge type="draft">Draft</Badge>
              </Td>
              <Td>
                <ToggleSwitch
                  active={publicView2}
                  onClick={() => setPublicView2(!publicView2)}
                >
                  <ToggleCircle active={publicView2} />
                </ToggleSwitch>
              </Td>
              <Td>
                <ActionIcons>
                  <FaEdit style={{ color: "#007bff" }} />
                  <FaEye style={{ color: "#6c757d" }} />
                  <FaTrash style={{ color: "#dc3545" }} />
                </ActionIcons>
              </Td>
            </tr>
          </tbody>
        </Table>

        <Pagination>
          <div>Showing 1 to 10 of 45 entries</div>
          <PageButtonGroup>
            <PageButton>Previous</PageButton>
            <PageButton>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>Next</PageButton>
          </PageButtonGroup>
        </Pagination>
      </TableWrapper>
    </Container>
  );
}
