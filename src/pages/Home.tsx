import styled from "styled-components";

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
        <button>qui metto il timer</button>
      </div>
      <div>
        <h2>rilassati con il tuo audio personalizzato</h2>
        <button>Ascolta l'audio</button>
      </div>
    </SanctuaryContainer>
  );
}
