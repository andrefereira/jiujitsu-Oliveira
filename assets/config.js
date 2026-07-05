// ============================================================
// CONFIGURAÇÃO DO SUPABASE
// Preencha com os dados do seu projeto (Settings > API no painel Supabase)
// ============================================================
window.SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
window.SUPABASE_ANON_KEY = "SUA_CHAVE_ANON_PUBLICA";

// Lista de habilidades técnicas avaliadas (pode editar livremente).
// "categoria" agrupa a habilidade no gráfico radar.
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
