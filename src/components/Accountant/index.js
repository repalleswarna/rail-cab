import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Table, Badge } from "react-bootstrap";
import {
  BsPlusCircle,
  BsDashCircle,
  BsBarChart,
  BsReceipt,
  BsClock,
  BsDownload,
  BsCashStack,
  BsPieChart,
  BsCurrencyRupee,
  BsFileEarmarkMinus,
  BsCalendar2Event,
} from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

// Import your existing pages (assuming they exist)
import FinanceDashboard from "../FinanceDashboard";
import BalanceSheet from "../BalanceSheet";
import GeneralInvoice from "../GeneralInvoice";
import InvoiceManagement from "../InvoiceManagement";
import { BiArrowBack } from "react-icons/bi";

const CardBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

const IconWrapper = styled.div`
  background-color: ${(props) => props.bg || "transparent"};
  padding: 10px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "black"};
`;

const ActionButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  border: 1px solid #d9d9d9;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IncomeExpensesCardBox = styled(CardBox)``;

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  width: auto;
  background-color: white;
  z-index: 1030;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    left: 0;
    padding: 15px 20px;
  }
`;

const ScrollableContent = styled.div`
  margin-top: 60px;
  padding: 0 15px;
  height: calc(100vh - 140px);
  overflow-y: auto;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
  color: #0d6efd;
  &:hover {
    text-decoration: underline;
  }
`;

const Accountant = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            {/* Summary Cards */}
            <Row className="g-3 mb-4">
              <Col md={3} sm={6} xs={12}>
                <CardBox>
                  <HeaderRow>
                    <h6>Total Income</h6>
                    <IconWrapper bg="#d4edda">
                      <BsCurrencyRupee size={15} color="#155724" />
                    </IconWrapper>
                  </HeaderRow>
                  <h5 style={{ fontSize: "25px", fontWeight: 700 }}>₹2.8M</h5>
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      marginTop: "20px",
                      color: "green",
                    }}
                  >
                    ↑ 5% from last month
                  </h6>
                </CardBox>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <CardBox>
                  <HeaderRow>
                    <h6>Total Expenses</h6>
                    <IconWrapper bg="#f8d7da">
                      <BsFileEarmarkMinus size={15} color="#721c24" />
                    </IconWrapper>
                  </HeaderRow>
                  <h5 style={{ fontSize: "25px", fontWeight: 700 }}>₹1.4M</h5>
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      marginTop: "20px",
                      color: "red",
                    }}
                  >
                    ↑ 8% from last month
                  </h6>
                </CardBox>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <CardBox>
                  <HeaderRow>
                    <h6>Pending Invoices</h6>
                    <IconWrapper bg="#fff3cd">
                      <BsClock size={15} color="#856404" />
                    </IconWrapper>
                  </HeaderRow>
                  <h5 style={{ fontSize: "25px", fontWeight: 700 }}>32</h5>
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      marginTop: "20px",
                      color: "orange",
                    }}
                  >
                    2% from last month
                  </h6>
                </CardBox>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <CardBox>
                  <HeaderRow>
                    <h6>Tax Due</h6>
                    <IconWrapper bg="#f3e6ff">
                      <BsCalendar2Event size={15} color="#6f42c1" />
                    </IconWrapper>
                  </HeaderRow>
                  <h5 style={{ fontSize: "25px", fontWeight: 700 }}>₹280K</h5>
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: 650,
                      marginTop: "20px",
                      color: "blue",
                    }}
                  >
                    Due in 15 days
                  </h6>
                </CardBox>
              </Col>
            </Row>

            {/* Main Function Blocks */}
            <Row className="g-3 mb-4">
              {/* Income & Expenses */}
              <Col md={4}>
                <IncomeExpensesCardBox>
                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "25px",
                    }}
                  >
                    Income & Expenses
                  </h6>

                  <ActionButton variant="income">
                    <ButtonContent>
                      <IconWrapper bg="#d4edda" color="#155724">
                        <BsPlusCircle size={12} />
                      </IconWrapper>
                      Add Income Entry
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>

                  <ActionButton variant="expense">
                    <ButtonContent>
                      <IconWrapper bg="#f8d7da" color="#721c24">
                        <BsDashCircle size={12} />
                      </IconWrapper>
                      Add Expense Entry
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>

                  <ActionButton variant="report">
                    <ButtonContent>
                      <IconWrapper bg="#d1ecf1" color="#0c5460">
                        <BsBarChart size={12} />
                      </IconWrapper>
                      View Reports
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>
                </IncomeExpensesCardBox>
              </Col>

              {/* Invoice Management */}
              <Col md={4}>
                <CardBox
                  onClick={() => setActiveTab("invoiceManagement")}
                  style={{ cursor: "pointer" }}
                >
                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "25px",
                    }}
                  >
                    Invoice Management
                  </h6>

                  <ActionButton
                    variant="outline-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab("generalInvoice");
                    }}
                  >
                    <ButtonContent>
                      <IconWrapper bg="#d4edda" color="#155724">
                        <BsReceipt size={12} />
                      </IconWrapper>
                      <span>Generate Invoice</span>
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>

                  <ActionButton
                    variant="outline-warning"
                    className="d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab("invoiceManagement");
                    }}
                  >
                    <ButtonContent>
                      <IconWrapper bg="#f8d7da" color="#721c24">
                        <BsClock size={12} />
                      </IconWrapper>
                      <span>Pending Invoices</span>
                    </ButtonContent>
                    <Badge bg="warning" text="dark">
                      32
                    </Badge>
                  </ActionButton>

                  <ActionButton variant="outline-secondary">
                    <ButtonContent>
                      <IconWrapper bg="#d1ecf1" color="#0c5460">
                        <BsDownload size={12} />
                      </IconWrapper>
                      <span>Export Invoices</span>
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>
                </CardBox>
              </Col>

              {/* Balance Reports */}
              <Col md={4}>
                <CardBox>
                  <h6 style={{ fontSize: "20px", fontWeight: 700 }}>
                    Balance Reports
                  </h6>

                  <ActionButton
                    variant="outline-success"
                    onClick={() => setActiveTab("balanceSheet")}
                  >
                    <ButtonContent>
                      <IconWrapper bg="#d4edda" color="#155724">
                        <BsCashStack />
                      </IconWrapper>
                      Balance Sheet
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>

                  <ActionButton
                    variant="outline-primary"
                    onClick={() => setActiveTab("financeDashboard")}
                  >
                    <ButtonContent>
                      <IconWrapper bg="#f5f0e6" color="#5a3e1b">
                        <BsPieChart />
                      </IconWrapper>
                      Financial Reports
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>

                  <ActionButton variant="outline-dark">
                    <ButtonContent>
                      <IconWrapper>
                        <BsDownload />
                      </IconWrapper>
                      Download Reports
                    </ButtonContent>
                    <FaChevronRight />
                  </ActionButton>
                </CardBox>
              </Col>
            </Row>

            {/* Recent Transactions */}
            <CardBox>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Recent Transactions</h6>
                <a href="/" className="text-decoration-none">
                  View All
                </a>
              </div>
              <div className="table-responsive">
                <Table hover>
                  <thead className="table-light">
                    <tr>
                      <th>Transaction ID</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#TRX-2458</td>
                      <td>Mar 15, 2025</td>
                      <td>Vendor Payment - ABC Cabs</td>
                      <td className="text-danger">-₹24,500</td>
                      <td>
                        <Badge bg="success">completed</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>#TRX-2457</td>
                      <td>Mar 15, 2025</td>
                      <td>Booking Revenue</td>
                      <td className="text-success">-₹35,000</td>
                      <td>
                        <Badge bg="success"></Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBox>
          </>
        );
      case "financeDashboard":
        return <FinanceDashboard setActiveTab={setActiveTab} />;
      case "balanceSheet":
        return <BalanceSheet setActiveTab={setActiveTab} />;
      case "generalInvoice":
        return <GeneralInvoice setActiveTab={setActiveTab} />;
      case "invoiceManagement":
        return <InvoiceManagement setActiveTab={setActiveTab} />;
      default:
        return <FinanceDashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <FixedHeader className="d-none d-lg-flex">
        <Container fluid>
          <Row className="align-items-center justify-content-between">
            <Col xs={12} md="auto" className="d-flex align-items-center">
              {activeTab !== "dashboard" && (
                <BackButton onClick={() => setActiveTab("dashboard")}>
                  <BiArrowBack size={20} style={{ marginRight: "5px" }} />
                  Back
                </BackButton>
              )}
              <h5 style={{ fontSize: "25px", fontWeight: 600 }}>
                {activeTab === "dashboard"
                  ? "Accountant Module"
                  : activeTab === "financeDashboard"
                  ? "Finance Dashboard"
                  : activeTab === "balanceSheet"
                  ? "Balance Sheet"
                  : activeTab === "generalInvoice"
                  ? "Generate Invoice"
                  : activeTab === "invoiceManagement"
                  ? "Invoice Management"
                  : "Accountant Module"}
              </h5>
            </Col>
            <Col
              xs={12}
              md="auto"
              className="d-flex align-items-center gap-2 mt-2 mt-md-0"
            >
              <IoIosNotifications size={25} />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="rounded-circle"
                width={27}
                height={27}
              />
              <h6
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "10px",
                  marginRight: "40px",
                }}
              >
                john Admin <FaChevronDown />
              </h6>
            </Col>
          </Row>
        </Container>
      </FixedHeader>
      <hr />

      <ScrollableContent>
        <Container fluid className="bg-light py-4">
          {renderContent()}
        </Container>
      </ScrollableContent>
    </>
  );
};

export default Accountant;
