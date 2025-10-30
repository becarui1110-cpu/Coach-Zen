import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// === 🧠 Prompts rapides visibles sur l’écran d’accueil ===
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Que penses-tu de Dark Vador ?",
    prompt: "Que penses-tu de Dark Vador, maître Yoda ?",
  },
  {
    label: "Et Chuck Norris ?",
    prompt: "Chuck Norris, que dis-tu, Yoda ?",
  },
];

// === 💬 Texte par défaut dans la barre de saisie ===
export const PLACEHOLDER_INPUT = "Une idée, tu as ? Parle, tu dois.";

// === 👋 Message d’accueil du chatbot ===
export const GREETING =
  "Hmm... Bienvenue chez Dreem, jeune créatif tu es. L’agent Yoda je suis. Inspiration, humour et sagesse en une phrase, tu recevras.";

// === 🎨 Thème du chat ===
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 250,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#FF7FE8" : "#24FF8C", // Couleurs Dreem
      level: 1,
    },
  },
  radius: "round",
  // chatkit.studio/playground pour explorer les options
});
