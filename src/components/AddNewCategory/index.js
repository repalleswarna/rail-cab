import React, { useState } from "react";
import styled from "styled-components";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const OuterContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MainContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #ffffff;
  border-radius: 12px 12px 0 0;
  position: relative;
`;

const HeaderTitle = styled.h5`
  font-weight: 600;
  margin: 0;
`;

const CloseIcon = styled(FiXCircle)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: red;
  cursor: pointer;
  font-size: 24px;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`;

const Label = styled(Form.Label)`
  font-weight: 500;
`;

const StyledInput = styled(Form.Control)`
  background-color: #f3f4f6 !important;
`;

const StyledSelect = styled(Form.Select)`
  background-color: #f3f4f6 !important;
`;

const UploadBox = styled.label`
  border: 2px dashed #d1d5db;
  border-radius: 10px;
  text-align: center;
  padding: 30px;
  background-color: #fafafa;
  color: #6b7280;
  cursor: pointer;
  display: block;
  position: relative;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadText = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const FileName = styled.div`
  color: #0d6efd;
  font-size: 14px;
  margin-top: 8px;
`;

const Footer = styled.div`
  border-top: 1px solid #e2e8f0;
  background-color: #ffffff;
  padding: 20px 30px;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`;

export default function AddNewCategory({ onClose }) {
  const initialFormData = {
    name: "",
    type: "",
    description: "",
    capacity: "",
    baseFare: "",
    perKmRate: "",
    minFare: "",
    luggage: "",
    ac: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Only PNG, JPG, JPEG, and GIF files are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB.");
        return;
      }
      setFileName(file.name);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    const requiredFields = [
      "name",
      "type",
      "description",
      "capacity",
      "baseFare",
      "perKmRate",
      "minFare",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      // Submit logic here
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setFileName("");
    setErrors({});
    if (onClose) onClose();
  };

  return (
    <OuterContainer>
      <MainContainer>
        <Header>
          <HeaderTitle>Add New Category</HeaderTitle>
          <CloseIcon title="Close" onClick={handleCancel} />
        </Header>

        <ScrollableContent>
          <h6 className="mb-3">Basic Information</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Label>Category Name*</Label>
              <StyledInput
                name="name"
                placeholder="e.g., Premium Sedan"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Label>Vehicle Type*</Label>
              <StyledSelect
                name="type"
                value={formData.type}
                onChange={handleChange}
                isInvalid={!!errors.type}
              >
                <option value="">Select type</option>
                <option>Hatchback</option>
                <option>Sedan</option>
                <option>SUV</option>
              </StyledSelect>
              <Form.Control.Feedback type="invalid">
                {errors.type}
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Label>Description*</Label>

              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Col>
            <StyledInput
              as="textarea"
              rows={3}
              name="description"
              placeholder="Brief description of the category"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
          </Row>

          <h6 className="mb-3">Capacity & Pricing</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Label>Seating Capacity*</Label>
              <StyledInput
                name="capacity"
                type="number"
                placeholder="Number of seats"
                value={formData.capacity}
                onChange={handleChange}
                isInvalid={!!errors.capacity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.capacity}
              </Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Label>Base Fare (₹)*</Label>
              <StyledInput
                name="baseFare"
                type="number"
                placeholder="Enter base fare"
                value={formData.baseFare}
                onChange={handleChange}
                isInvalid={!!errors.baseFare}
              />
              <Form.Control.Feedback type="invalid">
                {errors.baseFare}
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <Label>Per KM Rate (₹)*</Label>
              <StyledInput
                name="perKmRate"
                type="number"
                placeholder="Rate per kilometer"
                value={formData.perKmRate}
                onChange={handleChange}
                isInvalid={!!errors.perKmRate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.perKmRate}
              </Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Label>Minimum Fare (₹)*</Label>
              <StyledInput
                name="minFare"
                type="number"
                placeholder="Minimum fare"
                value={formData.minFare}
                onChange={handleChange}
                isInvalid={!!errors.minFare}
              />
              <Form.Control.Feedback type="invalid">
                {errors.minFare}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <h6 className="mb-3">Additional Details</h6>
          <Row className="mb-4">
            <Col md={6}>
              <Label>Luggage Capacity (kg)</Label>
              <StyledInput
                name="luggage"
                type="number"
                placeholder="Max luggage weight"
                value={formData.luggage}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Label>AC Available</Label>
              <StyledSelect
                name="ac"
                value={formData.ac}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </StyledSelect>
            </Col>
          </Row>

          <h6 className="mb-3">Category Icon</h6>
          <UploadBox>
            <FiUploadCloud size={32} />
            <UploadText>
              <strong>Upload a file</strong>
              <br />
              or drag and drop
              <br />
              <small>PNG, JPG, GIF up to 2MB</small>
            </UploadText>
            <HiddenInput
              type="file"
              accept=".png,.jpg,.jpeg,.gif"
              onChange={handleFileChange}
            />
            {fileName && <FileName>{fileName}</FileName>}
          </UploadBox>
        </ScrollableContent>

        <Footer>
          <Button variant="outline-secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Category
          </Button>
        </Footer>
      </MainContainer>
    </OuterContainer>
  );
}
