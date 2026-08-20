# Cardio Study Hub

Site estático para GitHub Pages, organizado em duas grandes áreas:

- **Marcapasso**
- **Eletrofisiologia**
  - **EP Convencional**
  - **Columbus 3D**

A estrutura foi feita para ser alimentada aos poucos sem precisar reconstruir o layout.

## Arquivos

- `index.html` — estrutura base do site.
- `style.css` — todo o visual e responsividade.
- `content.js` — **onde você adiciona e edita as aulas**.
- `app.js` — navegação e funcionamento do site. Normalmente você não precisa mexer aqui.

## Como adicionar uma nova aula

Abra `content.js`, encontre a categoria desejada e copie uma aula existente.

Exemplo:

```js
{
  id: "window-of-interest",
  title: "Window of Interest",
  subtitle: "Janela temporal do mapa",
  tags: ["Columbus", "LAT"],
  status: "ready",
  content: `
    <section class="lesson-block">
      <h2>Window of Interest</h2>
      <p>Seu conteúdo aqui.</p>
    </section>
  `,
}
```

### Status

- `status: "ready"` → mostra que a aula já tem conteúdo.
- `status: "draft"` → mostra que a página está preparada para edição.

## Como publicar no GitHub Pages

1. Crie um repositório, por exemplo `cardio-study-hub`.
2. Envie todos os arquivos para a raiz do repositório.
3. Abra `Settings` → `Pages`.
4. Em **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Salve.

O endereço ficará parecido com:

`https://SEU-USUARIO.github.io/cardio-study-hub/`

## Organização recomendada

### Marcapasso

- Fundamentos
- Programação
- Algoritmos
- Seguimento

### Eletrofisiologia Convencional

- Fundamentos
- Pacing
- Arritmias

### Columbus

- Setup & Signals
- Mapping
- Ferramentas

Você pode renomear, excluir ou criar quantas categorias quiser diretamente em `content.js`.
