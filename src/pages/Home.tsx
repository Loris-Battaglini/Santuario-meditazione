import styled from "styled-components";
import { Timer } from "../components/Timer";
import { SoundMixer } from "../components/SoundMixer";
import { BreathingCircle } from "../components/BreathingCircle";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 600px);
  text-align: center;
`;

const SanctuaryContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1.5rem 2rem;
  background-color: rgba(7, 2, 1, 0.8);
  width: 100%;
`;

export function Home() {
  return (
    <SanctuaryContainer>
      <Intro>
        <h1>Benvenuto al Santuario</h1>
        <p>
          Lascia fuori il mondo. Rallenta, respira e ritrova il tuo spazio di
          quiete.
        </p>
      </Intro>
      <ContentSection>
        <h2>Concediti un momento per te</h2>
        <Timer />
      </ContentSection>
      <ContentSection>
        <h2>Scegli i suoni che accompagnano la tua quiete</h2>
        <SoundMixer />
      </ContentSection>
      <ContentSection>
        <h2>Ritrova il ritmo del respiro</h2>
        <BreathingCircle />
      </ContentSection>
    </SanctuaryContainer>
  );
}
