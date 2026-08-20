const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const sideNav = document.getElementById("sideNav");
const sidebarTitle = document.getElementById("sidebarTitle");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const backButton = document.getElementById("backButton");

let currentRoute = { type: "home" };
let routeHistory = [];

const icons = {
  arrow: "→",
  book: "▤",
  draft: "○",
  ready: "●",
};

function navigate(route, addHistory = true) {
  if (addHistory && currentRoute.type !== "home") routeHistory.push({ ...currentRoute });
  currentRoute = route;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  updateChrome();

  if (currentRoute.type === "home") return renderHome();
  if (currentRoute.type === "subject") return renderSubject(currentRoute.subject);
  if (currentRoute.type === "ep-hub") return renderEpHub();
  if (currentRoute.type === "track") return renderTrack(currentRoute.track);
  if (currentRoute.type === "lesson") return renderLesson(currentRoute.subject, currentRoute.track, currentRoute.lesson);
}

function updateChrome() {
  const isHome = currentRoute.type === "home";
  sidebar.classList.toggle("is-hidden", isHome || currentRoute.type === "ep-hub");
  content.classList.toggle("content-full", isHome || currentRoute.type === "ep-hub");
  backButton.classList.toggle("is-hidden", isHome);
  searchInput.value = "";

  if (!isHome && currentRoute.type !== "ep-hub") buildSidebar();
}

function renderHome() {
  document.title = "Cardio Study Hub";
  content.innerHTML = `
    <section class="home-hero">
      <div class="hero-orbit orbit-a"></div>
      <div class="hero-orbit orbit-b"></div>
      <span class="eyebrow">Personal learning platform</span>
      <h1>O seu centro de estudos em cardiologia.</h1>
      <p>Escolha uma área para começar. A estrutura foi feita para crescer junto com seus estudos, sem precisar reconstruir o site.</p>
    </section>

    <section class="portal-grid">
      ${portalCard(STUDY_DATA.pacemaker, "subject")}
      ${portalCard(STUDY_DATA.ep, "ep-hub")}
    </section>

    <section class="home-note">
      <div class="note-icon">✦</div>
      <div>
        <strong>Feito para ser alimentado aos poucos</strong>
        <p>As aulas ficam concentradas em <code>content.js</code>. Você adiciona conteúdo sem mexer na estrutura visual.</p>
      </div>
    </section>
  `;
}

function portalCard(subject, type) {
  const count = countLessons(subject);
  return `
    <button class="portal-card ${subject.accent}" data-action="navigate" data-type="${type}" data-subject="${subject.id}">
      <div class="portal-icon">${subject.icon}</div>
      <div class="portal-copy">
        <span>${subject.eyebrow}</span>
        <h2>${subject.title}</h2>
        <p>${subject.description}</p>
      </div>
      <div class="portal-meta">
        <span>${count} tópicos preparados</span>
        <strong>Entrar ${icons.arrow}</strong>
      </div>
    </button>
  `;
}

function renderEpHub() {
  const ep = STUDY_DATA.ep;
  document.title = `Eletrofisiologia — Cardio Study Hub`;
  content.innerHTML = `
    ${breadcrumbs([{ label: "Início", route: { type: "home" } }, { label: "Eletrofisiologia" }])}
    <section class="section-hero compact-hero">
      <span class="eyebrow">${ep.eyebrow}</span>
      <h1>${ep.title}</h1>
      <p>${ep.description}</p>
    </section>

    <section class="choice-grid">
      ${trackCard(ep.tracks.conventional)}
      ${trackCard(ep.tracks.columbus)}
    </section>
  `;
}

function trackCard(track) {
  return `
    <button class="track-card" data-action="navigate" data-type="track" data-track="${track.id}">
      <div class="track-card-top">
        <div class="track-icon">${track.icon}</div>
        <span class="track-count">${countLessons(track)} aulas/tópicos</span>
      </div>
      <span class="eyebrow">${track.subtitle}</span>
      <h2>${track.title}</h2>
      <p>${track.description}</p>
      <div class="track-link">Explorar conteúdo ${icons.arrow}</div>
    </button>
  `;
}

function renderSubject(subjectId) {
  const subject = STUDY_DATA[subjectId];
  document.title = `${subject.title} — Cardio Study Hub`;
  content.innerHTML = `
    ${breadcrumbs([{ label: "Início", route: { type: "home" } }, { label: subject.title }])}
    <section class="section-hero">
      <span class="eyebrow">${subject.eyebrow}</span>
      <h1>${subject.title}</h1>
      <p>${subject.description}</p>
    </section>
    ${renderCategorySections(subject.categories, { subject: subject.id })}
  `;
}

function renderTrack(trackId) {
  const track = STUDY_DATA.ep.tracks[trackId];
  document.title = `${track.title} — Cardio Study Hub`;
  content.innerHTML = `
    ${breadcrumbs([
      { label: "Início", route: { type: "home" } },
      { label: "Eletrofisiologia", route: { type: "ep-hub", subject: "ep" } },
      { label: track.title },
    ])}
    <section class="section-hero">
      <span class="eyebrow">${track.subtitle}</span>
      <h1>${track.title}</h1>
      <p>${track.description}</p>
    </section>
    ${renderCategorySections(track.categories, { subject: "ep", track: track.id })}
  `;
}

function renderCategorySections(categories, context) {
  return categories.map(category => `
    <section class="category-section" id="${category.id}">
      <div class="category-heading">
        <div>
          <span class="eyebrow">Study path</span>
          <h2>${category.title}</h2>
          <p>${category.description}</p>
        </div>
        <span class="category-count">${category.lessons.length}</span>
      </div>
      <div class="lesson-grid">
        ${category.lessons.map(lesson => lessonCard(lesson, context)).join("")}
      </div>
    </section>
  `).join("");
}

function lessonCard(lesson, context) {
  const routeAttrs = context.subject === "ep"
    ? `data-subject="ep" data-track="${context.track}"`
    : `data-subject="${context.subject}"`;

  return `
    <button class="lesson-card" data-action="lesson" ${routeAttrs} data-lesson="${lesson.id}">
      <div class="lesson-card-head">
        <span class="status-dot ${lesson.status}">${lesson.status === "ready" ? icons.ready : icons.draft}</span>
        <span class="status-label">${lesson.status === "ready" ? "Conteúdo" : "Preparada para editar"}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p>${lesson.subtitle}</p>
      <div class="tag-row">${(lesson.tags || []).map(tag => `<span>${tag}</span>`).join("")}</div>
      <div class="lesson-card-link">Abrir aula ${icons.arrow}</div>
    </button>
  `;
}

function renderLesson(subjectId, trackId, lessonId) {
  const source = subjectId === "ep" ? STUDY_DATA.ep.tracks[trackId] : STUDY_DATA[subjectId];
  const lesson = findLesson(source.categories, lessonId);
  if (!lesson) return navigate({ type: "home" }, false);

  const crumbs = [{ label: "Início", route: { type: "home" } }];
  if (subjectId === "ep") {
    crumbs.push({ label: "Eletrofisiologia", route: { type: "ep-hub", subject: "ep" } });
    crumbs.push({ label: source.title, route: { type: "track", track: trackId } });
  } else {
    crumbs.push({ label: source.title, route: { type: "subject", subject: subjectId } });
  }
  crumbs.push({ label: lesson.title });

  document.title = `${lesson.title} — Cardio Study Hub`;
  content.innerHTML = `
    ${breadcrumbs(crumbs)}
    <article class="lesson-page">
      <header class="lesson-hero">
        <div class="tag-row">${(lesson.tags || []).map(tag => `<span>${tag}</span>`).join("")}</div>
        <h1>${lesson.title}</h1>
        <p>${lesson.subtitle}</p>
      </header>
      <div class="lesson-content">
        ${lesson.content}
      </div>
    </article>
  `;
}

function buildSidebar() {
  let source;
  let title;
  let context;

  if (currentRoute.subject === "ep") {
    source = STUDY_DATA.ep.tracks[currentRoute.track];
    title = source.title;
    context = { subject: "ep", track: currentRoute.track };
  } else {
    source = STUDY_DATA[currentRoute.subject];
    title = source.title;
    context = { subject: currentRoute.subject };
  }

  if (!source) return;
  sidebarTitle.textContent = title;

  const homeRoute = currentRoute.subject === "ep"
    ? { type: "track", track: currentRoute.track }
    : { type: "subject", subject: currentRoute.subject };

  sideNav.innerHTML = `
    <button class="side-link side-overview" data-action="direct-route" data-route='${JSON.stringify(homeRoute)}'>
      <span>Visão geral</span><span>⌂</span>
    </button>
    ${source.categories.map(category => `
      <div class="side-group">
        <span class="side-group-title">${category.title}</span>
        ${category.lessons.map(lesson => `
          <button class="side-link ${currentRoute.lesson === lesson.id ? "active" : ""}"
            data-action="lesson"
            data-subject="${context.subject}"
            ${context.track ? `data-track="${context.track}"` : ""}
            data-lesson="${lesson.id}">
            <span>${lesson.title}</span>
            <span class="mini-dot ${lesson.status}"></span>
          </button>
        `).join("")}
      </div>
    `).join("")}
  `;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
    ${items.map((item, i) => item.route
      ? `<button data-action="direct-route" data-route='${JSON.stringify(item.route)}'>${item.label}</button><span>›</span>`
      : `<strong>${item.label}</strong>${i < items.length - 1 ? "<span>›</span>" : ""}`
    ).join("")}
  </nav>`;
}

function findLesson(categories, id) {
  for (const category of categories) {
    const lesson = category.lessons.find(item => item.id === id);
    if (lesson) return lesson;
  }
  return null;
}

function countLessons(source) {
  if (source.tracks) return Object.values(source.tracks).reduce((sum, track) => sum + countLessons(track), 0);
  if (!source.categories) return 0;
  return source.categories.reduce((sum, category) => sum + category.lessons.length, 0);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-route]");
  if (!target) return;

  if (target.dataset.route && !target.dataset.action) {
    navigate({ type: target.dataset.route });
    return;
  }

  if (target.dataset.action === "navigate") {
    if (target.dataset.type === "subject") navigate({ type: "subject", subject: target.dataset.subject });
    if (target.dataset.type === "ep-hub") navigate({ type: "ep-hub", subject: "ep" });
    if (target.dataset.type === "track") navigate({ type: "track", subject: "ep", track: target.dataset.track });
  }

  if (target.dataset.action === "lesson") {
    navigate({
      type: "lesson",
      subject: target.dataset.subject,
      track: target.dataset.track || null,
      lesson: target.dataset.lesson,
    });
  }

  if (target.dataset.action === "direct-route") {
    try { navigate(JSON.parse(target.dataset.route)); } catch (_) {}
  }
});

backButton.addEventListener("click", () => {
  if (currentRoute.type === "lesson") {
    if (currentRoute.subject === "ep") return navigate({ type: "track", subject: "ep", track: currentRoute.track }, false);
    return navigate({ type: "subject", subject: currentRoute.subject }, false);
  }
  if (currentRoute.type === "track") return navigate({ type: "ep-hub", subject: "ep" }, false);
  if (currentRoute.type === "ep-hub" || currentRoute.type === "subject") return navigate({ type: "home" }, false);
  navigate({ type: "home" }, false);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  sideNav.querySelectorAll(".side-group").forEach(group => {
    let visibleCount = 0;
    group.querySelectorAll(".side-link").forEach(link => {
      const visible = link.textContent.toLowerCase().includes(query);
      link.style.display = visible ? "flex" : "none";
      if (visible) visibleCount++;
    });
    group.style.display = visibleCount ? "block" : "none";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("cardio-study-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("cardio-study-theme") === "dark") document.body.classList.add("dark");
render();
