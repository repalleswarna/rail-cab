import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import TestIntegration from "../TestIngegration";
import NotificationPanel from "../NotificationPanel";

const Wrapper = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 150px; /* Leave space for fixed footer */
  position: relative;
  filter: ${({ isBlurred }) => (isBlurred ? "blur(4px)" : "none")};
  transition: filter 0.3s ease-in-out;
  overflow-y: auto;
`;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HeaderBox = styled.div`
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

const HeaderTitle = styled.div`
  font-size: 25px;
  font-weight: 550;
  color: Blue;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  margin-top: 80px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h6`
  font-weight: bold;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ced4da;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ced4da;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-top: 3px;
`;

const NotificationBox = styled.div`
  border: 1px solid #dee2e6;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const FixedFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100% - 250px);
  left: 250px;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function ConfigureIntegration() {
  const [showPopup, setShowPopup] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);

  if (showNotificationPanel) {
    return <NotificationPanel />;
  }

  return (
    <>
      <Wrapper isBlurred={showPopup}>
        <Container className="container">
          {/* Header Section */}
          <HeaderBox>
            <HeaderTitle>Configure Integration</HeaderTitle>
            <HeaderRight>
              <IoIosNotifications
                size={28}
                color="black"
                onClick={() => setShowNotificationPanel(true)}
                style={{ cursor: "pointer" }}
              />
              <img
                className="rounded-circle"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                width="35px"
                alt="user"
              />
            </HeaderRight>
          </HeaderBox>

          <Card>
            <SectionTitle>Basic Information</SectionTitle>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Integration Name</label>
                <Input placeholder="e.g., Twilio SMS Service" />
              </div>
              <div className="col-md-6 mb-3">
                <label>API Key</label>
                <Input placeholder="Enter API key" type="password" />
              </div>
            </div>

            <SectionTitle>Service Configuration</SectionTitle>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Sender ID / From Address</label>
                <Input placeholder="noreply@railcab.com" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Region</label>
                <Select>
                  <option>Select Region</option>
                  <option>US-East</option>
                  <option>EU-West</option>
                </Select>
              </div>
            </div>

            <SectionTitle>Notification Types</SectionTitle>
            <div className="row">
              {[
                ["Email Notifications", "Send email notifications to users"],
                ["SMS Notifications", "Send SMS alerts to users"],
                ["Push Notifications", "Send mobile push notifications"],
                ["In-App Notifications", "Show notifications in the app"],
              ].map(([title, desc], i) => (
                <div className="col-md-6" key={i}>
                  <NotificationBox>
                    <CheckboxLabel>
                      <Checkbox type="checkbox" />
                      <div>
                        <strong>{title}</strong>
                        <br />
                        <small>{desc}</small>
                      </div>
                    </CheckboxLabel>
                  </NotificationBox>
                </div>
              ))}
            </div>

            <SectionTitle>Retry Policy</SectionTitle>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Number of Retries</label>
                <Select>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </Select>
              </div>
              <div className="col-md-6 mb-3">
                <label>Retry Interval (minutes)</label>
                <Select>
                  {[5, 10, 15, 20].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </Select>
              </div>
            </div>
          </Card>
        </Container>

        {/* Fixed Footer */}
        <FixedFooter>
          <BackButton onClick={() => setShowNotificationPanel(true)}>
            <FaArrowLeft style={{ marginRight: "5px" }} />
            Back to Notifications
          </BackButton>

          <ButtonGroup>
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowPopup(true)}
            >
              Test Connection
            </button>
            <button className="btn btn-primary">Save Changes</button>
          </ButtonGroup>
        </FixedFooter>
      </Wrapper>

      {showPopup && (
        <PopupOverlay>
          <TestIntegration />
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              className="btn btn-secondary"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </PopupOverlay>
      )}
    </>
  );
}

export default ConfigureIntegration;
