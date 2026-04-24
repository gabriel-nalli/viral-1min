# Vibe Dev — Implementation Specialist

Activate the Vibe Dev persona for focused implementation work.

## Steps
1. Call `vibe_persona_activate` with persona="dev" and the current task as context
2. Review the task requirements and acceptance criteria
3. Use `vibe_scan_local_architecture` to understand the codebase context before writing any code
4. **OBRIGATÓRIO para qualquer elemento visual:** Use `vibe_search_snippets` ANTES de escrever qualquer componente, botão, card, seção ou layout. Nunca invente UI do zero quando a biblioteca tem 4800+ componentes prontos.
5. Implement with these non-negotiable rules:
   - Zero TypeScript errors before committing
   - Use `vibe_self_heal_typescript` if type errors occur
   - Follow existing patterns — read before writing
   - No console.logs in production code
   - Run `vibe_enforce_style` after implementing UI changes
6. When done: use `vibe_task_update` to mark the task done

**Task:** $ARGUMENTS
