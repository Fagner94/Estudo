# Guia rápido — Como alimentar o Cardio Study Hub

Você vai mexer principalmente em **um arquivo: `content.js`**.

## 1. Onde ficam as áreas principais?

Procure por:

```js
pacemaker: {
```

ou:

```js
ep: {
```

Dentro de `ep`, existem dois caminhos:

```js
conventional: {
```

```js
columbus: {
```

## 2. Como criar uma categoria?

Dentro de `categories`, adicione:

```js
{
  id: "nova-categoria",
  title: "Nova Categoria",
  description: "Descrição da categoria.",
  lessons: [],
},
```

## 3. Como criar uma aula pronta para preencher?

Use:

```js
placeholderLesson(
  "meu-id",
  "Título da Aula",
  "Descrição curta da aula."
),
```

Ela aparecerá automaticamente no site como **Preparada para editar**.

## 4. Como transformar em aula completa?

Troque o `placeholderLesson(...)` por:

```js
{
  id: "meu-id",
  title: "Título da Aula",
  subtitle: "Descrição curta",
  tags: ["EP", "English"],
  status: "ready",
  content: `
    <section class="lesson-block">
      <span class="lesson-kicker">Conceito</span>
      <h2>Meu título</h2>
      <p>Meu conteúdo.</p>
    </section>
  `,
},
```

## 5. Bloco bilíngue pronto

```html
<div class="english-card">
  <strong>The reference channel provides a timing reference.</strong>
  <span>O canal de referência fornece uma referência temporal.</span>
</div>
```

## 6. Fórmula / conceito destacado

```html
<div class="formula">LAT = T(local) − T(reference)</div>
```

## 7. Vocabulário

```html
<div class="vocab-grid">
  ${vocab("early", "precoce")}
  ${vocab("late", "tardio")}
</div>
```

## Regra prática

- Para **alimentar conteúdo** → mexa em `content.js`.
- Para **mudar aparência** → mexa em `style.css`.
- Para **mudar navegação/comportamento** → mexa em `app.js`.
- `index.html` dificilmente precisará ser alterado.
