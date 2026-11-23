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
        <h1>Welcome to the Sanctuary</h1>
        <p>Discover peace and tranquility in our sacred space.</p>
      </Intro>
      <ContentSection>
        <Timer />
      </ContentSection>
      <ContentSection>
        <h2>rilassati con il tuo audio personalizzato</h2>
        <SoundMixer />
      </ContentSection>
      <ContentSection>
        <h2>Pratica la respirazione consapevole</h2>
        <BreathingCircle />
      </ContentSection>
    </SanctuaryContainer>
  );
}
