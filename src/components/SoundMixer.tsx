import { useState } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import {
  FiCloudRain,
  FiFeather,
  FiSun,
  FiBell,
  FiDroplet,
} from "react-icons/fi";
import { BsFire } from "react-icons/bs";

const MixerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const SoundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
  background-color: ${theme.colors.background};
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

const VolumeSlider = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const SOUNDS = [
  { id: "rain", title: "Pioggia", icon: <FiCloudRain /> },
  { id: "wind", title: "Vento", icon: <FiFeather /> },
  { id: "sun", title: "Sole", icon: <FiSun /> },
  { id: "bell", title: "Campana", icon: <FiBell /> },
  { id: "wave", title: "Onde", icon: <FiDroplet /> },
  { id: "fire", title: "Fuoco", icon: <BsFire /> },
];

export function SoundMixer() {
  const [volumes, setVolumes] = useState<{ [key: string]: number }>({
    rain: 0,
    wind: 0,
    sun: 0,
    bell: 0,
    wave: 0,
    fire: 0,
  });

  function handleVolumeChange(soundId: string, value: number) {
    setVolumes((prev) => ({
      ...prev,
      [soundId]: value,
    }));
  }
  return (
    <MixerContainer>
      {SOUNDS.map((sound) => (
        <SoundCard key={sound.id}>
          <IconWrapper>{sound.icon}</IconWrapper>
          <TitleWrapper>{sound.title}</TitleWrapper>
          <VolumeSlider
            type="range"
            min="0"
            max="100"
            value={volumes[sound.id]}
            onChange={(e) =>
              handleVolumeChange(sound.id, parseInt(e.target.value))
            }
          />
        </SoundCard>
      ))}
    </MixerContainer>
  );
}
