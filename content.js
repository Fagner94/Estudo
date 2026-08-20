/*
  ================================================================
  CARDIO STUDY HUB — ARQUIVO PRINCIPAL DE CONTEÚDO
  ================================================================
  Para alimentar o site, edite principalmente este arquivo.

  COMO ADICIONAR UMA NOVA AULA:
  1) Encontre a categoria desejada abaixo.
  2) Copie um objeto de aula existente.
  3) Troque id, title, subtitle, tags e content.
  4) Salve e publique no GitHub.

  DICA: use IDs simples, sem espaços. Ex.: "window-of-interest".
*/

const STUDY_DATA = {
  pacemaker: {
    id: "pacemaker",
    title: "Marcapasso",
    shortTitle: "Marcapasso",
    eyebrow: "Cardiac Rhythm Management",
    description: "Programação, algoritmos, troubleshooting e seguimento de dispositivos cardíacos implantáveis.",
    icon: "♡",
    accent: "pacemaker",
    categories: [
      {
        id: "pm-fundamentals",
        title: "Fundamentos",
        description: "Base para programação e interpretação.",
        lessons: [
          placeholderLesson("pm-modes", "Modos de estimulação", "AAI, VVI, DDD e lógica básica dos modos."),
          placeholderLesson("pm-timing", "Intervalos e temporizações", "AV delay, PVARP, PVAB, refractory periods e timing cycles."),
          placeholderLesson("pm-sensing", "Sensing e Capture", "Sensibilidade, limiar de captura e conceitos essenciais."),
        ],
      },
      {
        id: "pm-programming",
        title: "Programação",
        description: "Parâmetros e decisões práticas de programação.",
        lessons: [
          placeholderLesson("pm-rate", "Frequências e limites", "Lower Rate, Upper Tracking Rate e Upper Sensor Rate."),
          placeholderLesson("pm-output", "Saídas e margens de segurança", "Amplitude, pulse width e segurança de captura."),
        ],
      },
      {
        id: "pm-algorithms",
        title: "Algoritmos",
        description: "Espaço para os algoritmos estudados no dia a dia.",
        lessons: [
          placeholderLesson("pm-adaptivcrt", "AdaptivCRT", "Algoritmo de otimização em terapia de ressincronização."),
          placeholderLesson("pm-effectivcrt", "EffectivCRT", "Avaliação da efetividade da estimulação ventricular."),
          placeholderLesson("pm-carf", "CARF", "Resposta à fibrilação atrial conduzida."),
        ],
      },
      {
        id: "pm-followup",
        title: "Seguimento",
        description: "Interrogação, diagnóstico e troubleshooting.",
        lessons: [
          placeholderLesson("pm-impedance", "Impedância de eletrodos", "Como organizar o estudo de tendências e alertas."),
          placeholderLesson("pm-battery", "Bateria e longevidade", "RRT, EOS e acompanhamento de longevidade."),
        ],
      },
    ],
  },

  ep: {
    id: "ep",
    title: "Eletrofisiologia",
    shortTitle: "EP",
    eyebrow: "Electrophysiology",
    description: "Estudo eletrofisiológico convencional, mapeamento 3D e inglês técnico aplicado à sala de EP.",
    icon: "⌁",
    accent: "ep",
    tracks: {
      conventional: {
        id: "conventional",
        title: "EP Convencional",
        subtitle: "Conventional EP",
        description: "Sinais intracavitários, intervalos, pacing, mecanismos e diagnóstico das arritmias.",
        icon: "⌁",
        categories: [
          {
            id: "conv-basics",
            title: "Fundamentos",
            description: "A base do estudo eletrofisiológico convencional.",
            lessons: [
              placeholderLesson("conv-anatomy", "Anatomia para EP", "Anatomia funcional aplicada aos cateteres e circuitos."),
              placeholderLesson("conv-egm", "Eletrogramas intracavitários", "Como ler sinais atriais, His, ventriculares e do seio coronário."),
              placeholderLesson("conv-ah-hv", "Intervalos AH e HV", "Condução nodal e sistema His-Purkinje."),
            ],
          },
          {
            id: "conv-pacing",
            title: "Pacing",
            description: "Estimulação programada e raciocínio diagnóstico.",
            lessons: [
              placeholderLesson("conv-overdrive", "Overdrive Pacing", "Conceitos, resposta pós-pacing e interpretação."),
              placeholderLesson("conv-entrainment", "Entrainment", "Princípios para avaliação de circuitos reentrantes."),
            ],
          },
          {
            id: "conv-arrhythmias",
            title: "Arritmias",
            description: "Mecanismos e diagnóstico diferencial.",
            lessons: [
              placeholderLesson("conv-avnrt", "AVNRT", "Taquicardia por reentrada nodal."),
              placeholderLesson("conv-avrt", "AVRT", "Taquicardia por reentrada atrioventricular."),
              placeholderLesson("conv-flutter", "Flutter Atrial", "Macroreentrada atrial e conceitos de circuito."),
              placeholderLesson("conv-af", "Fibrilação Atrial", "Conceitos eletrofisiológicos para estudo e ablação."),
            ],
          },
        ],
      },

      columbus: {
        id: "columbus",
        title: "Columbus 3D",
        subtitle: "Electroanatomical Mapping",
        description: "Software, configuração, mapas, ferramentas e interpretação no sistema Columbus.",
        icon: "◉",
        categories: [
          {
            id: "col-setup",
            title: "Setup & Signals",
            description: "Configuração dos canais e sinais utilizados no mapeamento.",
            lessons: [
              {
                id: "channel-setup",
                title: "Channel Setup",
                subtitle: "Configuração dos canais",
                tags: ["Columbus", "Signals", "English"],
                status: "ready",
                content: `
                  <section class="lesson-block">
                    <span class="lesson-kicker">Core concept</span>
                    <h2>What is Channel Setup?</h2>
                    <div class="english-card">
                      <strong>Channel Setup is used to configure and organize the electrical signals recorded by the electrophysiology system.</strong>
                      <span>O Channel Setup é usado para configurar e organizar os sinais elétricos registrados pelo sistema de eletrofisiologia.</span>
                    </div>
                    <p>O objetivo é organizar quais sinais chegam ao sistema e como eles serão apresentados para interpretação e mapeamento.</p>
                  </section>

                  <section class="lesson-block">
                    <h2>Electrode ≠ Channel</h2>
                    <p><strong>Electrode</strong> é o eletrodo físico do cateter. <strong>Channel</strong> é o sinal elétrico apresentado ou processado pelo sistema.</p>
                    <div class="formula">Electrode pair → Bipolar Channel</div>
                    <div class="table-wrap">
                      <table class="study-table">
                        <thead><tr><th>Electrodes</th><th>Bipolar channel</th></tr></thead>
                        <tbody>
                          <tr><td>1 + 2</td><td>CS 1–2</td></tr>
                          <tr><td>3 + 4</td><td>CS 3–4</td></tr>
                          <tr><td>5 + 6</td><td>CS 5–6</td></tr>
                          <tr><td>7 + 8</td><td>CS 7–8</td></tr>
                          <tr><td>9 + 10</td><td>CS 9–10</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section class="lesson-block">
                    <h2>Key vocabulary</h2>
                    <div class="vocab-grid">
                      ${vocab("electrode pair", "par de eletrodos")}
                      ${vocab("bipolar channel", "canal bipolar")}
                      ${vocab("intracardiac electrogram", "eletrograma intracardíaco")}
                      ${vocab("surface ECG", "ECG de superfície")}
                    </div>
                  </section>
                `,
              },
              {
                id: "reference-channel",
                title: "Reference Channel",
                subtitle: "Referência temporal do mapa",
                tags: ["Columbus", "LAT", "English"],
                status: "ready",
                content: `
                  <section class="lesson-block">
                    <span class="lesson-kicker">Activation Mapping</span>
                    <h2>Reference Channel</h2>
                    <div class="english-card">
                      <strong>The reference channel provides a timing reference for the activation map.</strong>
                      <span>O canal de referência fornece uma referência temporal para o mapa de ativação.</span>
                    </div>
                    <p>Ele funciona como um <strong>marco temporal</strong>. O sistema compara o momento do eletrograma local com o evento definido como referência.</p>
                  </section>

                  <section class="lesson-block">
                    <h2>Before or after the reference?</h2>
                    <div class="formula">Reference = 0 ms</div>
                    <div class="table-wrap">
                      <table class="study-table">
                        <thead><tr><th>Point</th><th>LAT</th><th>Meaning</th></tr></thead>
                        <tbody>
                          <tr><td>A</td><td>−10 ms</td><td>Early / Precoce</td></tr>
                          <tr><td>B</td><td>−35 ms</td><td>Earlier / Mais precoce</td></tr>
                          <tr><td>C</td><td>+20 ms</td><td>Late / Tardio</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="english-card compact">
                      <strong>The local electrogram precedes the reference by 35 milliseconds.</strong>
                      <span>O eletrograma local precede a referência em 35 ms.</span>
                    </div>
                  </section>

                  <section class="lesson-block">
                    <h2>Choosing a reference</h2>
                    <p>Um bom sinal deve ser <strong>clear, stable and reproducible</strong>: claro, estável e reprodutível. O Reference Channel não precisa ser a origem da arritmia.</p>
                  </section>
                `,
              },
              {
                id: "mapping-channel",
                title: "Mapping Channel",
                subtitle: "Eletrograma local analisado",
                tags: ["Columbus", "Mapping"],
                status: "ready",
                content: `
                  <section class="lesson-block">
                    <h2>Mapping Channel</h2>
                    <div class="english-card">
                      <strong>The mapping channel records the local electrogram at the site being mapped.</strong>
                      <span>O canal de mapeamento registra o eletrograma local no local que está sendo mapeado.</span>
                    </div>
                    <div class="formula">Reference Channel → timing reference<br>Mapping Channel → local EGM<br>Comparison → LAT</div>
                  </section>
                `,
              },
            ],
          },
          {
            id: "col-mapping",
            title: "Mapping",
            description: "Mapas e interpretação temporal.",
            lessons: [
              {
                id: "lat",
                title: "Local Activation Time",
                subtitle: "LAT",
                tags: ["Columbus", "Activation Map"],
                status: "ready",
                content: `
                  <section class="lesson-block">
                    <h2>Local Activation Time</h2>
                    <div class="english-card">
                      <strong>LAT stands for Local Activation Time.</strong>
                      <span>LAT significa Tempo de Ativação Local.</span>
                    </div>
                    <div class="formula">LAT = T(local) − T(reference)</div>
                    <p><strong>Negative LAT</strong>: ativação antes da referência. <strong>Positive LAT</strong>: ativação depois da referência.</p>
                    <div class="english-card compact">
                      <strong>The local activation time is measured relative to the reference signal.</strong>
                      <span>O tempo de ativação local é medido em relação ao sinal de referência.</span>
                    </div>
                  </section>
                `,
              },
              placeholderLesson("window-of-interest", "Window of Interest", "Janela temporal utilizada na análise do mapa."),
              placeholderLesson("auto-lat", "Auto LAT Mapping", "Identificação e visualização da ativação no mapa."),
              placeholderLesson("voltage-map", "Voltage Map", "Organização do estudo de mapas de voltagem."),
            ],
          },
          {
            id: "col-tools",
            title: "Ferramentas",
            description: "Recursos práticos do software Columbus.",
            lessons: [
              placeholderLesson("annotation-settings", "Annotation Settings", "Configurações de anotação."),
              placeholderLesson("pacing-settings", "Pacing Settings", "Configurações relacionadas ao pacing."),
              placeholderLesson("smart-label", "Smart Label", "Marcação automática de pontos de ablação."),
              placeholderLesson("clip-plane", "Clip Plane", "Visualização interna da geometria."),
            ],
          },
        ],
      },
    },
  },
};

function placeholderLesson(id, title, subtitle) {
  return {
    id,
    title,
    subtitle,
    tags: ["Em construção"],
    status: "draft",
    content: `
      <section class="lesson-block empty-state">
        <span class="lesson-kicker">Próxima aula</span>
        <h2>${title}</h2>
        <p>${subtitle}</p>
        <p class="muted">Esta página já está criada na estrutura. Quando você estudar este assunto, basta substituir este conteúdo em <strong>content.js</strong>.</p>
      </section>
    `,
  };
}

function vocab(en, pt) {
  return `<div class="vocab-item"><strong>${en}</strong><span>${pt}</span></div>`;
}
