import styled, { keyframes } from "styled-components";
import { theme } from "../style/theme";

const breathe = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.8);
  }
  40% {
    transform: scale(1.8);
  }
  88% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2rem 2rem;
`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${breathe} 14s ease-in-out infinite;
`;

export function BreathingCircle() {
  return (
    <Box>
      <Circle />
    </Box>
  );
}
