import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const ModalBox = styled.div`
  background-color: #ffffff;
  width: 50%;
  border-radius: 8px;
  padding: 20px;
  margin-left: 100px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: "Segoe UI", sans-serif;
  position: relative;
`;

const ModalHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const ModalContent = styled.div`
  font-size: 13px;
  color: #333;
  margin-bottom: 20px;
`;

const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div`
  color: #444;
`;

const Value = styled.div`
  font-weight: 500;
`;

const Obscured = styled.span`
  letter-spacing: 2px;
`;

const IconWrapper = styled.span`
  margin-left: 5px;
  color: #444;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 8px 12px;
  width: 50%;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DebugLink = styled.div`
  font-size: 12px;
  color: #007bff;
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled(MdKeyboardArrowRight)`
  font-size: 16px;
  color: #007bff;
  margin-right: 2px;
`;

const CloseText = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
`;

function TestIntegration() {
  return (
    <ModalBox className="shadow">
      <ModalHeader>
        Test Integration Connection
        <span style={{ cursor: "pointer", fontSize: "16px" }}>✕</span>
      </ModalHeader>

      <ModalContent>
        <FieldRow>
          <Label>Service Name</Label>
          <Value>Twilio SMS</Value>
        </FieldRow>

        <FieldRow>
          <Label>API Key</Label>
          <Value>
            <Obscured>••••••••••</Obscured>
            <IconWrapper>
              <FaEye size={12} />
            </IconWrapper>
          </Value>
        </FieldRow>

        <FieldRow>
          <Label>Sender ID</Label>
          <Value>noreply@railcab.com</Value>
        </FieldRow>

        <FieldRow>
          <Label>Region</Label>
          <Value>us-east-1</Value>
        </FieldRow>
      </ModalContent>

      <ButtonContainer>
        <Button>
          <span role="img" aria-label="test" style={{ marginRight: "6px" }}>
            🧪
          </span>
          Run Connection Test
        </Button>
      </ButtonContainer>

      <DebugLink>
        <ArrowIcon />
        View Debug Logs
      </DebugLink>

      <CloseText>Close</CloseText>
    </ModalBox>
  );
}

export default TestIntegration;
