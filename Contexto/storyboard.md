# Storyboard · Plano Pet Itaú

### Versão gerencial e comercial · 22 slides · apresentação consultiva para venda

Roteiro dos slides para o StackSpot gerar a apresentação responsiva. Este arquivo trata do conteúdo e da estrutura. As regras de design estão em `Identidade_visual.md`, e as regras de produto, fontes e compliance estão em `briefing.md`. As bases oficiais são os PDFs em `Docs/Pet`.

---

## INSTRUÇÃO PRINCIPAL (ler antes de gerar)

Você vai gerar uma apresentação consultiva, gerencial e comercial, para apoiar consultores e gerentes do Itaú na oferta e na venda dos Planos Pet Itaú, operados por Petlove e A.Pet (Amigoo). Siga as diretrizes abaixo sem exceção.

### Diretriz de fontes (obrigatória)

1. O arquivo PowerPoint enviado serve apenas como fonte de conteúdo e estrutura. NÃO use o PowerPoint como referência visual, de layout, de cor ou de tipografia. Ignore completamente o visual do PPT.
2. A referência visual é o print das páginas comerciais do Itaú.
3. As bases oficiais de dados são os PDFs de condições gerais de cada plano (Petlove e A.Pet) e o `dados/planos.json`. Toda regra contratual, cobertura, coparticipação, carência, limite ou exclusão sai dessas fontes.
4. Não invente nenhuma regra, valor, cobertura, carência ou exclusão. O que não estiver nas fontes aparece com o marcador visível `[VALIDAR · FONTE OFICIAL]`.
5. Distinguir fonte de conteúdo de fonte contratual. O PPT é fonte de conteúdo. Para qualquer regra, o lastro é o PDF ou o `planos.json`.

### Diretriz de design (resumo, detalhe em Identidade_visual.md)

O sistema visual completo, com paleta, tipografia, componentes e animações, está em `Contexto/Identidade_visual.md`, que é a fonte única do visual. Este storyboard deve obedecer àquele arquivo. Resumo: cabeçalho fixo laranja `#EC7000` com título branco, sem logotipo do banco; fundo claro; cards arredondados; checks laranja; selos verde para "pode orientar", vermelho para "não prometer" e âmbar para pendência e atualização; imagens realistas de pets; responsivo em desktop, tablet e mobile; movimento de landing page sutil, com `prefers-reduced-motion`.

### Regras de conteúdo (compliance)

- Sempre separar o que o consultor pode orientar do que não deve prometer.
- Nunca apresentar o produto como cobertura ilimitada.
- Onde houver atualização ou pendência, mostrar o selo visível, não preencher por conta própria.
- Imparcialidade entre A.Pet e Petlove: mesma profundidade, cada um com seus diferenciais.
- Preços confirmados (iguais nos dois modelos): Bronze R$ 19,90 · Prata R$ 34,90 · Ouro R$ 70,00 · Platina R$ 100,00 · Titânio R$ 185,00.

### Padrão de id das seções

Cada slide vira uma seção com id estável no padrão `slide-NN-tema`, na ordem abaixo. Os revisores reportam por esse id.

---

# ESTRUTURA DOS SLIDES

> Estrutura híbrida: comum, comparativo, A.Pet, Petlove, venda protegida e camada de produto. Total: 22 slides.

---

## Slide 1 · Capa

- ID: `slide-01-capa`
- Título: Plano Pet Itaú
- Subtítulo: Guia consultivo para venda protegida
- Mensagem-chave: Material para consultores e gerentes ofertarem os modelos Petlove e A.Pet com clareza, ética e foco no cliente. Disponível no SuperApp.
- Visual: hero com pet realista em fundo claro, cabeçalho laranja com título branco.

## Slide 2 · Para que este material existe

- ID: `slide-02-objetivo`
- Título: Para que este material existe
- Subtítulo: Vender com clareza e responsabilidade
- Mensagem-chave: Apoiar a oferta dos Planos Pet Itaú, reduzir dúvidas na venda, evitar promessas indevidas e facilitar uma conversa simples e segura com o cliente. Este material não substitui o regulamento do plano.
- Conteúdo: três cards. Comercial (como ofertar e explicar). Operacional (contratação, carência, uso, reembolso e renovação). Compliance (o que orientar e o que não prometer).
- Visual: três ícones em círculos laranja.
- Fonte de conteúdo: PPT slide 2.

## Slide 3 · A jornada do cliente, orientada pelo consultor

- ID: `slide-03-jornada`
- Título: A jornada do cliente, orientada pelo consultor
- Subtítulo: O fio condutor do material
- Mensagem-chave: em cada etapa, o que o cliente vive e o que o consultor orienta.
- Conteúdo: linha do tempo de 8 etapas, com a fala do cliente e a orientação do consultor em cada uma: 1 Descoberta, 2 Contratação, 3 Vigência, 4 Carência, 5 Utilização, 6 Reembolso ou rede, 7 Renovação, 8 Pós-venda. Faixa inferior de proteção: nunca prometer rede credenciada no A.Pet, reembolso automático, isenção de carência ou cobertura fora das regras.
- Visual: timeline horizontal responsiva, que vira lista vertical no mobile.
- Fonte de conteúdo: PPT slide 3.

## Slide 4 · Sobre o produto

- ID: `slide-04-produto`
- Título: O que é o Plano Pet Itaú
- Subtítulo: Cinco planos, dois parceiros, dois modelos
- Mensagem-chave: produto para clientes com pet que querem manter a saúde em dia por um preço justo. Prateleira de 5 planos, com 2 parceiros (Petlove e A.Pet) e 2 modelos de atendimento à escolha do cliente.
- Conteúdo: dois cards. Petlove (clínicas credenciadas). A.Pet Amigoo (reembolso).
- Visual: dois cards com ícone e pet ao centro.
- Fonte de conteúdo: PPT slides 4 e 8.

## Slide 5 · Quem pode contratar e onde ofertar

- ID: `slide-05-quem-contrata`
- Título: Quem pode contratar e onde ofertar
- Subtítulo: Segmentos, canais e incentivo
- Mensagem-chave: clientes correntistas dos segmentos Itaú. A disponibilidade varia por segmento e canal.
- Conteúdo:
  - Segmentos: Itaú Agências (IA), Itaú Uniclass (IU) e Itaú Personnalité (IP).
  - Planos por segmento: Itaú Agências (IA) de Bronze a Ouro; Itaú Uniclass (IU) de Prata a Platina; Itaú Personnalité (IP) de Ouro a Titânio.
  - Canais de oferta: Mobile (SuperApp); Plataforma 360, 360i. O visual mostra apenas os dois canais. A regra vigente de oferta por canal em cada segmento é operacional, observada antes da venda, fora do material.
  - Plano de incentivo (informação comercial interna, não contratual): contratos gerados na Plataforma 360 e 360i, Petlove ou A.Pet, contam automaticamente para o incentivo, porque os dois modelos já estão na plataforma; contratos gerados pelo Mobile, Petlove ou A.Pet, precisam ser registrados no Dynamics para contar, para o consultor e o gerente.
- Visual: chips de segmento, ícones de canal e um bloco lateral de incentivo.
- Fonte de conteúdo: PPT slides 5 e 7. Fonte da regra comercial: `briefing.md` e `planos.json`.

## Slide 6 · Como contratar

- ID: `slide-06-como-contratar`
- Título: Como contratar
- Subtítulo: SuperApp, do menu ao Plano Pet
- Mensagem-chave: a contratação acontece no SuperApp do Itaú.
- Conteúdo: rota Menu, Seguros e planos, Vida, Pet e Odonto, Plano Pet, com a aba Pet selecionada e botão Conhecer.
- Visual: mockup responsivo de celular com a rota destacada.
- Fonte de conteúdo: PPT slide 6 e print do canal de contratação.

## Slide 7 · A escada de planos e os valores

- ID: `slide-07-escada-planos`
- Título: Cinco planos, uma escada de proteção
- Subtítulo: Mesmos valores nos dois modelos
- Mensagem-chave: os planos sobem em amplitude de cobertura. O preço é igual nos dois modelos. O que muda é a forma de uso: reembolso no A.Pet, rede credenciada com coparticipação na Petlove.
- Conteúdo: cinco degraus. Bronze Entrada R$ 19,90. Prata Equilíbrio R$ 34,90. Ouro Rotina R$ 70,00. Platina Robusto R$ 100,00. Titânio Máxima cobertura R$ 185,00 com selo Mais completo.
- Visual: escada ascendente, preço em destaque grande, responsiva (degraus empilham no mobile).
- Fonte de conteúdo: PPT slide 17 e cards comerciais. Fonte contratual dos preços: `planos.json`.

## Slide 8 · Prateleiras de cobertura, Petlove e A.Pet

- IDs dos visuais: `slide-08-prateleira-petlove` e `slide-08b-prateleira-apet`
- Princípio: imparcialidade entre parceiros. Os dois modelos têm prateleira própria, mesmo layout, mesma prominência e os mesmos bullets de cobertura, conforme os cards do site. Nenhuma nota subordina um modelo ao outro.
- Subtítulo comum: Conforme a tabela oficial de cada plano
- Mensagem-chave comum: cada plano herda o anterior e adiciona coberturas. Os detalhes de coparticipação, carência e limites estão na Tabela de Procedimentos oficial de cada plano.
- Fonte da cobertura por tier, igual para os dois: card do site Personnalité no Ouro, Platina e Titânio; card do site padrão no Bronze e Prata, único lugar onde aparecem.
- Coberturas por plano, idênticas nos dois modelos:
  - Bronze R$ 19,90 (contratação exclusiva no app): consultas em horário comercial, plantão e domiciliar; vacinas; exames laboratoriais simples; assistência funeral; hospedagem.
  - Prata R$ 34,90: tudo do Bronze; exames laboratoriais de imagem; procedimentos clínicos.
  - Ouro R$ 70,00: tudo do Prata; exames laboratoriais complexos; internação.
  - Platina R$ 100,00: tudo do Ouro; cirurgias; castração; transfusão de sangue; consultas e procedimentos especialistas.
  - Titânio R$ 185,00: tudo do Platina; exames de alta complexidade; fisioterapia e acupuntura; limpeza de tártaro.
- Prateleira Petlove: título "Prateleira Petlove: o que cada plano cobre", chamada "Planos com rede credenciada e coparticipação, em parceria com Petlove". Acento azul.
- Prateleira A.Pet: título "Prateleira A.Pet: o que cada plano cobre", chamada "Planos com reembolso e sem coparticipação, em parceria com A.Pet (Amigoo)". Acento laranja.
- A diferença entre os modelos não vai na prateleira. A forma de uso, reembolso no A.Pet e rede credenciada com coparticipação na Petlove, fica nos slides de modelo e no comparador.
- Visual: para cada parceiro, cinco cards arredondados, preço no rodapé, responsivo (1 coluna no mobile). As duas prateleiras no mesmo nível, empilhadas ou lado a lado.
- Fonte de conteúdo: cards comerciais do site (Personnalité e padrão). Fonte contratual e mecânica por modelo: condições gerais A.Pet e cinco tabelas Petlove, e `planos.json`.

## Slide 9 · Desconto para mais de um pet

- ID: `slide-09-multipet`
- Título: Desconto a partir do segundo pet
- Subtítulo: Benefício no ato da contratação
- Mensagem-chave: 10% de desconto na mensalidade a partir do segundo pet contratado no mesmo ato e na mesma assinatura. Vale só no ato, não retroage. Vale nos dois modelos.
- Conteúdo: exemplo. Pet 1 R$ 100,00. Pet 2 R$ 90,00. Pet 3 R$ 90,00, já com 10%. Alerta: se o cliente adicionar outro pet depois, esse novo pet não recebe o desconto.
- Visual: três cards de pet com preço, desconto destacado nos pets 2 e 3.
- Fonte: informação interna confirmada (argumento de venda).

## Slide 10 · A.Pet x Petlove: como explicar ao cliente

- ID: `slide-10-comparativo`
- Título: A.Pet x Petlove, dois modelos, uma escolha do cliente
- Subtítulo: O comparativo que conduz a recomendação
- Mensagem-chave: o modelo ideal depende do perfil do cliente: liberdade de escolher a clínica (A.Pet, por reembolso) ou praticidade da rede credenciada (Petlove, com coparticipação).
- Conteúdo: tabela lado a lado.
  | Característica | A.Pet (Amigoo) | Petlove Saúde |
  |---|---|---|
  | Modelo | Reembolso | Rede credenciada |
  | Coparticipação | Sem coparticipação | Com coparticipação |
  | Escolha da clínica | Clínica de preferência | Clínicas credenciadas do plano |
  | Idade máxima do pet | 9 anos e 11 meses | Sem idade máxima |
  | Início da carência | Vigência no 1º pagamento; carências variam por serviço (24h a 30 dias; pré-existência 12 meses; demais conforme o certificado) | A partir do 1º pagamento; microchipagem obrigatória (ver slide de carência) |
  | Microchipagem | Não citada | Obrigatória para uso |
  | Cobertura quando falta rede | Não se aplica | Restituição, conforme regras |
  | Preço por plano | Igual nos dois | Igual nos dois |
- Visual: duas colunas com cabeçalho colorido, ícones por linha. No mobile, vira dois blocos empilhados.
- Fonte de conteúdo: PPT slide 9. Fonte contratual: condições gerais A.Pet e PDFs Petlove.

## Slide 11 · A.Pet: como funciona

- ID: `slide-11-apet-funciona`
- Título: A.Pet, reembolso sem coparticipação
- Subtítulo: Como o modelo funciona
- Mensagem-chave: o cliente escolhe a clínica, realiza o atendimento, paga o prestador e solicita reembolso conforme o plano, limites, carências e regras do regulamento.
- Conteúdo: fluxo de 4 passos. Regras estruturais: um plano por pet; não existe upgrade nem downgrade; para mudar de plano, cancelar e contratar de novo, iniciando novas carências. Sem exceção.
- Diferenciais do A.Pet: telemedicina 24h, assistência funeral, hospedagem e voucher anual de medicação, conforme o certificado de cada plano (item 3.2.4 das condições gerais).
- Visual: fluxo com ícones, caixa lateral de regras estruturais.
- Fonte de conteúdo: PPT slides 9 e 12. Fonte contratual: condições gerais A.Pet.

## Slide 12 · A.Pet: checklist de reembolso

- ID: `slide-12-apet-reembolso-checklist`
- Título: Checklist de reembolso
- Subtítulo: O que o cliente precisa apresentar
- Mensagem-chave: reembolso depende de documentação correta.
- Conteúdo: 1 nota fiscal emitida por empresa (CNPJ) no CPF do titular do plano. 2 documentação veterinária quando aplicável. 3 dados bancários do titular. Observação: recibos, notas de pessoa física ou documentos de terceiros não são aceitos. Selos: pode orientar (explica os 3 documentos), não prometer (reembolso integral de qualquer valor).
- Visual: três cards numerados com ícone de documento.
- Fonte de conteúdo: PPT slides 9 e 21. Fonte contratual: condições gerais A.Pet.

## Slide 13 · A.Pet: carência, pré-existência e exclusões

- ID: `slide-13-apet-carencia-preexistencia-exclusoes`
- Título: A.Pet, o que precisa ficar claro
- Subtítulo: Carência, pré-existência e exclusões
- Mensagem-chave: o A.Pet tem regras de cobertura que o consultor deve explicar antes da contratação.
- Conteúdo: três blocos.
  - Pré-existência: não impede a contratação, mas tem carência de 12 meses para utilização. Crônicas e congênitas são excluídas.
  - Carência: a vigência começa com o pagamento da 1ª mensalidade. As carências variam por serviço: telemedicina em 24 horas; consultas, emergência, atendimento comercial e domiciliar em 30 dias; pré-existência em 12 meses; os demais conforme o certificado. Eventos ocorridos durante a carência não têm cobertura.
  - Exclusões A.Pet (condições gerais, cláusula 7): congênitas e crônicas; oncológicas e de comportamento; odontológicos em qualquer hipótese; estéticos e de emagrecimento; nutrologia; obstetrícia; leishmaniose; doenças por falta de vacinação; hemodiálise e diálise; radioterapia; embolização e radiologia intervencionista; ortodontia; inseminação artificial; banho, tosa e higiene; controle de parasitas; necropsia; eutanásia; medicamentos para tratamento domiciliar; castração eletiva, exceto se prevista no plano; reembolso em conta de terceiros, com NF de pessoa física ou recibo; acionamentos fora da vigência, na carência ou ocorridos há 180 dias ou mais.
- Nota sobre odontológico: a limpeza de tártaro (tartarectomia) é coberta no A.Pet como serviço de assistência, com carência de 180 dias, sem incluir exames nem anestesia. Isso não contradiz a exclusão: os demais tratamentos odontológicos e os acionamentos decorrentes de problema odontológico seguem excluídos.
- Nota de disponibilidade (com fonte): conforme o item 3.2.4 das condições gerais A.Pet, nem todos os planos possuem todas as assistências. A disponibilidade da tartarectomia por plano consta no certificado (resumo do contrato).
- Selos: pode orientar (pré-existência não impede, carência de 12 meses, consultar o regulamento), não prometer (cobertura para crônicas e congênitas, uso imediato sem cumprir carência, cobertura odontológica ampla além da limpeza de tártaro).
- Visual: três colunas com ícones, selos verde e vermelho. A lista completa pode entrar como bloco recolhível.
- Fonte contratual: condições gerais A.Pet (cláusula 7 e tabela de assistências). Fonte de conteúdo: PPT slides 13 e 28.

## Slide 14 · Petlove: como funciona

- ID: `slide-14-petlove-funciona`
- Título: Petlove, rede credenciada com coparticipação
- Subtítulo: Como o modelo funciona
- Mensagem-chave: o cliente busca atendimento na rede credenciada, usa os serviços cobertos e paga coparticipação. Quando não há rede no município ou na região metropolitana, a Petlove pode cobrir por restituição, conforme regras e limites da tabela.
- Conteúdo: fluxo (escolhe clínica credenciada, agenda, atende, paga coparticipação). Coparticipação varia por serviço e por prestador. Limite anual de cobertura de até 200 vezes o valor mensal do plano. Cobertura nacional conforme a rede e a região de abrangência, sempre dentro das tabelas, regras e do modelo contratado.
- Diferenciais da Petlove: benefícios do Ecossistema Petlove, como descontos em antiparasitários e vermífugos, lojas físicas, frete grátis e desconto no site, limitado a R$ 300 por mês nas regiões Centro-Oeste, Sul e Sudeste. Benefícios eventuais, sujeitos a alteração; não prometer como cobertura garantida.
- Visual: fluxo com ícone de rede e clínica.
- Fonte contratual: PDFs Petlove (itens 3.2, 3.2.1, 7 e 10.1).

## Slide 15 · Petlove: carência e microchipagem

- ID: `slide-15-petlove-carencia-microchip`
- Título: Carência e microchipagem
- Subtítulo: Carência por procedimento e marco de início
- Mensagem-chave: a carência varia por procedimento. A microchipagem é obrigatória para usar o plano.
- Conteúdo:
  - Carência por procedimento (PDF Petlove): 45 dias para consultas, vacinas, exames simples e procedimentos clínicos. 60 dias para exames complexos e de imagem. 120 dias para internação. 90 dias para hospedagem. 180 dias para cremação. Microchipagem 0 dia.
  - Marco de início (selo âmbar de atualização): a carência conta a partir da confirmação do 1º pagamento, regra confirmada com a Petlove. A microchipagem deixa de ser o marco, mas segue obrigatória para uso. O PDF vigente ainda cita a microchipagem; o texto da condição geral será atualizado até o fim de julho de 2026. Orientar pela regra confirmada.
- Visual: grade de carências por procedimento, selo âmbar de atualização bem visível.
- Fonte contratual: PDFs Petlove (itens 4.1, 4.2 e tabelas). Fonte de conteúdo: PPT slide 15.

## Slide 16 · Petlove: pulo de carência

- ID: `slide-16-petlove-pulo-carencia`
- Título: Pulo de carência
- Subtítulo: Antecipar coberturas, com regras
- Mensagem-chave: o cliente pode antecipar um procedimento específico pagando um valor adicional, ativado após a confirmação do pagamento. O mesmo mecanismo libera o limite anual.
- Conteúdo: pode falar (contratado no app, após a ativação, valor adicional à mensalidade, ativa o procedimento específico após confirmação, libera também o limite anual). Não prometer (liberação integral, aprovação automática, antecipação fora das regras). Nem todas as coberturas são elegíveis. Microchipagem obrigatória.
- Visual: três passos no mockup do app, selos verde e vermelho.
- Fonte contratual: condições gerais Petlove, item 6, "Contratação de Liberação da Carência e do Limite Anual" (itens 6.1 a 6.4). Nome comercial pulo de carência no FAQ Itaú Personnalité. Fonte de conteúdo: PPT slide 16.

## Slide 17 · Petlove: como funciona a cobertura

- ID: `slide-17-petlove-cobertura`
- Título: Petlove: cobertura pela Tabela de Procedimentos
- Subtítulo: A cobertura é definida pela Tabela de Procedimentos e Condições Gerais
- Mensagem-chave: na Petlove, a lógica é por inclusão. É coberto o que consta nas Tabelas de Procedimentos e nas Condições Gerais. O que não está listado não faz parte da assistência.
- Conteúdo:
  - Bloco principal (simples): orientar pelo que está previsto na Tabela de Procedimentos e nas Condições Gerais do plano, sem prometer cobertura para procedimentos não listados. Procedimentos não listados não são cobertos (itens 1.1 e 16.4).
  - Bloco recolhível "Limitações importantes": Pet Home cobre apenas consultas eletivas, sem urgência, emergência ou especialista. Alguns medicamentos não são cobertos em nenhuma hipótese (Citrato de Maropitant, Cefovecina Sódica, Meropenem). Não cobre reprodução nem materiais de cirurgia ortopédica (próteses, placas, parafusos, órteses). A Petlove pode incluir ou excluir procedimentos com aviso prévio de 30 dias.
- Visual: card de destaque com ícone de lista, limitações em bloco recolhível âmbar.
- Fonte contratual: PDFs Petlove (itens 1.1, 10.3, 10.3.1, 10.3.2, 11.1, 12.1 e 16.4).

## Slide 18 · Venda consultiva protegida

- ID: `slide-18-venda-protegida`
- Título: Pode orientar x não deve prometer
- Subtítulo: O essencial da conversa segura
- Mensagem-chave: há o que o consultor pode orientar e o que nunca deve prometer.
- Conteúdo: duas colunas.
  - Pode orientar: diferença entre A.Pet e Petlove; planos, valores e segmentos; carência, limites e documentos; regras de reembolso (A.Pet) e coparticipação (Petlove); direcionar ao regulamento.
  - Não deve prometer: cobertura ilimitada; reembolso automático ou imediato; isenção de carência; rede credenciada como regra do A.Pet; uso sem pagamento no momento do atendimento; atendimento em qualquer clínica na Petlove; upgrade ou downgrade; aproveitamento de carências ao trocar de plano; cobertura para procedimentos não listados.
- Visual: coluna verde (pode) e coluna vermelha (não prometer), com ícones.
- Fonte de conteúdo: PPT slides 24 e 25. Fonte contratual: PDFs Petlove e condições gerais A.Pet.

## Slide 19 · Situações de maior risco

- ID: `slide-19-situacoes-risco`
- Título: Situações de maior risco
- Subtítulo: Cobertura, carência e reembolso
- Mensagem-chave: onde o consultor mais precisa de cuidado.
- Conteúdo: três cards.
  - Cobertura: não prometer uso imediato de pré-existência sem cumprir carência de 12 meses (A.Pet), nem cobertura para crônicas, congênitas, oncológicas e comportamentais. Na Petlove, não prometer procedimento fora da Tabela.
  - Carência: não prometer isenção, uso ilimitado, nem aproveitamento ao trocar de plano.
  - Reembolso (A.Pet): não prometer quando a NF não está no CPF do titular, é de pessoa física, é recibo, é para conta de terceiros, ou fora dos limites.
- Visual: três cards de alerta com ícone, tom âmbar e vermelho.
- Fonte de conteúdo: PPT slide 25.

## Slide 20 · Renovação e reajuste

- ID: `slide-20-renovacao`
- Título: Renovação e reajuste
- Subtítulo: As regras seguem o modelo contratado
- Mensagem-chave: o contrato tem vigência de 12 meses e renova automaticamente. As regras de reajuste devem ser explicadas conforme o modelo contratado.
- Conteúdo: dois blocos por modelo, mais o aviso de não renovação.
  - Petlove: vigência de 12 meses, renovação automática, reajuste financeiro pelo IPCA na data de aniversário, eventual reajuste técnico aplicado apenas se o custo médico ultrapassar 50% da receita correspondente, e coparticipação que também pode ser reajustada.
  - A.Pet: renovação anual e tácita ao fim da vigência, com reajuste da mensalidade pelo IPCA. Sem coparticipação.
  - Para não renovar, avisar com 30 dias de antecedência.
- Visual: ícone de ciclo, dois blocos por modelo, selo IPCA.
- Fonte contratual: PDFs Petlove (itens 13.1, 13.2 e 9.7) e condições gerais A.Pet (cláusulas 5.13 e 12.6). Fonte de conteúdo: PPT slide 14.

## Slide 21 · Encerramento

- ID: `slide-21-encerramento`
- Título: O consultor é peça fundamental
- Subtítulo: Experiência segura e transparente
- Mensagem-chave: usar o manual como referência contínua, a trilha IOX como aprofundamento e o formulário como canal de contribuição.
- Conteúdo: quatro blocos. Manual, Trilha IOX, Feedback, Atendimento seguro. Selo de atualização Março/2026: novo marco de início de carência na Petlove, inclusão do pulo de carência, ajustes operacionais.
- Visual: quatro cards com ícones, imagem de pet ao fundo, selo âmbar de atualização.
- Fonte de conteúdo: PPT slide 29.

## Slide 22 · Camada de produto: features e histórias de usuário

- ID: `slide-22-camada-produto`
- Título: Features e histórias de usuário
- Subtítulo: Base para a construção do material
- Mensagem-chave: o que este guia entrega e para quem.
- Conteúdo: dois blocos.
  - Features: comparador A.Pet x Petlove; prateleira por segmento; escada de planos; checklist de reembolso; guia de carências por procedimento; mapa pode x não prometer; simulador de desconto multipet.
  - Histórias de usuário: como consultor, quero comparar os dois modelos para recomendar o certo. Como gerente, quero ver planos por segmento e canal para orientar a equipe. Como consultor, quero o checklist de reembolso para evitar recusa. Como cliente, quero entender carência e custos antes de contratar. Como consultor, quero o mapa do que não prometer.
- Visual: grade de cards de feature e cards de história por persona.
- Fonte: derivado das fontes acima.

---

## Status das verificações

A referência oficial está no `CLAUDE.md`. Os pontos abaixo foram confirmados com fonte:

1. Início da carência Petlove: a partir do 1º pagamento, confirmado com a Petlove. Microchipagem segue obrigatória. O texto da condição geral será atualizado até o fim de julho de 2026 (selo de atualização no slide 15).
2. Pulo de carência: fonte contratual na condição geral, item 6, e nome comercial no FAQ Itaú Personnalité (slide 16).
3. Tartarectomia no A.Pet: coberta como assistência (180 dias, sem exames nem anestesia); demais odontológicos excluídos. Disponibilidade por plano consta no certificado, conforme o item 3.2.4 das condições gerais A.Pet (slide 13). Na Petlove, a limpeza de tártaro é coberta no Titânio.
4. Serviços de conveniência: A.Pet (telemedicina 24h, funeral, hospedagem, voucher de medicação) e Petlove (Ecossistema Petlove), conforme as condições gerais (slides 11 e 14).
5. Pré-existência da Petlove: não especificada nas condições gerais. Orientar pela lista de coberturas e informar que não está especificada.

Disponibilidade por canal em cada segmento deixou de ser exibida como pendência no material. O visual de canais mostra apenas Mobile e Plataforma 360, 360i, e a regra vigente de oferta é observada operacionalmente antes da venda. As bases de cobertura, carência, coparticipação, renovação, reajuste e exclusão têm fonte oficial nas condições gerais do A.Pet e nas cinco tabelas Petlove (Bronze a Titânio).
