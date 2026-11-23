import { useEffect, useState } from "react";
import styled from "styled-components";
import { PracticeCard } from "../components/PracticeCard";
import { PracticeViewer } from "../components/PracticeViewer";
import { practicePoses, type PracticePose } from "../data/practices";
import { theme } from "../style/theme";

const Page = styled.main`
  width: min(100% - 3rem, 78rem);
  margin: 0 auto;
  padding: 3rem 0;
`;

const Intro = styled.div`
  max-width: 42rem;
  margin: 0 auto 2rem;
  text-align: center;

  h1 {
    margin-bottom: 0.75rem;
  }

  p {
    color: ${theme.colors.testoSecondary};
  }
`;

const PracticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export function Practice() {
  const [selectedPose, setSelectedPose] = useState<PracticePose | null>(null);

  useEffect(() => {
    if (!selectedPose) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPose(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPose]);

  return (
    <Page>
      <Intro>
        <h1>Pratiche di movimento</h1>
        <p>
          Scegli una posa per leggere le indicazioni e vedere il video dimostrativo.
          Procedi con calma e fermati se avverti dolore.
        </p>
      </Intro>

      <PracticeGrid>
        {practicePoses.map((pose) => (
          <PracticeCard
            key={pose.id}
            pose={pose}
            onSelect={setSelectedPose}
          />
        ))}
      </PracticeGrid>

      {selectedPose && (
        <PracticeViewer
          pose={selectedPose}
          onClose={() => setSelectedPose(null)}
        />
      )}
    </Page>
  );
}
