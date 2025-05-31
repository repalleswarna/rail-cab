import React, { useState } from "react";
import styled from "styled-components";
import { Container, Table } from "react-bootstrap";
import {
  FiSearch,
  FiMap,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiMapPin,
} from "react-icons/fi";
import PickupDropPointForm from "../AddPickupDrop";

const PickupDropPoints = () => {
  const [showAddPoint, setShowAddPoint] = useState(false);

  return (
    <>
      {showAddPoint && <BlurOverlay />}
      <Wrapper>
        <HeaderContainer
          style={{ filter: showAddPoint ? "blur(5px)" : "none" }}
        >
          <TitleContainer>
            <Title>Pickup & Drop Points</Title>
            <AddPointButton
              className="btn btn-primary"
              onClick={() => setShowAddPoint(true)}
            >
              <FiPlus /> Add Point
            </AddPointButton>
          </TitleContainer>

          <ControlsContainer>
            <SearchContainer>
              <SearchInput placeholder="Search pickup points..." />
              <SearchIcon>
                <FiSearch />
              </SearchIcon>
            </SearchContainer>

            <FilterContainer>
              <FilterSelect>
                <option>All Cities</option>
              </FilterSelect>

              <FilterSelect>
                <option>All Stations</option>
              </FilterSelect>
            </FilterContainer>
          </ControlsContainer>

          <MapViewBox>
            <MapButton>
              <FiMap /> Map View
            </MapButton>
          </MapViewBox>
        </HeaderContainer>

        <Divider style={{ filter: showAddPoint ? "blur(5px)" : "none" }} />

        <TableContainer style={{ filter: showAddPoint ? "blur(5px)" : "none" }}>
          <StyledTable responsive>
            <thead>
              <TableHeaderRow>
                <th>POINT NAME</th>
                <th>STATION</th>
                <th>CITY</th>
                <th>LATITUDE</th>
                <th>LONGTUDE</th>
                <th>ACTIONS</th>
              </TableHeaderRow>
            </thead>
            <tbody>
              <TableRow>
                <td>
                  <PointNameContainer>
                    <FiMapPin className="location-icon" />
                    <strong>Gate No. 1</strong>
                  </PointNameContainer>
                </td>
                <td>Mumbai Central</td>
                <td>Mumbai</td>
                <td>19.2R8*N</td>
                <td>72.97BTE</td>
                <td>
                  <ActionIcons>
                    <FiEye className="action-icon view-icon" />
                    <FiEdit2 className="action-icon edit-icon" />
                    <FiTrash2 className="action-icon delete-icon" />
                  </ActionIcons>
                </td>
              </TableRow>
            </tbody>
          </StyledTable>
        </TableContainer>

        <PaginationContainer
          style={{ filter: showAddPoint ? "blur(5px)" : "none" }}
        >
          <PaginationText>Showing 1 to 10 of 32 entries</PaginationText>
          <PaginationButtons>
            <PaginationButton>Previous</PaginationButton>
            <PageNumberButton active>1</PageNumberButton>
            <PageNumberButton>2</PageNumberButton>
            <PageNumberButton>3</PageNumberButton>
            <PaginationButton>Next</PaginationButton>
          </PaginationButtons>
        </PaginationContainer>
      </Wrapper>

      {showAddPoint && (
        <PopupContainer>
          <PickupDropPointForm onClose={() => setShowAddPoint(false)} />
        </PopupContainer>
      )}
    </>
  );
};

// New styled components for popup functionality
const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  max-width: 1000px;
`;

// Existing styled components
const Wrapper = styled(Container)`
  padding: 20px;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
`;

const HeaderContainer = styled.div`
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const AddPointButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 35px 8px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const FilterSelect = styled.select`
  padding: 8px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const MapViewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  padding: 20px;
  background-color: #ccc;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 15px;
`;

const MapButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const TableContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const StyledTable = styled(Table)`
  margin-bottom: 0;

  th,
  td {
    padding: 12px 15px;
    vertical-align: middle;
  }
`;

const TableHeaderRow = styled.tr`
  background-color: #f8f9fa;

  th {
    font-weight: bold;
    color: #333;
    border-bottom: 2px solid #ddd;
  }
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  td {
    color: #555;
  }
`;

const PointNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .location-icon {
    color: #6c757d;
    font-size: 18px;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 15px;

  .action-icon {
    cursor: pointer;
    font-size: 18px;
    transition: color 0.2s;
  }

  .view-icon,
  .edit-icon {
    color: #007bff;

    &:hover {
      color: #0056b3;
    }
  }

  .delete-icon {
    color: #dc3545;

    &:hover {
      color: #bd2130;
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PaginationText = styled.span`
  color: #666;
  font-size: 14px;
`;

const PaginationButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const PaginationButton = styled.button`
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;

const PageNumberButton = styled(PaginationButton)`
  ${(props) =>
    props.active &&
    `
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  `}
`;

export default PickupDropPoints;
