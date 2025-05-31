import React, { useState } from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaBell,
  FaPlus,
  FaEdit,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfigureIntegration from "../ConfigureIntegration";

const Container = styled.div`
  padding: 5px;
`;

const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  width: calc(100% - 250px);
  z-index: 999;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const IntegrationSection = styled.div`
  background-color: whitesmoke;
  padding: 100px 10px 10px 10px;
  border-radius: 10px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 20px;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderRight = styled.div`
  font-size: 0.8rem;
`;

const Status = styled.span`
  padding: 4px 8px;
  border-radius: 10px;
  background-color: ${(props) => (props.connected ? "#d1fae5" : "#fef3c7")};
  color: ${(props) => (props.connected ? "#065f46" : "#92400e")};
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  font-size: 0.9rem;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Email = styled(Input)``;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #0d6efd;
  padding: 0;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
`;

const SmallBtn = styled.button`
  font-size: 0.85rem;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: ${(props) => (props.danger ? "#f8d7da" : "#e9ecef")};
  color: ${(props) => (props.danger ? "#842029" : "#000")};
  cursor: pointer;
`;

const ConfigureBtn = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 0.85rem;
  border-radius: 5px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: -1px;
  cursor: pointer;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
`;

const TwitterIcon = styled(FaTwitterSquare)`
  background-color: #1da1f2;
  color: white;
  border-radius: 4px;
  padding: 4px;
  font-size: 22px;
  display: inline-block;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AddButton = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
`;

const BellIcon = styled(FaBell)`
  color: #6c757d;
  font-size: 18px;
`;

function NotificationPanel() {
  const [showApi1, setShowApi1] = useState(false);
  const [showApi2, setShowApi2] = useState(false);
  const [showApi3, setShowApi3] = useState(false);
  const [showConfigPage, setShowConfigPage] = useState(false);

  if (showConfigPage) {
    return <ConfigureIntegration />;
  }

  return (
    <Container className="container-fluid">
      <FixedHeaderWrapper>
        <h5 style={{ fontWeight: "600", color: "black", fontSize: "22px" }}>
          Notification Integrations
        </h5>
        <HeaderActions>
          <AddButton>
            <FaPlus /> Add Integration
          </AddButton>
          <BellIcon />
          <Profile>
            <Avatar
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Smith"
            />
            <span style={{ fontWeight: "600" }}>
              John Smith <MdOutlineKeyboardArrowDown size={18} />
            </span>
          </Profile>
        </HeaderActions>
      </FixedHeaderWrapper>

      <IntegrationSection className="row mt-0 wt-3">
        {/* Twilio SMS */}
        <div className="col-md-4 col-12" style={{ marginBottom: "24px" }}>
          <Card>
            <Header>
              <HeaderLeft>
                <TwitterIcon /> Twilio SMS
              </HeaderLeft>
              <HeaderRight>
                <Status connected>Connected</Status>
              </HeaderRight>
            </Header>
            <div>
              <Label>API Key</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={showApi1 ? "text" : "password"}
                  value="**"
                  readOnly
                />
                <EyeIcon onClick={() => setShowApi1(!showApi1)}>
                  {showApi1 ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
              </div>
              <Label>Account SID</Label>
              <Input type="text" value="AC9876543210" readOnly />
              <ButtonRow>
                <small>Last synced: 2 mins ago</small>
                <LinkButton>Test Connection</LinkButton>
              </ButtonRow>
              <FooterRight>
                <SmallBtn>
                  <FaEdit /> Edit
                </SmallBtn>
                <SmallBtn danger>
                  <RiDeleteBin6Line size={16} /> Remove
                </SmallBtn>
              </FooterRight>
            </div>
          </Card>
        </div>

        {/* SendGrid */}
        <div className="col-md-4 col-12" style={{ marginBottom: "24px" }}>
          <Card>
            <Header>
              <HeaderLeft>
                <FaEnvelope size={22} color="blue" /> SendGrid
              </HeaderLeft>
              <HeaderRight>
                <Status connected>Connected</Status>
              </HeaderRight>
            </Header>
            <div>
              <Label>API Key</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={showApi2 ? "text" : "password"}
                  value="**"
                  readOnly
                />
                <EyeIcon onClick={() => setShowApi2(!showApi2)}>
                  {showApi2 ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
              </div>
              <Label>Sender Email</Label>
              <Email type="email" value="noreply@railcab.com" readOnly />
              <ButtonRow>
                <small>Last synced: 5 mins ago</small>
                <LinkButton>Test Connection</LinkButton>
              </ButtonRow>
              <FooterRight>
                <SmallBtn>
                  <FaEdit /> Edit
                </SmallBtn>
                <SmallBtn danger>
                  <RiDeleteBin6Line size={16} /> Remove
                </SmallBtn>
              </FooterRight>
            </div>
          </Card>
        </div>

        {/* Firebase FCM */}
        <div className="col-md-4 col-12" style={{ marginBottom: "24px" }}>
          <Card>
            <Header>
              <HeaderLeft>
                <SiFirebase color="#FFA000" size={22} /> Firebase FCM
              </HeaderLeft>
              <HeaderRight>
                <Status>Setup Required</Status>
              </HeaderRight>
            </Header>
            <div>
              <Label>Server Key</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={showApi3 ? "text" : "password"}
                  placeholder="Enter server key"
                />
                <EyeIcon onClick={() => setShowApi3(!showApi3)}>
                  {showApi3 ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
              </div>
              <Label>Project ID</Label>
              <Input type="text" placeholder="Enter project ID" />
              <ButtonRow>
                <small>Not configured</small>
                <LinkButton>Test Connection</LinkButton>
              </ButtonRow>
              <FooterRight>
                <ConfigureBtn onClick={() => setShowConfigPage(true)}>
                  Configure
                </ConfigureBtn>
              </FooterRight>
            </div>
          </Card>
        </div>
      </IntegrationSection>
    </Container>
  );
}

export default NotificationPanel;
