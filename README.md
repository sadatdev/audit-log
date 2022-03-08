# Audit Log

A React application to track sites' individual audit logs. This project has the following features -

1. Shows all the sites list on the homepage. (mock data)
2. View individual site with a Modal.
3. Edit site data.
4. Keep audit logs of creating and updating sites.

## 📷 ScreenShoot (s)

> All sites list

![All sites list](https://i.postimg.cc/xT2Dcs9R/Screenshot-2022-03-08-at-5-57-54-PM.png)

> Edit site (Audit logs)

![All sites list](https://i.postimg.cc/rwshmWRj/two.png)

## 👨‍💻 Installation and Setup Instructions

To run locally you will need to clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

Install the dependencies

```shell
yarn
```

To run the project locally

```shell
yarn start
```

To run tests

```shell
yarn test
```

To run test coverage

```shell
yarn test:cov
```

To run eslint and prettier checks

```shell
yarn lint
```

To fix eslint and prettier issues silently

```shell
yarn lint:fix
```

<details>
  <summary> Commands with npm</summary>

Install the dependencies

```shell
npm install
```

To run project locally

```shell
npm start
```

To run tests

```shell
npm test
```

To run test coverage

```shell
npm run test:cov
```

To run eslint and prettier checks

```shell
npm run lint
```

To fix eslint and prettier issues silently

```shell
npm run lint:fix
```

</details>

## 📑 Overview

-   `components/*` - All components of the application go here. Separated by folder, which contains the component itself, style modules and test.
-   `Contexts/*` - All context providers for the app are here.
-   `hooks/*` - Custom hooks are here.
-   `styles/*` - The global styles are here.
-   `utils/*.ts` - Helper functions are here.

## 💻 Technical Choices

-   `React`, `TypeScript`, `Context API` were the requirements.
-   `MaterialUI` - A component library for React that is used widely. I did not write any css or sass for the design as I have used this one.

## 👌 Improvements

As the time on limited to develop the project, I couldn't make it with all the ideas in my mind. Things I consider to add to make it better -

1. Global error handler: A global error handler can be added to catch unwanted errors. My choice would be `React ErrorBoundary Component` or [react-error-boundary](https://www.npmjs.com/package/react-error-boundary?activeTab=dependencies) package.

2. Data fetching library: A data-fetching library can be used for better and clean data fetching and caching them. My choice would be [React Query](https://react-query.tanstack.com/) or [SWR](https://swr.vercel.app/).

3. Styles: As I have used MaterialUI, I didn't go for any custom theming. Custom styles can be added with theming as MaterialUI also has its support.

4. Git Hooks: Pre-commit hooks can be added to check esLint errors, prettier errors, tests and build errors. `lint-staged` & `husky` would be a good combination for this.

## Author

-   [@SadatJubayer](https://www.smjubayer.me)
