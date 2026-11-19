import {NavLink} from "react-router-dom";
import {styled} from "styled-components";


// prendo nav con lettera maiuscola iniziale grazie a styled-components, così posso usare Nav come componente React e non come tag HTML.
const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
