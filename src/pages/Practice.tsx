import { useEffect, useState } from "react";
import styled from "styled-components";
import { PracticeCard } from "../components/PracticeCard";
import { PracticeViewer } from "../components/PracticeViewer";
import { practicePoses, type PracticePose } from "../data/practices.data";
import { theme } from "../style/theme";
import { Timer } from "../components/Timer";

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

  @media (max-width: 50rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 33.75rem) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 37.5rem);
  margin: 0 auto 2rem;
  text-align: center;
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
      <ContentSection>
        <h2>Concediti un momento per te</h2>
        <Timer />
      </ContentSection>

      <Intro>
        <h1>Pratiche di movimento</h1>
        <p>
          Seleziona una posa per leggerne le indicazioni e vederne il video
          dimostrativo. Procedi con calma e fermati se avverti dolore.
        </p>
      </Intro>

      <PracticeGrid>
        {practicePoses.map((pose) => (
          <PracticeCard key={pose.id} pose={pose} onSelect={setSelectedPose} />
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
