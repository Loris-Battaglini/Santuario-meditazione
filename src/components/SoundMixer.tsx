import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import { FiBell, FiDroplet } from "react-icons/fi";
import { BsFire, BsCloudLightningRain, BsCloudRain } from "react-icons/bs";
import { LuTreePine } from "react-icons/lu";
import { GiStoneBlock } from "react-icons/gi";
import { PiBirdLight } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa";
// suoni freesound
import fuocoMp3 from "../assets/Freesound/fuoco.mp3";
import ventoForteForestaAereoMp3 from "../assets/Freesound/ventoForteForestaAereo.mp3";
import ondaMp3 from "../assets/Freesound/onda.mp3";
import ciotolaMp3 from "../assets/Freesound/ciotola.mp3";
import pioggiaCittaMp3 from "../assets/Freesound/pioggiaCitta.mp3";
import cristalloDiQuarzoMp3 from "../assets/Freesound/cristalloDiQuarzo.mp3";
import uccelliMp3 from "../assets/Freesound/uccelli.mp3";
import tuoniPioggiaMp3 from "../assets/Freesound/tuoniPioggia.mp3";
import grilliMp3 from "../assets/Freesound/grilli.mp3";

interface MasterAudioSettings {
  masterVolume: number;
  isMuted: boolean;
}

declare global {
  interface Window {
    __masterAudioSettings?: MasterAudioSettings;
  }
}

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
  {
    id: "grilli",
    title: "Grilli notturni",
    icon: <FaRegMoon />,
    url: grilliMp3,
  },
  {
    id: "pioggiaCitta",
    title: "Pioggia sulla città",
    icon: <BsCloudRain />,
    url: pioggiaCittaMp3,
  },
  {
    id: "bell",
    title: "Ciotola tibetana",
    icon: <FiBell />,
    url: ciotolaMp3,
  },
  {
    id: "wave",
    title: "Onde del mare",
    icon: <FiDroplet />,
    url: ondaMp3,
  },
  {
    id: "fire",
    title: "Crepitio del fuoco",
    icon: <BsFire />,
    url: fuocoMp3,
  },
  {
    id: "forest",
    title: "Vento tra gli alberi",
    icon: <LuTreePine />,
    url: ventoForteForestaAereoMp3,
  },
  {
    id: "quarzo",
    title: "Cristallo sonoro",
    icon: <GiStoneBlock />,
    url: cristalloDiQuarzoMp3,
  },
  {
    id: "birds",
    title: "Canto degli uccelli",
    icon: <PiBirdLight />,
    url: uccelliMp3,
  },
  {
    id: "thunder",
    title: "Temporale",
    icon: <BsCloudLightningRain />,
    url: tuoniPioggiaMp3,
  },
];

export function SoundMixer() {
  const audioElementsRef = useRef<{ [key: string]: HTMLAudioElement }>({});
  const masterAudioSettingsRef = useRef<MasterAudioSettings>(
    window.__masterAudioSettings ?? { masterVolume: 1, isMuted: false },
  );

  const [volumes, setVolumes] = useState<{ [key: string]: number }>({
    grilli: 0,
    pioggiaCitta: 0,
    bell: 0,
    wave: 0,
    fire: 0,
    forest: 0,
    quarzo: 0,
    birds: 0,
    thunder: 0,
  });
  const volumesRef = useRef(volumes);

  useEffect(() => {
    const handleMasterAudioChange = (event: Event) => {
      const { detail } = event as CustomEvent<MasterAudioSettings>;
      masterAudioSettingsRef.current = detail;

      Object.entries(audioElementsRef.current).forEach(([soundId, audio]) => {
        const soundVolume = (volumesRef.current[soundId] ?? 0) / 100;
        audio.volume =
          soundVolume *
          (detail.isMuted ? 0 : detail.masterVolume);
      });
    };

    window.addEventListener("master-audio-change", handleMasterAudioChange);
    return () =>
      window.removeEventListener("master-audio-change", handleMasterAudioChange);
  }, []);

  useEffect(() => {
    const audioElements = audioElementsRef.current;

    SOUNDS.forEach((sound) => {
      const audio = new Audio(sound.url);
      audio.loop = true;
      audio.volume =
        (volumesRef.current[sound.id] ?? 0) / 100 *
        (masterAudioSettingsRef.current.isMuted
          ? 0
          : masterAudioSettingsRef.current.masterVolume);
      audioElements[sound.id] = audio;
    });

    return () => {
      Object.values(audioElements).forEach((audio) => {
        audio.pause();
      });
    };
  }, []);

  function handleVolumeChange(soundId: string, value: number) {
    const nextVolumes = {
      ...volumesRef.current,
      [soundId]: value,
    };
    volumesRef.current = nextVolumes;
    setVolumes(nextVolumes);

    const audio = audioElementsRef.current[soundId];
    if (!audio) return;

    audio.volume =
      (value / 100) *
      (masterAudioSettingsRef.current.isMuted
        ? 0
        : masterAudioSettingsRef.current.masterVolume);

    if (value > 0 && audio.paused) {
      audio.play().catch(() => {});
    } else if (value === 0) {
      audio.pause();
    }
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
            aria-label={`Volume: ${sound.title}`}
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
