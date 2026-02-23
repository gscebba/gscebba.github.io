# Content Guide

## Add a New Publication

Add a BibTeX entry to `_bibliography/papers.bib`:

```bibtex
@article{my_new_paper,
  bibtex_show = {true},
  selected    = {true},
  abbr        = {VENUE},
  title       = {Paper Title Here},
  author      = {Scebba, Gaetano and Coauthor, Name},
  journal     = {Journal Name},
  year        = {2025},
  pdf         = {https://link-to-pdf.com},
  html        = {https://link-to-source.com},
  abstract    = {Your abstract here.}
}
```

Key fields:
- `selected = {true}` — shows on homepage under "Selected Publications"
- `abbr` — badge shown next to the entry (e.g. `EMBC`, `IEEE TBME`)
- `pdf` — adds a PDF button linking to the paper
- `html` — adds an HTML button linking to a webpage
- `bibtex_show = {true}` — shows a "Bib" button to copy the citation

### Select which publications appear on the homepage

1. In `_bibliography/papers.bib`, add `selected = {true}` to the entries you want on the homepage. Remove it (or set `selected = {false}`) to hide them.
2. To change how many selected publications are shown, edit `_includes/selected_papers.liquid` and change the `--max` value:
   ```
   {% bibliography --group_by none --max 3 --query @*[selected=true]* %}
   ```
   Change `3` to any number you want.

## Add a News Item

Add a new entry at the **top** of `_data/news.yml` (newest first):

```yaml
- date: 2025-03-15
  content: >
    Your news text here. Use HTML for links: <a href="https://example.com">link text</a>.
```

The `>` folded scalar lets you write on multiple lines — they'll be joined into one paragraph.

## Add a New Project

Create a new file in `_projects/`, e.g. `_projects/my_project.md`:

```markdown
---
layout: page
title: Project Name
description: Short description for the card
img: assets/img/projects/my_project.jpg
importance: 1
---

Full project description here in Markdown.
```

Put the project image in `assets/img/projects/`.
Lower `importance` number = shown first.

## Edit Your Profile

- **Bio text**: edit `_pages/about.md`
- **Profile photo**: replace `assets/img/prof_pic.png`
- **Social links**: edit `_data/socials.yml`
- **Site title, URL, etc.**: edit `_config.yml`

## Build Locally

### Option 1: Docker (recommended)

Requires [Docker Desktop](https://docs.docker.com/get-docker/) to be installed **and running**.

```bash
cd website_alfolio
docker compose pull
docker compose up
```

Site runs at **http://localhost:8080** with live reload.
Stop with `Ctrl+C` or `docker compose down`.

> **Windows note:** If you get a "cannot find pipe" error, make sure Docker Desktop is open and fully started before running the command. See [INSTALL.md](INSTALL.md#local-setup-on-windows) for Windows-specific guidance (WSL is recommended).

### Option 2: Ruby + Jekyll (without Docker)

1. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) (on Windows, use [RubyInstaller](https://rubyinstaller.org/))
2. Install dependencies and serve:

```bash
cd website_alfolio
bundle install
bundle exec jekyll serve
```

Site runs at **http://localhost:4000**.

### General notes

After changing `_config.yml`, restart the server (changes to that file are not live-reloaded).

## Deploy

Push to GitHub. The `.github/workflows/deploy.yml` action builds and deploys to GitHub Pages automatically on push to `main`.
