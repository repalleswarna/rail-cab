import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTachometerAlt,
  FaBusAlt,
  FaFileInvoice,
  FaUsersCog,
  FaHeadset,
  FaBell,
  FaCogs,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

import Dashboard from "../Dashboard";
import NotificationPanel from "../NotificationPanel";
import SettingsPanel from "../SettingsPanel";
import ServiceManager from "../ServiceManager";
import Accountant from "../Accountant";
import HRModule from "../HRModule";
import SupportPortal from "../SupportPortal";
import ContentManagement from "../ContentManagement";
import Profile from "../Profile";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <Dashboard
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Service Manager":
        return (
          <ServiceManager
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Accountant":
        return (
          <Accountant
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "HR Module":
        return (
          <HRModule
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Support Module":
        return (
          <SupportPortal
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "CMS":
        return (
          <ContentManagement
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Notifications":
        return (
          <NotificationPanel
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Settings":
        return (
          <SettingsPanel
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      case "Profile":
        return (
          <Profile
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
      default:
        return (
          <Dashboard
            activeItem={activeTab}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
        );
    }
  };

  return (
    <AppWrapper>
      {/* Mobile Header */}
      <MobileHeader className="d-lg-none">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <HeaderTitle>{activeTab}</HeaderTitle>
        <div style={{ width: "24px" }}></div> {/* Spacer for alignment */}
      </MobileHeader>

      {/* Sidebar for large screens */}
      <FixedSidebar
        className={`d-none d-lg-flex ${sidebarOpen ? "mobile-open" : ""}`}
      >
        <SidebarHeader>
          <Brand>RailCab Admin</Brand>
          <CloseIcon onClick={closeSidebar}>
            <FaTimes size={18} />
          </CloseIcon>
        </SidebarHeader>

        {renderNavItems(activeTab, setActiveTab, closeSidebar)}
      </FixedSidebar>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <MobileSidebarOverlay onClick={closeSidebar} className="d-lg-none" />
      )}

      {/* Mobile Sidebar */}
      <MobileSidebar className={`d-lg-none ${sidebarOpen ? "open" : ""}`}>
        <SidebarHeader>
          <Brand>RailCab Admin</Brand>
          <CloseIcon onClick={closeSidebar}>
            <FaTimes size={18} />
          </CloseIcon>
        </SidebarHeader>

        {renderNavItems(activeTab, setActiveTab, closeSidebar)}
      </MobileSidebar>

      {/* Content Area */}
      <ContentWrapper className="flex-grow-1">{renderContent()}</ContentWrapper>
    </AppWrapper>
  );
};

export default SideBar;

/* Utility to Render Navigation Items */
const renderNavItems = (activeTab, setActiveTab, closeSidebar) => (
  <>
    {[
      { name: "Dashboard", icon: <FaTachometerAlt size={20} /> },
      { name: "Service Manager", icon: <FaBusAlt size={19} /> },
      { name: "Accountant", icon: <FaFileInvoice size={20} /> },
      { name: "HR Module", icon: <FaUsersCog size={24} /> },
      { name: "Support Module", icon: <FaHeadset size={20} /> },
      { name: "CMS", icon: <MdOutlineLibraryBooks size={22} /> },
      { name: "Notifications", icon: <FaBell size={20} /> },
      { name: "Settings", icon: <FaCogs size={20} /> },
      { name: "Profile", icon: <FaUser size={20} /> },
    ].map((item) => (
      <NavItem
        key={item.name}
        active={activeTab === item.name}
        onClick={() => {
          setActiveTab(item.name);
          closeSidebar();
        }}
      >
        {item.icon}
        <NavText active={activeTab === item.name}>{item.name}</NavText>
      </NavItem>
    ))}
  </>
);

// Styled Components (remain the same as before)
const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const HeaderTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  color: #007bff;
`;

const FixedSidebar = styled.div`
  width: 250px;
  background-color: rgb(64, 142, 224);
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  z-index: 10000;

  &.mobile-open {
    display: flex;
  }
`;

const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.className.includes("open") ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  background-color: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  z-index: 9999;
  transition: left 0.3s ease-in-out;
`;

const MobileSidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9998;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  background: #0069d9;
`;

const Brand = styled.div`
  color: #fff;
`;

const CloseIcon = styled.div`
  cursor: pointer;
`;

const NavItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#0056b3" : "transparent")};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  .icon {
    margin-right: 0.75rem;
  }
`;

const NavText = styled.span`
  color: ${(props) => (props.active ? "#fff" : "#e0e0e0")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const ContentWrapper = styled.div`
  margin-left: 250px;
  margin-top: 56px;
  padding: 1rem;

  @media (max-width: 992px) {
    margin-left: 0;
    margin-top: 64px;
  }
`;
