import React from "react";
import styled from "styled-components";
import { FiCamera, FiBell, FiLogOut } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ NEW

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f9fb;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  background-color: #ffffff;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 150px);
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const BellIcon = styled(FiBell)`
  margin-right: 10px;
  cursor: pointer;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px 40px; /* Add top padding to offset fixed header */
`;

const ProfileCard = styled.div`
  background-color: white;
  width: 85%;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 0;
`;

const ProfileImageWrapper = styled.div`
  position: relative;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const CameraIcon = styled(FiCamera)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007bff;
  color: white;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserDetails = styled.div`
  margin-left: 20px;
`;

const UserName = styled.h3`
  margin: 0;
`;

const UserRole = styled.p`
  margin: 4px 0;
`;

const MemberSince = styled.p`
  margin: 0;
  color: gray;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 20px;
  margin-top: 30px;
  align-items: flex-start;
`;

const Section = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h4`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 1px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #0069d9;
  }
`;

const LogoutButton = styled.button`
  background-color: #ffe5e5;
  color: #dc3545;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const LogoutIcon = styled(FiLogOut)`
  margin-right: 8px;
`;

const Profile = () => {
  const navigate = useNavigate(); // ✅ NEW

  const handleLogout = () => {
    // Clear any auth state here if needed
    navigate("/"); // ✅ Redirect to SignIn page
  };

  return (
    <Container>
      <Header className="d-none d-lg-flex">
        <Title>My Profile</Title>
        <UserArea>
          <BellIcon size={20} />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Smith"
          />
          <span>John Smith</span>
          <FaChevronDown />
        </UserArea>
      </Header>

      <Main>
        <ProfileCard>
          <ProfileImageWrapper>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Smith"
            />
            <CameraIcon size={16} />
          </ProfileImageWrapper>
          <UserDetails>
            <UserName>John Smith</UserName>
            <UserRole>Service Manager</UserRole>
            <MemberSince>Member since January 2025</MemberSince>
          </UserDetails>
        </ProfileCard>

        <CardsContainer>
          <Section>
            <SectionTitle>Personal Information</SectionTitle>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>First Name</label>
                <Input
                  type="text"
                  placeholder="First Name"
                  defaultValue="John"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Last Name</label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  defaultValue="Smith"
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>Email</label>
                <Input
                  type="email"
                  placeholder="Email"
                  defaultValue="john.smith@railcab.com"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Phone</label>
                <Input
                  type="text"
                  placeholder="Phone"
                  defaultValue="+91 98765 43210"
                />
              </div>
            </div>
            <Button>Save Changes</Button>
          </Section>

          <Section>
            <SectionTitle>Security</SectionTitle>
            <div>
              <label>Current Password</label>
              <Input type="password" placeholder="Current Password" />
            </div>
            <div>
              <label>New Password</label>
              <Input type="password" placeholder="New Password" />
            </div>
            <div>
              <label>Confirm Password</label>
              <Input type="password" placeholder="Confirm Password" />
            </div>
            <Button>Update Password</Button>
            <LogoutButton onClick={handleLogout}>
              <LogoutIcon size={16} /> Logout
            </LogoutButton>
          </Section>
        </CardsContainer>
      </Main>
    </Container>
  );
};

export default Profile;
