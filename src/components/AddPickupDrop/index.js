import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaClock, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

// Input style mixin
const InputStyles = css`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
  width: 100%;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  background: #fff;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  margin: 0;
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  font-size: 20px;
  color: #888;
  &:hover {
    color: #000;
  }
`;

const FormContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  max-width: 500px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  ${InputStyles}
`;

const Select = styled.select`
  ${InputStyles}
`;

const Notes = styled.textarea`
  ${InputStyles}
  resize: vertical;
  min-height: 80px;
  width: 186%;
  border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
`;

const TimeInputWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ isError }) => (isError ? "red" : "transparent")};
  border-radius: 6px;
  padding: 2px;
`;

const TimeInput = styled(Input)`
  padding-right: 30px;
`;

const TimeIcon = styled(FaClock)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const MapBox = styled.div`
  height: 350px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 14px;
  border: 1px dashed #ccc;
  margin-left: -70px;
`;

const MapIcon = styled(FaMapMarkerAlt)`
  font-size: 24px;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#007bff" : "#ccc")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  &:hover {
    opacity: 0.9;
  }
`;

const SmallFormRow = styled(FormRow)`
  max-width: 220px; // Adjust as needed
`;

const PickupDropPointForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    station: "",
    city: "",
    latitude: "",
    longitude: "",
    notes: "",
    pointType: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "name",
      "station",
      "city",
      "latitude",
      "longitude",
      "pointType",
      "startTime",
      "endTime",
      "notes",
    ];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      onClose(); // Close the form after successful submission
    }
  };

  const handleCancel = () => {
    // Optional: Add confirmation dialog before closing
    const shouldClose = window.confirm(
      "Are you sure you want to cancel? Your changes will not be saved."
    );
    if (shouldClose) {
      onClose();
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <Title>Add New Pickup/Drop Point</Title>
        <CloseIcon onClick={handleCancel} />
      </HeaderWrapper>

      <FormContent>
        <MainContent>
          <LeftSection>
            <FormRow>
              <Label>Point Name*</Label>
              <Input
                placeholder="Enter point name"
                value={form.name}
                isError={errors.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </FormRow>

            <FormRow>
              <Label>Station*</Label>
              <Select
                value={form.station}
                isError={errors.station}
                onChange={(e) => handleChange("station", e.target.value)}
              >
                <option value="">Select Station</option>
                <option value="Station 1">Station 1</option>
              </Select>
            </FormRow>

            <FormRow>
              <Label>City*</Label>
              <Select
                value={form.city}
                isError={errors.city}
                onChange={(e) => handleChange("city", e.target.value)}
              >
                <option value="">Select City</option>
                <option value="City 1">City 1</option>
              </Select>
            </FormRow>

            <FormRow>
              <Label>Point Type*</Label>
              <RadioGroup>
                {["Pickup Point", "Drop Point", "Both"].map((label) => (
                  <label key={label}>
                    <input
                      type="radio"
                      name="pointType"
                      value={label}
                      checked={form.pointType === label}
                      onChange={(e) =>
                        handleChange("pointType", e.target.value)
                      }
                    />{" "}
                    {label}
                  </label>
                ))}
              </RadioGroup>
              {errors.pointType && (
                <span style={{ color: "red", fontSize: "13px" }}>
                  Please select a point type
                </span>
              )}
            </FormRow>

            <GridTwo>
              <SmallFormRow>
                <Label>Start Time*</Label>
                <TimeInputWrapper isError={errors.startTime}>
                  <TimeInput
                    placeholder="--:-- --"
                    value={form.startTime}
                    onChange={(e) => handleChange("startTime", e.target.value)}
                  />
                  <TimeIcon />
                </TimeInputWrapper>
              </SmallFormRow>
              <SmallFormRow>
                <Label>End Time*</Label>
                <TimeInputWrapper isError={errors.endTime}>
                  <TimeInput
                    placeholder="--:-- --"
                    value={form.endTime}
                    onChange={(e) => handleChange("endTime", e.target.value)}
                  />
                  <TimeIcon />
                </TimeInputWrapper>
              </SmallFormRow>
            </GridTwo>

            <GridTwo>
              <SmallFormRow>
                <Label>Latitude*</Label>
                <Input
                  placeholder="Latitude"
                  value={form.latitude}
                  isError={errors.latitude}
                  onChange={(e) => handleChange("latitude", e.target.value)}
                />
              </SmallFormRow>
              <SmallFormRow>
                <Label>Longitude*</Label>
                <Input
                  placeholder="Longitude"
                  value={form.longitude}
                  isError={errors.longitude}
                  onChange={(e) => handleChange("longitude", e.target.value)}
                />
              </SmallFormRow>
            </GridTwo>

            <FormRow>
              <Label>Additional Notes*</Label>
              <Notes
                placeholder="Enter any additional information about this point"
                value={form.notes}
                isError={errors.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
            </FormRow>
          </LeftSection>

          <RightSection>
            <Label>Location on Map</Label>
            <MapBox>
              <div style={{ textAlign: "center" }}>
                <MapIcon />
                <div>Drag marker to set location</div>
              </div>
            </MapBox>
          </RightSection>
        </MainContent>
      </FormContent>

      <ButtonGroup>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button primary onClick={handleSubmit}>
          Save Point
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default PickupDropPointForm;
