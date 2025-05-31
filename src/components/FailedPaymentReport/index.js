import React from "react";
import styled from "styled-components";
import {
  FaExclamationTriangle,
  FaRedo,
  FaCalendarAlt,
  FaHandPaper,
  FaArrowDown,
} from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const Container = styled.div`
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 15px;
`;

const StatCard = styled.div`
  flex: 1 1 200px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  min-width: 150px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-size: 14px;
  color: #6c757d;
  display: flex;
  justify-content: space-between;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const RedText = styled.div`
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: 10px;
  }
`;

const GreenText = styled.div`
  color: green;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: 10px;
  }
`;

const HeaderRow = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const SelectWrapper = styled.select`
  background: white;
  border: 1px solid #ced4da;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-weight: bold;
  background: #f1f3f5;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 15px 20px;
  align-items: center;
  border-top: 1px solid #dee2e6;
`;

const RetryBtn = styled.button`
  background-color: #007bff;
  color: white;
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatusTag = styled.span`
  background-color: ${(props) => (props.failed ? "#f8d7da" : "#fff3cd")};
  color: ${(props) => (props.failed ? "#842029" : "#856404")};
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
`;

const ExportBtn = styled.button`
  background: black;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 10px;

  input {
    display: none;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #007bff;
  }

  input:checked + span:before {
    transform: translateX(20px);
  }
`;

const PendingButton = styled.button`
  background-color: #f8d7da;
  color: #842029;
  padding: 4px 10px;
  font-size: 13px;
  border-radius: 5px;
  border: none;
`;

function FailedPaymentReport() {
  return (
    <Container>
      {/* Stats Cards */}
      <Row>
        <StatCard>
          <CardTitle>
            Total Failures <FaExclamationTriangle color="red" />
          </CardTitle>
          <CardValue>2,458</CardValue>
          <RedText>
            <FaArrowDown /> 12% from last month
          </RedText>
        </StatCard>
        <StatCard>
          <CardTitle>
            Retry Success Rate <FaRedo color="green" />
          </CardTitle>
          <CardValue>76.2%</CardValue>
          <GreenText>
            <FaArrowDown style={{ transform: "rotate(180deg)" }} /> 3.5% from
            last week
          </GreenText>
        </StatCard>
        <StatCard>
          <CardTitle>
            Last 7 Days Failures <FaCalendarAlt />
          </CardTitle>
          <CardValue>342</CardValue>
          <div style={{ fontSize: "12px", color: "#6c757d" }}>
            Daily avg: 48.8
          </div>
        </StatCard>
        <StatCard>
          <CardTitle>
            Manual Actions Needed <FaHandPaper color="#f39c12" />
          </CardTitle>
          <CardValue>86</CardValue>
          <RedText>Requires immediate attention</RedText>
        </StatCard>
      </Row>

      {/* Filters & Export */}
      <HeaderRow>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            Failed Payment Reports
            <PendingButton>86 pending</PendingButton>
          </h5>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Auto Retry</span>
            <ToggleWrapper>
              <input type="checkbox" />
              <span></span>
            </ToggleWrapper>
            <ExportBtn>
              <FaArrowDown /> Export
            </ExportBtn>
          </div>
        </div>

        <FilterRow>
          <SelectWrapper>
            <option>mm/dd/yyyy</option>
            <option>05/01/2025</option>
            <option>05/15/2025</option>
            <option>05/20/2025</option>
          </SelectWrapper>
          <SelectWrapper>
            <option>All Payment Modes</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
          </SelectWrapper>
          <SelectWrapper>
            <option>All Retry Status</option>
            <option>Pending</option>
            <option>Failed</option>
            <option>Successful</option>
          </SelectWrapper>
        </FilterRow>
      </HeaderRow>

      {/* Table */}
      <TableContainer>
        <TableHeader>
          <div style={{ flex: 1 }}>Transaction ID</div>
          <div style={{ flex: 2 }}>User</div>
          <div style={{ flex: 1 }}>Amount</div>
          <div style={{ flex: 2 }}>Failure Reason</div>
          <div style={{ flex: 2 }}>Retry Status</div>
          <div style={{ flex: 1 }}>Actions</div>
          <div style={{ flex: 2 }}>Timestamp</div>
        </TableHeader>

        <TableRow>
          <div style={{ flex: 1 }}>#TXN25489</div>
          <div
            style={{
              flex: 2,
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.pravatar.cc/30?img=1"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <div>John Cooper</div>
              <div style={{ fontSize: "12px", color: "#6c757d" }}>
                john@example.com
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>₹2,499</div>
          <div style={{ flex: 2 }}>Insufficient Funds</div>
          <div style={{ flex: 2 }}>
            <StatusTag failed>3 Retries Failed</StatusTag>
          </div>
          <div style={{ flex: 1 }}>
            <RetryBtn>
              <FaRedo /> Retry
            </RetryBtn>
          </div>
          <div style={{ flex: 2 }}>2025-05-15 10:45 AM</div>
        </TableRow>

        <TableRow>
          <div style={{ flex: 1 }}>#TXN25488</div>
          <div
            style={{
              flex: 2,
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.pravatar.cc/30?img=2"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <div>Sarah Wilson</div>
              <div style={{ fontSize: "12px", color: "#6c757d" }}>
                sarah@example.com
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>₹1,899</div>
          <div style={{ flex: 2 }}>Gateway Timeout</div>
          <div style={{ flex: 2 }}>
            <StatusTag>Retry Pending</StatusTag>
          </div>
          <div style={{ flex: 1 }}>
            <RetryBtn>
              <FaRedo /> Retry
            </RetryBtn>
          </div>
          <div style={{ flex: 2 }}>2025-05-15 10:42 AM</div>
        </TableRow>
      </TableContainer>
    </Container>
  );
}

export default FailedPaymentReport;
