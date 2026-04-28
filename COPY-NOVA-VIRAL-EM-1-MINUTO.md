# VIRAL EM 1 MINUTO — Reformulação Completa da Página de Vendas

> **O que esse documento entrega:**
> 1. Auditoria dos pontos onde a copy atual ESTÁ CLONADA da página da Bela Flor (e o que precisa mudar JÁ).
> 2. Reposicionamento estratégico (por que o concorrente é uma commodity e como o seu produto é categoria diferente).
> 3. Copy nova, seção por seção, pronta para colar no `sections.jsx` — alinhada à VSL do Thaylor e diferenciada do concorrente.
> 4. Recomendações táticas de UX, prova social e oferta.

---

## 0. PRINCÍPIO QUE REGE TUDO: FALA A LÍNGUA DELA

A sua cliente não é burra — ela é **ocupada**. Está atendendo cliente, respondendo WhatsApp, comprando material, cuidando de casa. Ela não passou a manhã num evento de tech aprendendo o que é "SaaS", "ecossistema", "stack" ou "dashboard". Quando ela lê uma palavra dessas na tela, ela **não fica burra — ela fica entediada**, e fecha a aba.

Copy de venda boa **traduz tudo pra linguagem que ela usa no dia a dia**. Ninguém respeita mais a inteligência da cliente do que o copywriter que se dá o trabalho de falar a língua dela.

### Tabela de tradução — use essa religiosamente

| ❌ Jargão (NUNCA usa em copy de venda) | ✅ Linguagem dela (USA sempre) |
|---|---|
| Infosaas / SaaS | "Curso + app + mentoria num lugar só" / "no seu celular" |
| Ecossistema | "Tudo num lugar só" / "esse pacote completo" |
| Plataforma integrada | "Tudo no mesmo app" |
| Stack / ferramentas integradas | "Não precisa abrir 5 coisas diferentes" |
| Dashboard | "Painel que mostra seus números" / "tela onde você vê o que viralizou" |
| Kanban | "Quadro pra organizar seus vídeos" / "tipo um quadro de tarefas" |
| Gamificação | "Vira jogo" / "fica leve, parece brincadeira" / "como joguinho" |
| Onboarding | "Primeiros passos" / "começar" |
| Agente de IA | "IA treinada que entende o seu nicho" |
| Algoritmo de recomendação | "O Instagram entrega seu vídeo pra desconhecidos" |
| Modo Recomendação | "O feed novo do Instagram" / "o feed que entrega pra desconhecido" |
| Stack de produtividade | "Suas ferramentas" |
| Engagement / engagement rate | "Quanto a galera curte, comenta e compartilha" |
| Funil | "O caminho que a cliente faz até comprar" |
| Lead | "Pessoa interessada" |
| Conversão | "Pessoa que comprou" |
| Branding / posicionamento | "Como as pessoas te enxergam" / "sua imagem" |
| ROI | "O retorno do que você investiu" |
| Workflow | "Seu fluxo de trabalho" / "como você faz no dia a dia" |
| Pipeline | "Sua fila de coisas pra fazer" |

**Regra de bolso:** se sua mãe (ou tia, ou qualquer mulher de 35-55 que não trabalha com tech) não entenderia a palavra de cara, **troca.** Não tem exceção.

> Esse documento ainda usa termos técnicos quando estou falando com VOCÊ (o copywriter / dono do produto), pra você entender a estratégia. Mas em TODA frase que aparece como copy pronta pra colar (geralmente em blockquote), eu já traduzi pra linguagem dela. Se achar alguma sobrando, troca também.

---

## 1. AUDITORIA: O QUE ESTÁ CLONADO DA BELA FLOR

A página atual herdou copys que aparecem **literalmente iguais** ou com troca mínima de palavra na página `belaflorbeauty.com/VSLTESTE/`. Isso te coloca em risco de:
- Anúncio reprovado por duplicidade (Meta/Facebook compara landing pages).
- Perda de autoridade aos olhos de quem clica nas duas (e clica, porque rodam no mesmo público).
- Posicionamento como "cópia" de quem você na verdade veio para superar.

### 1.1. Clones EXATOS (precisa mudar HOJE)

| # | Onde está na sua página | Texto atual | Texto na Bela Flor | Severidade |
|---|---|---|---|---|
| 1 | `<title>` do `index.html` | `Viralize sem edição, sem dancinha, sem anúncio` | `sem editar, sem dançar, sem anúncio` | 🔴 ALTA |
| 2 | Hero subhead (`hero-sub`) | `Todos os dias roteiros virais prontos + stories que vendem e lotam agenda.` | `90 dias de roteiros virais prontos + stories que vendem e lotam agenda — sem editar, sem dançar, sem anúncio.` | 🔴 ALTA |
| 3 | GlassCard #1 do Hero | `90 dias de roteiros virais prontos — um por dia, já no app` | `✓ 90 dias de roteiros prontos` | 🔴 ALTA |
| 4 | Garantia (Hero meta + Pricing + FinalCTA) | `Garantia de 30 dias · Cancela quando quiser` | `🔒 Garantia de 30 dias · Cancela quando quiser` | 🟠 MÉDIA |
| 5 | Subhead da seção Results | `Sem equipe de filmagem. Sem pagar anúncio. Sem virar blogueira de trend.` | `Sem equipe de câmera. Sem pagar anúncio. Sem virar blogueira de trend.` | 🔴 ALTA (só trocou 1 palavra) |
| 6 | Marquee | `USE EM QUALQUER NICHO · VIRALIZE AINDA HOJE` (presumido pela presença do `<Marquee />`) | `USE EM QUALQUER NICHO · VIRALIZE AINDA HOJE` (repetido 6x) | 🔴 ALTA |
| 7 | Estrutura dos Student Cards | `Antes XXX seguidores → Depois XXX Seguidores` em card glass | `🔴 Antes 1.247 views → 🟢 Depois 669 mil views` | 🟠 MÉDIA (mesmo padrão visual) |
| 8 | Comparison row | `Roteiros virais prontos diariamente` | `90 dias de roteiros prontos` | 🟠 MÉDIA |
| 9 | Comparison row | `Stories que vendem em qualquer nicho` (linha estilo bullet) | `Stories que vendem em qualquer nicho` | 🔴 ALTA |
| 10 | FAQ #1 | `Serve para qualquer nicho? Sim. Os formatos do App Viral foram testados...` | Mesmo argumento ("USE EM QUALQUER NICHO" do concorrente) | 🟠 MÉDIA |

### 1.2. Estruturas/blocos com risco de plágio visual
- **Marquee horizontal** com 6 repetições da mesma frase (idêntico padrão).
- **Cards Antes/Depois** com pílula vermelha + pílula verde (mesma layout).
- **Selo "🔒 Garantia de 30 dias"** com mesmo cadeado.
- **Bullets com check verde no Hero** (mesmo template visual).

### 1.3. O que FAZER com cada clone
Coloquei a substituição direta na seção 3 deste documento. **Regra geral:** o concorrente posiciona como "app de roteiros prontos para qualquer nicho". Você posiciona como **"tudo num lugar só pra profissional da beleza: curso + app + mentoria + IA, sem precisar abrir 5 ferramentas diferentes"**. Toda copy precisa puxar para esse novo eixo — é aí que você ganha o jogo.

> **🚫 NUNCA use os termos "infosaas", "ecossistema", "SaaS", "stack", "plataforma integrada" na copy de venda.** Sua cliente é uma profissional da beleza que está atendendo cliente, respondendo WhatsApp e cuidando da agenda — ela não está num evento de tecnologia decifrando sigla. Use a linguagem dela: *"tudo num lugar só"*, *"no seu celular"*, *"como ter uma equipe inteira"*, *"sem precisar mexer em 5 apps diferentes"*. Esses termos técnicos podem aparecer no pitch interno pro time, mas **NÃO** no que vai pra ela ler.

---

## 2. REPOSICIONAMENTO ESTRATÉGICO

### 2.1. O problema do posicionamento atual
Hoje a página vende "App + roteiros prontos + curso". Esse é exatamente o que o Bela Flor vende. **Você está competindo no mesmo argumento, com a mesma oferta visual.** Quem chega não vê motivo pra escolher.

### 2.2. O posicionamento que ganha
Você não tem **um app**. Você tem **o primeiro lugar onde curso, app, mentoria e IA estão juntos no mesmo celular** — feito especificamente pra profissional da beleza. É **uma categoria nova**.

*(Esse parágrafo é pra você entender o conceito. Na hora de escrever pra ela, fala assim: "É curso + app + mentoria + uma IA que entende o seu nicho — tudo num lugar só, no seu celular. Você abre uma vez e tem tudo.")*

**O argumento central muda de:**
> "Use roteiros prontos para viralizar"

**Para:**
> "Pare de pagar 7 ferramentas separadas. Tudo o que substituiria a equipe que você ainda não tem — num único lugar, no seu celular, feito pra profissional da beleza."

### 2.3. Os 5 diferenciais únicos (que o Bela Flor não tem)
1. **IA treinada na metodologia + 15 agentes especializados** (não é ChatGPT genérico).
2. **12 mentoras reais** — cada uma ensina o formato com o qual ela mesma viralizou.
3. **PET com IA que cresce com você** (bebê → adulto em 30 dias) — vira jogo, libera função nova a cada fase.
4. **Premiações por viralizar** — vídeo do dia / semana / mês ganha destaque na rede social interna.
5. **Rede social própria dentro do app** — não é grupo de WhatsApp, é uma comunidade fechada com feed, stories, posts.

E ainda: **Quadro pra organizar seus vídeos do roteiro até a postagem + Painel que mostra o que viralizou + Calendário que avisa no seu WhatsApp na hora certa + Biblioteca onde tudo fica salvo + Ferramenta que copia roteiro de qualquer reel viral + Workshop bônus**.

### 2.4. A história que ninguém pode copiar
A VSL já tem isso (parte 3): **Thaylor + Gabriel foram os bastidores que criaram a metodologia que outras pessoas venderam sem eles.** Essa narrativa de "eles me roubaram, eu reconstruí maior" é OURO de copy — porque é verdade, é específica, e impossível de clonar sem soar ridículo. **Use ela na página, não só no vídeo.**

---

## 3. NOVA COPY — SEÇÃO POR SEÇÃO

> Substitua o texto da coluna **DE** pelo da coluna **PARA** no `sections.jsx`. Mantenho a mesma estrutura de componentes pra você só trocar strings.

---

### 3.1. `<title>` (index.html)

**DE:**
> `Viral em 1 Minuto — Viralize sem edição, sem dancinha, sem anúncio`

**PARA:**
> `Viral em 1 Minuto — Curso + App + Mentoria no mesmo lugar (e te tira da invisibilidade no Instagram)`

---

### 3.2. UrgencyBar

**DE:**
> `ESSE VÍDEO SAI DO AR HOJE, [data]`

**PARA:**
> `ACESSO LIBERADO ATÉ 23H59 — DEPOIS, NOVO LOTE COM PREÇO REAJUSTADO`

*(Razão: o "sai do ar hoje" é sintoma de página de afiliado clonado — soa fake. "Lote com preço reajustado" é específico, defensável e cria urgência real.)*

---

### 3.3. HERO — Headline + Subhead + Bullets

**DE (todo o bloco):**
> Headline: "Seja viral em [60 segundos / 1 minuto] sem edição ou super produção"
> Subhead: "Todos os dias roteiros virais prontos + stories que vendem e lotam agenda. Referência viral + App viral = crescimento acelerado do seu perfil no Instagram."
> Bullets: "90 dias de roteiros virais prontos — um por dia, já no app" / "Copie o link de algum vídeo do seu instagram e tenha todo o roteiro para modelar em segundos" / "Grave em 1 minuto e viralize sem esforço"

**PARA:**

**Eyebrow (substitui "MÉTODO SECRETO DE VIRALIZAÇÃO"):**
> `TUDO NUM LUGAR SÓ · FEITO PRA BELEZA`

**Headline:**
> `Pare de tentar viralizar com [equipe que você não tem].`
> `(Esse app substitui ela.)`

*(O texto entre colchetes é o que troca via `<DigitalTyper>` — sugestões: "equipe que você não tem", "social media de R$2.500", "7 ferramentas pagas", "editor que você não pode contratar".)*

**Subhead:**
> Curso + IA que entende o seu nicho + 12 mentoras toda semana + comunidade própria + um pet que vira jogo. **Tudo o que substituiria a equipe inteira que faz a profissional grande crescer — num lugar só, no seu celular, por menos do que custa uma única ferramenta de IA solta.**

**Bullets (3 GlassCards):**
1. `IA treinada na metodologia gera seu roteiro em segundos — cole o link de qualquer reel viral e adapte pro seu nicho.`
2. `12 mentoras te acompanhando ao vivo toda semana — cada uma campeã do formato que ensina.`
3. `Grave em 1 minuto, sem cenário, sem edição. O Modo Recomendação faz o resto.`

**Hero meta (substitui "Garantia de 30 dias · Cancela quando quiser · Sem fidelidade"):**
> `7 dias para testar tudo por dentro · Reembolso garantido pela própria plataforma`

---

### 3.4. Marquee (`<Marquee />`)

**DE:** *(presumido)* `USE EM QUALQUER NICHO · VIRALIZE AINDA HOJE` (idêntico ao Bela Flor)

**PARA — alterne 4 frases diferentes:**
> `CURSO + APP + MENTORIA NO MESMO LUGAR · 12 MENTORAS REAIS · IA QUE ENTENDE O SEU NICHO · FEITO PRA QUEM ATENDE TODO DIA · DO BRASIL À ESPANHA`

---

### 3.5. WhyNotGrowing — "Porque você não cresce"

**Mantenha** os dois cards (Modo Invisível vs Modo Viral) — eles são bons.

**Subhead — DE:** "Seu perfil pode estar preso em um desses dois modos agora mesmo."

**PARA:**
> O algoritmo do Instagram tem dois feeds. O comum (que só mostra pra quem já te conhece) e o feed de recomendação (que entrega pra desconhecido). 9 em cada 10 profissionais da beleza ficam presas no primeiro — e culpam talento, câmera, edição. **A culpa não é sua. É da rota.**

**Bullets do Modo Invisível — Mantenha** (estão bons).

**Bullets do Modo Viral — DE → PARA:**
- `Entrega para desconhecidos — crescimento orgânico` → `Entrega pra quem nunca te viu — só assim chega cliente nova`
- `Esforço mínimo, resultado exponencial` → `Você grava em 1 min e o algoritmo trabalha 24h pra você`
- `Autoridade construída em semanas` → `Em 60 dias você é a referência que outras profissionais começam a copiar`
- `Vídeos com 100K+ views virou rotina` → `100 mil visualizações deixa de ser exceção e vira média`
- `Modo Recomendação ativado` → `Modo Recomendação destravado — pra sempre`

---

### 3.6. Results / Resultados Reais

**Headline — Mantenha:** "Esses perfis eram invisíveis. Hoje são virais." ✅ (essa é DIFERENTE do concorrente, não mexe)

**Subhead — DE:**
> `Usaram o App Viral em 1 Minuto. Sem equipe de filmagem. Sem pagar anúncio. Sem virar blogueira de trend.`

**PARA:**
> `Mesma realidade da sua: atendem cliente, respondem WhatsApp, fazem tudo sozinhas. Mudaram só uma coisa — o sistema. Em até 60 dias, perfil virou ativo de venda.`

**Cards de aluna — substitua os placeholders pelos dados reais da VSL:**

| Nome | Nicho | Antes | Depois | Tempo |
|---|---|---|---|---|
| Brenda | (definir nicho) | <1.000 seguidores | +21.000 seguidores | — |
| Alicia Ramirez | Cabeleireira (Espanha) | 19.000 | +180.000 | — |
| Daiane Oliveira | (definir) | ~1.000 | +25.900 | — |
| Flávia Maciel | (definir) | 2.000 | +10.000 | — |
| Eula Carvalho | Nail Designer | ~6.000 | +11.400 | <2 semanas |
| Karollin | (definir) | 1.000 | +5.000 | 1 semana |
| Dai Alves | (definir) | ~1.000 | +24.000 | <60 dias |

*(Esses números já estão na VSL — é só transferir pra cá. Fica MUITO mais forte do que "(NOME ALUNA 1)".)*

---

### 3.7. BigProof — Número grande

**Subhead — DE:** "profissionais da beleza já ativaram o Método Viral. Em todos os nichos. Do zero. Sem equipe. Sem anúncio."

**PARA:**
> `profissionais da beleza no Brasil, na Espanha e em vários países usaram a metodologia do Thaylor Jobs pra sair da invisibilidade. Mais de 1 bilhão de visualizações geradas com roteiros, formatos e estratégias dele.`

*(Use os números reais da VSL: +30 mil pessoas, +1 bilhão de visualizações.)*

---

### 3.8. HowItWorks — "Duas rotas. Um destino"

**Mantenha o título** ✅ (é diferente do concorrente)

**Subhead — DE:** "Pegue o link de um reel ou o roteiro do dia. Escolha quando gravar. O resto é deixar ir."

**PARA:**
> `Você não pensa o que postar nem onde organizar. O app faz: a IA escreve o roteiro, o quadro de organização separa pronto / agendado / postado, o calendário avisa no seu WhatsApp na hora, você grava em 1 minuto, e o painel mostra direitinho o que viralizou pra você repetir.`

**Card Rota 1 — Mantenha** ("Copie o link, IA vira roteiro") ✅

**Card Rota 2 — DE:** "Ou abre o app — Todo dia um roteiro viral novo pronto pro formato."

**PARA:**
> Headline: `Conversa com seu PET com IA`
> Sub: `Alimenta o pet, ele evolui (filhote → adulto), e em cada fase libera roteiros, hashtags virais, melhores horários e até um assistente que conversa com você.`

*(Por quê: o PET é o seu diferencial mais cativante e ninguém tem. Trazer ele pro fluxo principal vende sozinho.)*

**Etapa 02 — Mantenha** ("Escolha o dia de gravação" + WhatsApp) ✅

**Etapa 03 — Mantenha** ("Grava em 1 minuto") ✅

**Etapa 04 — DE:** "Posta e viraliza — Modo Recomendação ativado. Autoridade construída."

**PARA:**
> Headline: `Posta, mede e ganha`
> Sub: `Um painel mostra o que viralizou e o que não. Os vídeos mais vistos do dia, da semana e do mês aparecem em destaque na comunidade dentro do app — e ganham prêmio real.`

*(Você mencionou que o app premia quem viraliza. Isso PRECISA estar visível — é gatilho de gamificação puro.)*

---

### 3.9. Features — "O que você recebe"

**Headline — DE:** "Viral em 1 Minuto — curso + app + mentoria no mesmo lugar."

**PARA:**
> `Viral em 1 Minuto não é só um app. Não é só um curso. É os dois — e mais a mentoria, a IA, a comunidade. Tudo no mesmo lugar.`

**Subhead — DE:** "Pela primeira vez na área da beleza, tudo isso junto em um único acesso. Não é só curso. Não é só app."

**PARA:**
> `Tudo o que você precisaria contratar separado — roteirista, editor, social media, ferramenta de IA, plataforma de curso, mentoria, calendário, dashboard, comunidade — dentro de um único acesso. Por menos do que uma única dessas custaria.`

**Os 5 cards de features (`feat a, b, c, d, e`)** — reescreva assim:

#### Card A — substitui "Modelos que ativam o algoritmo"
- Tag: `15+ AGENTES DE IA TREINADOS`
- Título: `IA que entende o seu nicho, não o ChatGPT genérico`
- Texto: `15 agentes especializados — gancho viral, carrossel, roteiro do zero, adaptação por nicho, modelagem de reels colado por link. Treinados na metodologia que já gerou +1 bilhão de views.`

#### Card B — mantém o padrão dos roteiros, mas reposiciona
- Tag: `90 DIAS DE PRODUÇÃO PRONTA`
- Título: `Um roteiro viral novo a cada manhã, no seu WhatsApp`
- Texto: `Você acorda, abre o WhatsApp, o roteiro do dia já chegou. Adaptado pro seu nicho, no formato que o algoritmo está priorizando agora.`

*(Diferencial vs Bela Flor: lá são "90 dias de roteiros prontos" passivo. Aqui é entrega ativa via WhatsApp todo dia.)*

#### Card C — substitui "IA criando conteúdo por você"
- Tag: `PET COM IA · GAMIFICAÇÃO`
- Título: `Um pet inteligente que cresce com você e libera funções`
- Texto: `Customiza, dá nome, alimenta. Filhote libera legendas e hashtags. Jovem libera roteiros de stories. Adulto vira assistente virtual completo. Constância nunca foi tão leve.`

#### Card D — substitui "Método 1 minuto"
- Tag: `12 MENTORAS · 1 POR FORMATO`
- Título: `Cada formato viral ensinado por quem viralizou com ele`
- Texto: `Não é teoria de guru. É a Brenda ensinando o formato narrado, a Day Alves ensinando bastidores, a Carolyn ensinando problema-solução. 12 alunas que viraram referência ensinando você.`

#### Card E — substitui "Aulas gravadas + mentorias ao vivo"
- Tag: `REDE SOCIAL INTERNA + PRÊMIOS`
- Título: `Comunidade própria com premiação de viralização`
- Texto: `Não é grupo de WhatsApp. É um feed dentro do app — você posta resultado, recebe curtida, faz networking. Os vídeos mais virais do dia, da semana e do mês ganham destaque (e prêmio).`

---

### 3.10. Bloco "Desafio + Atualizações"

**Mantenha o Desafio 0→10K** ✅ (está bom)

**Adicionar um terceiro card — Organização + Resultado:**
- Tag: `ORGANIZAÇÃO COMPLETA`
- Título: `Quadro + Calendário + Painel de Resultado + Biblioteca`
- Texto: `Pare de salvar roteiro no bloco de notas do celular. Tudo aqui dentro: um quadro pra você arrastar do "ideia" pro "postado", um calendário que avisa no seu WhatsApp na hora certa, uma biblioteca onde cada roteiro fica salvo pra sempre, e um painel que mostra direitinho qual vídeo viralizou e qual não — pra você só repetir o que deu certo.`

---

### 3.11. Creator — Quem criou (REESCREVER COMPLETO — esse é seu maior diferencial)

**Headline — Mantém:** "A mente por trás do Viral em 1 Minuto" ✅

**Reescreve TODO o bloco do Thaylor com a história da VSL:**

> **Thaylor Jobs**
>
> Filho de cabeleireira. Cresceu dentro do mercado da beleza muito antes de entender algoritmo. Foi um dos primeiros a estruturar e ensinar o formato react no Brasil e na Espanha — quando a maioria ainda criticava esse tipo de conteúdo.
>
> Por anos, foi o nome dos bastidores: criava a metodologia, estruturava roteiros, montava ofertas. Mais de 30 mil profissionais aprenderam com métodos que ele ajudou a criar. Mais de 1 bilhão de views foram gerados com formatos que nasceram da mão dele.
>
> **Mas tinha um problema.** Outras pessoas levaram a fama. Em 2025, um aplicativo construído em cima de prompts, calendários e estruturas que Thaylor e Gabriel Nelly desenvolveram foi vendido sem eles. Sem a assinatura. Sem a frente.
>
> Eles tinham duas opções: parar e aceitar. Ou recomeçar e construir algo tão maior que ninguém pudesse confundir com "só mais um app".
>
> **Escolheram a segunda.** O Viral em 1 Minuto é o resultado.

**Stats — atualiza com números da VSL:**
- `+30K` profissionais formados
- `+1B` views gerados
- `+R$25M` faturados na beleza com a própria metodologia

**Adicionar bloco do Gabriel** (ele é o tech, não pode ficar de fora):
> **Gabriel Nelly · Mente técnica**
> O cérebro que transforma estratégia em ferramenta. Quem pegou cada metodologia do Thaylor e construiu o app que tira tudo da cabeça da profissional pra dentro de um sistema.

---

### 3.12. Comparison — Comparativo

**Headline — DE:**
> "R$37 é óbvio. É menos que o ChatGPT e entrega 10x mais."

**PARA:**
> `R$39,90/mês. Menos que UMA ferramenta de IA solta. E aqui você tem 15.`

**Tabela — reescreva as linhas:**

| Recurso | Viral em 1 Min | App de roteiros (concorrentes) | Curso tradicional |
|---|---|---|---|
| IA treinada na metodologia (15+ agentes) | ✓ | ✗ | ✗ |
| Roteiro novo todo dia no WhatsApp | ✓ | Parcial | ✗ |
| 12 mentoras especialistas em formato viral | ✓ | ✗ | ✗ |
| Pet que cresce com você (vira jogo) | ✓ | ✗ | ✗ |
| Rede social interna + premiação | ✓ | ✗ | ✗ |
| Quadro de organização + Painel de resultado + Calendário no WhatsApp | ✓ | ✗ | ✗ |
| Modelagem de reel viral por link | ✓ | ✗ | ✗ |
| Atualização constante do método | ✓ | ✗ | ✗ |
| Curso completo incluído | ✓ | ✗ | Pago à parte |
| Preço mensal | **R$39,90** | R$97+ | R$497+ |

*(Importante: NÃO cite o concorrente pelo nome. "App de roteiros" é genérico o suficiente pra incluir o Bela Flor sem nomear.)*

---

### 3.13. Pricing — Investimento

**Headline — DE:** "Ative o App Viral em 1 Minuto."

**PARA:**
> `Ative tudo o que substitui sua equipe — num lugar só.`

**ATENÇÃO — alinhar preços com a VSL:** sua VSL fala R$ 79,90/mês ou R$ 39,90/mês no anual. Sua página atual mostra R$47/R$37. **Precisa decidir qual é o oficial e padronizar** (recomendo o da VSL para não criar atrito quando o lead vem do vídeo).

**Plano Mensal:**
- Tier: `Mensal · Sem fidelidade`
- Preço: `R$ 79,90/mês`
- Subtítulo: `Pra testar tudo antes de comprometer o ano.`

**Plano Anual (popular):**
- Badge: `⚡ 50% PAGAM ESSE`
- Tier: `Anual · 2 meses grátis`
- Preço: `12x R$ 39,90/mês`
- Linha riscada: `de R$79,90 por R$39,90/mês · economia de R$480/ano`

**Bullets do plano popular — adicionar:**
- Acesso prioritário a novos formatos virais e atualizações
- Convite ao Workshop Agora Mentoras (Online — bônus garantido)
- Concorre a vaga no Workshop Agora Mentoras Presencial
- Pet com IA + 15 agentes treinados desde o dia 1

---

### 3.14. Guarantee — Garantia

**ATENÇÃO — INCONSISTÊNCIA com a VSL:** sua VSL fala em **7 dias de garantia pela própria plataforma**, mas a página fala em **30 dias**. **Padroniza nos 7 dias da VSL** (é mais honesto e evita refund-abuse).

**Reescreve o bloco:**

> **7 dias de teste real, com reembolso pela plataforma**
>
> Entra. Acessa o app, o curso, o pet, os 15 agentes. Conversa com as mentoras na primeira live. Gera os primeiros 10 roteiros com a IA. Posta o primeiro vídeo no Modo Recomendação.
>
> Se em 7 dias você sentir que não é pra você, é só pedir reembolso pela própria plataforma — sem precisar conversar com ninguém, sem burocracia. **O risco é nosso, não seu.**

---

### 3.15. FAQ

**Mantenha as perguntas — reescreva 3 respostas:**

**Q: Serve para qualquer nicho?**
> A: O Viral em 1 Minuto foi construído **especificamente pra profissional da beleza** — cílios, unhas, cabelo, sobrancelha, estética, lash, nail. Os 12 módulos, os roteiros, a IA, as mentoras: tudo treinado nesse mundo. Outros nichos podem usar, mas tudo aqui dentro foi pensado pra você.

*(Diferencia explicitamente do Bela Flor que vende "qualquer nicho".)*

**Q: É a mesma coisa que outros apps de roteiro que tem por aí?**
> A: Não. Outros apps te entregam roteiro e acabou. Aqui você tem **roteiro + uma IA que entende o seu nicho + 12 mentoras ao vivo toda semana + curso completo + comunidade própria dentro do app + pet que evolui com você + dashboard de métricas + calendário que avisa no seu WhatsApp**. Tudo num celular, num login só. É por isso que aluna que entra, fica.

**Q: Quanto tempo até eu ver resultado?**
> A: Tem aluna como a Eula Carvalho que viu resultado em **menos de 2 semanas** (saiu de 6K pra +11K seguidores). A Karollin saiu de 1K pra 5K em **uma semana**. O Desafio 0→10K em 30 dias é o caminho recomendado pra quem está começando.

---

### 3.16. FinalCTA

**Headline — DE:** "Continuar invisível ou ativar o Modo Viralização?"

**PARA:**
> `Continuar adivinhando o que postar` 
> `ou ter tudo o que substitui sua equipe num app só?`

**Subtítulo — DE:** "Você pode continuar tentando adivinhar o que funciona. Ou usar um sistema pronto. A diferença entre essas duas decisões cabe em um clique."

**PARA:**
> `Cada dia sem aparecer é uma cliente que escolheu outra profissional. Uma aluna que comprou de outra pessoa. Uma agenda que não lotou. R$39,90/mês é menos que uma pizza. Continuar invisível é muito mais caro do que isso.`

---

## 4. RECOMENDAÇÕES TÁTICAS EXTRAS

### 4.1. Visuais
- **Tira a animação "Bonequinha chorando" no `InvisibleStoryAnim`** se ela aparece em Hero — tom triste demais pra topo de funil. Use a versão "Modo Invisível" do `WhyNotGrowing` (que já está bem feita).
- **Adiciona screenshots do app** (especialmente o PET, o Kanban e o Dashboard). Sua página fala muito mas mostra pouco. Concorrente também não mostra — ganhar aqui é fácil.
- **Marquee deve rotacionar 3-4 frases diferentes**, não repetir a mesma. Evita feel de "loop barato".

### 4.2. Prova social
- **Substitui os `(NOME ALUNA 1)`** pelos nomes reais da VSL (Brenda, Alicia, Eula, Dai, Karollin, Daiane, Flávia). Isso é deixa-na-mesa absurda.
- **Pega 3-4 prints reais** do Instagram dessas alunas (com permissão) mostrando antes/depois. Bela Flor faz isso, você precisa fazer melhor.
- **Coloca selos de imprensa/parceria** se tiver. Se não tiver, coloca contadores ao vivo (`+44.000 ativaram`, `+1B views gerados`).

### 4.3. Oferta
- **Bônus tem que aparecer na seção de pricing**, não só no FinalCTA. Lista visualmente:
  1. Workshop Agora Mentoras (Online) — valor R$ 497
  2. Concorra ao Workshop Agora Mentoras (Presencial) — valor R$ 1.997
  3. Oficina de Conteúdo liberada no app
  4. Bônus #4 (criar) — Pack de 30 stories de venda

### 4.4. Tracking & Anti-clone defense
- **Adiciona um snippet curto no canto do hero** dizendo: *"Criado pela mente original do método. Aceitam imitações? Veja a história em 2 minutos →"* (link pra parte 3 da VSL). Isso vira anti-clone defense mas elegante.
- **Roda Hotjar/Microsoft Clarity** pra ver onde o lead trava. Se 70% saem antes do Pricing, o problema é hero, não preço.

### 4.5. SEO/Meta
- Title novo (já dado)
- Meta description sugerida:
  > `Viral em 1 Minuto: curso + app + mentoria + IA na palma da mão, criado pra profissional da beleza. Crie reels virais em 1 minuto, sem edição, sem equipe. R$39,90/mês.`

---

## 5. CHECKLIST DE EXECUÇÃO (NA ORDEM)

Faça nessa ordem porque cada item é cumulativo:

1. ☐ Trocar `<title>` (1 min) — para de batalhar pra rankear contra o Bela Flor
2. ☐ Reescrever Hero subhead + 3 GlassCards (15 min) — quebra clone visível na fold
3. ☐ Trocar Marquee para 4 frases rotacionadas (5 min) — quebra clone visual
4. ☐ Reescrever subhead da Results section (5 min) — quebra clone literal
5. ☐ Substituir `(NOME ALUNA X)` pelos nomes da VSL (10 min) — ganho de prova social imediato
6. ☐ Padronizar preços (R$79,90 / R$39,90) entre VSL e página (5 min)
7. ☐ Padronizar garantia (7 dias) entre VSL e página (5 min)
8. ☐ Reescrever Features cards com PET, 12 mentoras, IA treinada, prêmios (30 min)
9. ☐ Reescrever Creator com a história Thaylor + Gabriel + bastidores (20 min)
10. ☐ Reescrever Comparison + Pricing + FinalCTA (20 min)
11. ☐ Adicionar screenshots reais do app no Features (uploads das telas)
12. ☐ Validar: rodar a página e ler em voz alta — qualquer frase que poderia estar na página do Bela Flor, troca.

**Tempo total estimado:** ~2h de trabalho de copy + assets visuais.

---

## 6. AUDITORIA TÉCNICA DO APP (o que existe DE FATO)

> Inspecionei o código-fonte do app (`Viral1MIN/src/`) pra garantir que a copy reflita exatamente o que está construído — não promessas que a ferramenta não cumpre. Esse é o golden rule do copywriter sério: **nunca prometa o que o produto não entrega**, porque vira ticket de reembolso.

### 6.1. Mapa real das funcionalidades do app

| Tela / Rota | Funcionalidade real (verificada no código) | Como vender na página |
|---|---|---|
| `/home` | Carrossel de banners + lista de módulos do curso (cover_url puxa do Supabase) | "Curso completo dentro do app" |
| `/pet` | Pet evolutivo com 4 estágios: **Bebê (streak 0) → Filhote (streak 7) → Jovem (streak 14) → Adulto (streak 30)**. Sistema de **moedas, alimentação diária, mood (feliz/com fome/triste/dormindo), corações de fome, minigame "Pet Runner", PetShop (compra com moedas), PetWardrobe (troca de roupinhas/acessórios)** | "Pet com IA que evolui em 30 dias e libera funções a cada fase" |
| `/modelos` | **14 modelos virais com perguntas guiadas e exemplo:** Problema/Solução, Antes e Depois, Passo a Passo, A Revelação, Storytelling, Reação a Mito, Trend com Valor, Cine, Lista Top 5, Pergunta Direta, Checklist Rápido, Isso vs. Aquilo, Resposta ao Comentário, Bastidores, Perguntas e Respostas, Conteúdo Técnico (alguns 16-17 com variações). Filtro por categoria: Gancho / Transformação / Tutorial / Reação / Storytelling / Trend | **CORRIGIR a copy:** não são 12, são **14+** modelos virais |
| `/chat` e `/chat/:formatSlug` | **Chat com agentes de IA** com system prompts protegidos (cada formato tem seu prompt no Supabase, usuário não vê) | "15+ agentes de IA treinados — cada formato com cérebro próprio" |
| `/referencias` | **Cola link de Reel → IA transcreve áudio + visual → oferece 3 modos**: (1) modelar pro formato escolhido, (2) custom prompt, (3) adaptar pro nicho. Resultado: gancho + desenvolvimento + CTA. Pode salvar, agendar (Kanban) ou enviar via WhatsApp. | "Modelagem de qualquer reel viral por link" — esse é o killer feature mais vendável |
| `/alerta` | **Calendário mensal** que agenda lembretes de roteiros do Kanban no WhatsApp do usuário. Escolha de período (manhã 8-10h / tarde 14-16h / noite 19-21h) com jitter aleatório. | "Calendário com notificação no WhatsApp — você não esquece de postar" |
| `/kanban` | Kanban de produção dos roteiros (rascunho → pronto → postado, etc.) | "Kanban pra organizar do roteiro à postagem" |
| `/dashboard` | Métricas | "Dashboard de métricas pra ver o que viralizou" |
| `/community` | Posts + comentários (feed interno) | "Comunidade própria dentro do app — não é grupo de WhatsApp" |
| `/biblioteca` | Roteiros salvos do usuário + acesso por slug de modelo | "Biblioteca pessoal: cada roteiro guardado, organizado, revisitável" |
| `/ao-vivo` | Aulas ao vivo + replays | "Aulas ao vivo toda semana + replays no app" |
| `/profile` + `/install` | Perfil + onboarding PWA | n/a |
| `/admin` | Painel admin (só pra equipe) | n/a |

### 6.2. PlanGate — o sistema de planos

O componente `PlanGate` envolve as features e libera/bloqueia conforme o plano. Algumas têm `allowTrial` (Modelos Virais e Biblioteca liberadas no trial). Outras são bloqueadas: **Referências, Alerta, Dashboard, Kanban, Comunidade**. Isso vira oferta:

> *Use isso no Pricing:* **"Plano Mensal libera tudo. No teste grátis você já mexe nos 14 Modelos Virais e na Biblioteca pra sentir o gosto."**

### 6.3. CoinReward + Gamificação

Existe sistema de **moedas** (`COINS_PER_ROTEIRO_PRONTO`) que premia ações dentro do app (gerar roteiro, alimentar pet, etc). É a base perfeita pra a história das **premiações por viralizar** que você mencionou. Use isso na Features:

> *Add no card E (rede social interna):* **"Cada roteiro pronto, cada streak no Pet, cada vídeo postado — moedas. Gaste no PetShop, troque por roupinhas, suba o ranking. Os perfis com mais moedas/views ganham destaque na rede social interna."**

### 6.4. Refinamentos OBRIGATÓRIOS na copy nova (com base no que descobri no código)

#### 4.1. Substitui "12 mentoras" por "14+ Modelos Virais especializados"
A copy nova fala em "12 mentoras" porque é o que está na VSL. Mas **o que o app entrega de verdade são os 14 modelos virais com agentes de IA dedicados** + as mentorias ao vivo (no `/ao-vivo`). Reposiciona assim:

**Card D do Features (era "12 MENTORAS · 1 POR FORMATO"):**
- Tag: `14 MODELOS VIRAIS · 1 AGENTE DE IA POR FORMATO`
- Título: `Cada formato viral tem seu cérebro de IA dedicado`
- Texto: `Problema/Solução, Antes/Depois, Storytelling, Cine, Tela Dividida, Bastidores, Conteúdo Técnico... 14 formatos validados, cada um com perguntas guiadas e um agente de IA treinado especificamente naquele padrão. Você responde 2 perguntas e o roteiro completo (gancho + desenvolvimento + CTA) sai pronto.`

E adiciona um card separado pras mentoras ao vivo:

**Novo Card F (mentoras):**
- Tag: `MENTORIAS AO VIVO · TODA SEMANA`
- Título: `12 mentoras conectadas dentro do app`
- Texto: `Aulas ao vivo na própria plataforma toda semana. Quem não pode acompanhar, vê na replay. Cada mentora é uma profissional real que viralizou com o método.`

#### 4.2. O Referencias é o feature MAIS vendável e está sub-vendido
A funcionalidade de "colar link → IA transcreve → modelagem" é o que ninguém mais tem nesse nível. Tira do Hero genérico e dá protagonismo:

**Hero — segundo bullet (atualizar):**
> `Cole o link de QUALQUER reel viral. A IA transcreve, te entrega 3 caminhos (modelar pro formato, custom prompt ou adaptar pro nicho) e devolve roteiro pronto com gancho + desenvolvimento + CTA. Em 30 segundos.`

#### 4.3. Pet — vender melhor a mecânica de streak
A copy nova fala "filhote → criança → jovem → adulto" mas o código tem **bebê → filhote → jovem → adulto** com requisitos de streak claros (0 / 7 / 14 / 30 dias). Usa esse calendário concreto:

**Card C do Features (Pet) — atualizar:**
- Texto: `Bebê no dia 1, Filhote em 7 dias, Jovem em 14, Adulto em 30 — cada estágio libera função nova: legendas virais, hashtags, roteiros de Stories, e no Adulto um chat ilimitado em tempo real. Constância vira jogo, não obrigação.`

#### 4.4. PetShop + Wardrobe + Minigame — falta na copy
O app tem **minigame Pet Runner** + **loja de acessórios** comprados com moedas. Isso é gamificação séria. Adiciona uma linha:

> *No final do card C ou no Hero meta:* **"Tem até minigame que vira moeda — e moeda vira roupinha pro pet."**

#### 4.5. Alerta — fala da janela aleatória
O `/alerta` agenda lembretes com **jitter aleatório dentro da janela** (manhã 8-10h, tarde 14-16h, noite 19-21h). Isso é muito profissional — usa:

> *Card B do Features (90 dias de roteiros):* "Você acorda, abre o WhatsApp, **o lembrete chegou no horário ideal** (entre 8h e 10h, calculado pelo algoritmo de melhor performance) — com seu roteiro do dia já adaptado pro seu nicho."

#### 4.6. Comunidade — é uma rede social FECHADA (não é Discord/WhatsApp)
O `/community` é feed interno + posts + comentários. Posiciona melhor:

> "Não é grupo de WhatsApp ruidoso. É um **feed dentro do app** — você posta seu resultado, recebe curtida e comentário de quem está na mesma jornada. Em breve: Stories internos."

### 6.5. Inconsistências da VSL com o app real

Marquei pra você 3 promessas que estão na VSL mas que **PRECISAM ser checadas/ajustadas antes de virarem copy de venda**, porque não vi implementação direta:

| Promessa na VSL | O que vi no app | Ação |
|---|---|---|
| "PET evolui ao longo da jornada" | ✅ Confirmado (4 estágios) | Vende com confiança |
| "15+ agentes de IA treinados" | ⚠️ Vi a estrutura `ai_format_prompts` no Supabase mas não contei 15. Tem 14 modelos visíveis | **Verifica quantos prompts estão ativos no Supabase**. Se for 14, fala "14+". Se forem 15+, fala "15+". Não chuta. |
| "Premiações por viralizar — vídeo do dia/semana/mês" | ⚠️ Tem o sistema de moedas (CoinReward) e Comunidade, mas não vi o ranking automático de "vídeo do dia" implementado | **Confirma com o Gabriel se isso já existe ou se é roadmap.** Se for roadmap, fala "Em breve: ranking semanal de vídeos virais com premiação real" — vira gatilho de retenção sem mentir. |
| "Workshop Agora Mentoras Online + Presencial como bônus" | Não está dentro do app — é externo | OK pra ser bônus de venda. Só garante que o aluno realmente recebe o ingresso pós-compra. |
| "Plano R$ 79,90 / R$ 39,90" | A página atual mostra R$47/R$37 | **DECIDE qual é o oficial.** Se a VSL roda em ads, alinha tudo. |

### 6.6. Uma feature vendável que está no app e não está na copy: Custom Prompt

No `/referencias`, o usuário tem 3 modos: modelar, **custom prompt** e adaptar pro nicho. O **custom prompt** é a opção pro usuário avançado pedir EXATAMENTE o que quer pra IA, sem template. Isso é raro e vende muito pro segmento que já entende um pouco. Adiciona em algum lugar:

> "**Modo Avançado: Custom Prompt** — pra quem já tem feeling de copy, é só escrever exatamente o que quer da IA e ela entrega. Sem ficar preso a template."

---

## 7. UMA OBSERVAÇÃO FINAL (do velho copywriter)

Sua maior arma não é a copy mais bonita. É a história verdadeira que você tem:

> *"O cara que criou a metodologia. Foi roubado pelos próprios sócios de antes. Voltou com Gabriel e construiu algo 10x maior que ninguém pode copiar — porque vem da história real, dos bastidores reais, das alunas reais que ele formou na Espanha e no Brasil."*

Essa frase **não cabe** no Bela Flor. Não cabe em ninguém. Só cabe em você.

A página tem que respirar isso do alto até embaixo. Hoje ela respira "mais um app de roteiros". Aplica essa nova copy e ela passa a respirar **categoria nova, com história verdadeira, defensável.**

Boa sorte. Se quiser, posso já gerar o `sections.jsx` patch só com as substituições de texto, deixa o desenvolvedor copiar e colar.
