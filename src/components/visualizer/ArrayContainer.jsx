import React from "react";
import styled from "styled-components";
import {
  comparisionColor,
  swapColor,
  sortedColor,
  pivotColor,
} from "../../common/config";
import { useControls } from "../../common/store";

let swapTime = useControls.getState().swapTime;
useControls.subscribe(
  (time) => (swapTime = time),
  (state) => state.swapTime
);

import {
  ArrayHolder,
  ArrayItem,
  sourceAnimation,
  destinationAnimation,
} from "../../common/styles";

const Source = styled(ArrayItem)`
  animation: ${(props) => destinationAnimation(props.distance, swapColor)}
    ${() => swapTime / 1000}s forwards;
`;

const Destination = styled(ArrayItem)`
  animation: ${(props) => sourceAnimation(props.distance, swapColor)}
    ${() => swapTime / 1000}s forwards;
`;

const NumberLabel = styled.div`
  position: absolute;
  top: -20px; /* Adjust the position of the number label */
  font-size: 0.8rem;
  color: white;
`;

const EnhancedArrayItem = styled(ArrayItem)`
  position: relative; /* Needed for NumberLabel positioning */
  min-height: 30px; /* Ensure minimum height for small numbers */
`;

export function ArrayContainer({
  array,
  source,
  destination,
  pivot = -1,
  highlightIndices,
  sortedIndices,
}) {

  function getBackgroundColor(i) {
    if (i === pivot) {
      return pivotColor;
    }

    if (highlightIndices.includes(i)) {
      return comparisionColor;
    }

    if (sortedIndices.includes(i)) {
      return sortedColor;
    }
    return "";
  }

  return (
    <ArrayHolder>
      {array.map((value, i) => {
        const height = value * 5 + 30; // Ensure small items are visible

        if (i === source) {
          return (
            <Source
              key={i + ":" + source + ":" + destination + ":" + value}
              distance={destination - source}
              style={{
                order: destination,
                height: height,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              <NumberLabel>{value}</NumberLabel>
              {value}
            </Source>
          );
        }
        if (i === destination) {
          return (
            <Destination
              key={i + ":" + destination + ":" + source + ":" + value}
              distance={destination - source}
              style={{
                order: source,
                height: height,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              <NumberLabel>{value}</NumberLabel>
              {value}
            </Destination>
          );
        }
        return (
          <EnhancedArrayItem
            key={i + ":" + destination + ":" + source + ":" + value}
            style={{
              order: i,
              height: height,
              backgroundColor: getBackgroundColor(i),
            }}
          >
            <NumberLabel>{value}</NumberLabel>
            {value}
          </EnhancedArrayItem>
        );
      })}
    </ArrayHolder>
  );
}
