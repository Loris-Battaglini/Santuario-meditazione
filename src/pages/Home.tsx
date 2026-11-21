import styled from "styled-components";
import { Timer } from "../components/Timer";
import { SoundMixer } from "../components/SoundMixer";

const SanctuaryContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 10rem;
  padding: 2rem 1.5rem;
  background-color: rgba(7, 2, 1, 0.8);
  min-height: 500px;
  width: 100%;
`;

export function Home() {
  return (
    <SanctuaryContainer>
      <h1>Welcome to the Sanctuary</h1>
      <p>Discover peace and tranquility in our sacred space.</p>
      <div>
        <Timer />
      </div>
      <div>
        <h2>rilassati con il tuo audio personalizzato</h2>
        <SoundMixer />
      </div>
    </SanctuaryContainer>
  );
}
