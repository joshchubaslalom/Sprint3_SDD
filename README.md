# Sprint3_SDD

A React application built with Vite for Home Depot.

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

### `npm test`
Runs Playwright tests. Start the dev server first with `npm run dev`.

## Project Structure

```
Sprint3_SDD/
├── src/                     # Source code
│   ├── components/          # React components
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Application entry point
├── public/                  # Public static files
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Technology Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and development server
- **ESLint** - Code linting and quality checks
- **Playwright** - End-to-end testing framework
- **Playwright MCP** - Browser automation via Model Context Protocol

## Testing

This project includes Playwright tests that can be run in two ways:

1. **Standard Playwright Tests**: Run `npm test` to execute all tests
2. **MCP Tools**: Use playwright-test MCP tools for browser automation

See [PLAYWRIGHT_MCP.md](./PLAYWRIGHT_MCP.md) for detailed information about using Playwright with MCP tools.

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

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)