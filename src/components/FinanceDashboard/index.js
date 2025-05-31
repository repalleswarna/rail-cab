import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Table, Badge } from "react-bootstrap";
import {
  BsCurrencyRupee,
  BsFileEarmarkMinus,
  BsPieChart,
  BsDownload,
} from "react-icons/bs";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FaRadio } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";

const CardBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StatCard = styled(CardBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardIconCircle = styled.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#E8F5E9"};
`;

const CardTitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`;

const CardValue = styled.h3`
  margin: 8px 0;
  font-size: 22px;
  font-weight: 700;
`;

const CardChange = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${({ up }) => (up ? "green" : "red")};
`;

const ChartBox = styled(CardBox)`
  height: 250px;
`;

const FinanceDashboard = ({ setActiveTab }) => {
  return (
    <Container fluid className="py-4">
      <HeaderRow>
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            onClick={() => setActiveTab("dashboard")}
            className="me-2 p-0"
          >
            <BiArrowBack size={24} />
          </Button>
          <h4 style={{ fontSize: "20px", fontWeight: 600 }}>
            Financial Dashboard
          </h4>
        </div>
      </HeaderRow>

      <Row className="g-3 mb-4">
        <Col md={3} sm={6} xs={12}>
          <StatCard>
            <div>
              <CardTitle>Total Income</CardTitle>
              <CardValue>₹8.5M</CardValue>
              <CardChange up>
                <AiOutlineRise /> 12% vs last month
              </CardChange>
            </div>
            <CardIconCircle bg="#E8F5E9">
              <BsCurrencyRupee color="#4CAF50" />
            </CardIconCircle>
          </StatCard>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <StatCard>
            <div>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardValue>₹2.1M</CardValue>
              <CardChange up>
                <AiOutlineRise /> 8% vs last month
              </CardChange>
            </div>
            <CardIconCircle bg="#E3F2FD">
              <GoGraph color="#2db7f5" />
            </CardIconCircle>
          </StatCard>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <StatCard>
            <div>
              <CardTitle>Total Expenses</CardTitle>
              <CardValue>₹3.2M</CardValue>
              <CardChange>
                <AiOutlineFall /> 5% vs last month
              </CardChange>
            </div>
            <CardIconCircle bg="#FFEBEE">
              <BsFileEarmarkMinus color="#f44336" />
            </CardIconCircle>
          </StatCard>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <StatCard>
            <div>
              <CardTitle>Net Balance</CardTitle>
              <CardValue>₹5.3M</CardValue>
              <CardChange up>
                <AiOutlineRise /> 13% vs last month
              </CardChange>
            </div>
            <CardIconCircle bg="#F3E5F5">
              <FaRadio color="#9c27b0" />
            </CardIconCircle>
          </StatCard>
        </Col>
      </Row>

      <Row className="g-3 mb-4">
        <Col md={6}>
          <ChartBox>
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-bold mb-0">Earnings Overview</h6>
              <select
                className="form-select form-select-sm"
                style={{ width: "120px" }}
              >
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
            {/* Chart placeholder */}
            <div style={{ height: "180px", backgroundColor: "#f8f9fa" }}></div>
          </ChartBox>
        </Col>
        <Col md={6}>
          <ChartBox>
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-bold mb-0">Expense Breakdown</h6>
              <Button variant="link" size="sm" className="p-0">
                <BsDownload /> Export
              </Button>
            </div>
            {/* Chart placeholder */}
            <div style={{ height: "180px", backgroundColor: "#f8f9fa" }}></div>
          </ChartBox>
        </Col>
      </Row>

      <CardBox>
        <div className="d-flex justify-content-between mb-3">
          <h6 className="fw-bold mb-0">Recent Transactions</h6>
          <Button variant="link" className="p-0">
            View All
          </Button>
        </div>
        <div className="table-responsive">
          <Table hover>
            <thead className="table-light">
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#TKX-7895</td>
                <td>Mar 3, 2025</td>
                <td>Vendor Payment</td>
                <td>
                  <Badge bg="primary" className="text-white">
                    Service
                  </Badge>
                </td>
                <td className="text-success">+₹85,000</td>
                <td>
                  <Badge bg="success">Complete</Badge>
                </td>
              </tr>
              <tr>
                <td>#TKX-7894</td>
                <td>Mar 5, 2025</td>
                <td>Booking Revenue</td>
                <td>
                  <Badge bg="info" className="text-white">
                    Income
                  </Badge>
                </td>
                <td className="text-danger">-₹75,500</td>
                <td>
                  <Badge bg="danger">Cancelled</Badge>
                </td>
              </tr>
              <tr>
                <td>#TKX-7893</td>
                <td>Mar 14, 2025</td>
                <td>Fuel Payment</td>
                <td>
                  <Badge bg="warning" className="text-white">
                    Expense
                  </Badge>
                </td>
                <td className="text-danger">-₹22,000</td>
                <td>
                  <Badge bg="warning" className="text-dark">
                    Pending
                  </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBox>
    </Container>
  );
};

export default FinanceDashboard;
