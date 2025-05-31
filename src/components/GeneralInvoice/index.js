import React from "react";
import styled from "styled-components";
import { FaPaperclip } from "react-icons/fa";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiArrowBack } from "react-icons/bi";

const OuterContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  padding: 0;
`;

const HeadingWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 0;
  position: sticky;
  top: 0;
  background: rgb(233, 237, 241);
  z-index: 10;
  padding-bottom: 20px;
`;

const Heading = styled.h4`
  font-weight: 700;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const InnerContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 0 30px 30px 30px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const SectionContent = styled.div`
  padding-top: 30px;
`;

const SectionTitle = styled.h6`
  font-weight: 600;
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  margin: 30px 0;
`;

const StyledSelect = styled(Form.Select)`
  background-color: #e9e9ee !important;
`;

const StyledInput = styled(Form.Control)`
  background-color: #e9e9ee !important;
`;

const AttachmentLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  flex-wrap: wrap;
  position: sticky;
  bottom: 0;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-top: 30px;
`;

export default function GeneralInvoice({ onClose }) {
  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <OuterContainer>
      <HeadingWrapper>
        <Heading>
          <BackButton onClick={handleCancel}>
            <BiArrowBack size={20} />
          </BackButton>
          Generate Invoice
        </Heading>
      </HeadingWrapper>

      <InnerContainer>
        <SectionContent>
          {/* Basic Details */}
          <SectionTitle>Basic Details</SectionTitle>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Invoice ID</Form.Label>
              <StyledInput type="text" value="INV-2025003" readOnly />
            </Col>
            <Col md={6}>
              <Form.Label>Invoice Date</Form.Label>
              <StyledInput type="date" placeholder="dd / mm / yyyy" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Label>Invoice Type</Form.Label>
              <StyledSelect>
                <option>Vendor Invoice</option>
                <option>Customer Invoice</option>
              </StyledSelect>
            </Col>
            <Col md={6}>
              <Form.Label>Payment Terms</Form.Label>
              <StyledSelect>
                <option>Immediate</option>
                <option>Net 15</option>
                <option>Net 30</option>
              </StyledSelect>
            </Col>
          </Row>

          <Divider />

          {/* Entity Details */}
          <SectionTitle>Entity Details</SectionTitle>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Vendor/User Name</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={6}>
              <Form.Label>GST Number</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={2} />

          <Divider />

          {/* Amount Details */}
          <SectionTitle>Amount Details</SectionTitle>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Base Amount</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={6}>
              <Form.Label>GST Rate (%)</Form.Label>
              <StyledSelect>
                <option>0%</option>
                <option>5%</option>
                <option>12%</option>
                <option>18%</option>
                <option>28%</option>
              </StyledSelect>
            </Col>
          </Row>

          <Divider />

          {/* Additional Details */}
          <SectionTitle>Additional Details</SectionTitle>
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={2} className="mb-3" />

          <Form.Label>Attachments</Form.Label>
          <div className="d-flex align-items-center justify-content-between">
            <AttachmentLabel htmlFor="fileUpload">
              <FaPaperclip />
              Add Files
            </AttachmentLabel>
            <small className="text-muted">Maximum file size: 5MB</small>
          </div>
          <Form.Control type="file" id="fileUpload" className="d-none" />
        </SectionContent>

        <ActionButtons>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="outline-primary">Save as Draft</Button>
          <Button variant="primary">Generate Invoice</Button>
        </ActionButtons>
      </InnerContainer>
    </OuterContainer>
  );
}
