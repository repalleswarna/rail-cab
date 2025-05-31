import React, { useState } from "react";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const PageWrapper = styled.div`
  max-width: 950px;
  height: 90vh;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
`;

const HeaderContainer = styled.div`
  padding: 20px 30px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: white;
`;

const FormContainer = styled.div`
  padding: 30px;
  overflow-y: auto;
  flex-grow: 1;
`;

const Title = styled.h5`
  font-weight: bold;
  margin: 0;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
`;

const TimeInput = styled(Input)`
  text-align: center;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

const AddStop = styled.div`
  display: flex;
  align-items: center;
  color: #0d6efd;
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px -3px 5px #ccc;
  flex-shrink: 0;
  background: white;
`;

const Button = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
`;

const CancelButton = styled(Button)`
  background: #f0f0f0;
  color: #333;
`;

const AddButton = styled(Button)`
  background: #0d6efd;
  color: white;
`;

const RouteStopsContainer = styled.div`
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h6`
  font-weight: 600;
  margin-bottom: 20px;
`;

const AddNewTrain = ({ onClose }) => {
  const [form, setForm] = useState({
    trainName: "",
    trainId: "",
    source: "",
    sourceStation: "",
    destination: "",
    destinationStation: "",
    departure: "",
    arrival: "",
    status: "Active",
  });

  const [routeStops, setRouteStops] = useState([
    { station: "", arrival: "", departure: "" },
  ]);

  const [errors, setErrors] = useState({});
  const [stopErrors, setStopErrors] = useState([]);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleStopChange = (index, field, value) => {
    const updatedStops = [...routeStops];
    updatedStops[index][field] = value;
    setRouteStops(updatedStops);

    const updatedStopErrors = [...stopErrors];
    if (!updatedStopErrors[index]) updatedStopErrors[index] = {};
    updatedStopErrors[index][field] = "";
    setStopErrors(updatedStopErrors);
  };

  const addStop = () => {
    setRouteStops([...routeStops, { station: "", arrival: "", departure: "" }]);
    setStopErrors([...stopErrors, {}]);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "trainName",
      "trainId",
      "source",
      "sourceStation",
      "destination",
      "destinationStation",
      "departure",
      "arrival",
    ];

    requiredFields.forEach((field) => {
      if (!form[field]) {
        newErrors[field] = "This field is required";
      }
    });

    const newStopErrors = routeStops.map((stop) => {
      const stopError = {};
      if (!stop.station) stopError.station = "Required";
      if (!stop.arrival) stopError.arrival = "Required";
      if (!stop.departure) stopError.departure = "Required";
      return stopError;
    });

    setErrors(newErrors);
    setStopErrors(newStopErrors);

    return (
      Object.keys(newErrors).length === 0 &&
      newStopErrors.every((stop) => Object.keys(stop).length === 0)
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitting:", form, routeStops);
      // Submit logic here
    }
  };

  return (
    <PageWrapper>
      <HeaderContainer>
        <Title>Add New Train</Title>
        <FaTimesCircle
          size={22}
          style={{ cursor: "pointer" }}
          onClick={onClose}
        />
      </HeaderContainer>

      <FormContainer>
        <div className="row g-3">
          <div className="col-md-6">
            <Label>Train Name</Label>
            <Input
              type="text"
              value={form.trainName}
              onChange={(e) => handleChange("trainName", e.target.value)}
              error={errors.trainName}
            />
            {errors.trainName && <ErrorText>{errors.trainName}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Train ID</Label>
            <Input
              type="text"
              value={form.trainId}
              onChange={(e) => handleChange("trainId", e.target.value)}
              error={errors.trainId}
            />
            {errors.trainId && <ErrorText>{errors.trainId}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Source</Label>
            <Input
              type="text"
              value={form.source}
              onChange={(e) => handleChange("source", e.target.value)}
              error={errors.source}
            />
            {errors.source && <ErrorText>{errors.source}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Source Station</Label>
            <Input
              type="text"
              value={form.sourceStation}
              onChange={(e) => handleChange("sourceStation", e.target.value)}
              error={errors.sourceStation}
            />
            {errors.sourceStation && (
              <ErrorText>{errors.sourceStation}</ErrorText>
            )}
          </div>
          <div className="col-md-6">
            <Label>Destination</Label>
            <Input
              type="text"
              value={form.destination}
              onChange={(e) => handleChange("destination", e.target.value)}
              error={errors.destination}
            />
            {errors.destination && <ErrorText>{errors.destination}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Destination Station</Label>
            <Input
              type="text"
              value={form.destinationStation}
              onChange={(e) =>
                handleChange("destinationStation", e.target.value)
              }
              error={errors.destinationStation}
            />
            {errors.destinationStation && (
              <ErrorText>{errors.destinationStation}</ErrorText>
            )}
          </div>
          <div className="col-md-6">
            <Label>Departure Time</Label>
            <TimeInput
              type="time"
              value={form.departure}
              onChange={(e) => handleChange("departure", e.target.value)}
              error={errors.departure}
            />
            {errors.departure && <ErrorText>{errors.departure}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Arrival Time</Label>
            <TimeInput
              type="time"
              value={form.arrival}
              onChange={(e) => handleChange("arrival", e.target.value)}
              error={errors.arrival}
            />
            {errors.arrival && <ErrorText>{errors.arrival}</ErrorText>}
          </div>
          <div className="col-md-6">
            <Label>Status</Label>
            <Select
              value={form.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Cancelled">Cancelled</option>
            </Select>
          </div>
        </div>

        <RouteStopsContainer>
          <SectionTitle>Route Stops</SectionTitle>
          {routeStops.map((stop, index) => (
            <div className="row g-3 mb-3" key={index}>
              <div className="col-md-4">
                <Label>Station</Label>
                <Input
                  type="text"
                  value={stop.station}
                  onChange={(e) =>
                    handleStopChange(index, "station", e.target.value)
                  }
                  error={stopErrors[index]?.station}
                />
                {stopErrors[index]?.station && (
                  <ErrorText>{stopErrors[index].station}</ErrorText>
                )}
              </div>
              <div className="col-md-4">
                <Label>Arrival Time</Label>
                <TimeInput
                  type="time"
                  value={stop.arrival}
                  onChange={(e) =>
                    handleStopChange(index, "arrival", e.target.value)
                  }
                  error={stopErrors[index]?.arrival}
                />
                {stopErrors[index]?.arrival && (
                  <ErrorText>{stopErrors[index].arrival}</ErrorText>
                )}
              </div>
              <div className="col-md-4">
                <Label>Departure Time</Label>
                <TimeInput
                  type="time"
                  value={stop.departure}
                  onChange={(e) =>
                    handleStopChange(index, "departure", e.target.value)
                  }
                  error={stopErrors[index]?.departure}
                />
                {stopErrors[index]?.departure && (
                  <ErrorText>{stopErrors[index].departure}</ErrorText>
                )}
              </div>
            </div>
          ))}
          <AddStop onClick={addStop}>+ Add Stop</AddStop>
        </RouteStopsContainer>
      </FormContainer>

      <Footer>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <AddButton onClick={handleSubmit}>Add Train</AddButton>
      </Footer>
    </PageWrapper>
  );
};

export default AddNewTrain;
