import styled from "styled-components";
import type { PracticePose } from "../data/practices";
import { theme } from "../style/theme";

const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.76);
  place-items: center;
`;

const Dialog = styled.div`
  position: relative;
  width: min(100%, 48rem);
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  padding: clamp(1.25rem, 4vw, 2rem);
  color: ${theme.colors.text};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  h2 {
    padding-right: 5rem;
    margin-bottom: 1rem;
    font-size: clamp(1.35rem, 4vw, 1.8rem);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  padding: 0.45rem 0.75rem;
  color: ${theme.colors.text};
  background-color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;

  &:hover,
  &:focus-visible {
    border-color: ${theme.colors.accent};
  }
`;

const MediaFrame = styled.div`
  display: grid;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  color: ${theme.colors.testoSecondary};
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  place-items: center;
  text-align: center;
`;

const Video = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #000;
`;

const Directions = styled.div`
  margin-top: 1.5rem;

  h3 {
    margin-bottom: 0.75rem;
    color: ${theme.colors.accent};
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 0.75rem;
    color: ${theme.colors.testoSecondary};
  }

  ol {
    display: grid;
    gap: 0.6rem;
    padding-left: 1.4rem;
  }

  li {
    padding-left: 0.25rem;
  }
`;

interface PracticeViewerProps {
  pose: PracticePose;
  onClose: () => void;
}

export function PracticeViewer({ pose, onClose }: PracticeViewerProps) {
  return (
    <Backdrop
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="practice-dialog-title"
      >
        <CloseButton type="button" onClick={onClose} autoFocus>
          Chiudi
        </CloseButton>
        <h2 id="practice-dialog-title">{pose.title}</h2>
        <MediaFrame>
          {pose.videoSrc ? (
            <Video controls playsInline poster={pose.cover}>
              <source src={pose.videoSrc} type="video/mp4" />
              Il browser non supporta la riproduzione video.
            </Video>
          ) : (
            <p>
              Video locale da aggiungere. Imposta il percorso in{" "}
              <code>src/data/practices.ts</code>.
            </p>
          )}
        </MediaFrame>
        <Directions>
          <h3>Indicazioni</h3>
          <p>{pose.description}</p>
          <ol>
            {pose.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </Directions>
      </Dialog>
    </Backdrop>
  );
}
