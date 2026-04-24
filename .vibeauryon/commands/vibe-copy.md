# Vibe Copy — Escritor de Copy para UI

Escreve copy para qualquer elemento de interface: botões, mensagens de erro, empty states, onboarding, CTAs.

## Tons disponíveis

- `friendly` — conversacional, acolhedor, humano (padrão)
- `professional` — formal, corporativo, sério
- `bold` — direto, energético, impactante
- `minimal` — curto, objetivo, sem floreios

## Como usar

Descreva o que você precisa. O VibeAuryon retorna múltiplas variantes com a justificativa de cada uma.

## Exemplos de uso

```
/vibe-copy "mensagem de erro quando email já existe no cadastro"
/vibe-copy "CTA do plano premium na página de pricing" tone=bold variants=5
/vibe-copy "empty state da lista de projetos quando não há nenhum" tone=friendly
/vibe-copy "tooltip do botão de deletar conta" tone=professional
```

## Exemplo de saída

```
Contexto: mensagem de erro email já cadastrado

Variante 1: "Esse email já tem uma conta. Que tal fazer login?"
→ Redireciona pro próximo passo sem frustrar o usuário

Variante 2: "Email já cadastrado — acesse sua conta ou redefina a senha."
→ Mais direto, oferece duas saídas claras

Variante 3: "Parece que você já está aqui! Faça login para continuar."
→ Tom leve, transforma erro em boa notícia
```

**Descreva o copy que precisa:** $ARGUMENTS
