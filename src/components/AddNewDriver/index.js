import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUpload, FaChevronDown, FaUserCircle, FaTimes } from "react-icons/fa";

const OuterContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

const Header = styled.div`
  padding: 25px 25px 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6c757d;
  cursor: pointer;
  padding: 5px;
`;

const ScrollableBody = styled.div`
  padding: 0 25px 25px;
  overflow-y: auto;
  flex-grow: 1;
`;

const Footer = styled.div`
  padding: 15px 25px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: end;
  gap: 10px;
  background: #fff;
  position: sticky;
  bottom: 0;
`;

const SectionTitle = styled.h6`
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const UploadButton = styled.button`
  background-color: #e9ecef;
  border: 1px solid #ccc;
  padding: 6px 12px;
  margin-left: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #dde0e3;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const CustomSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  appearance: none;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: gray;
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 50px;
  color: #6c757d;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  background-color: ${(props) =>
    props.variant === "cancel" ? "#e2e6ea" : "#007bff"};
  color: ${(props) => (props.variant === "cancel" ? "#6c757d" : "white")};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.variant === "cancel" ? "#d1d5d8" : "#0069d9"};
  }
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const AddNewDriver = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    bloodGroup: "",
    mobileNumber: "",
    alternativeNumber: "",
    email: "",
    emergencyContact: "",
    currentAddress: "",
    permanentAddress: "",
    aadhaarNumber: "",
    panNumber: "",
    licenseNumber: "",
    referenceNumber: "",
    vehicleRegistration: "",
    category: "",
    policyNumber: "",
    certificateNumber: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankNameBranch: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleAddDriver = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.bloodGroup || formData.bloodGroup === "Select Blood Group")
      newErrors.bloodGroup = "Blood Group is required";

    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile Number is required";
    if (!formData.email.trim()) newErrors.email = "Email Address is required";
    if (!formData.currentAddress.trim())
      newErrors.currentAddress = "Current Address is required";
    if (!formData.permanentAddress.trim())
      newErrors.permanentAddress = "Permanent Address is required";

    if (!formData.aadhaarNumber.trim())
      newErrors.aadhaarNumber = "Aadhaar Number is required";
    if (!formData.panNumber.trim())
      newErrors.panNumber = "PAN Number is required";
    if (!formData.licenseNumber.trim())
      newErrors.licenseNumber = "License Number is required";

    if (!formData.vehicleRegistration.trim())
      newErrors.vehicleRegistration = "Vehicle Registration is required";
    if (!formData.category || formData.category === "Select Category")
      newErrors.category = "Category is required";
    if (!formData.policyNumber.trim())
      newErrors.policyNumber = "Policy Number is required";
    if (!formData.certificateNumber.trim())
      newErrors.certificateNumber = "Certificate Number is required";

    if (!formData.accountHolderName.trim())
      newErrors.accountHolderName = "Account Holder Name is required";
    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "Account Number is required";
    if (!formData.ifscCode.trim()) newErrors.ifscCode = "IFSC Code is required";
    if (!formData.bankNameBranch.trim())
      newErrors.bankNameBranch = "Bank Name & Branch is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Driver added successfully!");
      onClose();
    } else {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField)
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <OuterContainer>
      <Header>
        <h5 style={{ fontSize: "24px", fontWeight: 600 }} className="mb-2">
          Add New Driver
        </h5>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
      </Header>

      <ScrollableBody>
        <SectionTitle>Personal Information</SectionTitle>
        <div className="row g-3">
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                hasError={!!errors.fullName}
                data-error={!!errors.fullName}
              />
              {errors.fullName && <ErrorMsg>{errors.fullName}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                hasError={!!errors.dob}
                data-error={!!errors.dob}
              />
              {errors.dob && <ErrorMsg>{errors.dob}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <SelectWrapper>
                <CustomSelect
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  hasError={!!errors.bloodGroup}
                  data-error={!!errors.bloodGroup}
                >
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </CustomSelect>
                <SelectIcon>
                  <FaChevronDown />
                </SelectIcon>
              </SelectWrapper>
              {errors.bloodGroup && <ErrorMsg>{errors.bloodGroup}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6 d-flex align-items-center gap-3">
            <ProfileIcon />
            <UploadButton>
              <FaUpload className="me-2" /> Upload Photo
            </UploadButton>
          </div>
        </div>

        <SectionTitle>Contact Information</SectionTitle>
        <div className="row g-3">
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                hasError={!!errors.mobileNumber}
                data-error={!!errors.mobileNumber}
              />
              {errors.mobileNumber && (
                <ErrorMsg>{errors.mobileNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="alternativeNumber"
                placeholder="Alternative Number"
                value={formData.alternativeNumber}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                hasError={!!errors.email}
                data-error={!!errors.email}
              />
              {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="emergencyContact"
                placeholder="Emergency Contact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
        </div>

        <SectionTitle>Address Details</SectionTitle>
        <div className="row g-3">
          <div className="col-12">
            <FormGroup>
              <TextArea
                rows="2"
                name="currentAddress"
                placeholder="Current Address"
                value={formData.currentAddress}
                onChange={handleChange}
                hasError={!!errors.currentAddress}
                data-error={!!errors.currentAddress}
              />
              {errors.currentAddress && (
                <ErrorMsg>{errors.currentAddress}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-12">
            <FormGroup>
              <TextArea
                rows="2"
                name="permanentAddress"
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                hasError={!!errors.permanentAddress}
                data-error={!!errors.permanentAddress}
              />
              {errors.permanentAddress && (
                <ErrorMsg>{errors.permanentAddress}</ErrorMsg>
              )}
            </FormGroup>
          </div>
        </div>

        <SectionTitle>KYC Documents</SectionTitle>
        <div className="row g-3">
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="aadhaarNumber"
                  placeholder="Aadhaar Number"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  hasError={!!errors.aadhaarNumber}
                  data-error={!!errors.aadhaarNumber}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
              {errors.aadhaarNumber && (
                <ErrorMsg>{errors.aadhaarNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="panNumber"
                  placeholder="PAN Number"
                  value={formData.panNumber}
                  onChange={handleChange}
                  hasError={!!errors.panNumber}
                  data-error={!!errors.panNumber}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
              {errors.panNumber && <ErrorMsg>{errors.panNumber}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="licenseNumber"
                  placeholder="License Number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  hasError={!!errors.licenseNumber}
                  data-error={!!errors.licenseNumber}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
              {errors.licenseNumber && (
                <ErrorMsg>{errors.licenseNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="referenceNumber"
                  placeholder="Reference Number"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
            </FormGroup>
          </div>
        </div>

        <SectionTitle>Vehicle Information</SectionTitle>
        <div className="row g-3">
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="vehicleRegistration"
                placeholder="Vehicle Registration"
                value={formData.vehicleRegistration}
                onChange={handleChange}
                hasError={!!errors.vehicleRegistration}
                data-error={!!errors.vehicleRegistration}
              />
              {errors.vehicleRegistration && (
                <ErrorMsg>{errors.vehicleRegistration}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <SelectWrapper>
                <CustomSelect
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  hasError={!!errors.category}
                  data-error={!!errors.category}
                >
                  <option>Select Category</option>
                  <option>Mini</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                </CustomSelect>
                <SelectIcon>
                  <FaChevronDown />
                </SelectIcon>
              </SelectWrapper>
              {errors.category && <ErrorMsg>{errors.category}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="policyNumber"
                  placeholder="Policy Number"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  hasError={!!errors.policyNumber}
                  data-error={!!errors.policyNumber}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
              {errors.policyNumber && (
                <ErrorMsg>{errors.policyNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <div className="d-flex">
                <Input
                  type="text"
                  name="certificateNumber"
                  placeholder="Certificate Number"
                  value={formData.certificateNumber}
                  onChange={handleChange}
                  hasError={!!errors.certificateNumber}
                  data-error={!!errors.certificateNumber}
                />
                <UploadButton>
                  <FaUpload className="me-1" /> Upload
                </UploadButton>
              </div>
              {errors.certificateNumber && (
                <ErrorMsg>{errors.certificateNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
        </div>

        <SectionTitle>Bank Account Details</SectionTitle>
        <div className="row g-3">
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="accountHolderName"
                placeholder="Account Holder Name"
                value={formData.accountHolderName}
                onChange={handleChange}
                hasError={!!errors.accountHolderName}
                data-error={!!errors.accountHolderName}
              />
              {errors.accountHolderName && (
                <ErrorMsg>{errors.accountHolderName}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={handleChange}
                hasError={!!errors.accountNumber}
                data-error={!!errors.accountNumber}
              />
              {errors.accountNumber && (
                <ErrorMsg>{errors.accountNumber}</ErrorMsg>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="ifscCode"
                placeholder="IFSC Code"
                value={formData.ifscCode}
                onChange={handleChange}
                hasError={!!errors.ifscCode}
                data-error={!!errors.ifscCode}
              />
              {errors.ifscCode && <ErrorMsg>{errors.ifscCode}</ErrorMsg>}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Input
                type="text"
                name="bankNameBranch"
                placeholder="Bank Name & Branch"
                value={formData.bankNameBranch}
                onChange={handleChange}
                hasError={!!errors.bankNameBranch}
                data-error={!!errors.bankNameBranch}
              />
              {errors.bankNameBranch && (
                <ErrorMsg>{errors.bankNameBranch}</ErrorMsg>
              )}
            </FormGroup>
          </div>
        </div>
      </ScrollableBody>

      <Footer>
        <Button variant="cancel" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleAddDriver}>Add Driver</Button>
      </Footer>
    </OuterContainer>
  );
};

export default AddNewDriver;
