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
                subtitle: "Guia completo da configuração de canais, filtros e anotações",
                tags: ["Columbus", "Signals", "Setup", "English"],
                status: "ready",
                content: `
                  <section class="lesson-block">
                    <span class="lesson-kicker">Visão geral</span>
                    <h2>O que é o Channel Setup?</h2>
                    <div class="english-card">
                      <strong>Channel Setup is used to configure and organize the electrical signals recorded by the electrophysiology system.</strong>
                      <span>O Channel Setup é usado para configurar e organizar os sinais elétricos registrados pelo sistema de eletrofisiologia.</span>
                    </div>
                    <p>É a página onde o operador define <strong>quais sinais serão exibidos</strong>, como os eletrodos serão combinados, quais filtros serão aplicados e quais canais participarão da anotação e do mapeamento.</p>
                    <p>Uma configuração incorreta pode esconder componentes importantes, aumentar ruído, inverter a polaridade de um eletrograma ou fazer o sistema anotar o evento errado.</p>
                    <div class="topic-nav">
                      <a href="#cs-signal-path">Caminho do sinal</a>
                      <a href="#cs-secg">SECG</a>
                      <a href="#cs-iegm">IECG</a>
                      <a href="#cs-filters">Filtros</a>
                      <a href="#cs-annotation">Annotation</a>
                      <a href="#cs-pacing">Pacing</a>
                      <a href="#cs-heartbeat">Heartbeat</a>
                      <a href="#cs-templates">Save / Load</a>
                    </div>
                  </section>

                  <section class="lesson-block" id="cs-signal-path">
                    <span class="lesson-kicker">Hardware → software</span>
                    <h2>Eletrodo, entrada e canal não são a mesma coisa</h2>
                    <div class="signal-flow">
                      <div><strong>1. Eletrodo</strong><span>Contato físico no paciente</span></div>
                      <b>→</b>
                      <div><strong>2. Entrada</strong><span>R1, R2, M1, M2...</span></div>
                      <b>→</b>
                      <div><strong>3. Canal</strong><span>Sinal calculado e exibido</span></div>
                    </div>
                    <p><strong>Electrode</strong> é o contato metálico físico. <strong>Input</strong> é a entrada elétrica onde esse contato chega ao sistema. <strong>Channel</strong> é o sinal que o software forma e apresenta.</p>
                    <div class="formula">R1 − R2 = canal bipolar R1-R2</div>
                    <div class="table-wrap">
                      <table class="study-table">
                        <thead><tr><th>Configuração</th><th>Como é formada</th><th>O que representa</th></tr></thead>
                        <tbody>
                          <tr><td><strong>Bipolar</strong></td><td>Diferença entre dois eletrodos</td><td>Atividade local entre os dois polos</td></tr>
                          <tr><td><strong>Unipolar</strong></td><td>Um eletrodo contra WCT/referência indiferente</td><td>Campo elétrico visto por um único polo</td></tr>
                          <tr><td><strong>Surface ECG</strong></td><td>Eletrodos de superfície</td><td>Atividade elétrica global</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="callout warning"><strong>Atenção:</strong> trocar In (+) por In (−) não muda o local registrado, mas inverte a polaridade do traçado bipolar. Isso pode mudar qual critério automático encontra o sinal.</div>
                  </section>

                  <section class="lesson-block" id="cs-secg">
                    <span class="lesson-kicker">Surface ECG</span>
                    <h2>SECG — canais de superfície</h2>
                    <p>A área <strong>SECG</strong> configura as derivações de superfície, como I, II, III, aVR, aVL, aVF e as precordiais. Elas ajudam a reconhecer o ritmo, a estabilidade do ciclo e a relação do eletrograma intracardíaco com o QRS ou a onda P.</p>
                    <div class="field-grid">
                      <div class="field-card"><strong>Name</strong><span>Nome da derivação apresentada.</span></div>
                      <div class="field-card"><strong>HP</strong><span>Limite do filtro passa-alta.</span></div>
                      <div class="field-card"><strong>LP</strong><span>Limite do filtro passa-baixa.</span></div>
                      <div class="field-card"><strong>Notch</strong><span>Redução da interferência de 50 Hz.</span></div>
                      <div class="field-card"><strong>Color</strong><span>Cor usada no monitor; o padrão descrito é verde.</span></div>
                    </div>
                    <p>Segundo o manual, as opções descritas para SECG são <strong>HP de 0,05, 0,5 ou 1 Hz</strong> e <strong>LP de 30, 100 ou 400 Hz</strong>. O Notch aparece ativado por padrão para os sinais de superfície.</p>
                    <div class="callout info"><strong>Atalho:</strong> o manual informa que clicar no título de uma coluna pode aplicar a configuração do primeiro canal aos demais canais de superfície.</div>
                  </section>

                  <section class="lesson-block" id="cs-iegm">
                    <span class="lesson-kicker">Intracardiac electrograms</span>
                    <h2>IECG — canais intracardíacos</h2>
                    <p>A área <strong>IECG</strong> define como as entradas físicas dos cateteres serão combinadas e exibidas. Na captura, canais como R1-R2, R3-R4 e R5-R6 são construídos escolhendo um polo positivo e um polo negativo.</p>
                    <div class="table-wrap">
                      <table class="study-table">
                        <thead><tr><th>Campo</th><th>Função</th><th>Exemplo</th></tr></thead>
                        <tbody>
                          <tr><td><strong>Enable</strong></td><td>Ativa o canal para aquisição/exibição.</td><td>Marcar R1-R2</td></tr>
                          <tr><td><strong>Name</strong></td><td>Nome visual do canal. Pode ser renomeado para refletir o cateter.</td><td>CS 5-6</td></tr>
                          <tr><td><strong>In (+)</strong></td><td>Entrada ligada ao polo positivo do cálculo.</td><td>R5</td></tr>
                          <tr><td><strong>In (−)</strong></td><td>Entrada subtraída do polo positivo.</td><td>R6</td></tr>
                          <tr><td><strong>HP / LP</strong></td><td>Faixa de frequências preservada no traçado.</td><td>20–600 Hz na tela exibida</td></tr>
                          <tr><td><strong>Notch</strong></td><td>Atenua a interferência da rede elétrica.</td><td>50 Hz</td></tr>
                          <tr><td><strong>Color</strong></td><td>Identificação visual do canal.</td><td>Cor escolhida pelo operador</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <h3>Exemplo: cateter decapolar no seio coronário</h3>
                    <div class="formula">CS 1-2 · CS 3-4 · CS 5-6 · CS 7-8 · CS 9-10</div>
                    <p>O nome do canal deve acompanhar o par real conectado. Se R5 e R6 representam os eletrodos centrais do cateter, o canal pode ser renomeado como <strong>CS 5-6</strong>. O nome, sozinho, não altera a conexão elétrica: quem define a derivação são In (+) e In (−).</p>
                    <p>O manual também descreve combinações com <strong>WCT (Wilson Central Terminal)</strong> para formar um registro unipolar. Algumas combinações de canais do cateter de mapeamento, como M1-M2, podem ser fixas ou reservadas conforme a versão.</p>
                  </section>

                  <section class="lesson-block" id="cs-filters">
                    <span class="lesson-kicker">Signal processing</span>
                    <h2>HP, LP e Notch: o que os filtros fazem?</h2>
                    <div class="filter-grid">
                      <div class="filter-card"><span>HP</span><strong>High-pass filter</strong><p>Atenua frequências abaixo do valor escolhido. Ajuda a reduzir oscilação lenta da linha de base, mas um corte alto demais pode retirar componentes lentos do eletrograma.</p></div>
                      <div class="filter-card"><span>LP</span><strong>Low-pass filter</strong><p>Atenua frequências acima do valor escolhido. Ajuda a reduzir ruído de alta frequência, mas um corte baixo demais pode suavizar potenciais rápidos e fragmentados.</p></div>
                      <div class="filter-card"><span>50 Hz</span><strong>Notch filter</strong><p>Atenua especificamente a interferência da rede elétrica. Deve ser usado com critério porque também modifica conteúdo próximo dessa frequência.</p></div>
                    </div>
                    <div class="formula">Faixa preservada ≈ frequências entre HP e LP</div>
                    <p>Para IECG, uma revisão do manual lista HP de <strong>0,05, 10, 20 ou 30 Hz</strong> e LP de <strong>30 a 400 Hz</strong>. A captura da aula mostra <strong>20–600 Hz</strong>, indicando diferença de versão ou configuração. Sempre confirme as opções disponíveis no equipamento instalado.</p>
                    <div class="callout warning"><strong>Regra prática:</strong> filtros melhoram a leitura, mas não recuperam um sinal ruim. Antes de aumentar a filtragem, confira conexões, contato, ruído e escolha do par de eletrodos.</div>
                  </section>

                  <section class="lesson-block" id="cs-annotation">
                    <span class="lesson-kicker">Annotation Settings</span>
                    <h2>Como o Columbus escolhe o tempo de cada sinal</h2>
                    <p>Essa área define os canais usados para a referência e para o eletrograma local, além do algoritmo que procura os pontos de anotação.</p>
                    <div class="table-wrap">
                      <table class="study-table">
                        <thead><tr><th>Campo</th><th>Papel no sistema</th><th>Como pensar</th></tr></thead>
                        <tbody>
                          <tr><td><strong>Reference Channel</strong></td><td>Fornece o evento temporal definido como 0 ms.</td><td>Sinal estável, claro e repetitivo.</td></tr>
                          <tr><td><strong>Peak Channel</strong></td><td>Canal auxiliar usado pela lógica de detecção do pico na versão mostrada.</td><td>Escolha um sinal que represente bem o evento que deve ser reconhecido.</td></tr>
                          <tr><td><strong>R mask</strong></td><td>Opção relacionada à exclusão/mascaramento da região do R para evitar detecções indesejadas.</td><td>Útil quando o componente ventricular interfere na anotação desejada.</td></tr>
                          <tr><td><strong>Criterion</strong></td><td>Define qual característica da onda será anotada.</td><td>Máximo, mínimo, valor absoluto ou flanco, conforme a versão.</td></tr>
                          <tr><td><strong>Second Ref Channel</strong></td><td>Segunda referência disponível para refinar a seleção do evento.</td><td>Use apenas quando a estratégia exigir confirmação adicional.</td></tr>
                          <tr><td><strong>Second Ref Criterion</strong></td><td>Critério aplicado à segunda referência.</td><td>Deve combinar com a morfologia que se deseja detectar.</td></tr>
                          <tr><td><strong>Mapping Channel</strong></td><td>Eletrograma local do cateter explorador.</td><td>Normalmente M1-M2 no cateter de mapeamento.</td></tr>
                          <tr><td><strong>Mapping Criterion</strong></td><td>Define o componente local que receberá a anotação.</td><td>A escolha errada pode marcar far-field ou outro componente.</td></tr>
                          <tr><td><strong>From / To</strong></td><td>Limites da janela em que o sistema pode procurar o LAT.</td><td>Ex.: −200 a +200 ms.</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="formula">LAT = tempo do Mapping Channel − tempo do Reference Channel</div>
                    <div class="timing-scale"><span>−200 ms<br><small>antes</small></span><b>−35</b><strong>0 ms<br><small>referência</small></strong><b>+20</b><span>+200 ms<br><small>depois</small></span></div>
                    <ul class="check-list">
                      <li><strong>LAT negativo:</strong> o sinal local ocorreu antes da referência.</li>
                      <li><strong>LAT zero:</strong> ocorreu no mesmo instante definido como referência.</li>
                      <li><strong>LAT positivo:</strong> ocorreu depois da referência.</li>
                    </ul>
                    <p>O manual define uma faixa permitida de <strong>−1999 a +490 ms</strong>, com diferença superior a 20 ms entre os limites. A janela padrão descrita é <strong>−200 a +200 ms</strong>.</p>
                    <div class="callout info"><strong>Importante:</strong> o Reference Channel é uma âncora temporal. Ele não precisa ser o local mais precoce nem a origem da arritmia.</div>
                    <div class="version-note"><strong>Diferenças entre versões</strong><p>O manual descreve critérios como máximo, mínimo, flanco ascendente e flanco descendente. A tela da aula apresenta também <em>ABS Value</em>, <em>Peak Channel</em>, <em>R mask</em> e segunda referência. A nomenclatura e a lógica disponível devem ser confirmadas na versão do software em uso.</p></div>
                  </section>

                  <section class="lesson-block" id="cs-pacing">
                    <span class="lesson-kicker">Pacing Settings</span>
                    <h2>Canal de estimulação</h2>
                    <p>O campo <strong>Channel</strong> seleciona o par de eletrodos intracardíacos utilizado para pacing. O manual informa que não há canal predefinido e que as combinações intracardíacas disponíveis podem ser selecionadas.</p>
                    <div class="field-grid">
                      <div class="field-card"><strong>Channel</strong><span>Par utilizado para estimulação, como M1-M2 ou R1-R2.</span></div>
                      <div class="field-card"><strong>Color</strong><span>Cor de destaque do canal/estimulação na interface.</span></div>
                    </div>
                    <p>O manual orienta limitar a saída a <strong>20 mA</strong> e <strong>10 V</strong>. Valores superiores podem reduzir a qualidade dos sinais intracardíacos.</p>
                    <div class="callout danger"><strong>Segurança:</strong> o manual alerta contra ablação por RF simultânea quando o cateter de mapeamento/ablação estiver sendo usado para estimulação, salvo quando isso for especificamente permitido pelo fabricante do estimulador.</div>
                  </section>

                  <section class="lesson-block" id="cs-heartbeat">
                    <span class="lesson-kicker">Heartbeat Settings</span>
                    <h2>Canal usado para reconhecer os batimentos</h2>
                    <p>Na versão mostrada, <strong>Heartbeat Settings → Channel</strong> seleciona o sinal que auxilia o sistema a segmentar os ciclos cardíacos. Na captura, a derivação II está selecionada.</p>
                    <p>Na prática, prefira um canal com deflexão nítida, relação consistente com cada batimento e pouca interferência. Um sinal instável pode prejudicar a separação dos ciclos e as métricas de estabilidade.</p>
                    <div class="callout warning"><strong>Nota de versão:</strong> os manuais fornecidos não detalham esse campo com a mesma nomenclatura da captura. Esta explicação deve ser confrontada com o treinamento e com a versão instalada antes do uso clínico.</div>
                  </section>

                  <section class="lesson-block" id="cs-templates">
                    <span class="lesson-kicker">Templates</span>
                    <h2>Save e Load</h2>
                    <div class="two-column">
                      <div><strong>Save</strong><p>Salva a configuração de canais como modelo. É possível criar um nome novo ou sobrescrever um modelo existente.</p></div>
                      <div><strong>Load</strong><p>Carrega um modelo salvo e aplica suas configurações ao estudo atual.</p></div>
                    </div>
                    <p>Antes de reutilizar um modelo, confira se os cateteres, conectores, pares de eletrodos e nomes dos canais correspondem ao procedimento atual.</p>
                  </section>

                  <section class="lesson-block">
                    <span class="lesson-kicker">Checklist</span>
                    <h2>Antes de iniciar o mapa</h2>
                    <ol class="check-list numbered">
                      <li>Confirmar o cateter e a correspondência entre eletrodos e entradas.</li>
                      <li>Ativar apenas os canais necessários e nomeá-los corretamente.</li>
                      <li>Verificar In (+), In (−) e a polaridade dos eletrogramas.</li>
                      <li>Ajustar HP, LP e Notch sem esconder potenciais relevantes.</li>
                      <li>Escolher um Reference Channel estável.</li>
                      <li>Confirmar Mapping Channel e critério de anotação.</li>
                      <li>Conferir a janela From/To no monitor de anotações.</li>
                      <li>Se houver pacing, confirmar canal, saída e condições de segurança.</li>
                      <li>Salvar o modelo somente após validar toda a configuração.</li>
                    </ol>
                  </section>

                  <section class="lesson-block">
                    <h2>Vocabulário técnico</h2>
                    <div class="vocab-grid">
                      ${vocab("channel setup", "configuração de canais")}
                      ${vocab("electrode pair", "par de eletrodos")}
                      ${vocab("bipolar channel", "canal bipolar")}
                      ${vocab("unipolar channel", "canal unipolar")}
                      ${vocab("surface ECG", "ECG de superfície")}
                      ${vocab("intracardiac electrogram", "eletrograma intracardíaco")}
                      ${vocab("high-pass filter", "filtro passa-alta")}
                      ${vocab("low-pass filter", "filtro passa-baixa")}
                      ${vocab("notch filter", "filtro rejeita-faixa")}
                      ${vocab("reference channel", "canal de referência")}
                      ${vocab("mapping channel", "canal de mapeamento")}
                      ${vocab("window of interest", "janela de interesse")}
                      ${vocab("rising edge", "flanco ascendente")}
                      ${vocab("falling edge", "flanco descendente")}
                      ${vocab("save template", "salvar modelo")}
                      ${vocab("load template", "carregar modelo")}
                    </div>
                  </section>

                  <section class="lesson-block source-note">
                    <span class="lesson-kicker">Fontes da aula</span>
                    <h2>Base técnica</h2>
                    <p>Conteúdo organizado a partir das Instruções de Uso do Columbus 3D EP Navigation System, revisões brasileiras fornecidas para estudo, da tela de Channel Setup apresentada no treinamento e do material bilíngue de configuração de canais.</p>
                    <p class="muted">Material educacional. A operação clínica deve seguir a versão vigente das instruções de uso, o treinamento do fabricante e os protocolos da instituição.</p>
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
