export interface PracticePose {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  cover: string;
  videoSrc: string | null;
}

// Aggiungi i file in public/media/practice e aggiorna questi percorsi locali.
export const practicePoses: PracticePose[] = [
  {
    id: "tadasana",
    title: "Tadasana · Posizione della montagna",
    description: "Una posizione in piedi per ritrovare stabilità e presenza.",
    instructions: [
      "Stai in piedi con i piedi paralleli, alla larghezza dei fianchi.",
      "Distribuisci il peso su entrambi i piedi e allunga la schiena.",
      "Lascia le spalle morbide e respira senza forzare.",
    ],
    cover: "/media/practice/tadasana.jpg",
    videoSrc: null, // Inserisci qui, ad esempio, "/media/practice/tadasana.mp4".
  },
  {
    id: "balasana",
    title: "Balasana · Posizione del bambino",
    description: "Una pausa raccolta e confortevole per rilassare il corpo.",
    instructions: [
      "Inginocchiati e avvicina gli alluci, lasciando spazio tra le ginocchia.",
      "Porta lentamente il busto in avanti, appoggiandolo dove è comodo.",
      "Rilassa braccia e spalle e mantieni un respiro naturale.",
    ],
    cover: "/media/practice/balasana.jpg",
    videoSrc: null, // Inserisci qui il percorso del video locale.
  },
  {
    id: "adho-mukha-svanasana",
    title: "Adho Mukha Svanasana · Cane a testa in giù",
    description:
      "Un allungamento attivo e rigenerante per sciogliere la schiena e risvegliare il corpo.",
    instructions: [
      "Parti in quadrupedia con i polsi sotto le spalle e le ginocchia allineate alle anche.",
      "Punta i piedi a terra, solleva il bacino verso l'alto e spingi leggermente il petto verso le cosce.",
      "Mantieni un leggero micro-piegamento alle ginocchia se serve e accompagna il movimento con respiri profondi.",
    ],
    cover: "/media/practice/adho-mukha-svanasana.jpg",
    videoSrc: null, // Inserisci qui il percorso del video locale.
  },
  {
    id: "virabhadrasana-ii",
    title: "Virabhadrasana II · Guerriero II",
    description: "Una posizione ampia per esplorare equilibrio e radicamento.",
    instructions: [
      "Divarica le gambe e ruota un piede verso l'esterno.",
      "Piega il ginocchio in direzione del piede, senza forzare l'ampiezza.",
      "Apri le braccia all'altezza delle spalle e mantieni il busto comodo.",
    ],
    cover: "/media/practice/virabhadrasana-ii.jpg",
    videoSrc: null, // Inserisci qui il percorso del video locale.
  },
  {
    id: "vrksasana",
    title: "Vrksasana · Posizione dell'albero",
    description: "Un esercizio di equilibrio da adattare alle proprie possibilità.",
    instructions: [
      "Radicati su un piede mantenendo lo sguardo su un punto stabile.",
      "Appoggia l'altro piede alla caviglia o al polpaccio, mai sul ginocchio.",
      "Unisci le mani o tienile aperte per aiutarti a mantenere l'equilibrio.",
    ],
    cover: "/media/practice/vrksasana.jpg",
    videoSrc: null, // Inserisci qui il percorso del video locale.
  },
  {
    id: "savasana",
    title: "Savasana · Posizione del rilassamento",
    description: "Una postura distesa per concludere la pratica con calma.",
    instructions: [
      "Sdraiati sulla schiena e trova una posizione comoda.",
      "Lascia le gambe distese e le braccia rilassate lungo il corpo.",
      "Ammorbidisci il respiro e resta nella posizione per qualche istante.",
    ],
    cover: "/media/practice/savasana.jpg",
    videoSrc: null, // Inserisci qui il percorso del video locale.
  },
];
