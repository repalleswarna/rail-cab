import React, { useState } from "react";
import styled from "styled-components";
import {
  FaBell,
  FaUserCircle,
  FaFileExcel,
  FaFilePdf,
  FaArrowUp,
  FaArrowDown,
  FaBalanceScale,
  FaArrowLeft,
} from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

// Grey background for whole screen
const PageWrapper = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 22px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const FilterSection = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const CustomDropdown = styled.button`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ced4da;
  background-color: #fff;
  border-radius: 4px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 0;
  border: 1px solid #ced4da;
  border-top: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  border-radius: 0 0 4px 4px;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const StatCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  min-height: 100px;
  position: relative;
`;

const StatTitle = styled.h6`
  font-weight: 600;
`;

const StatValue = styled.h5`
  font-weight: 700;
`;

const Change = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.positive ? "green" : "red")};
`;

const ChartCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  min-height: 200px;
  margin-bottom: 15px;
`;

const RecentExportContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

const ExportButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RecentTransactions = styled.div``;

const TableHeaderRow = styled.div`
  display: flex;
  font-weight: 600;
  padding: 5px 0;
  margin-bottom: 10px;
  gap: 20px;
  font-size: 14px;
  color: #333;
`;

const TransactionCard = styled.div`
  display: flex;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  gap: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

const TransactionItem = styled.div`
  flex: 1;
  font-size: 14px;
`;

const Tag = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  background-color: ${(props) =>
    props.type === "income" ? "#d1f7d1" : "#f8d7da"};
  color: ${(props) => (props.type === "income" ? "#198754" : "#dc3545")};
`;

const IconTopRight = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  color: ${(props) => props.color || "#007bff"};
`;

function BalanceSheet({ setActiveTab }) {
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [vendorOpen, setVendorOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState("Last 30 Days");
  const [selectedVendor, setSelectedVendor] = useState("All Vendors");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const handleBackToDashboard = () => {
    setActiveTab("dashboard");
  };

  return (
    <PageWrapper>
      <Container className="container-fluid">
        <FilterSection className="row">
          <div className="col-md-3 mb-3">
            <label>Date Range</label>
            <DropdownWrapper>
              <CustomDropdown onClick={() => setDateRangeOpen(!dateRangeOpen)}>
                {selectedDate} <MdOutlineKeyboardArrowDown />
              </CustomDropdown>
              {dateRangeOpen && (
                <DropdownList>
                  {[
                    "Today",
                    "Last 7 Days",
                    "Last 30 Days",
                    "This Month",
                    "Last Month",
                  ].map((option) => (
                    <DropdownItem
                      key={option}
                      onClick={() => {
                        setSelectedDate(option);
                        setDateRangeOpen(false);
                      }}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </DropdownWrapper>
          </div>

          <div className="col-md-3 mb-3">
            <label>Vendor</label>
            <DropdownWrapper>
              <CustomDropdown onClick={() => setVendorOpen(!vendorOpen)}>
                {selectedVendor} <MdOutlineKeyboardArrowDown />
              </CustomDropdown>
              {vendorOpen && (
                <DropdownList>
                  {[
                    "All Vendors",
                    "ABC Cabs Ltd",
                    "XYZ Transport",
                    "LMN Auto Services",
                  ].map((vendor) => (
                    <DropdownItem
                      key={vendor}
                      onClick={() => {
                        setSelectedVendor(vendor);
                        setVendorOpen(false);
                      }}
                    >
                      {vendor}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </DropdownWrapper>
          </div>

          <div className="col-md-3 mb-3">
            <label>Location</label>
            <DropdownWrapper>
              <CustomDropdown onClick={() => setLocationOpen(!locationOpen)}>
                {selectedLocation} <MdOutlineKeyboardArrowDown />
              </CustomDropdown>
              {locationOpen && (
                <DropdownList>
                  {["All Locations", "Mumbai", "Delhi", "Bangalore"].map(
                    (loc) => (
                      <DropdownItem
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                        }}
                      >
                        {loc}
                      </DropdownItem>
                    )
                  )}
                </DropdownList>
              )}
            </DropdownWrapper>
          </div>

          <div className="col-md-3 mb-3 d-flex align-items-end">
            <button className="btn btn-primary w-100">Apply Filters</button>
          </div>
        </FilterSection>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <StatCard>
              <IconTopRight color="green">
                <FaArrowTrendUp />
              </IconTopRight>
              <StatTitle>Total Income</StatTitle>
              <StatValue>
                ₹12,45,678{" "}
                <Change positive>
                  <FaArrowUp /> +8.2%
                </Change>
              </StatValue>
            </StatCard>
          </div>
          <div className="col-md-4 mb-3">
            <StatCard>
              <IconTopRight color="red">
                <FaArrowTrendDown />
              </IconTopRight>
              <StatTitle>Total Expenses</StatTitle>
              <StatValue>
                ₹8,32,456{" "}
                <Change>
                  <FaArrowDown /> -3.4%
                </Change>
              </StatValue>
            </StatCard>
          </div>
          <div className="col-md-4 mb-3">
            <StatCard>
              <IconTopRight color="#007bff">
                <FaBalanceScale />
              </IconTopRight>
              <StatTitle>Net Balance</StatTitle>
              <StatValue>
                ₹4,13,222{" "}
                <Change positive>
                  <FaArrowUp /> +12.5%
                </Change>
              </StatValue>
            </StatCard>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <ChartCard>
              <h6>Balance Trend</h6>
              <div style={{ height: "140px" }} />
            </ChartCard>
          </div>
          <div className="col-md-6">
            <ChartCard>
              <h6>Income vs Expenses</h6>
              <div style={{ height: "140px" }} />
            </ChartCard>
          </div>
        </div>

        <RecentExportContainer>
          <h6 className="m-0">Recent Transactions</h6>
          <ExportButtons>
            <button className="btn btn-outline-secondary">
              <FaFileExcel className="me-1" /> Export Excel
            </button>
            <button className="btn btn-outline-secondary">
              <FaFilePdf className="me-1" /> Export PDF
            </button>
          </ExportButtons>
        </RecentExportContainer>

        <RecentTransactions>
          <TableHeaderRow>
            <div style={{ flex: 1 }}>Date</div>
            <div style={{ flex: 1 }}>Type</div>
            <div style={{ flex: 1 }}>Party</div>
            <div style={{ flex: 1 }}>Amount</div>
            <div style={{ flex: 1 }}>Description</div>
          </TableHeaderRow>

          <TransactionCard>
            <TransactionItem>15 May 2025</TransactionItem>
            <TransactionItem>
              <Tag type="income">Income</Tag>
            </TransactionItem>
            <TransactionItem>ABC Cabs Ltd</TransactionItem>
            <TransactionItem style={{ color: "green" }}>
              +₹24,500
            </TransactionItem>
            <TransactionItem>Monthly Commission</TransactionItem>
          </TransactionCard>

          <TransactionCard>
            <TransactionItem>14 May 2025</TransactionItem>
            <TransactionItem>
              <Tag type="expense">Expense</Tag>
            </TransactionItem>
            <TransactionItem>XYZ Transport</TransactionItem>
            <TransactionItem style={{ color: "red" }}>-₹12,800</TransactionItem>
            <TransactionItem>Vehicle Maintenance</TransactionItem>
          </TransactionCard>
        </RecentTransactions>
      </Container>
    </PageWrapper>
  );
}

export default BalanceSheet;
