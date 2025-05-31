import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const Container = styled.div`
  background: #fff;
  padding: 0;
  border-radius: 10px;
  max-width: 800px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow from leaking out */
`;

const Header = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  flex-shrink: 0;
`;

const Title = styled.h5`
  font-weight: 640;
  font-size: 1.6rem;
  margin: 0;
`;

const ScrollableForm = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 2rem;
  min-height: 0;
`;

const Footer = styled.div`
  padding: 1rem 2rem;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: white;
  flex-shrink: 0;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  border-radius: 5px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.5rem;
`;

const RedAsterisk = styled.span`
  color: red;
`;

const BluePlusButton = styled.button`
  color: blue !important;
  border-color: #6c757d;
  background-color: transparent;
`;

function AddNewStation({ onClose }) {
  const [formData, setFormData] = useState({
    stationName: "",
    city: "",
    pickupPoint: "",
    locationDetails: "",
    category: "",
    platforms: "",
    openingTime: "",
    closingTime: "",
    contactNumber: "",
    manager: "",
    isActive: true,
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      "stationName",
      "city",
      "pickupPoint",
      "locationDetails",
      "category",
      "platforms",
      "openingTime",
      "closingTime",
      "contactNumber",
      "manager",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Station saved successfully!");
      if (onClose) onClose();
    }
  };

  const handleCancel = (onClick) => {
    if (onClose) onClose();
  };

  return (
    <Container>
      <Header>
        <Title>Add New Station</Title>

        <button
          className="btn-close"
          aria-label="Close"
          onClick={handleCancel}
        ></button>
      </Header>

      <ScrollableForm>
        <Form onSubmit={handleSave}>
          <div className="row g-3">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Station Name <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="stationName"
                  value={formData.stationName}
                  onChange={handleChange}
                  placeholder="Enter Station Name"
                  className={errors.stationName ? "is-invalid" : ""}
                />
                {errors.stationName && (
                  <div className="invalid-feedback">{errors.stationName}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  City <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? "is-invalid" : ""}
                >
                  <option value="">Select City</option>
                  <option value="City A">City A</option>
                  <option value="City B">City B</option>
                  <option value="City C">City C</option>
                </Form.Select>
                {errors.city && (
                  <div className="invalid-feedback">{errors.city}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Pickup Points <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="pickupPoint"
                  value={formData.pickupPoint}
                  onChange={handleChange}
                  placeholder="Point Name"
                  className={errors.pickupPoint ? "is-invalid" : ""}
                />
                {errors.pickupPoint && (
                  <div className="invalid-feedback">{errors.pickupPoint}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-5">
              <Form.Group>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  type="text"
                  name="locationDetails"
                  value={formData.locationDetails}
                  onChange={handleChange}
                  placeholder="Location Details"
                  className={errors.locationDetails ? "is-invalid" : ""}
                />
                {errors.locationDetails && (
                  <div className="invalid-feedback">
                    {errors.locationDetails}
                  </div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-1 d-flex align-items-end">
              <BluePlusButton
                type="button"
                className="btn btn-outline-secondary w-100"
              >
                +
              </BluePlusButton>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Station Category <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? "is-invalid" : ""}
                >
                  <option value="">Select Category</option>
                  <option value="Category A">Category A</option>
                  <option value="Category B">Category B</option>
                  <option value="Category C">Category C</option>
                </Form.Select>
                {errors.category && (
                  <div className="invalid-feedback">{errors.category}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Number of Platforms <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="platforms"
                  value={formData.platforms}
                  onChange={handleChange}
                  placeholder="Enter number"
                  className={errors.platforms ? "is-invalid" : ""}
                />
                {errors.platforms && (
                  <div className="invalid-feedback">{errors.platforms}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Opening Time <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="time"
                  name="openingTime"
                  value={formData.openingTime}
                  onChange={handleChange}
                  className={errors.openingTime ? "is-invalid" : ""}
                />
                {errors.openingTime && (
                  <div className="invalid-feedback">{errors.openingTime}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Closing Time <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="time"
                  name="closingTime"
                  value={formData.closingTime}
                  onChange={handleChange}
                  className={errors.closingTime ? "is-invalid" : ""}
                />
                {errors.closingTime && (
                  <div className="invalid-feedback">{errors.closingTime}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Station Contact Number <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter number"
                  className={errors.contactNumber ? "is-invalid" : ""}
                />
                {errors.contactNumber && (
                  <div className="invalid-feedback">{errors.contactNumber}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group>
                <Form.Label>
                  Station Manager <RedAsterisk>*</RedAsterisk>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="manager"
                  value={formData.manager}
                  onChange={handleChange}
                  placeholder="Manager Name"
                  className={errors.manager ? "is-invalid" : ""}
                />
                {errors.manager && (
                  <div className="invalid-feedback">{errors.manager}</div>
                )}
              </Form.Group>
            </div>

            <div className="col-md-12">
              <ToggleWrapper className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="activeToggle"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="activeToggle">
                  Station Active
                </label>
              </ToggleWrapper>
            </div>

            <div className="col-md-12">
              <Form.Group>
                <Form.Label>Additional Notes</Form.Label>
                <TextArea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </ScrollableForm>

      <Footer>
        <Button variant="light" onClick={handleCancel}>
          Cancel
        </Button>
        <StyledButton type="submit" variant="primary" onClick={handleSave}>
          Save Station
        </StyledButton>
      </Footer>
    </Container>
  );
}

export default AddNewStation;
