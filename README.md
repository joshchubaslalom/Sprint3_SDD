# Sprint3_SDD

A React application built with Vite for Home Depot. This repository uses [GitHub Spec Kit](https://github.com/github/spec-kit) for Specification-Driven Development (SDD).

## What is Spec-Driven Development?

Spec-Driven Development flips the traditional software development approach. Instead of writing code first and documentation second, SDD treats specifications as executable documents that directly guide AI agents to generate working implementations.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher)

You can check your versions by running:
```bash
node --version
npm --version
```

## Getting Started

Follow these steps to get the application running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/joshchubaslalom/Sprint3_SDD.git
cd Sprint3_SDD
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### 3. Start the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` by default. Open this URL in your browser to view the application.

The development server includes Hot Module Replacement (HMR), so changes you make to the code will be reflected in the browser automatically.

## Available Scripts

You can run:

### `npm run dev`
Starts the development server with hot reload.

### `npm run build`
Creates an optimized production build in the `dist` folder.

### `npm run lint`
Runs ESLint to check code quality and identify issues.

### `npm run preview`
Previews the production build locally. Run `npm run build` first.

## Getting Started with Spec Kit

This repository has been initialized with GitHub Spec Kit, which provides several commands to help you build features systematically:

### Available Commands

In GitHub Copilot Chat, you can use the following slash commands:

- `/speckit.constitution` - Define or update project principles (e.g., coding conventions, architecture rules)
- `/speckit.specify` - Create a feature specification from a natural language description
- `/speckit.clarify` - Resolve ambiguities in the specification
- `/speckit.plan` - Generate a technical plan and implementation breakdown
- `/speckit.tasks` - Create actionable implementation tasks from the plan
- `/speckit.implement` - Begin generating code from the tasks
- `/speckit.analyze` - Analyze the codebase or specific features
- `/speckit.checklist` - Create or update implementation checklists
- `/speckit.taskstoissues` - Convert tasks to GitHub issues

### Workflow

1. **Define Principles**: Start by defining your project's core principles using `/speckit.constitution`
2. **Specify Feature**: Describe what you want to build with `/speckit.specify`
3. **Clarify Requirements**: Use `/speckit.clarify` to resolve any ambiguities
4. **Create Plan**: Generate a technical plan with `/speckit.plan`
5. **Break Down Tasks**: Create actionable tasks using `/speckit.tasks`
6. **Implement**: Generate code with `/speckit.implement`

## Project Structure

```
Sprint3_SDD/
├── .github/
│   ├── agents/              # Spec Kit agent definitions for GitHub Copilot
│   └── prompts/             # Prompt templates for spec-driven commands
├── .specify/
│   ├── memory/              # Project constitution and memory
│   ├── templates/           # Templates for specs, plans, tasks, and checklists
│   └── scripts/             # Helper scripts for automation
├── src/                     # Source code
│   ├── components/          # React components
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Application entry point
├── public/                  # Public static files
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── .vscode/settings.json    # VS Code settings for Spec Kit integration
└── README.md                # This file
```

## Technology Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and development server
- **ESLint** - Code linting and quality checks

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual port number.

### Installation Issues
If you encounter issues during `npm install`, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Node Version Issues
Ensure you're using Node.js version 18 or higher. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

## Additional Resources

### React & Vite
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)

### Spec Kit
- [Spec Kit GitHub Repository](https://github.com/github/spec-kit)
- [Spec Kit Documentation](https://github.github.com/spec-kit/)
- [Quickstart Guide](https://github.com/github/spec-kit/blob/main/docs/quickstart.md)
