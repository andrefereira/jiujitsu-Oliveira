// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// Preencha com os dados do seu projeto:
// Firebase Console > Configurações do projeto > Seus apps > SDK setup and configuration
// ============================================================
window.FIREBASE_CONFIG = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Lista de habilidades técnicas avaliadas (pode editar livremente).
// "categoria" agrupa a habilidade no gráfico radar.
// IMPORTANTE: se editar esta lista, repita a edição ao semear a coleção
// "skills" no Firestore (veja GUIA_DEPLOY.md).
window.SKILL_CATALOG_SEED = [
  { nome: "Guarda Fechada", categoria: "Guarda" },
  { nome: "Guarda Aberta", categoria: "Guarda" },
  { nome: "Passagem de Guarda", categoria: "Passagem" },
  { nome: "Raspagens (Sweeps)", categoria: "Raspagem" },
  { nome: "Quedas (Takedowns)", categoria: "Queda" },
  { nome: "Controle na Montada", categoria: "Controle" },
  { nome: "Pegada nas Costas", categoria: "Controle" },
  { nome: "Finalizações de Braço", categoria: "Finalização" },
  { nome: "Finalizações de Perna", categoria: "Finalização" },
  { nome: "Estrangulamentos", categoria: "Finalização" },
  { nome: "Defesa Pessoal", categoria: "Defesa" },
  { nome: "Fuga de Posições Ruins", categoria: "Defesa" }
];

// Cores por faixa (tons foscos, como tecido real — usadas no belt-swatch)
window.BELT_COLORS = {
  "Branca": "#EDE9DC",
  "Cinza":  "#8B8377",
  "Amarela":"#C9A227",
  "Laranja":"#B5651D",
  "Verde":  "#3E6B4A",
  "Azul":   "#1D4E7A",
  "Roxa":   "#5B3E73",
  "Marrom": "#5E3A22",
  "Preta":  "#1C1913"
};

// Ordem oficial de graduação adulta, usada na "escada de faixas"
window.BELT_ORDER = ["Branca","Azul","Roxa","Marrom","Preta"];
