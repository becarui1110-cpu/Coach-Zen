import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// === 🌱 Prompts rapides (écran d’accueil) ===
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Respire un instant",
    prompt:
      "Guide-moi dans une courte respiration apaisante, pour relâcher la tension et retrouver ma présence.",
  },
  {
    label: "Reviens au calme",
    prompt:
      "Aide-moi à me recentrer avec douceur. Trois étapes simples pour apaiser l’esprit et relâcher le corps.",
  },
  {
    label: "Commencer la journée en paix",
    prompt:
      "Propose-moi une routine matinale légère et lumineuse pour bien démarrer la journée, même si j’ai peu de temps.",
  },
  {
    label: "Alléger le stress",
    prompt:
      "J’ai une montée de stress. Offre-moi une micro-pratique immédiate pour retrouver sérénité et ancrage.",
  },
];

// === 💬 Texte par défaut dans la barre de saisie ===
export const PLACEHOLDER_INPUT =
  "Une pause, un souffle, une intention… Que souhaites-tu apaiser ou nourrir ?";

// === 👋 Message d’accueil du chatbot ===
export const GREETING =
  "Bienvenue chez Coach Zen 🌿\n\nRespire doucement… ici, tout ralentit. Chaque mot t’invite à te recentrer, à retrouver ton souffle, et à avancer avec clarté et douceur.";

// === 🎨 Thème du chat (harmonieux et apaisant) ===
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 200,
      tint: 8,
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#A5C9CA" : "#7AD1C0", // tons bleu-vert doux
      level: 1,
    },
  },
  radius: "round",
  // Palette inspirée du calme : verts tendres et bleus d’eau
});
