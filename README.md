# theGr8Val — Personal Site

Dark, minimal, opinionated. Built for GitHub Pages.

## Stack

- Pure HTML / CSS / JS — zero dependencies, zero build step
- Google Fonts: Space Mono + Syne
- Deploy target: GitHub Pages

## File Structure

```
/
├── index.html              ← Main page (hero, about, projects, blog, links)
├── css/
│   ├── style.css           ← Main styles
│   └── blog.css            ← Blog post styles
├── js/
│   └── main.js             ← Terminal animation, scroll effects
└── blog/
    └── post-template.html  ← Copy this for every new post
```

## Deploy to GitHub Pages

### 1. Create repo

Name it `theGr8Val.github.io` (exactly your GitHub username + `.github.io`).

### 2. Push files

```bash
git init
git add .
git commit -m "init: theGr8Val personal site"
git branch -M main
git remote add origin https://github.com/theGr8Val/theGr8Val.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

Repo → Settings → Pages → Source: `Deploy from branch` → Branch: `main` / `root`

Your site will be live at `https://theGr8Val.github.io` within ~60 seconds.

## Customization Guide

### Update your info in `index.html`

- **Hero**: Edit `.hero-sub` paragraph with your actual voice
- **About**: Rewrite the `.about-text` paragraphs — make it yours
- **Projects**: Replace the 4 `<article class="project-card">` blocks with real projects
- **Blog**: Replace placeholder `<a class="blog-card">` entries with real posts
- **Links**: Update GitHub URL, Buy Me a Coffee URL, email, Twitter handle

### Adding a blog post

1. Copy `blog/post-template.html` → `blog/your-post-name.html`
2. Edit the title, date, tags, and content
3. Add a card to `index.html` in the blog section pointing to your new file

### Colors (in `css/style.css` `:root`)

```css
--accent: #00ff88;   /* Main green accent — change this to rebrand */
--bg:     #0a0a0a;   /* Background base */
```

### Buy Me a Coffee

Replace `https://buymeacoffee.com/theGr8Val` with your actual link in:
- `index.html` → links section
- `blog/post-template.html` → post footer

## License

Do what you want with this. It's yours now.
