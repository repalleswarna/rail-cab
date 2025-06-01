import React from "react";
import styled from "styled-components";
import {
  FaUserShield,
  FaTools,
  FaCalculator,
  FaUsers,
  FaCog,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const SettingsContainer = styled.div`
  background-color: #f8f9fc;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 140px; /* header height offset */
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  background-color: #f8f9fc;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 20px 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  order: 1;

  @media (min-width: 768px) {
    order: 0;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  order: 0;

  @media (min-width: 768px) {
    order: 1;
  }
`;

// New container to hold icons next to profile
const IconGroup = styled.div`
  display: flex;
  gap: 20px;
  color: #6c757d;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #0d6efd;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.span`
  color: #0f172a;
  font-weight: 500;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 10px;
  color: #212529;
`;

const Description = styled.p`
  color: #6c757d;
  margin-top: -8px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    width: 280px;
  }
`;

const Content = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SearchBox = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h5`
  margin-top: 20px;
  color: #6c757d;
  font-size: 15px;
  font-weight: 600;
`;

const RoleButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0d6efd" : "#212529")};
  background-color: ${(props) => (props.active ? "#e7f1ff" : "transparent")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ButtonHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TitleGroup = styled.div`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;

  &.outline {
    background-color: transparent;
    border-color: #6c757d;
    color: #6c757d;
  }

  &.primary {
    background-color: #0d6efd;
    color: white;
  }
`;

const PermissionSection = styled.div`
  margin-top: 25px;
`;

const SectionHeader = styled.h3`
  font-weight: 600;
  margin-bottom: 20px;
  color: #212529;
`;

const PermissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PermissionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
`;

const PermissionInfo = styled.div``;

const PermissionLabel = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const PermissionDescription = styled.div`
  color: #6c757d;
  font-size: 14px;
`;

const Toggle = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 36px;
  height: 20px;
  background: #dee2e6;
  border-radius: 10px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:checked {
    background: #0d6efd;
  }

  &:checked::before {
    left: 18px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    background: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const SettingsPanel = () => {
  return (
    <SettingsContainer>
      <ContentContainer>
        <Header className="d-none d-lg-flex">
          <HeaderLeft>
            <Title>Notification Permissions</Title>
          </HeaderLeft>

          <HeaderRight>
            {/* Icons next to profile */}
            <IconGroup>
              <FaBell title="Notifications" />
              <FaCog title="Settings" />
              <FaUserCircle title="User Profile" />
            </IconGroup>

            <Profile>
              <ProfileImage
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Smith"
              />
              <ProfileName>John Smith</ProfileName>
            </Profile>
          </HeaderRight>
        </Header>

        <MainContent>
          <Sidebar>
            <SearchBox placeholder="Search roles or users..." />
            <SectionTitle>Roles</SectionTitle>
            <RoleButton active>
              <FaUserShield className="me-2" /> Super Admin
            </RoleButton>
            <RoleButton>
              <FaTools className="me-2" /> Service Manager
            </RoleButton>
            <RoleButton>
              <FaCalculator className="me-2" /> Accountant
            </RoleButton>
            <RoleButton>
              <FaUsers className="me-2" /> HR Manager
            </RoleButton>

            <SectionTitle>Teams</SectionTitle>
            <RoleButton>
              <Avatar src="https://randomuser.me/api/portraits/men/11.jpg" />
              Team Member 1
            </RoleButton>
            <RoleButton>
              <Avatar src="https://randomuser.me/api/portraits/men/12.jpg" />
              Team Member 2
            </RoleButton>
            <RoleButton>
              <Avatar src="https://randomuser.me/api/portraits/men/13.jpg" />
              Team Member 3
            </RoleButton>
          </Sidebar>

          <Content>
            <ButtonHeaderContainer>
              <TitleGroup>
                <Title>Notification Permissions</Title>
                <Description>
                  Customize notification preferences for each user or role.
                </Description>
              </TitleGroup>

              <ButtonGroup>
                <Button className="outline">Cancel</Button>
                <Button className="primary">Save Changes</Button>
              </ButtonGroup>
            </ButtonHeaderContainer>

            <PermissionSection>
              <SectionHeader>Super Admin</SectionHeader>
              <PermissionGrid>
                <PermissionItem>
                  <PermissionInfo>
                    <PermissionLabel>Email Alerts</PermissionLabel>
                    <PermissionDescription>
                      Receive email notifications for critical events.
                    </PermissionDescription>
                  </PermissionInfo>
                  <Toggle defaultChecked />
                </PermissionItem>

                <PermissionItem>
                  <PermissionInfo>
                    <PermissionLabel>SMS Notifications</PermissionLabel>
                    <PermissionDescription>
                      Receive SMS alerts for urgent issues.
                    </PermissionDescription>
                  </PermissionInfo>
                  <Toggle />
                </PermissionItem>

                <PermissionItem>
                  <PermissionInfo>
                    <PermissionLabel>Push Notifications</PermissionLabel>
                    <PermissionDescription>
                      Receive push notifications on your devices.
                    </PermissionDescription>
                  </PermissionInfo>
                  <Toggle defaultChecked />
                </PermissionItem>
              </PermissionGrid>
            </PermissionSection>
          </Content>
        </MainContent>
      </ContentContainer>
    </SettingsContainer>
  );
};

export default SettingsPanel;
