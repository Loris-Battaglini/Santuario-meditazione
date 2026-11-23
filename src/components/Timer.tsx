import { useEffect, useState } from "react";
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
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

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
    border: 1px solid ${theme.colors.border};
    border-radius: 6px;
    font: inherit;
  }

  button {
    padding: 0.55rem 1rem;
    color: ${theme.colors.text};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.border};
    border-radius: 6px;
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
  color: #d6b879;
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

  // se l'interruttore è spento (false), fermati subito e non far partire nessun orologio.
  useEffect(() => {
    if (!isRunning) return;

    // Ogni secondo (1000): prende il tempo rimasto (prev) e fa prev - 1. Se è arrivato a 1 (cioè sta per finire), spegne l'interruttore (setIsRunning(false)) e lo porta a 0
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Se metti in pausa o cambi pagina, spegne il vecchio setInterval così non restano due o tre orologi nascosti che corrono insieme.
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleMinutesChange(value: number) {
    const safeMinutes = Math.max(1, Math.min(180, value || 1));
    setIsRunning(false);
    setMinutes(safeMinutes);
    setSecondsLeft(safeMinutes * 60);
  }

  function handleReset() {
    setIsRunning(false);
    setSecondsLeft(minutes * 60);
  }

  return (
    <TimerBox>
      <label>
        Minuti:{" "}
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
          {isRunning ? "Pausa" : "Start"}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </Controls>
    </TimerBox>
  );
}
