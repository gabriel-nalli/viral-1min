# Vibe PR — Descrição de Pull Request

Gera uma descrição completa de PR pronta para colar no GitHub, GitLab ou Bitbucket.

## O que é gerado

- **Título** no formato Conventional Commits
- **Resumo** em bullet points — o que mudou e por quê
- **Plano de testes** — checklist do que foi testado
- **Breaking changes** — se houver mudanças que quebram compatibilidade

## Como usar

1. Garanta que seus commits estão no branch atual
2. Chame `vibe_pr_description` (sem parâmetros)
3. Copie o resultado e cole na abertura do PR

O VibeAuryon analisa automaticamente:
- `git log main..HEAD --oneline` — commits do branch
- `git diff main...HEAD --stat` — arquivos modificados

## Exemplo de saída

```
**Título:** feat(auth): adicionar autenticação com Google OAuth

**Resumo:**
- Integração com Google OAuth 2.0 via NextAuth
- Nova rota /api/auth/[...nextauth] configurada
- Atualização do schema de usuários com campo provider

**Plano de testes:**
- [ ] Login com conta Google funciona
- [ ] Sessão persiste após refresh
- [ ] Logout limpa session corretamente
```

**Contexto adicional (opcional):** $ARGUMENTS
