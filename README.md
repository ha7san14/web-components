# Microfrontend Architecture with Quasar and Module Federation

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install Dependencies](#install-dependencies)
  - [Module Federation Setup](#module-federation-setup)
- [Running the Applications](#running-the-applications)


## Overview

This project implements a microfrontend architecture using the Quasar Framework, allowing modular and scalable frontend applications. The architecture includes a host application and multiple remote applications that expose components for integration via Webpack Module Federation.

## Project Structure

- **Host App**: The main application that manages rendering of remote microfrontends.
- **Remote App 1**: A standalone microfrontend exposing specific components.
- **Remote App 2**: Another standalone microfrontend with its own set of components.
- **Exposed Components**: Shared components usable across different microfrontends.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Ensure the following are installed on your machine:

- Node.js 
- Yarn or npm
- Quasar CLI

# Install Dependencies

# For Host App
```bash
cd host-app
npm install
```
# For Remote App 1

```bash
cd ../remote-app-1
npm install
```
# For Remote App 2

```bash
cd ../remote-app-2
npm install
```
# For Exposed Quasar Components

```bash
cd ../exposed-quasar-components
npm install
```


### Module Federation Setup

To configure Module Federation in your Quasar project, follow these steps in all the separate applications:

#### Step 1: Build Application

1. Build applications separately that will create a `.quasar` directory:

    ```javascript
    quasar build
    ```

#### Step 2: Solve Eager Consumption Error

1. Create a file named `main.js` in the `.quasar` directory and add the following line:

    ```javascript
    import('./client-entry');
    ```

2. Update the `quasar.config.js` to set the new entry point to `main.js`:

    ```javascript
    extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, './.quasar/main.js');
    }
    ```

#### Step 3: Disable Split Chunks

In the `quasar.config.js`, add the following inside the `chainWebpack` function to prevent chunk splitting:

```javascript
chainWebpack(chain) {
    // ...
    chain.optimization.delete('splitChunks');
}
 ```

### Step 4: Import and Initialize ModuleFederationPlugin

1. Import the `ModuleFederationPlugin` at the top of your `quasar.config.js`:

    ```javascript
    const { ModuleFederationPlugin } = require('webpack').container;
    ```

2. Initialize the `ModuleFederationPlugin` inside the `extendWebpack` function:

    ```javascript
    extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, './.quasar/main.js'); // from Step 1
        cfg.plugins.push(
            new ModuleFederationPlugin({
                name: 'app_remote', // Unique name for the remote app
                filename: 'remoteEntry.js', // The file that will be loaded by the host app
                exposes: {
                    // Add components to expose here
                    // Example: './ComponentName': './src/components/ComponentName.vue',
                },
                remotes: {
                    // Define remote applications here
                    // Example: 'app_host': 'app_host@http://localhost:8080/remoteEntry.js',
                },
                shared: {
                    ...dependencies, 
                }
            }),
        );
    }
    ```

Now you can start using the Module Federation plugin in your project!

### Running the Applications

You can run each application in separate terminals in development mode to see changes live :

```bash
# For Host App
cd host-app
quasar dev

# For Remote App 1
cd remote-app-1
quasar dev

# For Remote App 2
cd remote-app-2
quasar dev

# For Exposed Quasar Components
cd exposed-quasar-components
quasar dev
```




