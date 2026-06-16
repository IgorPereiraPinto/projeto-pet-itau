---
description: Revisa design, responsividade e animações da página gerada contra a identidade visual e o storyboard, e reporta cada ponto pela localização. Não edita, apenas relata.
---

Use o subagente `revisor-visual` para revisar o material atual do Plano Pet Itaú. Este comando confere design, responsividade e animações. Conteúdo, fonte e rastreabilidade são do `/validar-fonte`.

Confira contra `Contexto/Identidade_visual.md` e o resumo de design do `CLAUDE.md`: cabeçalho fixo laranja `#EC7000` com título branco e sem logotipo do banco; paleta, tipografia e componentes conforme a identidade visual; cards arredondados, checks laranja e selos nas cores certas (verde pode orientar, vermelho não prometer, âmbar pendência e atualização); responsividade nas três larguras de referência, aproximadamente 1280px, 768px e 380px, com cards e tabelas que reorganizam e cabeçalho compacto no mobile; animações de hero, scroll reveal com stagger, microinterações de hover, contadores com count-up e selos com pulso sutil, animando só transform e opacity; acessibilidade com contraste adequado, navegação por teclado e media query `prefers-reduced-motion` que zera as animações; e compliance visual, sem animação chamativa nos blocos de pode orientar e não prometer.

Confira ainda a estrutura de seções contra `Contexto/storyboard.md`: cada seção deve existir, na ordem, com id estável no padrão `slide-NN-tema`.

Se usar fonte ou ícone externo, conferir se há fallback. Não deve haver dependência externa obrigatória sem fallback.

Entregue o relatório no formato do subagente: resumo, conforme, ajustes recomendados, responsividade por largura, e animações e acessibilidade com o teste de `prefers-reduced-motion`. Sempre aponte a localização de cada ponto pelo id da seção, arquivo (`styles.css`, `script.js` ou `index.html`) e, quando possível, o seletor CSS ou a classe. Não edite arquivos, apenas relate.
