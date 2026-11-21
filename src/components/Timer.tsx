import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
`;

const Display = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: 2.5rem;
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
