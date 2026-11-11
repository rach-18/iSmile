# iSmile frontend

The clinic website uses React, TypeScript, Vite, and React Router. The visual theme follows the supplied iSmile reference: deep indigo, lavender accents, white space, and editorial serif headings.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal (usually `http://localhost:5173`).

## Structure

```text
src/
├── App.tsx                 # Route table and app entry
├── main.tsx                # Mounts React in the HTML document
├── components/
│   ├── brand/               # Clinic logo
│   ├── layout/              # Shared header, navigation, footer
│   └── ui/                  # Reusable page pieces
└── pages/                   # One component per route
```

Routes are `/`, `/services`, `/about`, and `/contact`. Add new pages under `src/pages/` and register their route in `src/App.tsx`.

Clinic details are kept in `src/data/clinic.ts`. Shared images and logos live in `public/images/`: `dentist.jpg`, `ismile-logo-indigo.png`, and `ismile-logo-white.png`.

## Scripts

- `npm run dev` starts Vite with hot reload.
- `npm run build` type-checks and creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs Oxlint.

Contact details beyond Instagram and address and service descriptions should be confirmed with the clinic before publishing.
