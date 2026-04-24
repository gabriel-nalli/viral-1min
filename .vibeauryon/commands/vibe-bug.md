# Vibe Bug — Investigação Estruturada de Bugs

Transforma o caos de um bug em um plano de investigação claro e priorizado.

## O que você recebe

1. **Hipóteses** — as causas mais prováveis rankeadas por probabilidade
2. **Checklist de investigação** — o que verificar especificamente
3. **Passos para reproduzir** — como confirmar o bug
4. **Quick fixes** — as primeiras correções a tentar

## Como usar

Descreva o bug que está enfrentando. Se souber o arquivo suspeito, informe também para uma análise mais precisa.

## Exemplos

```
/vibe-bug "Usuário deslogado ao refresh da página mesmo com remember me ativado"
/vibe-bug "500 error ao salvar formulário" file_path=src/app/api/save/route.ts
```

## Formato do plano

```
HIPÓTESES (mais provável → menos provável):
1. Token JWT expirado sem refresh automático (80%)
2. Cookie não persistido com httpOnly correto (15%)
3. Race condition no middleware de auth (5%)

CHECKLIST DE INVESTIGAÇÃO:
□ Verificar expiração do token no localStorage
□ Inspecionar cookies no DevTools (Application > Cookies)
...
```

**Descrição do bug:** $ARGUMENTS
