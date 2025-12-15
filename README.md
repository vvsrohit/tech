Tech Challenge — Next.js Demo
=================================

A small Next.js (App Router) demo that serves a simple landing page. It provides a minimal starting point for UI improvements and small backend additions.

Purpose
-------

- Showcase a basic Next.js app and project layout
- Provide a lightweight starter for feature work and contributions

Requirements
------------

- Node.js 18 or newer
- npm (bundled with Node)

Install
-------

```bash
npm install
```

Get Started (development)
-------------------------

```bash
npm run dev
# open http://localhost:3000
```

Build & Run (production)
-------------------------

```bash
npm run build
npm start
```

Important Files
---------------

- `src/app/page.js` — landing page (edit this to change content)
- `src/app/globals.css` — global styles
- `package.json` — project scripts (`dev`, `build`, `start`, `lint`)

Contributing
------------

- Create a feature branch: `git checkout -b feat/your-feature`
- Commit and open a pull request for review

If you'd like, I can add a short CONTRIBUTING guide or an example test next.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

---

Project setup & contribution guide

This repository contains a demo landing page and three example issue descriptions under `.github/ISSUES/` (easy/medium/hard). Below are quick setup steps and recommended procedures to address each issue.

Local setup (PowerShell)

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Open the site in your browser
Start-Process "http://localhost:3000"
```

Where to look

- Landing page: `src/app/page.js`
- Global styles: `src/app/globals.css`
- Issue descriptions: `.github/ISSUES/easy.md`, `medium.md`, `hard.md`

Quick issue-fix procedures

- Easy (content): Edit `src/app/page.js` to update hero copy or speaker blurbs. Validate by running the dev server and checking the page.
- Medium (UI feature): Add a registration form (name + email) in the hero and implement client-side validation using a simple regex. Show inline errors and a success message.
- Hard (backend + CI): Add a POST API at `src/app/api/submissions/route.js`, persist submissions to `data/submissions.json` (or DB), add tests, and create `.github/workflows/ci.yml` to run lint/tests on PRs.

Developer workflow (example)

```powershell
# create a feature branch
git checkout -b feat/my-change

# stage and commit
git add -A
git commit -m "feat: implement ..."

# push
git push -u origin feat/my-change
```

Open a PR for review and reference the issue you worked on.

---

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
