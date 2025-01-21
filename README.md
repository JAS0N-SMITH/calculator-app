# CalculatorApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Theme Service

The application includes a `ThemeService` to toggle between light and dark modes. The theme preference is saved in `localStorage` and applied on load.

## GitHub Actions

This project uses GitHub Actions for Continuous Integration. The workflow is defined in `.github/workflows/node.js.yml` and runs on pushes and pull requests to the `main` branch. It tests the application across multiple Node.js versions.

## Change log

- **Tue Jan 21 14:37:33 2025 -0500 - JAS0N-SMITH**: chore: update node.js.yml
- **Tue Jan 21 14:34:54 2025 -0500 - Jason Smith**: Merge pull request #3 from JAS0N-SMITH/hk-calculator-styles
- **Tue Jan 21 14:31:55 2025 -0500 - Jason Smith**: Merge pull request #1 from JAS0N-SMITH/hk-service-features
- **Tue Jan 21 14:27:53 2025 -0500 - JAS0N-SMITH**: feat: added styling for calculator component; error prevention/handling;
- **Tue Jan 21 14:14:11 2025 -0500 - Jason Smith**: Merge pull request #2 from JAS0N-SMITH/JAS0N-SMITH-node-runner-test-automation
- **Tue Jan 21 14:13:48 2025 -0500 - Jason Smith**: Create node.js.yml
- **Tue Jan 21 13:54:37 2025 -0500 - JAS0N-SMITH**: feat(test): added test for dark mode button
- **Tue Jan 21 13:42:52 2025 -0500 - JAS0N-SMITH**: feat(theme): store theme data in localstorage instead of variable; added type identifiers
- **Tue Jan 21 13:40:49 2025 -0500 - JAS0N-SMITH**: feat(theme): add button to switch dark mode theme
- **Tue Jan 21 13:39:59 2025 -0500 - JAS0N-SMITH**: feat: add dark mode body properties background-color and color
- **Tue Jan 21 13:24:07 2025 -0500 - JAS0N-SMITH**: feat: implement theme service for dark mode
- **Tue Jan 21 13:22:05 2025 -0500 - JAS0N-SMITH**: feat: init theme service
- **Tue Jan 21 13:20:21 2025 -0500 - JAS0N-SMITH**: feat: added basic calculator input and buttons to component
- **Tue Jan 21 13:07:48 2025 -0500 - JAS0N-SMITH**: feat: add calculator service and tests
- **Tue Jan 21 13:07:18 2025 -0500 - JAS0N-SMITH**: chore(deps): import mathjs
- **Tue Jan 21 12:54:20 2025 -0500 - JAS0N-SMITH**: fix(tests): fix initial tests for application startup
- **Tue Jan 21 12:42:41 2025 -0500 - JAS0N-SMITH**: feat(init): generate calculator service
- **Tue Jan 21 12:35:42 2025 -0500 - JAS0N-SMITH**: fix(routing): imported RouterLink and RouterLinkActive to fix nav links
- **Tue Jan 21 12:26:09 2025 -0500 - JAS0N-SMITH**: feat(style): added global styles for navigation links
- **Tue Jan 21 12:25:14 2025 -0500 - JAS0N-SMITH**: feat(routing): added route navigation links to app.component
- **Tue Jan 21 12:22:36 2025 -0500 - JAS0N-SMITH**: feat(init): create calculator components
- **Tue Jan 21 12:20:37 2025 -0500 - JAS0N-SMITH**: chore: update gitignore
- **Tue Jan 21 12:15:20 2025 -0500 - JAS0N-SMITH**: Init: Angular project setup
- **Tue Jan 21 11:56:23 2025 -0500 - JAS0N-SMITH**: initial commit
