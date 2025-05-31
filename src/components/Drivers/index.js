import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaEye, FaEdit, FaBan, FaDownload } from "react-icons/fa";
import AddNewDriver from "../AddNewDriver"; // Make sure this path is correct

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

const Title = styled.h4`
  font-weight: bold;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  height: 40px;
  width: 180px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  height: 40px;
  width: 200px;
`;

const AddButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ExportButton = styled.button`
  background: #f2f2f2;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: 40px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

const Th = styled.th`
  font-size: 12px;
  text-transform: uppercase;
  color: #6c757d;
`;

const Td = styled.td`
  vertical-align: middle;
  padding: 12px;
  background: #fff;
`;

const Row = styled.tr`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const KycBadge = styled.span`
  background-color: ${({ status }) =>
    status === "Verified" ? "#d1f5d3" : "#fce8cd"};
  color: ${({ status }) => (status === "Verified" ? "#107c41" : "#a36107")};
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 12px;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  color: #007bff;
  margin-right: 10px;
  font-size: 16px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
`;

const PageBtn = styled.button`
  border: 1px solid #dee2e6;
  background: ${({ active }) => (active ? "#007bff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  padding: 5px 10px;
  border-radius: 4px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: auto;
  z-index: 1100;
`;

const BlurWrapper = styled.div`
  filter: ${({ blur }) => (blur ? "blur(4px)" : "none")};
  pointer-events: ${({ blur }) => (blur ? "none" : "auto")};
`;

const Drivers = () => {
  const [showModal, setShowModal] = useState(false);

  const drivers = [
    {
      id: "DRV001",
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@example.com",
      cab: "KA01AB1234",
      type: "Sedan",
      kyc: "Verified",
      active: true,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "DRV002",
      name: "Suresh Patel",
      phone: "+91 98765 43211",
      email: "suresh@example.com",
      cab: "KA01CD5678",
      type: "SUV",
      kyc: "Pending",
      active: false,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const handleAddDriverClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <BlurWrapper blur={showModal}>
        <Container className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Title>Driver Management</Title>
            <AddButton onClick={handleAddDriverClick}>
              <FaPlus /> Add New Driver
            </AddButton>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ gap: "10px" }}
          >
            <FilterWrapper style={{ flex: 1 }}>
              <Select>
                <option>Driver Status</option>
              </Select>
              <Select>
                <option>Station</option>
              </Select>
              <SearchInput placeholder="Search drivers" />
            </FilterWrapper>
            <ExportButton>
              <FaDownload className="me-2" /> Export
            </ExportButton>
          </div>

          <Table className="table">
            <thead>
              <tr>
                <Th>Driver Name</Th>
                <Th>Contact</Th>
                <Th>Assigned Cab</Th>
                <Th>KYC Status</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((d) => (
                <Row key={d.id}>
                  <Td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={d.avatar}
                        alt="avatar"
                        width="40"
                        height="40"
                        className="rounded-circle"
                      />
                      <div>
                        <strong>{d.name}</strong>
                        <br />
                        <small>ID: {d.id}</small>
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <strong>{d.phone}</strong>
                    <br />
                    <span>{d.email}</span>
                  </Td>
                  <Td>
                    <a
                      href="#"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      {d.cab}
                    </a>
                    <br />
                    <span>{d.type}</span>
                  </Td>
                  <Td>
                    <KycBadge status={d.kyc}>{d.kyc}</KycBadge>
                  </Td>
                  <Td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={d.active}
                        readOnly
                      />
                    </div>
                  </Td>
                  <Td>
                    <IconButton>
                      <FaEye />
                    </IconButton>
                    <IconButton>
                      <FaEdit />
                    </IconButton>
                    <IconButton style={{ color: "red" }}>
                      <FaBan />
                    </IconButton>
                  </Td>
                </Row>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <span>Showing 1 to 2 of 20 entries</span>
            <div className="ms-auto d-flex gap-2">
              <PageBtn>Previous</PageBtn>
              <PageBtn active>1</PageBtn>
              <PageBtn>2</PageBtn>
              <PageBtn>3</PageBtn>
              <PageBtn>Next</PageBtn>
            </div>
          </Pagination>
        </Container>
      </BlurWrapper>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <AddNewDriver onClose={handleCloseModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Drivers;
