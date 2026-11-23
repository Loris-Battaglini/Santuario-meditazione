import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../style/theme";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// prendo nav con lettera maiuscola iniziale grazie a styled-components, così posso usare Nav come componente React e non come tag HTML.
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const VolumeSlider = styled.input`
  width: 90px;
  cursor: pointer;
`;

interface NavbarProps {
  masterVolume: number;
  isMuted: boolean;
  onChangeVolume: (value: number) => void;
  onToggleMute: () => void;
}

export function Navbar({
  masterVolume,
  isMuted,
  onChangeVolume,
  onToggleMute,
}: NavbarProps) {
  return (
    <Header>
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <VolumeBox>
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={isMuted ? "Riattiva audio" : "Silenzia tutto"}
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
        <VolumeSlider
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : masterVolume}
          onChange={(e) => onChangeVolume(Number(e.target.value))}
        />
      </VolumeBox>
    </Header>
  );
}
