import React, { useState } from "react";
import styled from "styled-components";
import {
  BsCheckCircleFill,
  BsCalendar,
  BsFileEarmarkText,
  BsPlus,
  BsPencilSquare,
} from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiDownloadCloudFill, RiPencilFill } from "react-icons/ri";
import { IoImageSharp } from "react-icons/io5";

import FAQManagement from "../FAQManagement";
import MediaEvents from "../MediaEvents";

// Styled Components

const PageContainer = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  padding: 20px 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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
  @media (max-width: 1024px) {
    left: 0;
    width: 100%;
  }
`;

const HeaderTitle = styled.h5`
  font-weight: 750;
  font-size: 22px;
  margin: 0;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #333;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const Divider = styled.hr`
  border-top: 1px solid #999;
  margin: 0 0 1rem 0;
`;

const MainGrid = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Column = styled.div`
  flex: 1 1 300px;
  max-width: 400px;
`;

const SectionBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 4px rgba(57, 23, 23, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h6`
  font-weight: 700;
  margin: 0;
`;

const ButtonPrimarySmall = styled.button`
  background-color: #0d6efd;
  border: none;
  color: white;
  font-size: 0.85rem;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0b5ed7;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px 14px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.strong`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const CardCount = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ color }) => color || "#333"};
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.75;
  }
`;

const BadgeActive = styled.span`
  background-color: #198754;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UploadBox = styled.div`
  border: 2px dashed #d9d9d9;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  color: #999;
  font-size: 14px;
  margin-top: 14px;
`;

const UploadTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin-top: 6px;
`;

const UploadSupportText = styled.h1`
  font-size: 12px;
  font-weight: 600;
  color: gray;
  margin: 0;
`;

const ActivityBox = styled(SectionBox)`
  margin-top: auto;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 14px;
`;

const IconWrapper = styled.div`
  background-color: ${({ bg }) => bg || "#f0f0f0"};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActivityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ActivityTitle = styled.div`
  font-weight: 600;
`;

const ActivitySubtext = styled.div`
  color: #666;
  font-size: 12px;
`;

const ClickableCard = styled(Card)`
  cursor: pointer;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 0 10px rgba(13, 110, 253, 0.3);
  }
`;

const ContentManagement = () => {
  const [showFAQManagement, setShowFAQManagement] = useState(false);
  const [showMediaEvents, setShowMediaEvents] = useState(false);

  // Show FAQManagement page only
  if (showFAQManagement) {
    return <FAQManagement onBack={() => setShowFAQManagement(false)} />;
  }

  // Show MediaEvents page only
  if (showMediaEvents) {
    return <MediaEvents onBack={() => setShowMediaEvents(false)} />;
  }

  // Otherwise, show main ContentManagement page
  return (
    <PageContainer>
      {/* Header */}
      <Header className="d-none d-lg-flex">
        <HeaderTitle>Content Management</HeaderTitle>
        <UserArea>
          <IoIosNotifications size={20} />
          <ProfileImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
          />
          John Smith <FaAngleDown />
        </UserArea>
      </Header>
      <Divider />

      {/* Main Grid */}
      <MainGrid>
        {/* FAQs */}
        <Column>
          <SectionBox>
            <SectionHeader>
              <SectionTitle>FAQs</SectionTitle>
              <ButtonPrimarySmall onClick={() => setShowFAQManagement(true)}>
                Add FAQ
              </ButtonPrimarySmall>
            </SectionHeader>

            <Card>
              <CardHeader>
                <CardTitle>Booking & Payments</CardTitle>
                <CardCount>12 entries</CardCount>
              </CardHeader>
              <CardActions>
                <IconButton aria-label="Edit Booking & Payments FAQ">
                  <BsPencilSquare color="blue" />
                </IconButton>
                <IconButton
                  aria-label="Delete Booking & Payments FAQ"
                  color="red"
                >
                  <MdDelete size={20} />
                </IconButton>
              </CardActions>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service & Support</CardTitle>
                <CardCount>8 entries</CardCount>
              </CardHeader>
              <CardActions>
                <IconButton aria-label="Edit Service & Support FAQ">
                  <BsPencilSquare color="blue" />
                </IconButton>
                <IconButton
                  aria-label="Delete Service & Support FAQ"
                  color="red"
                >
                  <MdDelete size={20} />
                </IconButton>
              </CardActions>
            </Card>
          </SectionBox>
        </Column>

        {/* Legal Pages */}
        <Column>
          <SectionBox>
            <SectionHeader>
              <SectionTitle>Legal Pages</SectionTitle>
              <ButtonPrimarySmall>Add Page</ButtonPrimarySmall>
            </SectionHeader>

            <Card>
              <CardHeader>
                <CardTitle>
                  <BsFileEarmarkText style={{ marginRight: 6 }} />
                  Terms & Conditions
                </CardTitle>
                <IconButton aria-label="Edit Terms & Conditions">
                  <BsPencilSquare color="blue" />
                </IconButton>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <BsFileEarmarkText style={{ marginRight: 6 }} />
                  Privacy Policy
                </CardTitle>
                <IconButton aria-label="Edit Privacy Policy">
                  <BsPencilSquare color="blue" />
                </IconButton>
              </CardHeader>
            </Card>
          </SectionBox>
        </Column>

        {/* Media & Events (Clickable) */}
        <Column>
          <SectionBox>
            <SectionHeader>
              <SectionTitle>Media & Events</SectionTitle>
              <ButtonPrimarySmall>Upload Media</ButtonPrimarySmall>
            </SectionHeader>

            <ClickableCard onClick={() => setShowMediaEvents(true)}>
              <CardHeader>
                <CardTitle>Summer Campaign 2025</CardTitle>
                <BadgeActive>
                  <BsCheckCircleFill size={14} /> Active
                </BadgeActive>
              </CardHeader>
              <ActivitySubtext
                style={{ marginTop: 6, color: "#666", fontSize: "13px" }}
              >
                <BsCalendar style={{ marginRight: 6 }} />
                May 15, 2025
              </ActivitySubtext>
              <CardActions
                style={{ justifyContent: "flex-end", marginTop: 12 }}
              >
                <IconButton aria-label="Edit Summer Campaign">
                  <BsPencilSquare color="blue" />
                </IconButton>
                <IconButton aria-label="Delete Summer Campaign" color="red">
                  <MdDelete size={20} />
                </IconButton>
              </CardActions>
            </ClickableCard>

            <UploadBox>
              <RiDownloadCloudFill size={35} />
              <UploadTitle>Drag and drop media files here</UploadTitle>
              <UploadSupportText>
                Supports: JPG, PNG, MP4 (max 10MB)
              </UploadSupportText>
            </UploadBox>
          </SectionBox>
        </Column>
      </MainGrid>

      {/* Recent Activity */}
      <ActivityBox>
        <SectionTitle>Recent Activity</SectionTitle>
        <Divider />
        <ActivityItem>
          <IconWrapper bg="#e0f0ff">
            <RiPencilFill size={20} color="blue" />
          </IconWrapper>
          <ActivityText>
            <ActivityTitle>Terms & Conditions page updated</ActivityTitle>
            <ActivitySubtext>2 hours ago by Admin</ActivitySubtext>
          </ActivityText>
        </ActivityItem>

        <ActivityItem>
          <IconWrapper bg="#d9f9e2">
            <BsPlus size={20} className="text-success" />
          </IconWrapper>
          <ActivityText>
            <ActivityTitle>New FAQ category added: Refunds</ActivityTitle>
            <ActivitySubtext>4 hours ago by Support Team</ActivitySubtext>
          </ActivityText>
        </ActivityItem>

        <ActivityItem>
          <IconWrapper bg="#ece1fc">
            <IoImageSharp size={20} color="purple" />
          </IconWrapper>
          <ActivityText>
            <ActivityTitle>New event banner uploaded</ActivityTitle>
            <ActivitySubtext>Yesterday by Marketing</ActivitySubtext>
          </ActivityText>
        </ActivityItem>
      </ActivityBox>
    </PageContainer>
  );
};

export default ContentManagement;
