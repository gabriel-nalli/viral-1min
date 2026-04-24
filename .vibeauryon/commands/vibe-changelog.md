# Vibe Changelog — Notas de Release

Gera uma entrada de CHANGELOG a partir do histórico git, agrupado por tipo de mudança.

## Formatos suportados

- `keepachangelog` — formato padrão do keep-a-changelog.com (padrão)
- `markdown` — markdown simples com seções por tipo

## Commits agrupados por tipo

- ✨ **Added** — novas features (commits `feat:`)
- 🐛 **Fixed** — correções de bugs (commits `fix:`)
- ♻️ **Changed** — mudanças em features existentes (commits `refactor:`)
- 📚 **Docs** — documentação (commits `docs:`)
- 🔧 **Chore** — manutenção e dependências (commits `chore:`)

## Como usar

Chame `vibe_changelog_generate`. Por padrão, usa a última tag git como ponto de partida.

```
/vibe-changelog
/vibe-changelog since=v1.2.0
/vibe-changelog since=2025-01-01 format=markdown
```

## Exemplo de saída

```markdown
## [Unreleased] - 2025-03-21

### Added
- feat(auth): login com Google OAuth

### Fixed
- fix(cart): total calculado incorretamente com desconto
```

**Desde (tag/commit/data, opcional):** $ARGUMENTS
