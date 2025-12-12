<!-- Beginner issue: add viewport meta tag -->
# Beginner: Ensure viewport meta tag is present

Description
--
Verify that the app's HTML head includes a viewport meta tag (`<meta name="viewport" content="width=device-width,initial-scale=1">`). If it's missing, add it to `src/app/layout.js` or the head component.

Acceptance criteria
--
- The viewport meta tag is present in the project head/layout.
- Page scales correctly on mobile devices when tested locally.

Notes
--
- Small and important fix to improve mobile rendering.
