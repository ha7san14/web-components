# Microfrontend Architecture with Quasar and Module Federation

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Module Federation Setup](#module-federation-setup)
- [Running the Applications](#running-the-applications)
- [Accessing the Applications](#accessing-the-applications)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project implements a microfrontend architecture using the Quasar Framework, allowing modular and scalable frontend applications. The architecture includes a host application and multiple remote applications that expose components for seamless integration via Webpack Module Federation.

## Project Structure

- **Host App**: The main application that orchestrates rendering of remote microfrontends.
- **Remote App 1**: A standalone microfrontend exposing specific components.
- **Remote App 2**: Another standalone microfrontend with its own set of components.
- **Exposed Components**: Shared components usable across different microfrontends.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Ensure the following are installed on your machine:

- Node.js (v14 or higher)
- Yarn or npm
- Quasar CLI

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>

```
#Install necessary dependencies 

# For Host App
cd host-app
npm install

# For Remote App 1
cd ../remote-app-1
npm install

# For Remote App 2
cd ../remote-app-2
npm install

