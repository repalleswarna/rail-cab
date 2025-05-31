// InvoiceForm.js
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaCalendarAlt, FaUpload } from "react-icons/fa";

const Container = styled.div`
  background-color: #f9fafb;
  padding: 40px;
  min-height: 100vh;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 30px;
  max-width: 700px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const FormContent = styled.div`
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  margin-top: 20px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
  color: #111827;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #374151;
`;

const Input = styled.input`
  padding: 10px 1px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  width: 100%;
  font-size: 14px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

const Textarea = styled.textarea`
  padding: 10px 1px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  width: 100%;
  font-size: 14px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  width: 100%;
  font-size: 14px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

const FileInputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FileUploadButton = styled.label`
  background: #f3f4f6;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px dashed #d1d5db;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &.cancel {
    background: #f3f4f6;
    color: #111827;
  }

  &.draft {
    background: #e0e7ff;
    color: #1e3a8a;
  }

  &.generate {
    background: #2563eb;
    color: white;
  }
`;

const InvoiceForm = () => {
  const [form, setForm] = useState({
    invoiceId: "",
    invoiceDate: "",
    invoiceType: "",
    paymentTerms: "",
    userName: "",
    gstNumber: "",
    address: "",
    baseAmount: "",
    gstRate: "",
    notes: "",
    addfiles: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: false });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) newErrors[key] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    alert("Form is valid. Proceeding with save...");
    // Add save logic here
  };

  return (
    <Container>
      <FormWrapper>
        <SectionTitle>Generate Invoice</SectionTitle>
        <FormContent>
          {/* Basic Details */}
          <SectionTitle as="h5">Basic Details</SectionTitle>
          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Invoice ID</Label>
              <Input type="text" value="INV-2025003" readOnly />
            </div>
            <div style={{ flex: 1 }}>
              <Label>Invoice Date</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={form.invoiceDate}
                  onChange={handleChange("invoiceDate")}
                  hasError={errors.invoiceDate}
                />
                <FaCalendarAlt
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 12,
                    color: "#9ca3af",
                  }}
                />
              </div>
            </div>
          </FormRow>

          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Invoice Type</Label>
              <Select
                value={form.invoiceType}
                onChange={handleChange("invoiceType")}
                hasError={errors.invoiceType}
              >
                <option value="">Select type</option>
                <option>Vendor Invoice</option>
                <option>Customer Invoice</option>
              </Select>
            </div>
            <div style={{ flex: 1 }}>
              <Label>Payment Terms</Label>
              <Select
                value={form.paymentTerms}
                onChange={handleChange("paymentTerms")}
                hasError={errors.paymentTerms}
              >
                <option value="">Select terms</option>
                <option>Immediate</option>
                <option>Net 15</option>
                <option>Net 30</option>
              </Select>
            </div>
          </FormRow>
          <hr />

          {/* Entity Details */}
          <SectionTitle as="h5">Entity Details</SectionTitle>
          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Vendor/User Name</Label>
              <Input
                type="text"
                value={form.userName}
                onChange={handleChange("userName")}
                hasError={errors.userName}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label>GST Number</Label>
              <Input
                type="text"
                value={form.gstNumber}
                onChange={handleChange("gstNumber")}
                hasError={errors.gstNumber}
              />
            </div>
          </FormRow>
          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Address</Label>
              <Textarea
                rows="2"
                value={form.address}
                onChange={handleChange("address")}
                hasError={errors.address}
              />
            </div>
          </FormRow>
          <hr />

          {/* Amount Details */}
          <SectionTitle as="h5">Amount Details</SectionTitle>
          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Base Amount</Label>
              <Input
                type="number"
                value={form.baseAmount}
                onChange={handleChange("baseAmount")}
                hasError={errors.baseAmount}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label>GST Rate (%)</Label>
              <Select
                value={form.gstRate}
                onChange={handleChange("gstRate")}
                hasError={errors.gstRate}
              >
                <option value="">Select rate</option>
                <option>0%</option>
                <option>5%</option>
                <option>12%</option>
                <option>18%</option>
                <option>28%</option>
              </Select>
            </div>
          </FormRow>

          {/* Additional Details */}
          <SectionTitle as="h5">Additional Details</SectionTitle>
          <FormRow>
            <div style={{ flex: 1 }}>
              <Label>Notes</Label>
              <Textarea
                rows="3"
                value={form.notes}
                onChange={handleChange("notes")}
                hasError={errors.notes}
              />
            </div>
          </FormRow>

          {/* Attachments */}
          <Label>Attachments</Label>
          <FileInputContainer>
            <FileUploadButton htmlFor="file-upload">
              <FaUpload /> Add Files
            </FileUploadButton>
            <span style={{ fontSize: "13px", color: "#6b7280" }}>
              Maximum file size: 5MB
            </span>
            <input id="file-upload" type="file" style={{ display: "none" }} />
          </FileInputContainer>

          {/* Buttons */}
          <ButtonGroup>
            <Button className="cancel">Cancel</Button>
            <Button className="draft">Save as Draft</Button>
            <Button className="generate" onClick={handleSave}>
              Generate Invoice
            </Button>
          </ButtonGroup>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default InvoiceForm;
