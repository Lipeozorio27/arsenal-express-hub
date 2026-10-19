# Migração Arsenal Express (GitHub → Lovable)

- [ ] Instalar deps (mediabunny, zustand, jszip, framer-motion, react-hook-form, zod, radix)
- [ ] Aplicar schema no Supabase (profiles, projects, assets, scenes, renders, ai_generations + buckets media/renders/sfx-custom)
- [ ] Copiar web/{components,lib,types,hooks} → src/ e adaptar imports (next/* → tanstack, supabase client)
- [ ] Portar globals.css → src/styles.css (Tailwind v4)
- [ ] Copiar public/ (sfx, ícones)
- [ ] Rotas: /, /auth, /dashboard, /project/$id, /tiktok
- [ ] Remover código do agendador antigo (tiktok.functions, postzen, rotas antigas)
- [ ] Typecheck + verificação no navegador
- [ ] Handoff: pedir exports de dados do Supabase antigo
