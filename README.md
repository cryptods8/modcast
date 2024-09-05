# Modcast

This is a browser extension for Google Chrome which improves the warpcast.com frames experience.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `extension`: a [Plasmo](https://www.plasmo.com/) extension
- `@modcast/ui`: a React component library shared by both `server` and `extension` applications
- `@modcast/eslint-config`: `eslint` configurations (includes `eslint-config-turbo` and `eslint-config-prettier`)
- `@modcast/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is primarily [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Extension

TBD - will be added to the appropriate browser extension stores.

## Trying it out yourself

### Prerequisities

Make sure to set all the necessary environment variables for both the [server](/apps/server/README.md) and the [extension](/apps/extension/README.md).

### Build

To build all apps and packages, run the following command:

```
cd modcast
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd modcast
pnpm dev
```
