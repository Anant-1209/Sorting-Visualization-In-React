import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  background: linear-gradient(135deg, #333, #444); /* Gradient background */
  padding: 20px 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  color: #fff; /* White text color */
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.05rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;
`;

const FooterLink = styled.a`
  color: #ff6347; /* Tomato color */
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: #ffa07a; /* Light Salmon color */
  }
`;

export function Footer() {
  return (
    <FooterDiv>
      <FooterText>
        @Anant Kumar Sahu
        <FooterLink href="https://github.com/anantkrsahu" target="_blank">
          GitHub
        </FooterLink>
      </FooterText>
    </FooterDiv>
  );
}
