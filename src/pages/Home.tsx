import styled from "styled-components";
import { SoundMixer } from "../components/SoundMixer";
import { BreathingCircle } from "../components/BreathingCircle";
import GoldTree from "../assets/svg/GoldTree.svg";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

const SanctuaryContainer = styled.main`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 5rem);
  padding: 1.5rem;
  background-color: rgba(7, 2, 1, 0.8);
  width: 100%;

  @media (max-width: 40rem) {
    min-height: calc(100vh - 7.5rem);
  }
`;

const ContentSectionCircle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 37.5rem);
  text-align: center;
`;

const ContentSectionMixer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 37.5rem);
  text-align: center;
  margin-top: 5rem;

  @media (min-width: 120rem) {
    width: min(39vw, 62.5rem);

    h2 {
      font-size: clamp(1.25rem, 1.5vw, 2rem);
    }
  }
`;

const ContainerGoldTree = styled.img`
  position: fixed;
  z-index: -1;
  right: -9rem;
  bottom: -21rem;
  width: min(50vw, 92rem);
  height: auto;
  opacity: 0.2;
  pointer-events: none;

  @media (min-width: 64.0625rem) and (max-width: 160rem) {
    right: -7rem;
    bottom: -10rem;
    width: min(38vw, 40rem);
  }

  @media (min-width: 47.5625rem) and (max-width: 64rem) {
    right: -2rem;
    bottom: -5rem;
    width: min(40vw, 32rem);
  }

  @media (max-width: 47.5rem) {
    right: -1rem;
    bottom: -3rem;
    width: min(36vw, 15rem);
  }

  @media (min-width: 160rem) {
    left: auto;
    right: -10rem;
    bottom: -10rem;
    width: min(38vw, 40rem);
    transform: none;
  }

  @media (max-width: 40rem) {
    display: none;
  }
`;

const ContainerGoldTreeLeft = styled.img`
  position: fixed;
  z-index: -1;
  left: -9rem;
  bottom: -21rem;
  width: min(50vw, 92rem);
  height: auto;
  opacity: 0.2;
  pointer-events: none;
  transform: scaleX(-1);

  @media (min-width: 64.0625rem) and (max-width: 159.999rem) {
    left: -7rem;
    bottom: -10rem;
    width: min(38vw, 40rem);
  }

  @media (min-width: 160rem) {
    left: -10rem;
    bottom: -10rem;
    width: min(38vw, 40rem);
  }

  @media (min-width: 47.5625rem) and (max-width: 64rem) {
    left: -2rem;
    bottom: -5rem;
    width: min(40vw, 32rem);
  }

  @media (max-width: 47.5rem) {
    left: -1rem;
    bottom: -3rem;
    width: min(36vw, 15rem);
  }

  @media (max-width: 40rem) {
    display: none;
  }
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
      <ContentSectionCircle>
        <BreathingCircle />
      </ContentSectionCircle>
      <ContentSectionMixer>
        <h2>Scegli i suoni che accompagnano la tua quiete</h2>
        <SoundMixer />
      </ContentSectionMixer>
      <ContainerGoldTree src={GoldTree} />
      <ContainerGoldTreeLeft src={GoldTree} />
    </SanctuaryContainer>
  );
}
