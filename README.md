# Product Dashboard

A small React + TypeScript dashboard for browsing products from the
[Fake Store API](https://fakestoreapi.com/products). It lets you **view, search,
sort, and inspect** each product, and handles the loading, error, and empty
states along the way.


## Getting started

```bash
# from the product dashboard folder
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build     # type-check + production build
npm run preview   # preview the production build locally
npm test          # run the unit tests once
npm run test:coverage
```


## Features

- **Data fetching** from `https://fakestoreapi.com/products` with three handled states:
  - Loading spinner while the request is in flight
  - "No results found" when nothing matches
- **Card grid** layout that's responsive from mobile to desktop
- **Search** box that filters by product title
- **Sorting** by title, price, or rating — ascending and descending
- **Detail view** in an accessible modal (opens on click, closes on Escape / backdrop / ✕)
- **Shared state** via Redux Toolkit (search term, sort, and the selected product)
- **Data fetching** with React Query (caching, retries, request states)
- **Accessibility**: labelled controls, focus-visible outlines, `role="dialog"`,
  `role="status"`/`role="alert"`
- **Pagination** (client-side, 8 per page)
- **Unit tests** with Jest + React Testing Library
- **Performance**: `React.memo` and `useMemo`
