# Briefing · Plano Pet Itaú

## Objetivo do material

Apoiar consultores e gerentes na oferta dos Planos Pet Itaú, reduzir dúvidas na venda, evitar promessas indevidas e facilitar uma conversa clara, simples e segura com o cliente. O material não substitui o regulamento do plano. As regras oficiais de cobertura, limites e carências estão sempre nas condições gerais e devem ser consultadas em caso de dúvida.

O material apoia três frentes:

- Comercial: como ofertar e explicar o produto.
- Operacional: contratação, carência, uso, reembolso e renovação.
- Compliance: o que orientar e o que não prometer.

## Público

Consultores e gerentes do Itaú. Linguagem gerencial e comercial, direta, orientada à venda consultiva.

## Escopo do produto

Plano Pet Itaú, para cães e gatos. Prateleira de 5 planos, com 2 parceiros e 2 modelos de atendimento à escolha do cliente.

- A.Pet (Amigoo): modelo de reembolso, sem coparticipação. O cliente escolhe a clínica de preferência, paga o atendimento e solicita reembolso.
- Petlove Saúde: modelo de rede credenciada, com coparticipação. O cliente usa a rede do plano e paga coparticipação conforme a tabela. A cobertura segue o que consta nas Tabelas de Procedimentos e nas Condições Gerais.

Os 5 planos têm o mesmo valor mensal nos dois modelos. O que muda é a forma de uso e algumas diferenças de cobertura. Qualquer diferença de cobertura entre os modelos deve vir do `planos.json`, dos PDFs ou de cards comerciais sinalizados, nunca de suposição.

## Quem pode contratar e onde ofertar

- Segmentos: Itaú Agências (IA), Itaú Uniclass (IU) e Itaú Personnalité (IP).
- Canais: Mobile, Plataforma 360 e 360i. Gerentes, AN e assessores usam a rota de oferta via 360i.
- Contratação no SuperApp: Menu, Seguros e planos, Vida, Pet e Odonto, Plano Pet.
- Disponibilidade por segmento e canal varia. Observar sempre as regras vigentes de oferta antes da venda.

## Planos por segmento

- Itaú Agências (IA): Bronze, Prata e Ouro. O Bronze é exclusivo do segmento Agências. Na Agência, o consultor e o gerente vendem pela Plataforma 360 e 360i.
- Itaú Uniclass (IU): Prata, Ouro e Platina.
- Itaú Personnalité (IP): Ouro, Platina e Titânio.

A disponibilidade por canal (Mobile, Plataforma 360 e 360i) varia por segmento. A rota via 360i é usada por gerentes, AN e assessores. Observar sempre as regras vigentes de oferta antes da venda.

## Preços e desconto

- Bronze R$ 19,90 · Prata R$ 34,90 · Ouro R$ 70,00 · Platina R$ 100,00 · Titânio R$ 185,00. Iguais nos dois modelos.
- Desconto multipet: 10% na mensalidade a partir do segundo pet contratado no mesmo ato e na mesma assinatura. Vale só no ato e não retroage. Se o cliente adicionar outro pet depois, esse novo pet não recebe o desconto. Informação interna confirmada, usada como argumento de venda. Não é regra extraída dos PDFs.

## Plano de incentivo

- Contratos gerados na Plataforma 360 e 360i, Petlove ou A.Pet, contam automaticamente para o plano de incentivo, porque os dois modelos já estão na plataforma.
- Contratos gerados pelo Mobile, Petlove ou A.Pet, precisam ser registrados no Dynamics para pontuar, para o consultor e para o gerente.
- Regra comercial interna, não regra contratual do produto.

## Governança de fontes

1. PDFs de condições gerais em `Docs/Pet/`: base oficial de coberturas, coparticipações, carências, limites e regras. Para regra contratual, os PDFs prevalecem.
2. `dados/planos.json`: dados estruturados e rastreados às fontes. Referência operacional para números na geração.
3. Cards comerciais: úteis para preço e visão comercial. Não valem como fonte de regra contratual.
4. PowerPoint de origem: fonte de conteúdo e estrutura conceitual. Nunca referência visual.
5. Print comercial do Itaú: referência visual.
6. Brief interno: informações comerciais confirmadas internamente, sempre separadas das fontes oficiais.

Regra de ouro: não inventar. O que não estiver nas fontes entra como `[VALIDAR · FONTE OFICIAL]`. Separar sempre fato, do que é interno e do que está pendente.

## Compliance: pode orientar x não deve prometer

O consultor PODE orientar:

- A diferença entre A.Pet e Petlove.
- Planos, valores e segmentos.
- Carência, limites e documentos.
- Regras de reembolso (A.Pet) e de coparticipação (Petlove).
- Direcionar o cliente ao regulamento.

O consultor NÃO deve prometer:

- Cobertura ilimitada.
- Reembolso automático, imediato ou integral sem análise.
- Isenção de carência.
- Rede credenciada como regra do A.Pet.
- Uso sem pagamento no momento do atendimento.
- Atendimento em qualquer clínica no modelo Petlove.
- Upgrade ou downgrade de plano.
- Aproveitamento de carências ao trocar de plano.
- Cobertura para procedimentos não previstos nas Tabelas de Procedimentos e nas Condições Gerais da Petlove.
- Cobertura odontológica ampla no A.Pet além da limpeza de tártaro (ver Coberturas esclarecidas pela fonte).

## Regras estruturais

- Um plano por pet, ou seja, um contrato ativo por pet.
- Não existe upgrade nem downgrade. Para mudar de plano, cancelar e contratar de novo, iniciando novas carências.
- Renovação e reajuste: as regras seguem o modelo contratado.
  - Petlove: renovação anual e automática, reajuste financeiro pelo IPCA na data de aniversário, eventual reajuste técnico aplicado apenas se o custo médico ultrapassar 50% da receita correspondente, e coparticipação também sujeita a reajuste. Conforme as condições gerais Petlove.
  - A.Pet: renovação anual e tácita ao fim da vigência, com reajuste da mensalidade pelo IPCA. Sem coparticipação. Conforme as condições gerais A.Pet (cláusulas 5.13 e 12.6).
  - Para não renovar, avisar com 30 dias de antecedência.

## Atualização Março/2026 (Itaú)

- Novo marco de início de carência na Petlove: a partir do 1º pagamento, confirmado com a Petlove. O texto da condição geral será atualizado até o fim de julho de 2026.
- Pulo de carência: já previsto na condição geral Petlove, item 6, e descrito comercialmente no FAQ Itaú Personnalité.
- Ajustes nas regras operacionais.

## Coberturas esclarecidas pela fonte (condições gerais)

Pontos que antes eram tratados como dúvida e agora estão confirmados pelos PDFs. Os valores exatos de coparticipação, limite e carência vêm do `planos.json` e das tabelas, não digitados de memória.

- Limpeza de tártaro no A.Pet: as condições gerais do A.Pet listam a tartarectomia (limpeza de tártaro) como serviço de assistência coberto, com carência de 180 dias. O serviço não inclui exames nem anestesia. Os demais tratamentos odontológicos e os acionamentos decorrentes de problema odontológico são excluídos em qualquer hipótese. Ou seja, no A.Pet, quando prevista no certificado do plano, a limpeza de tártaro é a única frente odontológica coberta. Resta confirmar em quais tiers A.Pet ela está disponível.
- Limpeza de tártaro na Petlove: coberta apenas no Titânio, com coparticipação e carência conforme a tabela do plano. Os demais planos Petlove não trazem.
- Exames laboratoriais na Petlove: as tabelas Petlove preveem categorias de exames laboratoriais, básicos e complexos, com coparticipação, carência e limites conforme cada plano. A exposição comercial da prateleira deve seguir o `planos.json` e a tabela oficial de cada tier.
- Exames laboratoriais no A.Pet: cobertos como assistência, com carência conforme as condições gerais.
- Limite anual da Petlove: até 200 vezes o valor mensal do plano, conforme as condições gerais.
- Pulo de carência da Petlove: tem fonte contratual nas condições gerais, item 6, "Contratação de Liberação da Carência e do Limite Anual", e é descrito comercialmente como pulo de carência no FAQ Itaú Personnalité. Libera um procedimento específico mediante valor adicional, ativado após a confirmação do pagamento. O mesmo mecanismo libera o limite anual. Microchipagem obrigatória. Nem todas as coberturas são elegíveis. Não prometer liberação integral nem automática.
- Serviços de conveniência e diferenciais. No A.Pet: telemedicina 24h, assistência funeral, hospedagem e voucher anual de medicação, conforme o certificado de cada plano. O item 3.2.4 das condições gerais A.Pet informa que nem todos os planos possuem todas as assistências. Na Petlove: benefícios do Ecossistema Petlove, como descontos em antiparasitários e vermífugos, lojas físicas, frete grátis e desconto no site, limitado a R$ 300 por mês nas regiões Centro-Oeste, Sul e Sudeste. São benefícios eventuais, podem ser alterados ou descontinuados. Não prometer como cobertura garantida.

## Status das verificações

A referência oficial está no `CLAUDE.md`. Nesta revisão, os pontos abaixo foram confirmados com fonte:

1. Início da carência da Petlove: 1º pagamento, confirmado com a Petlove. Microchipagem segue obrigatória. O texto da condição geral será atualizado até o fim de julho de 2026.
2. Pulo de carência da Petlove: fonte contratual na condição geral, item 6, e nome comercial no FAQ Itaú Personnalité (ver Coberturas esclarecidas pela fonte). Não prometer liberação integral nem automática.
3. Tartarectomia no A.Pet: coberta como assistência, 180 dias, sem exames nem anestesia; demais odontológicos excluídos. Disponibilidade por plano consta no certificado, conforme o item 3.2.4 das condições gerais A.Pet.
4. Serviços de conveniência: extraídos das condições gerais (ver Coberturas esclarecidas pela fonte).
5. Pré-existência da Petlove: não especificada nas condições gerais. Orientar pela lista de coberturas do produto e informar que não está especificada.

Disponibilidade por canal em cada segmento: regra operacional, observada antes da venda, sem pendência no material.

## Pré-existência

- A.Pet: a pré-existência não impede a contratação, mas tem carência de 12 meses para utilização, e crônicas e congênitas são excluídas.
- Petlove: as condições gerais não especificam regra de pré-existência. Orientar pela lista de coberturas do produto, informando que a pré-existência não está especificada nas condições gerais. Verificado nos cinco PDFs Petlove.
