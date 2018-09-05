# A general outline of how I set up my environment for Full-Stack JavaScript development.

I use **Vue** for my front-end development, while I rely on **MongoDB, Express & Node.js** on the back-end (MEVN stack).

### Code editor

**I use Atom on macOS, with the below settings:**

- Soft Wrap At Preferred Line Length: 100 (to match **Prettier** config)
- UI & Syntax Theme: Atom Material

 **Plugins used:**
- atom-easy-jsdoc
- atom-material-syntax
- atom-material-ui
- busy-signal
- emmet
- file-icons
- intentions
- language-vue
- linter
- linter-eslint
- linter-ui-default
- platformio-ide-terminal
- sublime style column selection

**linter-eslint Package Settings:**
- Fix errors on save: On
- Lint HTML files: On
- Use Global ESLint installation: On
- Global Node Installation Path: _/Users/USERNAME/.config/yarn/global_ (required if using yarn instead of npm)

*Command to install all packages listed above:*

`apm install atom-easy-jsdoc atom-material-syntax atom-material-ui busy-signal emmet file-icons intentions language-vue linter linter-eslint linter-ui-default platformio-ide-terminal`

 ### Code style

- I use **ESLint + Prettier** to enforce a consistent code style.
- I use **JSDoc** to document my code.

 ### Global packages

 **I use yarn over npm** (mostly due to it's superior performance).
- @vue/cli
- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- jsdoc
- prettier
- nodemon

*Command to install all packages listed above:*

`yarn global add @vue/cli eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier jsdoc prettier nodemon`

### Vue
- I use **SCSS** as my **CSS** pre-processor.
- I try to follow the [official Style Guide](https://vuejs.org/v2/style-guide/).

### Express & Node.js

- Nodemon - Restarts the app on file changes (useful for development)
- Monogoose - MongoDB object modeling
- Helmet - Set some HTTP headers for improved security
- P2M - Process Management (load balancing, auto-restart, etc)

### VCS

I use GitHub along with [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Other tools

- **Postman** - Testing and Documenting my APIs
- **Sketch + Adobe Photoshop** - Design & Image editing
- **Sourcetree** - Git GUI
- **Jenkins** - Continuous Deployment
- **FileZilla** - FTP Client
