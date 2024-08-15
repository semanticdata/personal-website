---
title: "🌱 Forgetful Notes"
description: "Forgetful Notes is my digital garden of knowledge. It serves as a platform for my learning and creative endeavours. A space for thinking through, building upon, and coming back to."
date: "2023-09-19"
demoURL: "https://forgetfulnotes.com/"
repoURL: "https://github.com/semanticdata/forgetful-notes"
draft: false
---

[Forgetful Notes](https://forgetfulnotes.com) is my _digital garden_ of knowledge. It serves as a platform for my learning and creative endeavours. A space for thinking through, building upon, and coming back to.

## ✨ Features

- Fast Natural-Language Search
- Bidirectional Backlinks
- Floating Link Previews
- Admonition-style Callouts
- Markdown Links and Wikilinks Support
- Latex Support

## ⚡ Quick start

### 1. Clone repo

```sh
git clone https://github.com/semanticdata/forgetful-notes.git
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Run the project locally

```sh
pnpm start
```

## 👨🏼‍💻 Useful Commands

### Update Quartz

```sh
npm run update
```

### Sync changes

```sh
npm run sync
```

### Read about a command

```sh
npx quartz <command> --help
```

## 🎨 Customization

You can add custom CSS code within `/quartz/styles/custom.scss`. You will then need to uncomment line 4 of `/quartz/styles/base.scss` to have it take effect.

| Used in: | Font Family | Previous Font |
| --- | :-: | :-: |
| Headers | [Bitter](https://fonts.google.com/specimen/Bitter) | [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) |
| Body | [Poppins](https://fonts.google.com/specimen/Poppins) | [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+3) |
| Code | [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |

## 🛠️ Technology

The site uses various technologies cobbled together. Here's a few of them:

- [Quartz](https://github.com/jackyzha0/quartz): a fast, batteries-included static-site generator.
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.
- [Sass](https://github.com/sass/sass): makes CSS fun!
- [TypeScript](https://github.com/microsoft/TypeScript): superset of JavaScript that compiles to clean JavaScript output.

All content for the site is written in _Markdown_ within [Obsidian](https://obsidian.md/)—an extensible, flexible note-taking app. To export the notes from Obsidian, I rely on the [GitHub Publisher](https://github.com/ObsidianPublisher) plugin.

## © License

Source code for this project is available under the [MIT License](https://github.com/semanticdata/forgetful-notes/blob/main/LICENSE).
