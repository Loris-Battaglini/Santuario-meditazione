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
  grid-column: 2;
  grid-row: 1;
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

const HeaderTop = styled.div`
  display: contents;

  @media (max-width: 640px) {
    display: flex;
    grid-column: 1 / -1;
    grid-row: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  gap: 0.5rem;

  @media (max-width: 640px) {
    justify-self: auto;
  }
`;

const VolumeSlider = styled.input`
  width: 90px;
  cursor: pointer;
`;

const BrandIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1;
  grid-row: 1;
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
      <HeaderTop>
        <BrandIcon aria-label="Santuario meditazione">
          <MdTempleBuddhist size={38} aria-hidden="true" />
        </BrandIcon>
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
            aria-label="Volume generale"
            value={isMuted ? 0 : masterVolume}
            onChange={(e) => onChangeVolume(Number(e.target.value))}
          />
        </VolumeBox>
      </HeaderTop>
      <Nav>
        <NavItem to="/">Casa</NavItem>
        <NavItem to="/practice">Esercizi</NavItem>
        <NavItem to="/contact">Contatti</NavItem>
      </Nav>
    </Header>
  );
}
