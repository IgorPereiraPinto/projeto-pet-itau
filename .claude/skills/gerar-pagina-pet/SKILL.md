---
name: gerar-pagina-pet
description: Use esta skill para gerar ou atualizar a página web responsiva do material consultivo do Plano Pet Itaú a partir do storyboard, do planos.json e da identidade visual. Aciona quando o usuário pedir para gerar a apresentação, montar os slides em HTML, criar ou atualizar index.html, styles.css e script.js, ou transformar o storyboard em página.
---

# Skill: gerar-pagina-pet

Gera a página web responsiva do material consultivo do Plano Pet Itaú.

## Antes de começar

Leia, nesta ordem:

1. `CLAUDE.md` (regras e hierarquia de fontes).
2. `Contexto/Identidade_visual.md` (sistema visual completo).
3. `Contexto/storyboard.md` (roteiro dos 22 slides ou seções).
4. `dados/planos.json` (todos os números: preços, coberturas, carências, exclusões).
5. `Contexto/briefing.md` e `Contexto/faq.md` (conteúdo de apoio).

Não usar o PowerPoint como referência visual. A referência visual é o print, descrita em `Identidade_visual.md`.

## Regra de ouro

- Não inventar regra, valor, cobertura, carência ou exclusão. O que não estiver nas fontes entra com o marcador visível `[VALIDAR · FONTE OFICIAL]`.
- Separar sempre fato, informação interna e pendência.
- Todo número vem do `planos.json`, nunca digitado de memória.

## O que gerar

Três arquivos na raiz: `index.html`, `styles.css`, `script.js`. Pode ser página única com seções navegáveis (uma por slide do storyboard) ou um deck navegável. Toda informação numérica vem do `planos.json`, nunca digitada de memória.

## Execução incremental

- Antes de alterar `index.html`, `styles.css` ou `script.js`, leia o estado atual desses arquivos.
- Se ainda não existirem ou estiverem vazios, crie a versão completa.
- Se já existirem, preserve estrutura, ids, classes e padrões já implementados.
- Não reescrever arquivos inteiros sem necessidade.
- Se a solicitação for para uma seção específica, atualize prioritariamente apenas essa seção e mexa em estilos ou scripts globais somente quando necessário para manter a página funcional.

## Requisitos obrigatórios

- Cabeçalho fixo laranja `#EC7000`, título branco, sem logotipo do banco.
- Paleta, tipografia e componentes conforme `Identidade_visual.md`.
- Responsivo: desktop, tablet e mobile. Grid fluido, unidades relativas (rem, clamp, %), cards e tabelas que reorganizam no mobile.
- Movimento de landing page sutil e com propósito, conforme a seção Animações e movimento de `Identidade_visual.md`: hero animado, scroll reveal com stagger, microinterações de hover, contadores com count-up, selos com pulso sutil. Animar só transform e opacity, respeitar `prefers-reduced-motion` e usar IntersectionObserver no `script.js`. Nada chamativo nos blocos de compliance.
- Os 22 slides do storyboard viram seções, na mesma ordem e com os mesmos títulos e subtítulos. Cada seção recebe um id estável no padrão `slide-NN-tema`, na ordem do storyboard, para os revisores localizarem e reportarem cada ponto por esse id.
- Selos visíveis para pendências e para a atualização Março/2026.
- Blocos de pode orientar (verde) e não prometer (vermelho).
- Usar `dados/planos.json` como fonte dos números e dados estruturados. Preferir carregar pelo `script.js`. Como a página pode ser aberta sem servidor local, onde `fetch('dados/planos.json')` falha em `file://`, documentar que ela deve rodar via Live Server, ou embutir os dados de forma controlada e rastreável no `script.js`. Nunca digitar números de memória no HTML.
- Imagens e ícones de `assets/img` e `assets/icons`. Faltando o arquivo, usar placeholder neutro e sinalizar a substituição.
- Acessibilidade: HTML semântico, contraste adequado, navegação por teclado e media query `prefers-reduced-motion` que zera as animações.
- Sem dependências externas obrigatórias. Se usar fonte ou ícone externo, ter fallback.

## Compliance e imparcialidade

- Separar o que o consultor pode orientar do que não deve prometer. Nunca apresentar como cobertura ilimitada.
- Petlove pela lógica do que consta nas Tabelas de Procedimentos e nas Condições Gerais, dentro das carências, coparticipações e limites. O que não está listado não é coberto.
- A.Pet com cobertura, carência, pré-existência e exclusões. A limpeza de tártaro é coberta como assistência, com carência de 180 dias, sem exames nem anestesia; os demais tratamentos odontológicos são excluídos. Não prometer cobertura odontológica ampla no A.Pet.
- Imparcialidade entre A.Pet e Petlove: os dois modelos aparecem com a mesma profundidade e com seus próprios diferenciais, sem favorecer um sobre o outro e sem deixar um mais raso que o outro. A escolha do modelo parte da necessidade do cliente, não de uma preferência do material.

## Conteúdo que não pode faltar

- Capa, objetivo do material e jornada do cliente.
- Quem pode contratar, canais e como contratar.
- Segmentos, planos por segmento, canais de contratação e regra do plano de incentivo: contratos gerados na Plataforma 360 e 360i, Petlove ou A.Pet, contam automaticamente para o plano de incentivo, porque os dois modelos já estão na plataforma; contratos gerados pelo Mobile (SuperApp), Petlove ou A.Pet, precisam ser registrados no Dynamics para contar no plano de incentivo, para o consultor e o gerente.
- Escada de planos e valores (iguais nos dois modelos).
- Coberturas por plano e planos por segmento.
- Desconto multipet de 10%.
- Comparativo A.Pet x Petlove.
- A.Pet: reembolso, checklist, carência, pré-existência e exclusões.
- Petlove: rede e coparticipação, carência e microchipagem, pulo de carência, e cobertura conforme Tabelas de Procedimentos e Condições Gerais.
- Venda protegida, situações de risco, renovação e encerramento.
- Camada de produto: features e histórias de usuário.

## Status das verificações, com selo onde couber

Referência oficial no `CLAUDE.md`. Confirmados com fonte, apresentar com a fonte e sem promessa indevida:

- Início da carência da Petlove: 1º pagamento, confirmado com a Petlove; microchipagem segue obrigatória. O texto da condição geral será atualizado até o fim de julho de 2026. Manter o selo de atualização.
- Pulo de carência da Petlove: fonte contratual na condição geral, item 6, e nome comercial no FAQ Itaú Personnalité. Não prometer liberação integral nem automática.
- Tartarectomia no A.Pet: coberta como assistência (180 dias, sem exames nem anestesia); demais odontológicos excluídos. Disponibilidade por plano consta no certificado (item 3.2.4 das condições gerais A.Pet).
- Serviços de conveniência: A.Pet (telemedicina 24h, funeral, hospedagem, voucher de medicação) e Petlove (Ecossistema Petlove), conforme as condições gerais. Não prometer os benefícios eventuais do ecossistema como cobertura garantida.
- Pré-existência da Petlove: não especificada nas condições gerais. Orientar pela lista de coberturas e informar que não está especificada.

Disponibilidade por canal em cada segmento: regra operacional, observada antes da venda, sem selo no material.

## Ao terminar

Sugerir rodar `/validar-fonte` para conferir conteúdo e rastreabilidade, e `/revisar-visual` para conferir design, responsividade e animações, antes de considerar o material pronto.
