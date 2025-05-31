import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsCarFrontFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";

const Container = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 1rem;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const SearchGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const TableResponsive = styled.div`
  overflow-x: auto;
`;

const TableStyled = styled.table`
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;

  thead {
    background-color: #f9fafb;
  }

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    text-align: left;
    white-space: nowrap;
  }

  td svg {
    margin-right: 4px;
  }
`;

const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.875rem;
  color: ${(props) => (props.status === "Active" ? "#0f5132" : "#842029")};
  background-color: ${(props) =>
    props.status === "Active" ? "#d1e7dd" : "#f8d7da"};
  font-weight: 500;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .view-icon {
    color: #6c757d;
  }
  .edit-icon {
    color: #0d6efd;
  }
  .delete-icon {
    color: #dc3545;
  }
`;

const PaginationStyled = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  flex-wrap: wrap;
  button {
    border: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    color: #007bff;
    &.active {
      background-color: #007bff;
      color: #fff;
    }
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  min-width: 200px;
  flex-grow: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CabInventory = () => {
  return (
    <Container>
      <HeaderRow>
        <h5>Cab Inventory</h5>
        <button className="btn btn-primary">+ Add New Cab</button>
      </HeaderRow>

      <FilterRow>
        <SearchGroup>
          <select className="form-select" style={{ maxWidth: "200px" }}>
            <option>All Categories</option>
          </select>
          <select className="form-select" style={{ maxWidth: "200px" }}>
            <option>All Stations</option>
          </select>
          <SearchInput placeholder="Search by ID or Plate" />
          <button className="btn btn-outline-secondary">Export</button>
        </SearchGroup>
      </FilterRow>

      <TableResponsive>
        <TableStyled>
          <thead>
            <tr>
              <th>Cab ID</th>
              <th>Category</th>
              <th>License Plate</th>
              <th>Station</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#CAB001</td>
              <td>
                <BsCarFrontFill style={{ color: "#0d6efd" }} /> Sedan
              </td>
              <td>MH-01-AB-1234</td>
              <td>Central Station</td>
              <td>Premier Cabs</td>
              <td>
                <StatusBadge status="Active">Active</StatusBadge>
              </td>
              <td>
                <ActionIcons>
                  <FaEye className="view-icon" title="View" />
                  <FaEdit className="edit-icon" title="Edit" />
                  <MdDelete className="delete-icon" title="Delete" />
                </ActionIcons>
              </td>
            </tr>
            <tr>
              <td>#CAB002</td>
              <td>
                <FaMotorcycle style={{ color: "#0d6efd" }} /> Bike
              </td>
              <td>MH-01-CD-5678</td>
              <td>North Terminal</td>
              <td>Speed Motors</td>
              <td>
                <StatusBadge status="Blocked">Blocked</StatusBadge>
              </td>
              <td>
                <ActionIcons>
                  <FaEye className="view-icon" title="View" />
                  <FaEdit className="edit-icon" title="Edit" />
                  <MdDelete className="delete-icon" title="Delete" />
                </ActionIcons>
              </td>
            </tr>
          </tbody>
        </TableStyled>
      </TableResponsive>

      <div className="d-flex flex-column flex-md-row justify-content-between mt-3 gap-2">
        <small>Showing 1 to 2 of 50 entries</small>
        <PaginationStyled>
          <button>Previous</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </PaginationStyled>
      </div>
    </Container>
  );
};

export default CabInventory;
