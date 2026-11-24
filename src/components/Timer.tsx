import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: min(100%, 22rem);
  padding: 1.75rem;
  background-color: ${theme.colors.secondary};
  border: 0.0625rem solid ${theme.colors.border};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${theme.colors.testoSecondary};
  }

  input {
    width: 4.5rem;
    padding: 0.4rem 0.5rem;
    color: ${theme.colors.text};
    text-align: center;
    background-color: ${theme.colors.primary};
    border: 0.0625rem solid ${theme.colors.border};
    border-radius: 0.375rem;
    font: inherit;
  }

  button {
    padding: 0.55rem 1rem;
    color: ${theme.colors.text};
    background-color: ${theme.colors.primary};
    border: 0.0625rem solid ${theme.colors.border};
    border-radius: 0.375rem;
    transition:
      border-color 150ms ease,
      color 150ms ease;

    &:hover {
      color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
    }
  }
`;

const Display = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: clamp(2.5rem, 8vw, 3.25rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
  color: ${theme.colors.iconaETimer};
`;

const Controls = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function Timer() {
  const [minutes, setMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(10 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const secondsLeftRef = useRef(secondsLeft);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const nextSecondsLeft = Math.max(0, secondsLeftRef.current - 1);
      secondsLeftRef.current = nextSecondsLeft;
      setSecondsLeft(nextSecondsLeft);
      if (nextSecondsLeft === 0) setIsRunning(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleMinutesChange(value: number) {
    const safeMinutes = Math.max(1, Math.min(180, value || 1));
    setIsRunning(false);
    setMinutes(safeMinutes);
    secondsLeftRef.current = safeMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  function handleReset() {
    setIsRunning(false);
    secondsLeftRef.current = minutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  return (
    <TimerBox>
      <label>
        Durata (minuti):{" "}
        <input
          type="number"
          min={1}
          max={180}
          value={minutes}
          disabled={isRunning}
          onChange={(e) => handleMinutesChange(Number(e.target.value))}
        />
      </label>

      <Display>{formatTime(secondsLeft)}</Display>

      <Controls>
        <button type="button" onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? "Pausa" : "Avvia"}
        </button>
        <button type="button" onClick={handleReset}>
          Azzera
        </button>
      </Controls>
    </TimerBox>
  );
}
