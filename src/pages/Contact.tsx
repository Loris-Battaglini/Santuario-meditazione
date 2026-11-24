import { useState, type FormEvent } from "react";
import styled from "styled-components";
import treeArt from "../assets/svg/GoldTree.svg";
import { theme } from "../style/theme";

const contactEmail = "ciao@santuariomeditazione.it";
const instagramUrl = "https://www.instagram.com/";
const youtubeUrl = "https://www.youtube.com/";

const Page = styled.main`
  width: min(100%, 72rem);
  margin: 0 auto;
  padding: clamp(2.5rem, 7vw, 5rem) 0;

  @media (min-width: 48.0625rem) {
    position: relative;
    isolation: isolate;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: clamp(2rem, 7vw, 6rem);

  @media (max-width: 47.5rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Intro = styled.section`
  position: relative;
  min-height: 100%;
  padding: 1rem 0 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.2;
  }

  > p {
    max-width: 32rem;
    color: ${theme.colors.testoSecondary};
    font-size: 1.05rem;
  }
`;

const ContactDetails = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;

  h2 {
    margin-bottom: 0.4rem;
    color: ${theme.colors.testoSecondary};
    font-size: 0.8rem;
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  a {
    color: ${theme.colors.text};
    text-decoration-color: ${theme.colors.border};
    text-underline-offset: 0.2em;
  }

  a:hover,
  a:focus-visible {
    color: ${theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

const BranchArt = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(58%, 19rem);
  height: auto;
  opacity: 0.28;
  pointer-events: none;

  @media (max-width: 47.5rem) {
    width: min(42%, 12rem);
  }

  @media (min-width: 48.0625rem) {
    position: fixed;
    z-index: -1;
    right: auto;
    bottom: 0;
    left: max(1.5rem, calc((100vw - 72rem) / 2));
    width: min(60vw, 60vh, 80rem);
  }
`;

const FormPanel = styled.section`
  padding: clamp(1.25rem, 4vw, 2rem);
  background-color: ${theme.colors.secondary};
  border: 0.0625rem solid ${theme.colors.border};
  border-radius: 0.875rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1.15rem;
`;

const Field = styled.div`
  display: grid;
  gap: 0.45rem;

  label {
    font-size: 0.9rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 0.85rem;
    color: ${theme.colors.text};
    font: inherit;
    background-color: ${theme.colors.primary};
    border: 0.0625rem solid ${theme.colors.border};
    border-radius: 0.5rem;

    &:focus-visible {
      border-color: ${theme.colors.accent};
      outline: 0.125rem solid ${theme.colors.accent};
      outline-offset: 0.125rem;
    }
  }

  select {
    color-scheme: dark;
  }

  textarea {
    min-height: 9rem;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  justify-self: start;
  padding: 0.75rem 1.15rem;
  color: ${theme.colors.primary};
  font: inherit;
  font-weight: 600;
  background-color: ${theme.colors.iconaETimer};
  border: 0.0625rem solid ${theme.colors.accent};
  border-radius: 0.5rem;

  &:hover,
  &:focus-visible {
    background-color: transparent;
    color: ${theme.colors.accent};
    outline: 0.125rem solid ${theme.colors.accent};
    outline-offset: 0.125rem;
  }
`;

const Confirmation = styled.p`
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  color: ${theme.colors.text};
  background-color: ${theme.colors.primary};
  border: 0.0625rem solid ${theme.colors.accent};
  border-radius: 0.5rem;

  a {
    display: inline-block;
    margin-top: 0.35rem;
    color: ${theme.colors.accent};
    text-underline-offset: 0.2em;
  }
`;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Page>
      <ContactGrid>
        <Intro>
          <h1>Parliamone con calma.</h1>
          <p>
            Hai una domanda su una pratica, vuoi esplorare un percorso
            individuale o proporre una collaborazione? Scrivimi: sarà un piacere
            ascoltarti.
          </p>

          <ContactDetails>
            <div>
              <h2>Email</h2>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div>
              <h2>Seguimi</h2>
              <SocialLinks>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={youtubeUrl} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </SocialLinks>
            </div>
          </ContactDetails>

          <BranchArt src={treeArt} alt="" aria-hidden="true" />
        </Intro>

        <FormPanel>
          <h2>Scrivimi un messaggio</h2>
          <ContactForm onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
              />
            </Field>

            <Field>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </Field>

            <Field>
              <label htmlFor="contact-reason">Motivo del contatto</label>
              <select
                id="contact-reason"
                name="reason"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Seleziona un motivo
                </option>
                <option>Domande sulle pratiche</option>
                <option>Sessioni private / Percorsi</option>
                <option>Collaborazioni</option>
                <option>Altro</option>
              </select>
            </Field>

            <Field>
              <label htmlFor="contact-message">Messaggio</label>
              <textarea id="contact-message" name="message" rows={5} required />
            </Field>

            <SubmitButton type="submit">invia il messaggio</SubmitButton>
          </ContactForm>

          {submitted && (
            <Confirmation role="status" aria-live="polite">
              Grazie per aver compilato il messaggio. Per ora questo modulo non
              invia email: puoi contattarmi direttamente a{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Intanto,
              concediti una pausa e goditi un po' di musica rilassante dalla
              Home.
              <br />
            </Confirmation>
          )}
        </FormPanel>
      </ContactGrid>
    </Page>
  );
}
