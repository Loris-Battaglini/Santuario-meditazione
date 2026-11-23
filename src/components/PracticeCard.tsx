import styled from "styled-components";
import type { PracticePose } from "../data/practices";
import { theme } from "../style/theme";

const CardButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  color: ${theme.colors.text};
  text-align: left;
  background-color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  cursor: pointer;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${theme.colors.accent};
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 3px;
  }
`;

const Cover = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  place-items: center;
  color: ${theme.colors.testoSecondary};
  background-color: ${theme.colors.secondary};
  font-size: 0.9rem;
`;

const CoverImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.1rem 1.2rem;

  h2 {
    font-size: 1.15rem;
    line-height: 1.35;
  }

  p {
    color: ${theme.colors.testoSecondary};
    font-size: 0.95rem;
  }
`;

interface PracticeCardProps {
  pose: PracticePose;
  onSelect: (pose: PracticePose) => void;
}

export function PracticeCard({ pose, onSelect }: PracticeCardProps) {
  return (
    <CardButton type="button" onClick={() => onSelect(pose)}>
      <Cover>
        Copertina locale da aggiungere
        <CoverImage
          src={pose.cover}
          alt={`Copertina: ${pose.title}`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </Cover>
      <CardContent>
        <h2>{pose.title}</h2>
        <p>{pose.description}</p>
      </CardContent>
    </CardButton>
  );
}
