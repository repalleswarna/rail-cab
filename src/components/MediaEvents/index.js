import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosNotifications } from "react-icons/io";
import {
  FaUpload,
  FaCalendarPlus,
  FaUser,
  FaCalendarAlt,
  FaTrash,
  FaChevronDown,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

// Page Container
const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 100px 20px 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

// Header Section
const HeaderSection = styled.div`
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

// Header Left and Right
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 30px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    border-radius: 50%;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 22px;
    margin: 0;
    gap: 5px;
  }
`;

// Content Wrapper
const ContentWrapper = styled.div`
  background-color: #fff;
  margin-top: 0px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
`;

// Top Actions
const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 10px;
  max-width: 250px;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-left: 8px;
`;

// Tabs
const TabSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  background: ${(props) => (props.active ? "#e6f0ff" : "none")};
  border: none;
  font-weight: 500;
  color: ${(props) => (props.active ? "#0d6efd" : "#000")};
  border-bottom: ${(props) => (props.active ? "2px solid #0d6efd" : "none")};
  padding: 3px 10px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 2px 2px 0 0;
`;

// Media Cards
const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MediaCard = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 260px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
`;

const MediaImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-color: gray;
  border-bottom: 1px solid #ddd;
`;

const CardContent = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-top: 6px;
  color: #555;

  svg {
    margin-right: 6px;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
`;

const MediaEvents = ({ onBack }) => {
  return (
    <Container className="container-fluid">
      {/* Header */}
      <HeaderSection>
        <HeaderLeft>
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
          <HeaderTitle>Media & Events</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <IoIosNotifications size={29} />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            width="35"
            height="35"
          />
          <h2>
            John Smith <FaChevronDown />
          </h2>
        </HeaderRight>
      </HeaderSection>

      {/* Unified Content Container */}
      <ContentWrapper>
        {/* Upload, Create, Search */}
        <TopBar>
          <button style={{ fontSize: "17px" }} className="btn btn-primary">
            <FaUpload className="me-2" /> Upload Media
          </button>
          <button style={{ fontSize: "17px" }} className="btn btn-primary">
            <FaCalendarPlus className="me-2" /> Create Event
          </button>
          <SearchContainer>
            <IoSearchOutline size={20} color="gray" />
            <SearchInput
              style={{ fontSize: "17px" }}
              type="text"
              placeholder="Search media or events..."
            />
          </SearchContainer>
        </TopBar>

        {/* Tabs */}
        <TabSection>
          <Tab active style={{ fontSize: "19px" }}>
            Media Gallery
          </Tab>
          <Tab style={{ fontSize: "19px" }}>Upcoming Events</Tab>
        </TabSection>

        {/* Media Cards */}
        <CardGrid>
          <MediaCard>
            <MediaImage
              src="https://thumbs.dreamstime.com/b/train-platform-paddington-railway-station-london-uk-train-platform-paddington-railway-station-london-uk-december-151104481.jpg"
              alt="Main Station Photo"
            />
            <DeleteIcon>
              <FaTrash />
            </DeleteIcon>
            <CardContent>
              <Title style={{ fontSize: "19px" }}>Main Station Photo</Title>
              <Info style={{ fontSize: "15px" }}>
                <FaUser /> Uploaded by Sarah
              </Info>
              <Info style={{ fontSize: "15px" }}>
                <FaCalendarAlt /> May 10, 2025
              </Info>
            </CardContent>
          </MediaCard>

          <MediaCard>
            <MediaImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmxFIJ9YKA4-P-oqN_th0SwXway_MHQkizw&s"
              alt="Cab Fleet"
            />
            <DeleteIcon>
              <FaTrash />
            </DeleteIcon>
            <CardContent>
              <Title style={{ fontSize: "19px" }}>Cab Fleet</Title>
              <Info style={{ fontSize: "16px" }}>
                <FaUser /> Uploaded by Mike
              </Info>
              <Info style={{ fontSize: "15px" }}>
                <FaCalendarAlt /> May 8, 2025
              </Info>
            </CardContent>
          </MediaCard>
        </CardGrid>
      </ContentWrapper>
    </Container>
  );
};

export default MediaEvents;
