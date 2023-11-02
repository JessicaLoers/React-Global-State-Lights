import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  handleAllLightsOff,
  handleAllLightsOn,
  numberOfLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleAllLightsOff}
        disabled={numberOfLightsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleAllLightsOn}
        disabled={numberOfLightsOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
