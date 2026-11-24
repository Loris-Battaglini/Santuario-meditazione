import styled from "styled-components";
import { SoundMixer } from "../components/SoundMixer";
import { BreathingCircle } from "../components/BreathingCircle";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

const SanctuaryContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 5rem);
  padding: 1.5rem;
  background-color: rgba(7, 2, 1, 0.8);
  width: 100%;

  @media (max-width: 640px) {
    min-height: calc(100vh - 7.5rem);
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 600px);
  text-align: center;
`;

export function Home() {
  return (
    <SanctuaryContainer>
      <Intro>
        <h1>Benvenuto al Santuario</h1>
        <p>
          Lascia fuori il mondo. Ascolta, rallenta e ritrova il ritmo del
          respiro
        </p>
      </Intro>
      <ContentSection>
        <BreathingCircle />
      </ContentSection>
      <ContentSection>
        <h2>Scegli i suoni che accompagnano la tua quiete</h2>
        <SoundMixer />
      </ContentSection>
    </SanctuaryContainer>
  );
}
