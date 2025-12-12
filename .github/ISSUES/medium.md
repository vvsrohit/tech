<!-- Medium issue: small UI feature or accessibility improvement -->
# Medium: Add email registration form and validation

Description
--
Add a minimal registration form to the landing page that collects name and email. Implement simple client-side validation (required fields, email format) and show success/error states. Keep the submission local (no backend) but structure code so it could be wired to an API later.

Acceptance criteria
--
- A small registration form appears in the hero or a modal.
- Form validates required fields and shows inline errors.
- Successful submission displays a friendly confirmation message.
- Code is modular and well-documented.

Notes
--
- Implement in `src/app/page.js` and add any small CSS to `src/app/globals.css`.
- This task is a good fit for someone comfortable with React state/hooks.