import React from "react";
import "./index.css";
import styled from "styled-components";
import {
  Container,
  Table,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
  Pagination,
} from "react-bootstrap";
import {
  FaEye,
  FaEdit,
  FaBan,
  FaPlus,
  FaFileExport,
  FaSearch,
} from "react-icons/fa";

// Styled Components
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const FilterControl = styled.div`
  width: 220px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExportBtn = styled.button`
  background-color: #f1f1f1;
  color: #333;
  border: none;
  padding: 0.45rem 0.8rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 220px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VendorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const VendorRow = styled.tr`
  vertical-align: middle;
`;

const StyledBadge = styled.span`
  padding: 0.25em 0.6em;
  font-size: 0.85em;
  color: ${(props) => (props.status === "Verified" ? "#027a48" : "#7a4f01")};
  background-color: ${(props) =>
    props.status === "Verified" ? "#d1fadf" : "#fef0c7"};
  border-radius: 0.8rem;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  font-size: 1.2rem;
  color: #007bff;
  cursor: pointer;
`;

// Dummy Data
const dummyVendors = [
  {
    id: "VEN001",
    name: "Premier Cabs",
    phone: "+91 98765 43210",
    email: "premier@example.com",
    cabs: 12,
    kyc: "Verified",
    cycle: "Weekly",
    dot: true,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "VEN002",
    name: "Speed Motors",
    phone: "+91 98765 43211",
    email: "speed@example.com",
    cabs: 8,
    kyc: "Pending",
    cycle: "Bi-weekly",
    dot: false,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

function Vendors() {
  return (
    <Container fluid className="p-4 bg-white min-vh-100">
      {/* Header Section */}
      <HeaderRow>
        <h4 className="m-0">Vendor Management</h4>
        <Button variant="primary">
          <FaPlus className="me-2" /> Add New Vendor
        </Button>
      </HeaderRow>

      {/* Filters and Export Row */}
      <div
        className="d-flex justify-content-between align-items-center mb-3"
        style={{ gap: "10px" }}
      >
        <div
          className="d-flex flex-wrap align-items-center"
          style={{ gap: "1rem", flex: 1 }}
        >
          <FilterControl>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="w-100">
                KYC Status
              </Dropdown.Toggle>
            </Dropdown>
          </FilterControl>

          <FilterControl>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="w-100">
                Payment Cycle
              </Dropdown.Toggle>
            </Dropdown>
          </FilterControl>

          <FilterControl>
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <FormControl placeholder="Search vendors" />
            </InputGroup>
          </FilterControl>
        </div>

        <FilterControl>
          <ExportBtn>
            <FaFileExport className="me-1" /> Export
          </ExportBtn>
        </FilterControl>
      </div>

      {/* Vendors Table */}
      <Table hover responsive className="align-middle">
        <thead>
          <tr>
            <th>VENDOR NAME</th>
            <th>CONTACT</th>
            <th>LINKED CABS</th>
            <th>KYC STATUS</th>
            <th>PAYMENT CYCLE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {dummyVendors.map((vendor) => (
            <VendorRow key={vendor.id}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <VendorImage src={vendor.image} alt={vendor.name} />
                  <div>
                    <strong>{vendor.name}</strong>
                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      ID: {vendor.id}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <strong>{vendor.phone}</strong>
                </div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {vendor.email}
                </div>
              </td>
              <td>
                <span className="text-primary">{vendor.cabs} Cabs</span>
              </td>
              <td>
                <StyledBadge status={vendor.kyc}>{vendor.kyc}</StyledBadge>
              </td>
              <td>{vendor.cycle}</td>
              <td>
                <ActionsWrapper>
                  <FaEye title="View" />
                  <FaEdit title="Edit" />
                  <FaBan title="Block" className="block-icon" />
                </ActionsWrapper>
              </td>
            </VendorRow>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="text-muted">Showing 1 to 2 of 20 entries</div>
        <Pagination>
          <Pagination.Prev>Previous</Pagination.Prev>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </div>
    </Container>
  );
}

export default Vendors;
