# Projeto Pet Itaú · Material consultivo para venda protegida

Material gerencial e comercial para apoiar consultores e gerentes do Itaú na oferta e na venda dos Planos Pet Itaú, operados por Petlove e A.Pet (Amigoo).

A entrega esperada é uma página web responsiva em formato de apresentação consultiva, organizada em seções equivalentes aos 22 slides do `Contexto/storyboard.md`. Não é PowerPoint, e não é um site institucional genérico. É um material de apoio à venda, premium e navegável.

## Importante sobre a estrutura de pastas

O Claude Code e o StackSpot seguem caminhos ao pé da letra. Use esta pasta como raiz única do projeto. Não deixe pastas duplicadas em um nível acima, e não renomeie as pastas abaixo, porque os caminhos são citados no `CLAUDE.md`, no `briefing.md` e na Knowledge Source do StackSpot.

```
PROJETO-PET-ITAU/
├── README.md
├── CLAUDE.md                       rules sempre ativas (Claude Code)
├── index.html                      arquivo, gerado pela ferramenta
├── styles.css                      arquivo, gerado pela ferramenta
├── script.js                       arquivo, gerado pela ferramenta
├── .claude/
│   ├── agents/
│   │   ├── validador-fonte.md
│   │   └── revisor-visual.md
│   ├── commands/
│   │   ├── gerar-deck.md
│   │   ├── validar-fonte.md
│   │   └── revisar-visual.md
│   └── skills/
│       └── gerar-pagina-pet/
│           └── SKILL.md
├── stackspot/
│   ├── knowledge-source.md
│   ├── quick-command-gerar-pagina-pet.md
│   ├── quick-command-validar-fonte.md
│   └── README-stackspot.md
├── Contexto/
│   ├── briefing.md
│   ├── faq.md
│   ├── Identidade_visual.md        fica dentro de Contexto, nao na raiz
│   └── storyboard.md
├── Docs/
│   └── Pet/
│       ├── apet-condicoes-gerais.pdf
│       ├── petlove-bronze.pdf
│       ├── petlove-prata.pdf
│       ├── petlove-ouro.pdf
│       ├── petlove-platina.pdf
│       └── petlove-titanio.pdf
├── assets/
│   ├── icons/
│   └── img/
└── dados/
    └── planos.json
```

## Regra de ouro

Não inventar regra, valor, cobertura, carência ou exclusão. O que não estiver nas fontes entra com o marcador visível `[VALIDAR · FONTE OFICIAL]`. Sempre separar fato, informação interna e pendência.

## Hierarquia de fontes

1. PDFs de condições gerais em `Docs/Pet/`: base oficial. Para qualquer regra contratual, cobertura, carência, coparticipação ou exclusão, os PDFs prevalecem.
2. `dados/planos.json`: dados já estruturados e rastreados aos PDFs. Referência primária de números na geração.
3. Cards comerciais: úteis para preço e visão comercial. Não valem como fonte de regra contratual.
4. PowerPoint de origem: fonte de conteúdo e estrutura conceitual. Não é referência visual.
5. Print das páginas comerciais do Itaú: referência visual.

## Regra visual obrigatória

O PowerPoint serve apenas como fonte de conteúdo, roteiro e estrutura. Não usar o PowerPoint como referência de layout, estética, paleta, ícones ou padrão visual.

A referência visual é o print do dossiê consultivo:

- cabeçalho laranja `#EC7000` com texto branco;
- fonte sans-serif moderna;
- cards arredondados;
- layout premium, limpo, corporativo e responsivo;
- imagens realistas de pets;
- ícones temáticos realistas;
- movimento de landing page sutil, conforme a seção Animações e movimento de `Contexto/Identidade_visual.md`.

O detalhe completo do sistema visual está em `Contexto/Identidade_visual.md`.

## Responsividade obrigatória

A página deve funcionar bem em desktop, tablet e mobile.

- Desktop: layout amplo, cards em 3 ou 4 colunas quando fizer sentido.
- Tablet: reduzir colunas e preservar a leitura dos cards.
- Mobile: empilhar os cards em uma coluna, manter o cabeçalho compacto, evitar tabelas largas sem adaptação e priorizar a leitura vertical.

## Restrição de marca

Não inserir logotipo, ícone oficial ou marca gráfica do banco. Usar apenas a identidade visual inspirada na referência: cabeçalho laranja, tipografia limpa e composição corporativa.

## Uso por ferramenta

### Claude Code via VS Code

Revisar estrutura, organizar arquivos, validar consistência e gerar ou refinar o HTML, o CSS e o JavaScript. Usa `CLAUDE.md`, a skill `gerar-pagina-pet` e dois subagentes de revisão separados: `validador-fonte`, para conteúdo, fonte e rastreabilidade, e `revisor-visual`, para design, responsividade e animações. Comandos: `/gerar-deck`, `/validar-fonte` e `/revisar-visual`.

Fluxo: gerar com `/gerar-deck`, conferir conteúdo com `/validar-fonte`, revisar o visual com `/revisar-visual`. Os dois revisores são somente leitura, apontam a localização de cada ponto e não editam o material.

### StackSpot via VS Code

Gerar a página web responsiva a partir do storyboard, da identidade visual e das bases oficiais. Usa a Knowledge Source e os Quick Commands descritos em `stackspot/`.

### NotebookLM

Consulta, validação, resumo e perguntas frequentes sobre os PDFs e o contexto. Não usar como ferramenta principal de design.

## Preços confirmados (iguais nos dois modelos)

Bronze R$ 19,90 · Prata R$ 34,90 · Ouro R$ 70,00 · Platina R$ 100,00 · Titânio R$ 185,00.

## Status das verificações

As bases documentais foram recebidas (condições gerais do A.Pet e as cinco condições gerais Petlove, uma por plano). A referência oficial está no `CLAUDE.md`. Nesta revisão, os pontos abaixo foram confirmados com fonte:

1. Início da carência da Petlove: 1º pagamento, confirmado com a Petlove. Microchipagem segue obrigatória. O texto da condição geral será atualizado até o fim de julho de 2026.
2. Pulo de carência da Petlove: fonte contratual na condição geral, item 6, e nome comercial no FAQ Itaú Personnalité.
3. Tartarectomia no A.Pet: coberta como assistência (180 dias, sem exames nem anestesia); demais odontológicos excluídos. Disponibilidade por plano consta no certificado, conforme o item 3.2.4 das condições gerais A.Pet.
4. Serviços de conveniência: A.Pet (telemedicina 24h, funeral, hospedagem, voucher de medicação) e Petlove (Ecossistema Petlove), conforme as condições gerais.
5. Pré-existência da Petlove: não especificada nas condições gerais. Orientar pela lista de coberturas e informar que não está especificada.

Disponibilidade por canal em cada segmento: regra operacional, observada antes da venda, não exibida no material como pendência. O visual de canais mostra apenas Mobile e Plataforma 360, 360i.
