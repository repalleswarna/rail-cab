// TrainSchedule.js
import React, { useState } from "react";
import styled from "styled-components";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaShareAlt,
  FaFileExport,
  FaSearch,
} from "react-icons/fa";
import AddNewTrain from "../AddNewTrain";

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  position: relative;
  filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
`;

const Header = styled.h4`
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const FilterControl = styled.div`
  margin-right: 10px;
  width: 200px;
`;

const SearchWrapper = styled.div`
  width: 250px;
`;

const ExportBtn = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  padding: 12px;
  border: 1px solid #dee2e6;
  font-weight: 600;
  color: #333;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #dee2e6;
  vertical-align: top;
`;

const Badge = styled.span`
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) =>
    props.status === "Active"
      ? "#d1e7dd"
      : props.status === "Maintenance"
      ? "#fff3cd"
      : "#f8d7da"};
  color: ${(props) =>
    props.status === "Active"
      ? "#0f5132"
      : props.status === "Maintenance"
      ? "#664d03"
      : "#842029"};
`;

const ActionIcon = styled.span`
  color: #0d6efd;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #084298;
  }
`;

const PaginationBtn = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 4px;
  cursor: pointer;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const LeftControls = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OverlayWrapper = styled.div`
  position: relative;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  z-index: 1000;
`;

const TrainSchedule = () => {
  const [showAddPopup, setShowAddPopup] = useState(false);

  const trains = [
    {
      name: "Rajdhani Express",
      id: "RAJ2025",
      source: "New Delhi",
      sourceStation: "Central Station",
      destination: "Mumbai",
      destinationStation: "CST Terminal",
      dep: "16:55",
      arr: "08:15",
      status: "Active",
    },
    {
      name: "Shatabdi Express",
      id: "SHT2025",
      source: "Bangalore",
      sourceStation: "City Station",
      destination: "Chennai",
      destinationStation: "Central",
      dep: "06:00",
      arr: "11:00",
      status: "Maintenance",
    },
  ];

  return (
    <OverlayWrapper>
      <Container blur={showAddPopup}>
        <div className="d-flex justify-content-between align-items-center">
          <Header>Train Schedule Management</Header>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddPopup(true)}
          >
            <FaPlus className="me-1" /> Add New Train
          </button>
        </div>

        <ControlsWrapper>
          <LeftControls>
            <FilterControl>
              <select className="form-select w-100">
                <option>Source Station</option>
              </select>
            </FilterControl>

            <FilterControl>
              <select className="form-select w-100">
                <option>Destination Station</option>
              </select>
            </FilterControl>

            <FilterControl>
              <SearchWrapper>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search trains"
                  />
                </div>
              </SearchWrapper>
            </FilterControl>
          </LeftControls>

          <ExportBtn>
            <FaFileExport /> Export Schedule
          </ExportBtn>
        </ControlsWrapper>

        <Table>
          <thead>
            <tr>
              <Th>Train Details</Th>
              <Th>Source</Th>
              <Th>Destination</Th>
              <Th>Timing</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train.id}>
                <Td>
                  <strong>{train.name}</strong>
                  <br />
                  <small>Train ID: {train.id}</small>
                </Td>
                <Td>
                  <strong>{train.source}</strong>
                  <br />
                  <small>{train.sourceStation}</small>
                </Td>
                <Td>
                  <strong>{train.destination}</strong>
                  <br />
                  <small>{train.destinationStation}</small>
                </Td>
                <Td>
                  <div>
                    <strong>Dep:</strong> {train.dep}
                  </div>
                  <div>
                    <strong>Arr:</strong> {train.arr}
                  </div>
                </Td>
                <Td>
                  <Badge status={train.status}>{train.status}</Badge>
                </Td>
                <Td>
                  <ActionIcon>
                    <FaShareAlt />
                  </ActionIcon>
                  <ActionIcon>
                    <FaEdit />
                  </ActionIcon>
                  <ActionIcon>
                    <FaTrash />
                  </ActionIcon>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {showAddPopup && (
        <PopupOverlay>
          <AddNewTrain onClose={() => setShowAddPopup(false)} />
        </PopupOverlay>
      )}
    </OverlayWrapper>
  );
};

export default TrainSchedule;
