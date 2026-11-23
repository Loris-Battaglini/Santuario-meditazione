import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../style/theme";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdTempleBuddhist } from "react-icons/md";

// prendo nav con lettera maiuscola iniziale grazie a styled-components, così posso usare Nav come componente React e non come tag HTML.
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  justify-self: center;

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

const NavItem = styled(NavLink)`
  padding: 0.5rem 0.75rem;
  color: ${theme.colors.testoSecondary};
  text-decoration: none;
  border-radius: 999px;
  transition:
    color 150ms ease,
    background-color 150ms ease;

  &:hover {
    color: ${theme.colors.text};
    background-color: ${theme.colors.secondary};
  }

  &.active {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 1rem clamp(1rem, 4vw, 2.5rem);
  background-color: ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.border};

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    row-gap: 0.75rem;
  }
`;

const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.5rem;

  @media (max-width: 640px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const VolumeSlider = styled.input`
  width: 90px;
  cursor: pointer;
`;

const BrandIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.iconaETimer};
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
      <BrandIcon aria-label="Santuario meditazione">
        <MdTempleBuddhist size={38} aria-hidden="true" />
      </BrandIcon>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/practice">Practice</NavItem>
        <NavItem to="/contact">Contact</NavItem>
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
