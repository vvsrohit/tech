# PatchFest Demo Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This repository contains a demo landing page and example issue descriptions designed for PatchFest.

## 🚀 Getting Started

### Prerequisites
Ensure you have Node.js installed.

### Installation & Running
1. Install dependencies:
   ```bash
   npm install

2. Run the development server:

npm run dev

3. Open http://localhost:3000 with your browser to see the result.

Where to Look
Landing page: src/app/page.js (Start editing here)

Global styles: src/app/globals.css

Issue descriptions: .github/ISSUES/ (Contains easy.md, medium.md, hard.md)

Contribution Guide
Below are the recommended procedures to address the example issues:

Easy (Content Update): Edit src/app/page.js to update the hero copy or speaker blurbs. Validate by running the dev server and checking the page.

Medium (UI Feature): Add a registration form (name + email) in the hero section. Implement client-side validation using simple Regex. Show inline errors and a success message.

Hard (Backend + CI): Add a POST API at src/app/api/submissions/route.js. Persist submissions to data/submissions.json (or a DB). Add tests and create a .github/workflows/ci.yml file to run linting/tests on PRs.


Developer Workflow:
# 1. Create a feature branch
git checkout -b feat/my-change

# 2. Stage and commit changes
git add -A
git commit -m "feat: implement registration form"

# 3. Push to repository
git push -u origin feat/my-change

Once pushed, open a Pull Request (PR) for review and reference the issue you worked on.

Learn More (Next.js)
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.

Learn Next.js - an interactive Next.js tutorial.