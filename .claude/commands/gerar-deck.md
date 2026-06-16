---
description: Gera ou atualiza a página web responsiva do Plano Pet Itaú, em formato de apresentação consultiva navegável, a partir do contexto e do planos.json. Não gera PowerPoint.
argument-hint: "[opcional: id da seção, ex. slide-08-coberturas]"
---

Gere o material consultivo do Plano Pet Itaú usando a skill `gerar-pagina-pet`. A entrega é uma página web responsiva em formato de apresentação consultiva, com seções equivalentes aos 22 slides de `Contexto/storyboard.md`. Não é PowerPoint nem site institucional genérico. Saída em `index.html`, `styles.css` e `script.js`, em português brasileiro.

## Antes de gerar

Leia: `CLAUDE.md`, `Contexto/briefing.md`, `Contexto/Identidade_visual.md`, `Contexto/storyboard.md`, `Contexto/faq.md` e `dados/planos.json`. Siga as regras de fonte, compliance e design sem exceção.

## Regras que não podem falhar

- Não inventar. Todo número vem do `planos.json`. O que não tiver fonte recebe o selo `[VALIDAR · FONTE OFICIAL]`.
- A referência visual é o print, nunca o PowerPoint. Cabeçalho fixo laranja `#EC7000` com título branco, sem logotipo do banco.
- Responsivo de verdade em desktop, tablet e mobile. Detalhe em `Identidade_visual.md`.
- Movimento de landing page sutil, com `prefers-reduced-motion`, e nada chamativo nos blocos de compliance.
- Imparcialidade e equilíbrio entre A.Pet e Petlove. Os dois modelos aparecem com a mesma profundidade, cada um com seus diferenciais.
- Compliance: separar pode orientar de não prometer. Petlove pela lógica do que consta nas Tabelas de Procedimentos e Condições Gerais. A.Pet com cobertura, carência e exclusões, lembrando que a limpeza de tártaro é coberta e os demais odontológicos são excluídos.
- Segmentos, planos por segmento, canais e plano de incentivo conforme `briefing.md` e `planos.json`.
- Verificações com fonte conforme o `CLAUDE.md`: carência início da Petlove (1º pagamento; atualização da condição geral até o fim de julho de 2026, com selo de atualização), pulo de carência (condição geral item 6 e FAQ Itaú Personnalité), tartarectomia no A.Pet (assistência; disponibilidade por certificado, item 3.2.4), serviços de conveniência (A.Pet e Ecossistema Petlove) e pré-existência da Petlove (não especificada nas condições gerais). Único ponto ainda em alinhamento, com selo: disponibilidade por canal por segmento. No pulo de carência, não prometer liberação integral nem automática.
- Cada seção recebe um id estável no padrão `slide-NN-tema`, na ordem do storyboard.
- Não reescrever arquivos inteiros sem necessidade. Priorizar ajustes incrementais e preservar a estrutura existente.

## Escopo

Antes de alterar `index.html`, `styles.css` ou `script.js`, leia o estado atual desses arquivos para preservar estrutura, classes, ids e padrões já implementados.

Se `index.html`, `styles.css` ou `script.js` ainda não existirem ou estiverem vazios, crie os arquivos completos. Se já existirem, preserve a estrutura e faça ajustes incrementais.

Se houver argumento, gere ou atualize prioritariamente apenas a seção indicada: $ARGUMENTS. Preserve as demais seções. Ajuste navegação, âncoras ou dependências globais só se for necessário para manter a página funcional.

Se o argumento informado não existir no storyboard nem no HTML, não inventar uma seção nova. Informar que o id não foi localizado e sugerir o id mais próximo.

Sem argumento, gere a página completa com as 22 seções do storyboard, na ordem.

## Ao terminar

Sugira rodar `/validar-fonte` para conferir conteúdo e fonte, e `/revisar-visual` para conferir design, responsividade e animações.
