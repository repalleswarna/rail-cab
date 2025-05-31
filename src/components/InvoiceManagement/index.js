import React, { useState } from "react";
import GeneralInvoice from "../GeneralInvoice";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Badge,
  Modal,
} from "react-bootstrap";
import { FaDownload, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;

  .filter-box {
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .table-box {
    background: white;
    padding: 0;
    border-radius: 10px;
    overflow-x: auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  /* Remove vertical borders (column lines) */
  table tr td,
  table tr th {
    border-left: none !important;
    border-right: none !important;
  }

  table,
  table thead,
  table tbody {
    border-collapse: separate !important;
  }

  .status-paid {
    background-color: #d1fae5;
    color: #065f46;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 13px;
  }

  .status-unpaid {
    background-color: #fee2e2;
    color: #991b1b;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 13px;
  }

  .download-icon {
    color: #0d6efd;
    cursor: pointer;
    font-size: 18px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .header-title {
    font-weight: 600;
    font-size: 20px;
  }

  .table-divider-full {
    border-top: 2px solid #dee2e6;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 576px) {
    .header-title {
      font-size: 18px;
    }
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  z-index: 1050;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;

function InvoiceManagement() {
  const [showInvoicePopup, setShowInvoicePopup] = useState(false);

  const handleOpenInvoice = () => {
    setShowInvoicePopup(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoicePopup(false);
  };

  return (
    <Wrapper>
      {showInvoicePopup && <Overlay />}
      {showInvoicePopup && (
        <PopupContainer>
          <GeneralInvoice
            visible={showInvoicePopup}
            onClose={handleCloseInvoice}
          />
        </PopupContainer>
      )}

      <div className="header">
        <div
          style={{ fontSize: "25px", fontWeight: 600, color: "black" }}
          className="header-title"
        >
          Invoice Management
        </div>
        <Button variant="primary" onClick={handleOpenInvoice}>
          <FaPlus className="me-2" />
          Generate Invoice
        </Button>
      </div>

      <div className="filter-box">
        <Row className="gy-2 gx-3 align-items-center">
          <Col xs={12} md={3}>
            <Form.Label
              style={{ fontSize: "15px", fontWeight: "500", color: "black" }}
            >
              Invoice Type
            </Form.Label>
            <Form.Select>
              <option>All Types</option>
              <option>Transport</option>
              <option>Logistics</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={3}>
            <Form.Label
              style={{ fontSize: "15px", fontWeight: "500", color: "black" }}
            >
              Status
            </Form.Label>
            <Form.Select>
              <option>All Status</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={3}>
            <Form.Label
              style={{ fontSize: "15px", fontWeight: "500", color: "black" }}
            >
              From Date
            </Form.Label>
            <Form.Control type="date" />
          </Col>
          <Col xs={12} md={3}>
            <Form.Label
              style={{ fontSize: "15px", fontWeight: "500", color: "black" }}
            >
              To Date
            </Form.Label>
            <Form.Control type="date" />
          </Col>
        </Row>
      </div>

      <div className="table-box mt-3">
        <Table responsive hover className="mb-0 custom-table">
          <thead className="table-light">
            <tr>
              <th>Invoice ID</th>
              <th>Vendor/User</th>
              <th>Amount</th>
              <th>Tax %</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-2025001</td>
              <td>ABC Cabs Ltd</td>
              <td>₹24,500</td>
              <td>18%</td>
              <td>
                <span className="status-paid">Paid</span>
              </td>
              <td>
                <FaDownload className="download-icon" />
              </td>
            </tr>
            <tr>
              <td>INV-2025002</td>
              <td>XYZ Transport</td>
              <td>₹35,800</td>
              <td>18%</td>
              <td>
                <span className="status-unpaid">Unpaid</span>
              </td>
              <td>
                <FaDownload className="download-icon" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Wrapper>
  );
}

export default InvoiceManagement;
