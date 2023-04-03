# vue-project-imd1005-student-starter

This project is a small Vue 3 app, demonstrating how to use the Vue router, composable functions, loading JSON data, and dealing with GitHub's base repo folder addition when using the GitHub pages service.

## Recommended IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project setup

```text
├─ public           // static assets.
├─ .github          // GitHub actions workflow config file
├─ .vscode          // VSCode extentions recommendations
├─ src
│  ├─ assets        // assets such as styles or images
│  ├─ components    // universal Vue components
│  ├─ composables   // Vue Composable functions
│  ├─ data          // data files - for example pokemon.json
│  ├─ router        // Vue Router configuration
│  └─ pages         // page components
├─ .editorconfig    // Set the configuration defaults for our editor
├─ .eslintrc.cjs    // Setup ESLint to check our JavaScript code
├─ .prettierrc.json // Configure the Prettier plugin to format our code
├─ index.html       // This is our vite application entry point
├─ vite.config.js   // Configure Vite tool
```

## Steps to build this Vue app locally

### Step 1: Download project files

Use GitHub to download the repository files so that you have all of the files locally.

## Step 2: Install Node packages

```sh
npm install
```

## Step 3: Configure your `base` output folder in `vite.config.js`

If you are using GitHub pages for hosting, you need to configure the base folder path so that your app works on Github pages web server.

To do this we modify our `vite.config.js` file and set the `base` parameter to the name of your repository.

So, the following:

```js
  base: '/vue-project-imd1005-student-starter',
```

Must be changed to the name of your group project repository

```js
  base: '/name-of-group-project-repository',
```

In the future, if you want to use this boilerplate with a web server other than GitHub pages, you can remove the `base` parameter altogether.

### Step 4: Compile and Hot-Reload for Development

The following command will build your app locally and run it to provide you with a developer preview.

```sh
npm run dev
```

You can now make changes to your code and see them in a local preview environment.

### Step 5: Add the project files to your Group Repository

You can now add all of the files to your Group Repository either using the file uplaod feature in GitHub or by using the Git Commit and Git Push commands in VSCode.

### Step 6: Automatically deploy your website with GitHub Actions

Since the project has a special `.github` folder with a pre-configured GitHub action, you don't need to do anything else to configure the Build and Deploy steps. GitHub will automatically set everything up for you.

## Vite Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
