<!-- Hard issue: backend/integration or CI -->
# Hard: Implement hackathon submission backend + CI workflow

Description
--
Create a simple backend endpoint to accept hackathon project submissions (title, description, repo link, team members). Add server-side validation and store submissions in a lightweight JSON file or simple database. Create a GitHub Actions workflow that runs tests and lints code on PRs.

Acceptance criteria
--
- API route exists (e.g., `/api/submissions`) that accepts POST requests and returns proper status codes.
- Server validates input and persists submissions to a file or DB.
- A GitHub Actions workflow runs `npm test` and `npm run lint` on pull requests.
- Documentation added describing how to run the backend locally.

Notes
--
- This is a multi-step task requiring backend routing (Next.js API or separate server), tests, and CI.
- Good for contributors comfortable with Node.js, Next.js API routes, and GitHub Actions.