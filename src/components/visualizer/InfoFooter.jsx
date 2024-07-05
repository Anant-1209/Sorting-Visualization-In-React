import React from "react";
import styled from "styled-components";

const InfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa; /* Light background color */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* Shadow for a subtle effect */
  border-top: 1px solid #e9ecef; /* Top border for separation */
  font-size: 1rem; /* Consistent font size */
  color: #333; /* Dark text color */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  margin: 5px 0;
`;

export function InfoFooter({ swapCount, comparisionCount, children }) {
  return (
    <InfoFlex>
      <InfoItem>
        Swaps: <strong>{swapCount}</strong>
      </InfoItem>
      <InfoItem>
        Comparisons: <strong>{comparisionCount}</strong>
      </InfoItem>
      {children && <InfoItem>{children}</InfoItem>}
    </InfoFlex>
  );
}
