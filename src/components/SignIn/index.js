import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";
import SideBar from "../SideBar";

const Container = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
`;

const FullHeightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const LeftPanel = styled.div`
  background-color: #0084d6;
  color: white;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 300px;

  @media (max-width: 700px) {
    padding: 30px 20px;
  }

  @media (max-width: 400px) {
    padding: 25px 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const HeaderIcon = styled.div`
  margin-right: 10px;
  font-size: 24px;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const CenteredContent = styled.div`
  margin-top: 40px;

  @media (max-width: 700px) {
    margin-top: 25px;
  }

  @media (max-width: 400px) {
    margin-top: 15px;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 16px;

  @media (max-width: 700px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

const IconRow = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;

  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 5px;

    @media (max-width: 700px) {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 400px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const FooterText = styled.div`
  font-size: 12px;
  margin-top: 20px;

  @media (max-width: 700px) {
    font-size: 11px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

const RightPanel = styled.div`
  background-color: #f9f9f9;
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  overflow-y: auto;

  @media (max-width: 700px) {
    padding: 30px 15px;
  }

  @media (max-width: 400px) {
    padding: 25px 10px;
  }
`;

const ScrollableContent = styled.div`
  max-width: 400px;
  width: 100%;
`;

const RoleCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 700px) {
    padding: 12px;
  }
`;

const SignInCard = styled(RoleCard)`
  padding: 30px 25px;

  @media (max-width: 700px) {
    padding: 20px;
  }

  @media (max-width: 400px) {
    padding: 18px 15px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;

  @media (max-width: 700px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const SignInButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 9px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
    padding: 8px;
  }
`;

const BottomText = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    font-size: 11px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

function SignIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    // Add validation logic here if needed
    setIsSignedIn(true);
  };

  if (isSignedIn) {
    return <SideBar />;
  }

  return (
    <Container>
      <FullHeightRow>
        {/* Left Panel */}
        <LeftPanel>
          <div>
            <Header>
              <HeaderIcon>
                <IoMdTrain />
              </HeaderIcon>
              RailCab Admin
            </Header>

            <CenteredContent>
              <Title>Welcome to RailCab Admin Portal</Title>
              <Description>
                Manage transportation, track performance, and enhance service.
              </Description>
              <IconRow>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user1"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user2"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="user3"
                />
              </IconRow>
              <p className="mt-2">Join 2,000+ administrators</p>
            </CenteredContent>
          </div>

          <FooterText>
            © 2025 RailCab &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms
            of Service
          </FooterText>
        </LeftPanel>

        {/* Right Panel */}
        <RightPanel>
          <ScrollableContent>
            <RoleCard>
              <Label>Select Role</Label>
              <select className="form-select">
                <option>Service Manager</option>
                <option>Admin</option>
                <option>Operator</option>
              </select>
            </RoleCard>

            <SignInCard>
              <Title className="text-center">Sign In</Title>
              <p
                className="text-center text-muted"
                style={{ fontSize: "14px" }}
              >
                Enter your credentials to access your account
              </p>

              <Label>Username</Label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUserCircle />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>

              <Label>Password</Label>
              <div className="input-group mb-2">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                <div className="d-flex align-items-center">
                  <input type="checkbox" id="remember" className="me-2" />
                  <label htmlFor="remember" style={{ fontSize: "13px" }}>
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-primary mt-2 mt-md-0"
                  style={{ fontSize: "13px" }}
                >
                  Forgot password?
                </a>
              </div>

              <SignInButton onClick={handleSignIn}>Sign In</SignInButton>

              <BottomText>
                <MdSecurity className="me-1" /> Protected by enterprise-grade
                security
              </BottomText>
            </SignInCard>
          </ScrollableContent>
        </RightPanel>
      </FullHeightRow>
    </Container>
  );
}

export default SignIn;
