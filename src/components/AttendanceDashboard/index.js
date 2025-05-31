import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUserCheck,
  FaUserTimes,
  FaUmbrellaBeach,
  FaClock,
} from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const Container = styled.div`
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
  background-color: whitesmoke;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

const LeftHeader = styled.h3`
  margin: 0;
  font-weight: 600;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NameTag = styled.div`
  font-weight: 500;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const DashboardHeader = styled.h5`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ControlBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 2rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: #333;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
`;

const IconCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#e0e0e0"};
  color: white;
`;

const Calendar = styled.div`
  background-color: #fff;
  padding: 0rem;
`;

const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 500;
`;

const DayCell = styled.div`
  padding: 1rem;
  align-items: start;
  min-height: 120px;
  background-color: ${({ isToday }) => (isToday ? "#e8fbe8" : "#fff")};
  border-radius: ${({ isToday }) => (isToday ? "8px" : "0")};
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tag = styled.span`
  background-color: #d4f5d4;
  color: #1c7c1c;
  padding: 6px 10px;
  font-size: 0.75rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 5px;
`;

const AttendanceDashboard = () => {
  return (
    <Container>
      {/* Top Header Section */}

      {/* Control Bar */}
      <ControlBar>
        <select
          style={{ fontSize: "18px", width: "19%" }}
          className="form-select"
        >
          <option>All Departments</option>
        </select>

        <select
          style={{ fontSize: "18px", width: "19%" }}
          className="form-select"
        >
          <option>May 2025</option>
        </select>

        <input
          style={{ fontSize: "18px", width: "19%" }}
          className="form-control"
          type="search"
          placeholder="Search employee..."
        />

        <button
          style={{ fontSize: "18px", width: "19%" }}
          className="btn btn-outline-secondary"
        >
          Manage Shifts
        </button>

        <button
          style={{ fontSize: "18px", width: "19%" }}
          className="btn btn-primary"
        >
          Mark Attendance
        </button>
      </ControlBar>

      {/* Stats */}
      <div className="row g-3">
        <div className="col-md-3">
          <StatCard>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Total Present</div>
                <h4>156</h4>
                <small className="text-success">+12% from last month</small>
              </div>
              <IconCircle bg="#e6f4ea">
                <FaUserCheck size={25} color="green" />
              </IconCircle>
            </div>
          </StatCard>
        </div>

        <div className="col-md-3">
          <StatCard>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Absences</div>
                <h4>8</h4>
                <small className="text-danger">-3% from last month</small>
              </div>
              <IconCircle bg="#fcebea">
                <FaUserTimes size={25} color="red" />
              </IconCircle>
            </div>
          </StatCard>
        </div>

        <div className="col-md-3">
          <StatCard>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>On Leave</div>
                <h4>12</h4>
                <small className="text-warning">+2% from last month</small>
              </div>
              <IconCircle bg="#fff4e5">
                <FaUmbrellaBeach size={26} color="orange" />
              </IconCircle>
            </div>
          </StatCard>
        </div>

        <div className="col-md-3">
          <StatCard>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Late Arrivals</div>
                <h4>23</h4>
                <small className="text-warning">+5% from last month</small>
              </div>
              <IconCircle bg="#fdf2e9">
                <FaClock size={26} color="yellow" />
              </IconCircle>
            </div>
          </StatCard>
        </div>
      </div>

      {/* Calendar */}
      <Calendar>
        <WeekRow className="mt-4 mb-2 days">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </WeekRow>
        <WeekRow>
          <DayCell
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10%",
              width: "190px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              margin: "15px",
            }}
          >
            30
          </DayCell>
          <DayCell isToday>
            1<Tag>Present</Tag>
          </DayCell>
          <DayCell />
          <DayCell />
          <DayCell />
          <DayCell />
          <DayCell />
        </WeekRow>
      </Calendar>
    </Container>
  );
};

export default AttendanceDashboard;
