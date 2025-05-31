import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosNotifications } from "react-icons/io";
import {
  FaAngleDown,
  FaSearch,
  FaTrain,
  FaMapMarkerAlt,
  FaCarSide,
  FaBoxes,
  FaHandshake,
  FaIdBadge,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Form,
  Table,
  Badge,
  Pagination,
  InputGroup,
} from "react-bootstrap";

import PickupDropPoints from "../PickupDropPoints";
import CabCategories from "../CabCategories";
import CabInventory from "../CabInventory";
import Vendors from "../Vendors";
import Drivers from "../Drivers";
import TrainSchedule from "../TrainSchedule";
import AddewStation from "../AddewStation";

const AppWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  background-color: white;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  display: flex;
  align-items: center;
  filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};
  transition: filter 0.3s ease;

  @media (max-width: 768px) {
    left: 0;
    padding: 15px 20px;
  }
`;

const FixedTabs = styled.div`
  position: fixed;
  top: 80px;
  left: 250px;
  right: 0;
  z-index: 99;
  background-color: white;
  border-bottom: 1px solid #dee2e6;

  @media (max-width: 768px) {
    left: 0;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 140px;
  padding: 1rem;
`;

const Title = styled.h4`
  margin-bottom: 0;
  font-weight: 600;
  font-size: 30px;
  flex: 1 1 auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: nowrap;
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1040;
`;

const NavBlurOverlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 50px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1040;
`;

const StationComponent = ({ onAddClick }) => (
  <>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5>Stations Management</h5>
      <Button onClick={() => onAddClick("station")} variant="primary">
        + Add Station
      </Button>
    </div>
    <Row className="mb-4">
      <Col md={6}>
        <InputGroup>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search stations..." />
        </InputGroup>
      </Col>
      <Col md={3}>
        <Form.Select>
          <option>All Cities</option>
        </Form.Select>
      </Col>
      <Col md={3}>
        <Form.Select>
          <option>Status: All</option>
        </Form.Select>
      </Col>
    </Row>
    <Table responsive>
      <thead>
        <tr>
          <th>Station Name</th>
          <th>City</th>
          <th>Pickup Points</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <FaTrain /> Mumbai Central{" "}
          </td>
          <td>Mumbai</td>
          <td>12 points</td>
          <td>
            <Badge bg="success">Active</Badge>
          </td>
          <td>
            <Button variant="link">
              <FaEdit />
            </Button>
            <Button variant="link">
              <FaTrash />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </>
);

const ServiceManager = () => {
  const [activeTab, setActiveTab] = useState("stations");
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAddClick = (content) => {
    setModalContent(content);
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setModalContent(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const getActiveItemIcon = () => {
    const tabIcons = {
      stations: <FaTrain className="me-2" />,
      pickup: <FaMapMarkerAlt className="me-2" />,
      cab: <FaCarSide className="me-2" />,
      inventory: <FaBoxes className="me-2" />,
      vendor: <FaHandshake className="me-2" />,
      driver: <FaIdBadge className="me-2" />,
      train: <FaCalendarAlt className="me-2" />,
    };
    return tabIcons[activeTab] || null;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "stations":
        return <StationComponent onAddClick={handleAddClick} />;
      case "pickup":
        return <PickupDropPoints onAddClick={handleAddClick} />;
      case "cab":
        return <CabCategories onAddClick={handleAddClick} />;
      case "inventory":
        return <CabInventory onAddClick={handleAddClick} />;
      case "vendor":
        return <Vendors onAddClick={handleAddClick} />;
      case "driver":
        return <Drivers onAddClick={handleAddClick} />;
      case "train":
        return <TrainSchedule onAddClick={handleAddClick} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setShowAddModal(false);
  }, [activeTab]);

  return (
    <AppWrapper>
      <Header blur={showAddModal}>
        <button className="btn d-lg-none me-2" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {getActiveItemIcon()}
        <Title>Service Manager</Title>
        <ProfileWrapper>
          <IoIosNotifications size={24} />
          <ProfileImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
          />
          <ProfileDetails>
            <span>
              John Smith <FaAngleDown />
            </span>
          </ProfileDetails>
        </ProfileWrapper>
      </Header>

      {showAddModal && <BlurOverlay />}
      {showAddModal && <NavBlurOverlay />}

      <FixedTabs>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="stations">
              <FaTrain /> Stations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pickup">
              <FaMapMarkerAlt /> Pickup Points
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cab">
              <FaCarSide /> Cab Categories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="inventory">
              <FaBoxes /> Cab Inventory
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="vendor">
              <FaHandshake /> Vendors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="driver">
              <FaIdBadge /> Drivers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="train">
              <FaCalendarAlt /> Train Schedule
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </FixedTabs>

      <ContentWrapper>{renderTabContent()}</ContentWrapper>

      {showAddModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-4">
              {modalContent === "station" && (
                <AddewStation onClose={handleCloseModal} />
              )}
              {modalContent === "pickup" && (
                <PickupDropPoints onClose={handleCloseModal} />
              )}
              {modalContent === "category" && (
                <CabCategories onClose={handleCloseModal} />
              )}
              {modalContent === "inventory" && (
                <CabInventory onClose={handleCloseModal} />
              )}
              {modalContent === "vendor" && (
                <Vendors onClose={handleCloseModal} />
              )}
              {modalContent === "driver" && (
                <Drivers onClose={handleCloseModal} />
              )}
              {modalContent === "train" && (
                <TrainSchedule onClose={handleCloseModal} />
              )}
            </div>
          </div>
        </div>
      )}
    </AppWrapper>
  );
};

export default ServiceManager;
