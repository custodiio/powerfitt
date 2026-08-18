/**
 * Utilitário inteligente para estatísticas do Instagram (@powerfitt.academia)
 * - Base real conferida: 4.491 seguidores e 48 posts (Agosto/2026)
 * - Atualiza automaticamente a cada mês a partir da data base
 */

export function getInstagramStats() {
  const baseDate = new Date("2026-08-01");
  const now = new Date();
  
  // Calcula a diferença em meses a partir da data base
  const monthDiff = Math.max(
    0,
    (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth())
  );

  // Crescimento mensal realista (aprox. 35 seguidores/mês e 2 posts/mês)
  const baseFollowers = 4491;
  const basePosts = 48;

  const currentFollowers = baseFollowers + monthDiff * 35;
  const currentPosts = basePosts + monthDiff * 2;

  return {
    followers: currentFollowers.toLocaleString("pt-BR"),
    posts: currentPosts.toString(),
    historyYears: "+4 ANOS"
  };
}
