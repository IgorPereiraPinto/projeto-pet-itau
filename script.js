/* ======================================================================
   Plano Pet Itaú · script.js
   OBJETIVO: alimentar a página com os números e dados estruturados, e dar o
             movimento de landing page (scroll reveal, count-up, nav mobile).
   POR QUÊ: a página pode ser aberta sem servidor local (file://), onde
            fetch('dados/planos.json') falha. Por isso os dados ficam embutidos
            aqui, copiados fielmente de dados/planos.json (fonte rastreável).
            Nenhum número é digitado de memória no HTML.
   COMO REUTILIZAR: ao mudar dados/planos.json, atualizar o objeto PET_DATA
            abaixo (ou servir a página via Live Server e trocar por fetch).
   DEPENDÊNCIA: index.html com os ids/atributos data-bind correspondentes.
   ====================================================================== */

"use strict";

/* --------------------------------------------------------------------
   PONTO ÚNICO DE TROCA DE IMAGENS
   OBJETIVO: centralizar as URLs das imagens de pet para troca fácil pelos
             assets oficiais do Itaú (basta trocar a URL ou apontar para
             "assets/img/arquivo.jpg").
   POR QUÊ: cada <img data-img="chave"> recebe a URL daqui; se a imagem
            falhar (offline ou URL inválida), o onerror esconde o <img> e o
            placeholder atrás aparece. Sem dependência externa obrigatória.
   COMO REUTILIZAR: substituir cada URL pela do asset oficial.
   -------------------------------------------------------------------- */
const PET_IMAGES = {
  hero: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
  produtoJuntos: "https://images.unsplash.com/photo-1573435567032-ff5982925350?auto=format&fit=crop&w=900&q=80",
  encerramento: "https://images.unsplash.com/photo-1535722339661-7f22185bc7ca?auto=format&fit=crop&w=1400&q=80"
};

/* --------------------------------------------------------------------
   FONTE DE DADOS — espelho fiel de dados/planos.json (campos usados).
   EDITAR: estes valores devem refletir dados/planos.json, nunca a memória.
   -------------------------------------------------------------------- */
const PET_DATA = {
  precos_mensais: { bronze: 19.9, prata: 34.9, ouro: 70.0, platina: 100.0, titanio: 185.0 },
  desconto_multipet: {
    percentual: 10,
    exemplo: [
      { pet: 1, mensalidade: 100.0 },
      { pet: 2, mensalidade: 90.0 },
      { pet: 3, mensalidade: 90.0 }
    ]
  },
  // Canais por segmento: rótulo e ícone do selo exibido em cada card.
  canais_labels: { mobile: "Mobile", "360i": "Plataforma 360i" },
  canais_icone: { mobile: "ic-phone", "360i": "ic-route" },
  segmentos: {
    agencias: { sigla: "IA", nome: "Itaú Agências", planos: ["bronze", "prata", "ouro"], canais: ["mobile"], nota: "" },
    uniclass: { sigla: "IU", nome: "Itaú Uniclass", planos: ["prata", "ouro", "platina"], canais: ["mobile"], nota: "" },
    personnalite: { sigla: "IP", nome: "Itaú Personnalité", planos: ["ouro", "platina", "titanio"], canais: ["mobile", "360i"], nota: "Disponibilidade por canal conforme regra vigente. Na agência, consultores, gerentes e assessores vendem pela Plataforma 360i." }
    // Itaú Private é citado como o quarto segmento direto no HTML, sem planos, canal nem nota.
  },
  planos: [
    { id: "bronze", nome: "Itaú Pet Bronze", posicionamento: "Entrada. Proteção essencial com custo mensal reduzido.", preco: 19.9, contratacao_exclusiva_app: true,
      coberturas: ["consultas em horário comercial, plantão e domiciliar", "vacinas", "exames laboratoriais simples", "assistência funeral", "hospedagem"] },
    { id: "prata", nome: "Itaú Pet Prata", posicionamento: "Equilíbrio. Rotina veterinária, boa relação cobertura e valor.", preco: 34.9, contratacao_exclusiva_app: false,
      coberturas: ["tudo do Bronze", "exames laboratoriais de imagem", "procedimentos clínicos"] },
    { id: "ouro", nome: "Itaú Pet Ouro", posicionamento: "Rotina. Tranquilidade em exames e atendimentos da rotina.", preco: 70.0, contratacao_exclusiva_app: false,
      coberturas: ["tudo do Prata", "exames laboratoriais complexos", "internação"] },
    { id: "platina", nome: "Itaú Pet Platina", posicionamento: "Robusto. Acompanhamento preventivo e amplitude de cobertura.", preco: 100.0, contratacao_exclusiva_app: false,
      coberturas: ["tudo do Ouro", "cirurgias", "castração", "transfusão de sangue", "consultas e procedimentos especialistas"] },
    { id: "titanio", nome: "Itaú Pet Titânio", posicionamento: "Máxima cobertura. Máxima amplitude e previsibilidade financeira.", preco: 185.0, contratacao_exclusiva_app: false,
      coberturas: ["tudo do Platina", "exames de alta complexidade", "fisioterapia e acupuntura", "limpeza de tártaro"] }
  ],
  conveniencias: {
    apet: ["telemedicina 24h", "assistência funeral (cremação ou enterro)", "hospedagem", "voucher anual de medicação"],
    petlove: ["Clube Petlove, por R$ 2,90", "descontos em antiparasitários e vermífugos", "descontos em lojas físicas Petlove", "frete grátis", "desconto no site (até R$ 300/mês · Centro-Oeste, Sul e Sudeste)"]
  },
  apet_regras_estruturais: [
    "Um plano por pet (um contrato ativo por pet).",
    "Não existe upgrade nem downgrade.",
    "Para mudar de plano, cancelar e contratar de novo, iniciando novas carências."
  ],
  exclusoes_apet: [
    "doenças congênitas e crônicas", "doenças oncológicas e transtornos comportamentais",
    "tratamentos odontológicos em geral, exceto tartarectomia quando prevista no plano contratado",
    "tratamentos estéticos e de emagrecimento", "nutrologia e consultas em nutrição para emagrecimento",
    "obstetrícia (parto, pré-natal, pós-parto)", "teste, exames e tratamento de leishmaniose",
    "doenças causadas por falta de vacinação", "hemodiálise e diálise", "radioterapia",
    "embolização e radiologia intervencionista", "ortodontia", "inseminação artificial",
    "banhos, tosa e higiene", "controle de parasitas", "necropsia", "eutanásia",
    "medicamentos para tratamento domiciliar", "castração eletiva ou voluntária, exceto se contemplada expressamente no plano",
    "acionamentos fora da vigência, dentro da carência ou ocorridos há 180 dias ou mais",
    "eventos anteriores à contratação e conhecidos pelo cliente",
    "reembolso em conta de terceiros e com nota fiscal de pessoa física ou recibo"
  ],
  petlove_carencias_por_grupo_dias: {
    "Microchipagem": 0,
    "Consultas": 45,
    "Vacinas": 45,
    "Exames laboratoriais simples": 45,
    "Procedimentos clínicos": 45,
    "Exames laboratoriais complexos": 60,
    "Exames de imagem": 60,
    "Consultas com especialistas": 60,
    "Fisioterapia e acupuntura": 60,
    "Hospedagem": 90,
    "Internação": 120,
    "Cirurgia, castração e anestesia": 120,
    "Cremação coletiva": 180,
    "Limpeza de tártaro": 180
  },
  petlove_limitacoes: [
    "Pet Home cobre apenas consultas eletivas, sem urgência, emergência ou especialista.",
    "Medicamentos não cobertos em nenhuma hipótese: Citrato de Maropitant, Cefovecina Sódica, Meropenem.",
    "Não cobre reprodução nem materiais de cirurgia ortopédica (próteses, placas, parafusos, órteses).",
    "Procedimentos podem ser incluídos ou excluídos pela Petlove com aviso prévio de 30 dias."
  ],
  petlove_limpeza_tartaro: { coberta_em: ["titanio"] },
  // Carência agrupada por prazo (um card por prazo), mesmo formato nos dois modelos
  petlove_carencias_grupos: [
    { valor: 45, unidade: "dias", nome: "consultas; vacinas; exames laboratoriais simples; procedimentos clínicos" },
    { valor: 60, unidade: "dias", nome: "exames laboratoriais complexos; exames de imagem; consultas com especialistas; fisioterapia; acupuntura" },
    { valor: 90, unidade: "dias", nome: "hospedagem" },
    { valor: 120, unidade: "dias", nome: "internação; cirurgia; castração; anestesia" },
    { valor: 180, unidade: "dias", nome: "cremação; limpeza de tártaro" }
  ],
  apet_carencias_grupos: [
    { valor: 24, unidade: "horas", nome: "telemedicina" },
    { valor: 30, unidade: "dias", nome: "consultas (emergência, horário comercial, domiciliar e com especialista); procedimentos clínicos; assistência funeral; hospedagem" },
    { valor: 60, unidade: "dias", nome: "exames laboratoriais, de imagem e de alta complexidade; vacinas; cirurgias; internação; transfusão" },
    { valor: 180, unidade: "dias", nome: "fisioterapia e acupuntura; castração eletiva" }
  ],
  // Cobertura consolidada (lista no estilo coberto) por modelo
  petlove_cobertura_lista: [
    "Consultas (clínico geral)",
    "Consultas com especialistas",
    "Pet Home (consulta a domicílio, eletiva e agendada)",
    "Vacinas",
    "Exames laboratoriais (simples e complexos)",
    "Exames de imagem",
    "Procedimentos clínicos",
    "Internação",
    "Cirurgias",
    "Castração",
    "Anestesia",
    "Fisioterapia e acupuntura",
    "Limpeza de tártaro",
    "Hospedagem Pet (exclusivo Itaú, sem coparticipação)",
    "Assistência funeral / cremação"
  ],
  apet_cobertura_lista: [
    "Telemedicina 24h",
    "Consultas (emergência, horário comercial, domiciliar e especialista)",
    "Procedimentos clínicos",
    "Exames laboratoriais",
    "Exames de imagem",
    "Exames de alta complexidade",
    "Vacinas",
    "Cirurgias",
    "Internação",
    "Transfusão de sangue",
    "Fisioterapia e acupuntura",
    "Castração eletiva",
    "Anestesia (acompanha o procedimento principal)",
    "Assistência funeral",
    "Hospedagem (condicionada)",
    "Voucher anual de medicação"
  ],
  // Conveniências detalhadas da A.Pet (sem app próprio nem clube de vantagens)
  apet_conveniencias: [
    { label: "Telemedicina 24h", desc: "consultas veterinárias 24 horas por dia." },
    { label: "Assistência funeral", desc: "cremação ou enterro." },
    { label: "Voucher anual de medicação", desc: "compra de medicamento em farmácia ou clínica." },
    { label: "Hospedagem", desc: "condicionada; não cobre simples hospedagem nem locais inapropriados, restrições do hotel podem se aplicar." },
    { label: "Central de atendimento", desc: "0800-717-3333." }
  ],
  // Serviços de conveniência da A.Pet (grupo distinto das assistências, slide 11)
  apet_servicos_conveniencia: [
    "Agendamento de leva e traz.",
    "Envio de ração.",
    "Aplicação de vacina em domicílio.",
    "Indicação de banho e tosa."
  ],
  // Diferenciais de serviço da Petlove (além do Ecossistema)
  petlove_diferenciais_servico: [
    { label: "Pet Home", desc: "consulta veterinária a domicílio, só eletiva e com agendamento prévio; não cobre urgência, emergência nem especialista a domicílio; não substitui clínica/hospital; não faz coleta de exame em casa. Coparticipação R$ 40, carência 45 dias." },
    { label: "Acesso pelo app", desc: "o app Petlove Saúde é a plataforma do plano, com gestão do plano, consulta de coberturas, rede credenciada e agendamentos." },
    { label: "Hospedagem Pet, exclusivo Itaú", desc: "sem coparticipação (R$ 0), nos cinco planos, carência 90 dias." }
  ],

  /* ------------------------------------------------------------------
     BLOCO 2 — Comparativo por plano (cards expansíveis A.Pet x Petlove).
     Regras gerais por modelo valem em todos os cards. Números detalhados,
     tetos, limites e utilizações SÓ no Platina. Notas permitidas: duas,
     ambas em selo âmbar (primeiro pagamento Petlove e tartarectomia A.Pet).
     ------------------------------------------------------------------ */
  comparativo: {
    modelos: {
      apet: {
        nome: "A.Pet", tipo: "Reembolso",
        comoUsa: "Reembolso. O cliente escolhe a clínica de preferência, realiza o atendimento, paga o prestador e solicita reembolso conforme o plano contratado.",
        copart: "Sem coparticipação.",
        idade: "Contratação até 9 anos, 11 meses e 29 dias. Depois de contratado, o pet permanece elegível ao plano independentemente da idade, respeitadas as regras do produto.",
        carencia: "Telemedicina 24h em 24 horas; consultas e procedimentos clínicos em 30 dias; exames, vacinas, cirurgias, internação e transfusão em 60 dias; fisioterapia, acupuntura e castração em 180 dias."
      },
      petlove: {
        nome: "Petlove", tipo: "Rede credenciada",
        comoUsa: "Rede credenciada. O cliente utiliza clínicas do plano e paga coparticipação quando usa serviços cobertos.",
        copart: "Com coparticipação.",
        idade: "Sem idade máxima para contratação.",
        carencia: "Consultas, vacinas, exames laboratoriais simples e procedimentos clínicos em 45 dias; exames laboratoriais complexos, exames de imagem, especialistas, fisioterapia e acupuntura em 60 dias; hospedagem em 90 dias; internação, cirurgia, castração e anestesia em 120 dias; cremação e limpeza de tártaro em 180 dias; microchipagem em 0 dia."
      }
    },
    notas: {
      petlovePrimeiroPagamento: "A contagem de carência e renovação e a liberação para uso do plano passam a iniciar após a confirmação do primeiro pagamento. A microchipagem segue obrigatória para utilização do plano, mas não é mais o marco inicial de carência. Condições gerais em atualização, previsão de ajuste até o fim de julho de 2026.",
      apetTartarectomia: "Coberta no plano Titânio: 1 utilização até R$ 500, carência de 180 dias. Nos demais planos, não tratar como cobertura; orientar validação conforme o plano contratado. Não prometer cobertura odontológica ampla."
    },
    planos: [
      { id: "bronze", nome: "Bronze", preco: 19.9, segmentos: ["IA"],
        posicionamento: "Entrada, proteção essencial com custo mensal reduzido.",
        coberturas: ["consultas em horário comercial, plantão e domiciliar", "vacinas", "exames laboratoriais simples", "assistência funeral", "hospedagem"] },
      { id: "prata", nome: "Prata", preco: 34.9, segmentos: ["IA", "IU"],
        posicionamento: "Equilíbrio, rotina veterinária com boa relação entre cobertura e valor.",
        coberturas: ["tudo do Bronze", "exames de imagem", "procedimentos clínicos"] },
      { id: "ouro", nome: "Ouro", preco: 70.0, segmentos: ["IA", "IU", "IP"],
        posicionamento: "Rotina, mais tranquilidade para exames e atendimentos do dia a dia.",
        coberturas: ["tudo do Prata", "exames laboratoriais complexos", "internação"] },
      { id: "platina", nome: "Platina", preco: 100.0, segmentos: ["IU", "IP"],
        posicionamento: "Robusto, acompanhamento preventivo e maior amplitude de cobertura.",
        coberturas: ["tudo do Ouro", "cirurgias", "castração", "transfusão de sangue", "consultas e procedimentos especialistas"],
        precoNota: "R$ 100,00/mês nos dois modelos.",
        diferenciais: {
          apet: "Voucher de medicamentos de R$ 150 por ano, carência 30 dias.",
          petlove: "Clube Petlove por R$ 2,90."
        },
        tabela: [
          { item: "Consulta horário comercial", apet: "Ilimitado até R$ 200/uso · carência 30 dias", petlove: "Ilimitado · carência 45 dias" },
          { item: "Consulta de plantão", apet: "Ilimitado até R$ 200/uso · carência 30 dias", petlove: "Ilimitado · carência 45 dias" },
          { item: "Consulta de emergência", apet: "Ilimitado até R$ 200/uso · carência 30 dias", petlove: null },
          { item: "Consulta domiciliar", apet: "Ilimitado até R$ 200/uso · carência 30 dias", petlove: "Ilimitado · carência 45 dias" },
          { item: "Microchipagem", apet: null, petlove: "1 utilização · carência 0 dia" },
          { item: "Telemedicina 24h", apet: "Ilimitado · carência 24 horas", petlove: null },
          { item: "Procedimentos clínicos", apet: "Ilimitado até R$ 250/uso · carência 30 dias", petlove: "Ilimitado · carência 45 dias" },
          { item: "Procedimentos especialistas", apet: "Ilimitado até R$ 300/uso · carência 30 dias", petlove: "20 utilizações · carência 60 dias" },
          { item: "Exames laboratoriais", apet: "Ilimitado até R$ 1.400/uso · carência 60 dias", petlove: "20 utilizações (simples e 10 complexos) · carência 45 dias para simples e 60 dias para complexos" },
          { item: "Vacinas", apet: "2 utilizações até R$ 250/uso · carência 60 dias", petlove: "3 tipos mais aplicação (cães 2, gatos 2) · carência 45 dias" },
          { item: "Assistência funeral", apet: "1 utilização até R$ 500 · carência 30 dias", petlove: "1 utilização · carência 180 dias" },
          { item: "Hospedagem", apet: "8 diárias até R$ 200/diária · carência 30 dias", petlove: "8 diárias · carência 90 dias" },
          { item: "Exames de imagem", apet: "Ilimitado até R$ 1.400/uso · carência 60 dias", petlove: "6 utilizações · carência 60 dias" },
          { item: "Internação", apet: "6 diárias até R$ 300/diária · carência 60 dias", petlove: "8 utilizações · carência 120 dias" },
          { item: "Cirurgias", apet: "Ilimitado até R$ 1.500/uso · carência 60 dias", petlove: "3 utilizações · carência 120 dias" },
          { item: "Consulta com especialista", apet: "Ilimitado até R$ 200/uso · carência 30 dias", petlove: "3 utilizações · carência 60 dias" },
          { item: "Castração", apet: "1 utilização até R$ 500 · carência 180 dias", petlove: "1 utilização · carência 120 dias" },
          { item: "Transfusão", apet: "Ilimitado até R$ 300/uso · carência 60 dias", petlove: "Ilimitado · carência 120 dias" },
          { item: "Tartarectomia (limpeza de tártaro)", apet: null, petlove: "Coberto · carência 180 dias" }
        ] },
      { id: "titanio", nome: "Titânio", preco: 185.0, segmentos: ["IP"],
        posicionamento: "Máxima cobertura, maior amplitude e previsibilidade financeira.",
        coberturas: ["tudo do Platina", "exames de alta complexidade", "fisioterapia e acupuntura", "limpeza de tártaro"],
        apetTartarectomiaTopic: true }
    ]
  }
};

/* --------------------------------------------------------------------
   Utilitários de formatação
   -------------------------------------------------------------------- */
const fmtBRL = (v) => "R$ " + v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const planoById = (id) => PET_DATA.planos.find((p) => p.id === id);

/* --------------------------------------------------------------------
   RENDER — preenche o HTML a partir do PET_DATA (números rastreáveis)
   -------------------------------------------------------------------- */
function renderSegmentos() {
  document.querySelectorAll("[data-segment]").forEach((card) => {
    const seg = PET_DATA.segmentos[card.dataset.segment];
    if (!seg) return;
    card.querySelector('[data-bind="sigla"]').textContent = seg.sigla;
    card.querySelector('[data-bind="segment-nome"]').textContent = seg.nome;
    const ul = card.querySelector('[data-bind="segment-planos"]');
    ul.innerHTML = seg.planos.map((id) => `<li>${planoById(id).nome.replace("Itaú Pet ", "")}</li>`).join("");
    // Selo de canal: Mobile nos três; 360i só onde o segmento o lista (Personnalité).
    const selos = card.querySelector('[data-bind="segment-canais"]');
    if (selos) {
      selos.innerHTML = (seg.canais || []).map((c) =>
        `<span class="canal-selo canal-selo--${c === "360i" ? "p360i" : c}"><svg class="icon" aria-hidden="true"><use href="#${PET_DATA.canais_icone[c]}"></use></svg>${PET_DATA.canais_labels[c]}</span>`
      ).join("");
    }
    // Nota só aparece quando o segmento tem uma; sem nota, o parágrafo some.
    const notaEl = card.querySelector('[data-bind="segment-nota"]');
    if (notaEl) { if (seg.nota) { notaEl.textContent = seg.nota; notaEl.hidden = false; } else { notaEl.hidden = true; } }
  });
}

function renderEscada() {
  document.querySelectorAll("#stairs .stairs__step").forEach((step) => {
    const p = planoById(step.dataset.plan);
    if (!p) return;
    step.querySelector('[data-bind="plan-nome"]').textContent = p.nome.replace("Itaú Pet ", "");
    const priceEl = step.querySelector('[data-bind="plan-preco"]');
    priceEl.dataset.value = p.preco;
  });
}

function renderCoberturas() {
  // Mesma prateleira renderizada nas DUAS seções peer: Petlove (coberturas-grid)
  // e A.Pet (coberturas-grid-apet). No lado A.Pet, a limpeza de tártaro
  // (tartarectomia) é cobertura CONFIRMADA só no Titânio, com o detalhe.
  const buildHtml = (model) => PET_DATA.planos.map((p) => {
    const itens = p.coberturas.map((c) => {
      if (/tártaro/i.test(c) && model === "apet") {
        return `<li><svg class="icon" aria-hidden="true"><use href="#ic-check"></use></svg><span>${c} <em class="cov-detail">(1 utilização até R$ 500 · carência 180 dias)</em></span></li>`;
      }
      return `<li><svg class="icon" aria-hidden="true"><use href="#ic-check"></use></svg><span>${c}</span></li>`;
    }).join("");
    const flag = p.contratacao_exclusiva_app ? `<span class="cov-card__flag">Contratação exclusiva no app</span>` : "";
    return `<article class="cov-card reveal">
      <div class="cov-card__name">${p.nome.replace("Itaú Pet ", "")}</div>
      <div class="cov-card__pos">${p.posicionamento}</div>
      <ul class="cov-card__list">${itens}</ul>
      <div class="cov-card__price">${fmtBRL(p.preco)}/mês</div>
      ${flag}
    </article>`;
  }).join("");
  const petlove = document.getElementById("coberturas-grid");
  if (petlove) petlove.innerHTML = buildHtml("petlove");
  const apet = document.getElementById("coberturas-grid-apet");
  if (apet) apet.innerHTML = buildHtml("apet");
}

function renderMultipet() {
  const grid = document.getElementById("multipet-grid");
  if (!grid) return;
  const ex = PET_DATA.desconto_multipet.exemplo;
  grid.innerHTML = ex.map((e) => {
    const disc = e.pet >= 2 ? `<span class="pet-price-card__disc">−${PET_DATA.desconto_multipet.percentual}% no ato</span>` : `<span class="muted">sem desconto</span>`;
    return `<article class="pet-price-card reveal">
      <div class="pet-price-card__title">Pet ${e.pet}</div>
      <div class="pet-price-card__val">${fmtBRL(e.mensalidade)}</div>
      ${disc}
    </article>`;
  }).join("");
}

function renderListaSimples(id, arr) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = arr.map((t) => `<li>${t}</li>`).join("");
}

// Lista com rótulo em negrito + descrição, num único <span> (sem escadinha)
function renderDetalheLista(id, arr) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = arr.map((it) => `<li><svg class="icon icon--check" aria-hidden="true"><use href="#ic-check"></use></svg><span><strong>${it.label}:</strong> ${it.desc}</span></li>`).join("");
}

// Checklist simples com ícone de check (mesmo padrão visual das assistências)
function renderChecklistCheck(id, arr) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = arr.map((t) => `<li><svg class="icon icon--check" aria-hidden="true"><use href="#ic-check"></use></svg><span>${t}</span></li>`).join("");
}

function renderConveniencias() {
  // A.Pet: assistências detalhadas + serviços de conveniência, dois grupos
  // distintos (slide 11). Petlove: Ecossistema (slide 14) mais os
  // Diferenciais de serviço (slide 14).
  renderDetalheLista("apet-conv", PET_DATA.apet_conveniencias);
  renderChecklistCheck("apet-servicos", PET_DATA.apet_servicos_conveniencia);
  renderListaSimples("petlove-conv", PET_DATA.conveniencias.petlove);
  renderDetalheLista("petlove-servico", PET_DATA.petlove_diferenciais_servico);
}

// Listas de cobertura consolidada (slide 17 Petlove, slide 13 A.Pet)
function renderCoberturaListas() {
  const itens = (arr) => arr.map((c) => `<li><svg class="icon" aria-hidden="true"><use href="#ic-check"></use></svg><span>${c}</span></li>`).join("");
  const p = document.getElementById("petlove-cobertura-lista");
  if (p) p.innerHTML = itens(PET_DATA.petlove_cobertura_lista);
  const a = document.getElementById("apet-cobertura-lista");
  if (a) a.innerHTML = itens(PET_DATA.apet_cobertura_lista);
}

function renderCarencias() {
  // Os dois grids agrupam por PRAZO (um card por prazo), com o mesmo template,
  // para terem o mesmo peso visual. Petlove (5 cards) e A.Pet (4 cards).
  const carItem = (g) => `
    <div class="car-item reveal">
      <div class="car-item__days">${g.valor}<small> ${g.unidade}</small></div>
      <div class="car-item__name">${g.nome}</div>
    </div>`;
  const grid = document.getElementById("carencia-grid");
  if (grid) grid.innerHTML = PET_DATA.petlove_carencias_grupos.map(carItem).join("");
  const gridApet = document.getElementById("carencia-grid-apet");
  if (gridApet) gridApet.innerHTML = PET_DATA.apet_carencias_grupos.map(carItem).join("");
}

/* --------------------------------------------------------------------
   BLOCO 2 — Comparativo por plano: cinco cards expansíveis (<details>),
   cada um com duas colunas simétricas A.Pet x Petlove na mesma ordem de
   campos. Números/limites só no Platina. Onde um modelo não tem dado para
   um item, o item não é renderizado naquele lado (sem texto de ausência).
   -------------------------------------------------------------------- */
function renderComparativo() {
  const root = document.getElementById("comparativo-cards");
  if (!root) return;
  const C = PET_DATA.comparativo;

  const field = (label, val) =>
    `<div class="cmp-field"><span class="cmp-field__label">${label}</span><p class="cmp-field__val">${val}</p></div>`;

  // Coberturas por coluna (check). A nuance da tartarectomia A.Pet (só Titânio)
  // fica na nota de "Pontos de atenção" do card, não no item da lista.
  const cobList = (plan, model) => plan.coberturas.map((c) =>
    `<li><svg class="icon" aria-hidden="true"><use href="#ic-check"></use></svg><span>${c}</span></li>`
  ).join("");

  // Limites/tetos/utilizações (só Platina): item não renderizado no lado sem dado
  const limList = (plan, model) => plan.tabela.map((r) => {
    const val = model === "apet" ? r.apet : r.petlove;
    if (!val) return "";
    return `<li><span class="cmp-lim__item">${r.item}</span><span class="cmp-lim__val">${val}</span></li>`;
  }).join("");

  const column = (model, plan) => {
    const m = C.modelos[model];
    let h = `<header class="cmp-col__head"><span class="cmp-col__badge cmp-col__badge--${model}">${m.nome}</span><span class="cmp-col__tipo">${m.tipo}</span></header>`;
    if (plan.diferenciais && plan.diferenciais[model]) {
      h += `<div class="cmp-dif"><svg class="icon" aria-hidden="true"><use href="#ic-star"></use></svg><span><strong>Diferencial:</strong> ${plan.diferenciais[model]}</span></div>`;
    }
    h += field("Como usa", m.comoUsa);
    h += field("Coparticipação", m.copart);
    h += field("Idade", m.idade);
    h += field("Carência geral", m.carencia);
    h += `<div class="cmp-field"><span class="cmp-field__label">Coberturas do plano</span><ul class="cmp-cob">${cobList(plan, model)}</ul></div>`;
    if (plan.tabela) {
      h += `<div class="cmp-field"><span class="cmp-field__label">Limites, tetos e utilizações</span><ul class="cmp-lim">${limList(plan, model)}</ul></div>`;
    }
    let nota = "";
    if (model === "petlove") nota = C.notas.petlovePrimeiroPagamento;
    if (model === "apet" && plan.apetTartarectomiaTopic) nota = C.notas.apetTartarectomia;
    if (nota) {
      h += `<div class="cmp-field"><span class="cmp-field__label">Pontos de atenção</span><div class="cmp-nota"><svg class="icon" aria-hidden="true"><use href="#ic-alert"></use></svg><p>${nota}</p></div></div>`;
    }
    return `<section class="cmp-col cmp-col--${model}">${h}</section>`;
  };

  root.innerHTML = C.planos.map((plan) => {
    const segs = plan.segmentos.map((s) => `<span class="cmp-chip cmp-chip--seg">${s}</span>`).join("");
    const resumo = plan.precoNota ? `<p class="cmp-card__resumo">${plan.precoNota}</p>` : "";
    return `<details class="cmp-card reveal" data-plan="${plan.id}">
      <summary class="cmp-card__head">
        <div class="cmp-card__main">
          <div class="cmp-card__titles">
            <h3 class="cmp-card__name">${plan.nome}</h3>
            <span class="cmp-card__price">${fmtBRL(plan.preco)}<span class="cmp-card__per">/mês</span></span>
          </div>
          <div class="cmp-card__chips">
            <span class="cmp-chips__group">${segs}</span>
            <span class="cmp-chip cmp-chip--apet">A.Pet</span>
            <span class="cmp-chip cmp-chip--petlove">Petlove</span>
          </div>
          <p class="cmp-card__pos">${plan.posicionamento}</p>
        </div>
        <span class="cmp-card__chev" aria-hidden="true"></span>
      </summary>
      <div class="cmp-card__body">
        ${resumo}
        <div class="cmp-cols">
          ${column("apet", plan)}
          ${column("petlove", plan)}
        </div>
      </div>
    </details>`;
  }).join("");
}

/* --------------------------------------------------------------------
   COUNT-UP — anima números (preços, percentuais, "200x") ao aparecer.
   POR QUÊ: efeito de landing page sutil, animando só o texto numérico.
   -------------------------------------------------------------------- */
function countUp(el) {
  const value = parseFloat(el.dataset.value || "0");
  const format = el.dataset.format || "int";
  const dur = 900;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const paint = (v) => {
    if (format === "brl") el.textContent = fmtBRL(v);
    else if (format === "x") el.textContent = Math.round(v) + "x";
    else el.textContent = Math.round(v).toString();
  };
  if (reduce) { paint(value); return; }
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    paint(value * eased);
    if (t < 1) requestAnimationFrame(tick);
    else paint(value);
  }
  requestAnimationFrame(tick);
}

/* --------------------------------------------------------------------
   SCROLL REVEAL + COUNT-UP via IntersectionObserver
   -------------------------------------------------------------------- */
function setupReveal() {
  // stagger: indexa filhos de .stagger para o delay incremental no CSS
  document.querySelectorAll(".stagger").forEach((group) => {
    group.querySelectorAll(":scope > .reveal").forEach((child, i) => child.style.setProperty("--i", i));
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-count]");

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    counters.forEach((el) => countUp(el));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      entry.target.querySelectorAll("[data-count]").forEach((c) => { if (!c.dataset.done) { c.dataset.done = "1"; countUp(c); } });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  reveals.forEach((el) => obs.observe(el));

  // Contadores que não estão dentro de um .reveal (observados isoladamente)
  const standalone = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const c = entry.target;
      if (!c.dataset.done) { c.dataset.done = "1"; countUp(c); }
      observer.unobserve(c);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => { if (!c.closest(".reveal")) standalone.observe(c); });
}

/* --------------------------------------------------------------------
   IMAGENS — aplica as URLs do PET_IMAGES com fallback no placeholder
   -------------------------------------------------------------------- */
function setupImages() {
  document.querySelectorAll("img[data-img]").forEach((img) => {
    const url = PET_IMAGES[img.dataset.img];
    if (!url) { img.style.display = "none"; return; }
    // onerror: esconde o <img> e revela o placeholder atrás (offline-safe)
    img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
    img.loading = "lazy";
    img.decoding = "async";
    img.src = url;
  });
}

/* --------------------------------------------------------------------
   NAVEGAÇÃO — menu agrupado (dropdown) + toggle mobile
   -------------------------------------------------------------------- */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("secNav");
  if (!toggle || !nav) return;

  // Toggle do índice no mobile (hambúrguer)
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  const groups = Array.from(nav.querySelectorAll(".nav-group"));
  const closeAll = () => groups.forEach((g) => {
    g.classList.remove("is-open");
    const b = g.querySelector(".nav-group__btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });

  // Abrir/fechar a categoria ao clicar (acessível por teclado e toque)
  groups.forEach((grp) => {
    const btn = grp.querySelector(".nav-group__btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = grp.classList.contains("is-open");
      closeAll();
      if (!wasOpen) { grp.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) closeAll(); });
  // Fechar com Escape
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

  // Ao escolher um item: fecha as categorias e o índice mobile
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    closeAll();
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

/* --------------------------------------------------------------------
   SCROLL SPY — destaca a seção visível no menu (item + categoria)
   -------------------------------------------------------------------- */
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-group__panel a[href^="#"]'));
  if (!links.length || !("IntersectionObserver" in window)) return;

  const map = new Map(); // seção -> link
  links.forEach((a) => {
    const sec = document.getElementById(a.getAttribute("href").slice(1));
    if (sec) map.set(sec, a);
  });

  let current = null;
  const setActive = (a) => {
    if (current === a) return;
    links.forEach((l) => l.classList.remove("is-active"));
    document.querySelectorAll(".nav-group__btn").forEach((b) => b.classList.remove("has-active"));
    if (a) {
      a.classList.add("is-active");
      const grp = a.closest(".nav-group");
      const btn = grp && grp.querySelector(".nav-group__btn");
      if (btn) btn.classList.add("has-active");
    }
    current = a;
  };

  const visible = new Set();
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target); });
    // escolhe a seção visível mais ao topo da faixa central
    let top = null, topY = Infinity;
    visible.forEach((sec) => { const y = sec.getBoundingClientRect().top; if (y < topY) { topY = y; top = sec; } });
    if (top && map.has(top)) setActive(map.get(top));
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

  map.forEach((_, sec) => obs.observe(sec));
}

/* --------------------------------------------------------------------
   MANUAL DE CONSULTA — acordeão em dois níveis, filtro e atalhos
   OBJETIVO: transformar a página longa em manual de consulta. As seções
             slide-02..22 são MOVIDAS (não editadas) para painéis recolhíveis,
             agrupadas exatamente como o menu do topo.
   -------------------------------------------------------------------- */
const MANUAL_GROUPS = [
  { id: "produto", label: "Produto", items: ["slide-02-objetivo", "slide-03-jornada", "slide-04-produto"] },
  { id: "planos", label: "Planos e coberturas", items: ["slide-05-quem-contrata", "slide-06-como-contratar", "slide-07-escada-planos", "slide-08-coberturas", "slide-08b-coberturas-apet", "slide-09-multipet", "slide-10-comparativo"] },
  { id: "apet", label: "A.Pet", items: ["slide-11-apet-funciona", "slide-12-apet-reembolso-checklist", "slide-13-apet-carencia-preexistencia-exclusoes"] },
  { id: "petlove", label: "Petlove", items: ["slide-14-petlove-funciona", "slide-15-petlove-carencia-microchip", "slide-16-petlove-pulo-carencia", "slide-17-petlove-cobertura"] },
  { id: "explicar", label: "Como explicar", items: ["slide-17b-como-explicar"] },
  { id: "posvenda", label: "Pós-venda", items: ["slide-17c-pos-venda"] },
  { id: "porque", label: "Por que Itaú", items: ["slide-20b-por-que-itau"] },
  { id: "venda", label: "Venda e operação", items: ["slide-18-venda-protegida", "slide-19-situacoes-risco", "slide-20-renovacao", "slide-21-encerramento", "slide-22-camada-produto"] }
];
const COMPLIANCE_ITEMS = ["slide-18-venda-protegida", "slide-19-situacoes-risco"];

function prefersReduced() { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

// Revela e dispara count-up do conteúdo ao abrir um painel
function revealWithin(container) {
  container.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  container.querySelectorAll("[data-count]").forEach((c) => { if (!c.dataset.done) { c.dataset.done = "1"; countUp(c); } });
}

function setGroupOpen(group, open) {
  if (!group) return;
  const btn = group.querySelector(".acc-group__btn");
  const inner = group.querySelector(".acc-group__inner");
  group.classList.toggle("is-open", open);
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  if (inner) { try { inner.inert = !open; } catch (e) {} }
  if (open) revealWithin(group);
}
function setItemOpen(item, open) {
  if (!item) return;
  const btn = item.querySelector(".acc-item__btn");
  const inner = item.querySelector(".acc-item__inner");
  item.classList.toggle("is-open", open);
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  if (inner) { try { inner.inert = !open; } catch (e) {} }
  if (open) revealWithin(item);
}
function scrollToEl(el) {
  if (!el) return;
  // Mede a altura real do cabeçalho fixo (varia se o menu quebra em 2 linhas)
  const header = document.querySelector(".site-header");
  const hh = header ? header.offsetHeight : 80;
  const y = el.getBoundingClientRect().top + window.pageYOffset - hh - 10;
  window.scrollTo({ top: y, behavior: prefersReduced() ? "auto" : "smooth" });
}

// Constrói o acordeão movendo as seções existentes (conteúdo intacto)
function buildAccordion() {
  const root = document.getElementById("accordion");
  if (!root) return false;
  MANUAL_GROUPS.forEach((g) => {
    const group = document.createElement("section");
    group.className = "acc-group";
    group.dataset.group = g.id;

    const h = document.createElement("h2");
    h.className = "acc-group__h";
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "acc-group__btn"; btn.id = "accbtn-" + g.id;
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "accpanel-" + g.id);
    btn.innerHTML = "<span>" + g.label + "</span><span class=\"acc-group__chev\"></span>";
    h.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "acc-group__panel"; panel.id = "accpanel-" + g.id;
    panel.setAttribute("role", "region"); panel.setAttribute("aria-labelledby", btn.id);
    const inner = document.createElement("div");
    inner.className = "acc-group__inner";
    panel.appendChild(inner);

    g.items.forEach((secId) => {
      const sec = document.getElementById(secId);
      if (!sec) return;
      const item = document.createElement("div");
      item.className = "acc-item";
      if (sec.classList.contains("slide--apet")) item.classList.add("acc-item--apet");
      if (sec.classList.contains("slide--petlove")) item.classList.add("acc-item--petlove");
      const isCompliance = COMPLIANCE_ITEMS.indexOf(secId) !== -1;
      if (isCompliance) item.classList.add("acc-item--compliance");

      const titleEl = sec.querySelector(".slide__title");
      const subEl = sec.querySelector(".slide__subtitle");
      const title = titleEl ? titleEl.textContent.trim() : secId;
      const sub = subEl ? subEl.textContent.trim() : "";

      const ih = document.createElement("h3"); ih.className = "acc-item__h";
      const ibtn = document.createElement("button");
      ibtn.type = "button"; ibtn.className = "acc-item__btn"; ibtn.id = "accbtn-" + secId;
      ibtn.setAttribute("aria-expanded", "false");
      ibtn.setAttribute("aria-controls", "accpanel-" + secId);
      ibtn.innerHTML = "<span class=\"acc-item__label\"><span class=\"acc-item__title\">" + title + "</span>" +
        (sub ? "<span class=\"acc-item__sub\">" + sub + "</span>" : "") +
        (isCompliance ? "<span class=\"acc-item__flag\">Proteção do consultor</span>" : "") +
        "</span><span class=\"acc-item__chev\"></span>";
      ih.appendChild(ibtn);

      const ipanel = document.createElement("div");
      ipanel.className = "acc-item__panel"; ipanel.id = "accpanel-" + secId;
      ipanel.setAttribute("role", "region"); ipanel.setAttribute("aria-labelledby", ibtn.id);
      const iinner = document.createElement("div"); iinner.className = "acc-item__inner";
      iinner.appendChild(sec); // move a seção, sem alterar o conteúdo
      ipanel.appendChild(iinner);

      item.appendChild(ih); item.appendChild(ipanel);
      // índice de busca: título + subtítulo + todo o texto da seção
      item.dataset.search = (title + " " + sub + " " + sec.textContent).toLowerCase().replace(/\s+/g, " ");
      inner.appendChild(item);
    });

    group.appendChild(h); group.appendChild(panel);
    root.appendChild(group);
  });
  return true;
}

function wireAccordion() {
  document.querySelectorAll(".acc-group").forEach((group) => {
    const btn = group.querySelector(".acc-group__btn");
    setGroupOpen(group, false);
    btn.addEventListener("click", () => setGroupOpen(group, !group.classList.contains("is-open")));
    group.querySelectorAll(".acc-item").forEach((item) => {
      const ibtn = item.querySelector(".acc-item__btn");
      setItemOpen(item, false);
      ibtn.addEventListener("click", () => setItemOpen(item, !item.classList.contains("is-open")));
    });
  });
}

// Filtro client-side: abre os grupos com correspondência, esconde o resto
function setupFilter() {
  const input = document.getElementById("manualFilter");
  const noRes = document.getElementById("noResults");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let anyGlobal = false;
    document.querySelectorAll(".acc-group").forEach((group) => {
      let anyInGroup = false;
      group.querySelectorAll(".acc-item").forEach((item) => {
        const match = !q || item.dataset.search.indexOf(q) !== -1;
        item.hidden = !match;
        if (q && match) { setItemOpen(item, true); anyInGroup = true; }
        if (!q) { setItemOpen(item, false); }
      });
      group.hidden = !!q && !anyInGroup;
      setGroupOpen(group, q ? anyInGroup : false);
      if (anyInGroup) anyGlobal = true;
    });
    if (noRes) noRes.hidden = !(q && !anyGlobal);
  });
}

// Expandir tudo / recolher tudo + atalho de compliance
function setupManualActions() {
  const exp = document.getElementById("expandAll");
  const col = document.getElementById("collapseAll");
  const comp = document.getElementById("complianceShortcut");
  const setAll = (open) => document.querySelectorAll(".acc-group").forEach((group) => {
    setGroupOpen(group, open);
    group.querySelectorAll(".acc-item").forEach((item) => setItemOpen(item, open));
  });
  if (exp) exp.addEventListener("click", () => setAll(true));
  if (col) col.addEventListener("click", () => setAll(false));
  if (comp) comp.addEventListener("click", () => {
    const grp = document.querySelector('.acc-group[data-group="venda"]');
    setGroupOpen(grp, true);
    COMPLIANCE_ITEMS.forEach((id) => { const sec = document.getElementById(id); if (sec) setItemOpen(sec.closest(".acc-item"), true); });
    scrollToEl(document.getElementById(COMPLIANCE_ITEMS[0]));
  });
}

// Menu do topo vira atalho de consulta para o acordeão
function wireMenuToAccordion() {
  document.querySelectorAll('.nav-group__panel a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      if (id === "slide-01-capa") { e.preventDefault(); scrollToEl(document.getElementById("topo")); return; }
      const sec = document.getElementById(id);
      if (!sec) return;
      e.preventDefault();
      setGroupOpen(sec.closest(".acc-group"), true);
      setItemOpen(sec.closest(".acc-item"), true);
      scrollToEl(sec);
    });
  });
  document.querySelectorAll(".nav-group").forEach((navGrp, idx) => {
    const btn = navGrp.querySelector(".nav-group__btn");
    if (!btn || !MANUAL_GROUPS[idx]) return;
    btn.addEventListener("click", () => setGroupOpen(document.querySelector('.acc-group[data-group="' + MANUAL_GROUPS[idx].id + '"]'), true));
  });
}

// Deep link: abre o grupo e o item do hash e rola até a seção
function openFromHash() {
  const id = location.hash.slice(1);
  if (!id) return;
  const sec = document.getElementById(id);
  if (!sec) return;
  const item = sec.closest(".acc-item");
  if (!item) return;
  setGroupOpen(sec.closest(".acc-group"), true);
  setItemOpen(item, true);
  scrollToEl(sec);
}

function setupManual() {
  if (!buildAccordion()) return;
  wireAccordion();
  setupFilter();
  setupManualActions();
  wireMenuToAccordion();
  // Primeiro grupo (Produto) já expandido no load, para a página não parecer
  // vazia. Subitens seguem recolhidos; demais grupos seguem recolhidos.
  setGroupOpen(document.querySelector('.acc-group[data-group="produto"]'), true);
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
}

/* --------------------------------------------------------------------
   INICIALIZAÇÃO
   -------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSegmentos();
  renderEscada();
  renderCoberturas();
  renderMultipet();
  renderConveniencias();
  renderCoberturaListas();
  renderListaSimples("apet-regras", PET_DATA.apet_regras_estruturais);
  renderListaSimples("apet-exclusoes", PET_DATA.exclusoes_apet);
  renderListaSimples("petlove-limitacoes", PET_DATA.petlove_limitacoes);
  renderCarencias();
  renderComparativo();
  setupImages();
  setupManual();   // monta o acordeão (move as seções) antes do resto
  setupReveal();
  setupNav();
  setupScrollSpy();
});
