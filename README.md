# Rad Dad Static Website based off of:

[**React Static Boilerplate**](https://github.com/kriasoft/react-static-boilerplate) (RSB) is a
boilerplate and tooling for creating modern stand-alone web applications (aka
[SPA](https://en.wikipedia.org/wiki/Single-page_application)s) for a serverless architecture. 


**View** [docs](./docs), [online demo](https://rsb.kriasoft.com) &nbsp;|&nbsp; ### Directory Layout

```shell
├── components/                 # Shared or generic UI components
│   ├── Button/                 # Button component
│   ├── Layout/                 # Website layout component
│   ├── Link/                   # Link component to be used instead of <a>
│   └── ...                     # etc.
├── docs/                       # Documentation to the project
├── node_modules/               # 3rd-party libraries and utilities
├── src/                        # Application source code
│   ├── about/                  # About page
│   ├── error/                  # Error page
│   ├── home/                   # Home page
│   ├── history.js              # Handles client-side navigation
│   ├── main.js                 # <== Application entry point <===
│   ├── router.js               # Handles routing and data fetching
│   ├── routes.json             # This list of application routes
│   └── store.js                # Application state manager (Redux)
├── public/                     # Static files such as favicon.ico etc.
│   ├── dist/                   # The folder for compiled output
│   ├── favicon.ico             # Application icon to be displayed in bookmarks
│   ├── robots.txt              # Instructions for search engine crawlers
│   └── ...                     # etc.
├── test/                       # Unit and integration tests
├── tools/                      # Utility and helper classes
└── package.json                # The list of project dependencies and NPM scripts
```


### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer and
[Yarn](https://yarnpkg.com/) installed on your development machine.


**Step 2**. Compile and launch the app by running:

```shell
$ yarn start                    # Compiles the app and opens it in a browser with "live reload"
```

You can also test your app in release (production) mode by running `yarn start -- --release` or
with HMR and React Hot Loader disabled by running `yarn start -- --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ yarn lint                     # Check JavaScript and CSS code for potential issues
$ yarn test                     # Run unit tests. Or, `yarn run test:watch`
```

### How to Deploy

We upload to an s3 bucket for 'raddad.band'. You must install credentials into ~/.aws/credentials. Ask @sbilstein for those credentials.

```shell
$ yarn run publish                  # Builds and deployes the app to Firebase
```

If you need to build the project without publishing it, simply run:

```shell
$ yarn build                    # Compiles the app into the /public/dist folder
```
