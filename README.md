# Driver Management App

This is the Next.js application for Web Frontend Driver management shipper

### Lighthouse

![Lighthouse Accessibility Badge](./lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices Badge](./lighthouse/lighthouse_best-practices.svg) ![Lighthouse Performance Badge](./lighthouse/lighthouse_performance.svg) ![Lighthouse PWA Badge](./lighthouse/lighthouse_pwa.svg) ![Lighthouse SEO Badge](./lighthouse/lighthouse_seo.svg)

## uTests Coverage Status

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-76.95%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-55.58%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-64.7%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-77.98%25-red.svg?style=flat) |

## What chore library inside this repository?

```
- jest & testing-library
- bootstrap 5
- styled-component (css in js)
- bootstrap-icons
- nextjs@latest
- axios
- dayjs (date management)
```

## How to Install

Prerequisite

```
node ^v14.17.0
npm ^6.14.13
```

## Development

**Run locally as dev mode**

- npm run install
- npm run dev
- open http://localhost:3000

**Build Mode (production)**

- npm run install
- npm run build
- npm run start
- open http://localhost:3000

**uTest**

- npm run test

**build coverage badge**

- npm run test:coverage

### Folder Structure

```
src
├── components
│   └── index.ts
├── constants
│   └── index.ts
├── hooks
│   ├── mutations
│   └── queries
│       └── use-todo.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── _offline.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── styles
│   ├── config.scss
│   └── globals.scss
├── types
├── utils
│   ├── axios.ts
│   ├── date.ts
│   └── test-utils.tsx
└── views
    └── homepage
        ├── __test__
        │   ├── __snapshots__
        │   │   └── Homepage.test.tsx.snap
        │   └── homepage.test.tsx
        ├── homepage.tsx
        └── index.ts
```

## Commit

All commit messages should conform to the [conventional commit format](https://www.conventionalcommits.org) and should use following syntax: `type(scope): subject`. While the type is mandatory, the scope is optional.
Examples:

```
docs: add README.md
```

```
fix(Header): fix padding issue
```

```
feat: create Home view
```

Main types are `fix` and `feat`, however it is possible to also use:

- `chore`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`

Additional information can be found [here](https://github.com/KWRI/engineering-resources/blob/develop/git/commit_standards.md)

## Generate lighthouse

1. build application with `npm run build`
2. run app locally `npm run start`
3. run `npx lighthouse-badges --urls http://localhost:3000 -o lighthouse`

## Additional Information
Endpoint
- https://randomuser.me/api/?results=30