// qui metto i colori e le font del tema Santuario (dark + legno caldo + ambra)
export const theme = {
  colors: {
    primary: "#120e0b", // legno scuro
    secondary: "#1c1510", // card e pannelli legno caldo
    background: "#261d16", // hoover
    border: "#3a2c20", // bordo legno
    text: "#f3ece4", // testo avorio caldo
    testoSecondary: "#a89888", // testo ambra
    accent: "#ffbf00", // ambra
    iconaETimer: "#d6b879",
  },
  fonts: {
    primary: "Lora, serif", //headings e titoli
    secondary: "Inter, sans-serif", //body e testi
  },
};

export type Theme = typeof theme;
