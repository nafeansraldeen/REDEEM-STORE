REDEEM STORE - Instant Account Navigation

Files:
- index.html: main store with account component preloaded into the same DOM.
- account-page.js: account HTML + account-specific CSS + the supplied account JavaScript logic.

Keep these existing project files beside them:
- translations.js
- i18n.js

Important:
- Do NOT link account.html from the bottom navigation. The existing nav button data-page="page-account" remains in index.html.
- account-page.js is loaded before the main store JavaScript so #page-account and its modals already exist when the existing switchPage() runs.
- The account page is initially hidden; clicking "الحساب" only changes display/classes through the existing switchPage() and updateNavActive().
- The original account visual CSS and account behavior were taken from the supplied account files; no redesign was introduced.
