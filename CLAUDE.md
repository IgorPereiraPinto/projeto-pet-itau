# CLAUDE.md · Projeto Pet Itaú

Regras sempre ativas para gerar o material consultivo do Plano Pet Itaú. Vale para qualquer geração ou edição neste projeto.

## O que é o projeto

Material gerencial e comercial para apoiar consultores e gerentes do Itaú na oferta e na venda dos Planos Pet Itaú (Petlove e A.Pet). A entrega é uma página web responsiva em formato de apresentação consultiva, com seções equivalentes aos 22 slides de `Contexto/storyboard.md`. Não é PowerPoint nem site institucional genérico. Saída em `index.html`, `styles.css` e `script.js`. Todo o conteúdo é gerado em português brasileiro.

## Regra de ouro

Não inventar regra, valor, cobertura, carência ou exclusão. O que não estiver nas fontes entra com o marcador visível `[VALIDAR · FONTE OFICIAL]`. Sempre separar fato, informação interna e pendência.

## Hierarquia de fontes

1. PDFs de condições gerais em `Docs/Pet/`: base oficial de coberturas, coparticipações, carências, limites e regras.
2. `dados/planos.json`: dados já estruturados e rastreados às fontes. Use como referência primária de números.
3. Cards comerciais: úteis para preço e visão comercial. Para regra contratual, cobertura, carência ou exclusão, os PDFs prevalecem.
4. PowerPoint de origem: fonte de conteúdo apenas. NÃO é referência visual.
5. Print das páginas comerciais do Itaú: referência visual.

Em caso de conflito entre fontes, vale a de maior prioridade nesta lista. Divergência material vira pendência sinalizada, nunca uma escolha silenciosa.

## Contexto obrigatório

Antes de gerar, ler sempre: `Contexto/briefing.md`, `Contexto/Identidade_visual.md`, `Contexto/storyboard.md`, `Contexto/faq.md` e `dados/planos.json`.

## Design (resumo, detalhe em Identidade_visual.md)

- Cabeçalho fixo laranja `#EC7000` com título branco. Sem logotipo do banco.
- Referência visual é o print, nunca o PowerPoint.
- Premium, moderno, corporativo. Imagens realistas de pets e ícones temáticos.
- Responsivo de verdade: desktop, tablet e mobile. Grid fluido, unidades relativas, cards que empilham.
- Movimento de landing page sutil e com propósito, conforme a seção Animações e movimento de `Identidade_visual.md`. Respeitar `prefers-reduced-motion` e nada chamativo nos blocos de compliance.

## Compliance

- Sempre separar o que o consultor pode orientar do que não deve prometer.
- Nunca apresentar como cobertura ilimitada.
- Petlove: a cobertura é o que consta nas Tabelas de Procedimentos e nas Condições Gerais, dentro das carências, coparticipações e limites. O que não está listado não faz parte da assistência. Orientar por essa lógica, sem prometer procedimentos não previstos.
- A.Pet: a limpeza de tártaro (tartarectomia) é coberta como serviço de assistência, com carência de 180 dias e sem incluir exames nem anestesia. Os demais tratamentos odontológicos são excluídos. Não prometer cobertura odontológica ampla no A.Pet.
- Onde houver atualização ou pendência, mostrar o selo, não preencher por conta própria.

## Execução técnica

- Não reescrever arquivos inteiros sem necessidade. Priorizar ajustes incrementais, preservar a estrutura existente e explicar alterações relevantes.
- HTML semântico, CSS responsivo e JavaScript simples, sem dependência externa obrigatória.
- Acessibilidade: contraste adequado, navegação por teclado e respeito a `prefers-reduced-motion`.
- Imagens e ícones de `assets/img` e `assets/icons`. Faltando assets, usar placeholder neutro e sinalizar a substituição.
- Cada seção da página tem um id estável no padrão `slide-NN-tema`, na mesma ordem do storyboard, para localizar e ajustar pontos depois. Os revisores reportam por esse id, arquivo e seletor.

## Imparcialidade entre modelos

O material trata A.Pet e Petlove de forma imparcial. Cada modelo aparece com seus diferenciais e qualidades, sem favorecer um sobre o outro. Os dois aparecem com a mesma profundidade, sem trazer muito mais conteúdo de um do que do outro. A escolha do modelo parte da necessidade do cliente, não de uma preferência do material.

## Regras comerciais (detalhe em briefing.md e planos.json)

- Segmentos: Agências, Uniclass e Personnalité, cada um com planos específicos e comercializando os dois modelos.
- Plano de incentivo (interno, não contratual): contratos gerados na Plataforma 360 e 360i, Petlove ou A.Pet, contam automaticamente para o plano de incentivo, porque os dois modelos já estão na plataforma; contratos gerados pelo Mobile (SuperApp), Petlove ou A.Pet, precisam ser registrados no Dynamics para contar no plano de incentivo, para o consultor e o gerente.

## Status das verificações

Esta é a referência oficial do projeto sobre o que está confirmado e o que ainda está em alinhamento. README, skill e subagentes seguem esta lista.

Confirmados com fonte:

1. Início da carência da Petlove: conta a partir da confirmação do 1º pagamento, confirmado com a Petlove. A microchipagem segue obrigatória para uso. O texto das Condições Gerais será atualizado até o fim de julho de 2026; até lá, o PDF vigente ainda cita a microchipagem como marco. Orientar pela regra confirmada e mostrar o selo de atualização.
2. Pulo de carência da Petlove: tem fonte contratual nas Condições Gerais Petlove, item 6, "Contratação de Liberação da Carência e do Limite Anual", e é descrito comercialmente como pulo de carência no FAQ oficial Planos de Saúde Pet, Itaú Personnalité. Libera um procedimento específico mediante valor adicional, ativado após a confirmação do pagamento, e o mesmo mecanismo libera o limite anual. Microchipagem obrigatória. Nem todas as coberturas são elegíveis. Não prometer liberação integral nem automática.
3. Tartarectomia no A.Pet: coberta como serviço de assistência, com carência de 180 dias, sem incluir exames nem anestesia. Os demais tratamentos odontológicos são excluídos. Conforme o item 3.2.4 das condições gerais A.Pet, nem todos os planos possuem todas as assistências; a disponibilidade por plano consta no certificado (resumo do contrato).
4. Serviços de conveniência e diferenciais: no A.Pet, telemedicina 24h, assistência funeral, hospedagem e voucher anual de medicação, conforme o certificado de cada plano. Na Petlove, benefícios do Ecossistema Petlove (descontos em antiparasitários e vermífugos, lojas físicas, frete grátis e desconto no site, limitado a R$ 300 por mês nas regiões Centro-Oeste, Sul e Sudeste), oferecidos como benefício eventual e sujeitos a alteração. Não prometer como cobertura garantida.
5. Pré-existência da Petlove: as condições gerais Petlove não especificam regra de pré-existência. Orientar pela lista de coberturas do produto e informar que a pré-existência não está especificada nas condições gerais. No A.Pet, a pré-existência não impede a contratação, tem carência de 12 meses, e crônicas e congênitas são excluídas.

Ainda em alinhamento, não bloqueia a geração:

- Disponibilidade por canal em cada segmento: regra operacional, observada antes da venda. Não é exibida no material como selo [VALIDAR]. O visual de canais mostra apenas Mobile (SuperApp) e Plataforma 360, 360i.

## Fluxo recomendado

1. Gerar com a skill `gerar-pagina-pet`.
2. Validar conteúdo e fonte com o subagente `validador-fonte`.
3. Revisar design, responsividade e animações com o subagente `revisor-visual`.
