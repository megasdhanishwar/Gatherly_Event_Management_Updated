# Gatherly — Event Management Website (v2)

A modular event discovery and registration website built with React, Vite, React Router, Framer Motion and Lucide icons.

## Project structure

```text
src/
├── components/
│   ├── common/
│   │   ├── SectionHeading.jsx
│   │   └── Toast.jsx
│   ├── events/
│   │   ├── EventCard.jsx
│   │   ├── EventFilters.jsx
│   │   └── RegistrationModal.jsx
│   └── layout/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── data/
│   └── events.js
├── pages/
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── EventDetails.jsx
│   ├── About.jsx
│   └── MyEvents.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Pages and features
- Home: hero section, highlights, featured events, about preview and CTA
- Events: category filters, live search, sorting and event cards
- Event details: full description, date, time, venue, availability and registration
- About: story and values sections
- My Events: registrations, booking IDs, ticket counts and confirmation status
- Registration modal: form validation and ticket total calculation
- LocalStorage: registration details persist in the browser
- Responsive navigation and layouts for mobile, tablet, laptop and desktop

## Run locally

```bash
npm install
npm run dev
```

Open the localhost address shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Notes
This is a frontend demo using mock events from `src/data/events.js`. Registration data is saved under `gatherly-registrations` in localStorage. No backend or payment gateway is connected.
