# TECHSPIRE’26 — Symposium Website

**Where Technology Meets Creativity!**
Department of CSE & AIML · Er. Perumal Manimekalai College of Engineering, Koneripalli, Hosur – 635117
15 October 2026 · West Block Auditorium

Single-page promotional site built with **React + Vite + TypeScript + Tailwind CSS** and **lucide-react** icons.
Registration happens on the existing site: <https://techspire-26.vercel.app/> (this site only links to it and collects no data).

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # development server (http://localhost:5173)
npm run build      # type-check + production build into /dist
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  data/siteData.ts      <- ALL editable content (events, fees, rules, links)
  components/           <- Navbar, HeroSection, EventCard, EventsSection,
                           RegistrationSection, RulesSection, VenueSection,
                           CTASection, Footer, ...
  App.tsx, main.tsx, index.css
public/favicon.svg
```

## Update event details

Open `src/data/siteData.ts` and edit:

- `REGISTRATION_URL` — the registration link (used by every Register button)
- `technicalEvents` / `nonTechnicalEvents` — titles and descriptions
- `fees`, `feeNote`, `rules` — fee and rule text
- `site` — dates, venue, department, associations
- `EVENT_START_ISO` / `EVENT_END_ISO` — drive the countdown

## Replace the college logo

1. Put the logo file in `public/` (for example `public/college-logo.png`).
2. In `src/data/siteData.ts` set `logoSrc: "/college-logo.png"`.

Until then, a neutral text-based identity placeholder is shown.

## Add the campus map link

In `src/data/siteData.ts`, paste a verified Google Maps link into `site.mapUrl`.
While it is empty, the Venue section shows a labelled placeholder.

## Items for the organiser to confirm

- **Fees:** shown exactly as supplied (₹150 per person — All Events; ₹100 — E-Sports). Confirm how they apply together and add a note if needed.
- **Map link** (see above) and **college logo**.
- No timetable, prizes, contacts, sponsors or deadlines were invented; add them only when confirmed.

## Deploy: GitHub + Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "TECHSPIRE'26 website"
git branch -M main
git remote add origin https://github.com/<your-username>/techspire-26-website.git
git push -u origin main
```

Create the empty repository on github.com first (no README), then run the commands above.

### 2. Deploy on Vercel

1. Sign in at <https://vercel.com> with GitHub and click **Add New → Project**.
2. Import the repository.
3. Vercel auto-detects **Vite**. Confirm: Build Command `npm run build`, Output Directory `dist`.
4. Click **Deploy**. Every push to `main` redeploys automatically.

> Note: the registration site already uses the `techspire-26.vercel.app` address. Give this promotional project a different Vercel project name/domain (e.g. `techspire26-info`) so it does not clash.
