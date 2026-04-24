# Vibe Landing — Generate Landing Page

Generate a complete, production-ready landing page section or full page.

## Steps
1. Use `vibe_get_architecture` to load the design system
2. Use `vibe_search_snippets` to find relevant hero, features, CTA, and testimonial components
3. Use `vibe_compose_landing_page` to assemble the page with:
   - Hero section with clear value proposition
   - Feature highlights (3–6 items)
   - Social proof / testimonials
   - CTA section
   - Footer
4. Ensure SEO metadata via `vibe_enforce_seo_metadata`
5. Run `vibe_audit_accessibility` for WCAG compliance
6. Run `vibe_enforce_style` for design system consistency

**Page description / product:** $ARGUMENTS
