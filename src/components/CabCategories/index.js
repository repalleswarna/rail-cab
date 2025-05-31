import React, { useState } from "react";
import styled from "styled-components";
import { FaCarSide, FaTrash, FaEdit } from "react-icons/fa";
import { MdOutlineDirectionsBike, MdDirectionsCar } from "react-icons/md";
import { Form } from "react-bootstrap";
import AddNewCategory from "../AddNewCategory"; // Adjust path if needed
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  background-color: #f9fbfc;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  position: relative;
  filter: ${({ blur }) => (blur ? "blur(4px)" : "none")};
  transition: filter 0.3s ease;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h6`
  font-weight: 600;
  color: #263238;
`;

const AddButton = styled.button`
  background-color: #0b85e0;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #0a7bc8;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CabCard = styled.div`
  background-color: white;
  border: 1px solid #ececec;
  border-radius: 8px;
  width: 240px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const IconWrap = styled.div`
  font-size: 24px;
  color: #34aadc;
  margin-right: 10px;
`;

const CabTitle = styled.p`
  font-weight: 600;
  margin-bottom: 0;
`;

const CabDesc = styled.p`
  color: #8a8a8a;
  font-size: 13px;
  margin: 4px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #5f6368;
  margin: 0;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #0b85e0;

  svg {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:last-child {
      color: red;
    }
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

// Modal Overlay Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const cabData = [
  {
    icon: <MdOutlineDirectionsBike />,
    title: "Bike",
    desc: "2-wheeler transport",
    price: "₹50",
    active: true,
  },
  {
    icon: <MdDirectionsCar />,
    title: "Auto",
    desc: "3-wheeler rickshaw",
    price: "₹80",
    active: true,
  },
  {
    icon: <MdDirectionsCar />,
    title: "Sedan",
    desc: "4-seater car",
    price: "₹120",
    active: true,
  },
  {
    icon: <FaCarSide />,
    title: "SUV",
    desc: "6-seater vehicle",
    price: "₹180",
    active: false,
  },
];

const CabCategories = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCategory = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Container blur={showPopup}>
        <Header>
          <Title>Cab Categories</Title>
          <AddButton onClick={handleAddCategory}>+ Add Category</AddButton>
        </Header>

        <CardGrid>
          {cabData.map((cab, index) => (
            <CabCard key={index}>
              <TopSection>
                <InfoSection>
                  <IconWrap>{cab.icon}</IconWrap>
                  <TextWrap>
                    <CabTitle>{cab.title}</CabTitle>
                    <CabDesc>{cab.desc}</CabDesc>
                  </TextWrap>
                </InfoSection>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${index}`}
                  defaultChecked={cab.active}
                />
              </TopSection>
              <Footer>
                <Price>Base fare: {cab.price}</Price>
                <ActionIcons>
                  <FaEdit />
                  <FaTrash />
                </ActionIcons>
              </Footer>
            </CabCard>
          ))}
        </CardGrid>
      </Container>

      {showPopup && (
        <ModalOverlay onClick={handleClosePopup}>
          <div onClick={(e) => e.stopPropagation()}>
            <AddNewCategory onClose={handleClosePopup} />
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

export default CabCategories;
