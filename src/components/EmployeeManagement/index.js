import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;

  background-color: #f8f9fa;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h4`
  font-weight: 600;
  margin: 0;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 80px;
`;

const ControlsWrapper = styled.div`
  background-color: white;
  padding: 16px 24px 0 24px;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const FiltersGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const RightControls = styled.div`
  margin-left: auto;
`;

const SearchInput = styled.input`
  width: 200px;
  max-width: 100%;
`;

const TableSection = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  padding: 0;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) =>
    props.status === "Active" ? "#d4f8e8" : "#ffe8cc"};
  color: ${(props) => (props.status === "Active" ? "#1e7e34" : "#e67700")};
`;

const IconButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #6c757d;
  &:hover {
    color: #000;
  }
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  border: 1px solid #dee2e6;
`;

function EmployeeManagement({ onBack }) {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Title>Employee Management</Title>
          <UserSection>
            <IoIosNotifications size={25} />
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user"
            />
            <span>Sarah Wilson</span>
            <FiChevronDown size={22} />
          </UserSection>
        </Header>
      </HeaderContainer>

      <Content>
        <ControlsWrapper>
          <Controls className="mb-3">
            <FiltersGroup>
              <SearchInput
                className="form-control"
                placeholder="Search employees..."
              />
              <select className="form-select" style={{ width: "150px" }}>
                <option>All Roles</option>
              </select>
              <select className="form-select" style={{ width: "150px" }}>
                <option>All Status</option>
              </select>
            </FiltersGroup>

            <RightControls>
              <AddButton>+ Add New Employee</AddButton>
            </RightControls>
          </Controls>
        </ControlsWrapper>

        <TableSection>
          <div
            className="card p-3"
            style={{
              width: "100%",
              overflow: "hidden",
              margin: 0,
              borderRadius: "0",
            }}
          >
            <TableWrapper>
              <table
                className="table table-hover align-middle"
                style={{ width: "100%", tableLayout: "fixed" }}
              >
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "25%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Role</th>
                    <th>Contact</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/75.jpg"
                          alt="employee"
                          width="40"
                          height="40"
                          className="rounded-circle"
                        />
                        <div>
                          <div>Alex Johnson</div>
                          <small className="text-muted">Joined Jan 2025</small>
                        </div>
                      </div>
                    </td>
                    <td>Service Manager</td>
                    <td>
                      <div>alex.j@railcab.com</div>
                      <div>+1 234 567 8900</div>
                    </td>
                    <td>Operations</td>
                    <td>
                      <StatusContainer>
                        <StatusBadge status="Active">Active</StatusBadge>
                        <IconButtonGroup>
                          <IconButton>
                            <FaEye size={16} color="blue" />
                          </IconButton>
                          <IconButton>
                            <FaEdit size={14} color="black" />
                          </IconButton>
                          <IconButton>
                            <FaTrash size={14} color="red" />
                          </IconButton>
                        </IconButtonGroup>
                      </StatusContainer>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          alt="employee"
                          width="40"
                          height="40"
                          className="rounded-circle"
                        />
                        <div>
                          <div>Emily Chen</div>
                          <small className="text-muted">Joined Mar 2025</small>
                        </div>
                      </div>
                    </td>
                    <td>Accountant</td>
                    <td>
                      <div>emily.c@railcab.com</div>
                      <div>+1 234 567 8901</div>
                    </td>
                    <td>Finance</td>
                    <td>
                      <StatusContainer>
                        <StatusBadge status="On Leave">On Leave</StatusBadge>
                        <IconButtonGroup>
                          <IconButton>
                            <FaEye size={16} color="blue" />
                          </IconButton>
                          <IconButton>
                            <FaEdit size={14} color="black" />
                          </IconButton>
                          <IconButton>
                            <FaTrash size={14} color="red" />
                          </IconButton>
                        </IconButtonGroup>
                      </StatusContainer>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>

            <div className="d-flex justify-content-between align-items-center mt-2 pt-2">
              <small>Showing 1 to 10 of 156 entries</small>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        if (onBack) onBack();
                      }}
                    >
                      Previous
                    </button>
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
            </div>
          </div>
        </TableSection>
      </Content>
    </Container>
  );
}

export default EmployeeManagement;
