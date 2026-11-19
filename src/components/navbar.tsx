import {NavLink} from "react-router-dom";
import {styled} from "styled-components";
import { theme } from "../style/theme";


// prendo nav con lettera maiuscola iniziale grazie a styled-components, così posso usare Nav come componente React e non come tag HTML.
const Nav = styled.nav`
  display: flex;
  justify-content: center;
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


export function Navbar() {
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
    <div>
      <button>Volume</button>
    </div>
    </Header>
  );
}
