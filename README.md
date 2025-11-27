# Classroom Manager

A Jackbox-style classroom manager built in React + JavaScript + Vite.

## Prerequisites

In order to set up the project, you must have the following installed:

### Git

Version control system used by this project.

### Node.js and npm

Required to run JavaScript locally and managing packages.

It is **highly recommended** to install these via **Node Version Manager (nvm)**.
If you choose to install nvm, first remove any pre-existing installations of Node.js and npm from your system.

#### Installing nvm on macOS/Linux

Install nvm from [here](https://github.com/nvm-sh/nvm).

To verify the installation was successful, run the following command:

```shell
nvm --version
```

If the command was not recognized, try **restarting the terminal**.

#### Installing nvm on Windows

Install nvm-windows from [here](https://github.com/coreybutler/nvm-windows).

To verify the installation was successful, run the following command:

```shell
nvm --version
```

If the command was not recognized, try **restarting the terminal**.

> [!TIP]
> If you are running these commands in PowerShell and you run into permission issues,
> try either switching to Command Prompt or temporarily set a less restrictive execution policy.

Once nvm-windows is installed, make sure you run the following command in the terminal to enable version managing using nvm:

```shell
nvm on
```

#### Installing Node/npm (using nvm)

Install Node (v23.7.0) and npm, run the following command:

```shell
nvm install 23.7.0
```

To ensure the installation was successful, try running:

```shell
node -v
```

and

```shell
npm -v
```

If the commands were not recognized, try **restarting the terminal**.

## Setting Up the Project

To set up the project:

1. Navigate to the folder where you want the project to live.

2. Open up a terminal at that folder.

3. Clone the repo by running:

   ```
   git clone https://github.com/zunit/wiz-classroom-manager-general
   ```

4. Navigate into the project repo using the command:

   ```
   cd wiz-classroom-manager-general
   ```

> [!TIP]
> Using VS Code? Open the project after the `cd` command by running:
>
> ```
> code .
> ```

5. Install all the necessary dependencies by running:

   ```
   npm install
   ```

   If you run into any dependency conflicts, try adding the `--legacy-peer-deps` flag at the end, like so:

   ```
   npm install --legacy-peer-deps
   ```

If everything was successful, you should be able to start the development server by running the following command:

```shell
npm run dev
```

## Running/Building the Project

To **run** the project, run the following command in the terminal:

```shell
npm run dev
```

You can then open the page in the browser by either pressing `o + enter` in the terminal,
or by directly visiting the URL `http://localhost:5173` in your browser.

To **build** the project into a static, optimized HTML file that can be uploaded onto Wiz Learn, run the following command in the terminal:

```shell
npm run build
```

When the project finishes building, the file will be available at `dist/index.html`.

> [!NOTE]
> For developers:
> This project currently uses the `@dnd-kit/core` library for the drag and drop functionality.
> However, that library is currently in the middle of a major refactor (see [this GitHub issue](https://github.com/clauderic/dnd-kit/issues/1194)).
>
> When the new version (available on npm as `@dnd-kit/react`) becomes stable with a v1.0.x release,
> the code in the `<TimetableSettings>` component should be updated.
