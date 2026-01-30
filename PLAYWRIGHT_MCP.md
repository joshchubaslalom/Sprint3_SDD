# Playwright Test MCP Integration

This document explains how to use Playwright Test with MCP (Model Context Protocol) tools for browser automation.

## What is MCP?

MCP (Model Context Protocol) is a protocol that allows AI agents and other clients to interact with tools and services. The playwright-test MCP provides browser automation capabilities through a set of tools that can be invoked programmatically.

## Available MCP Tools

The following MCP tools are available for browser automation:

### Navigation
- **playwright-browser_navigate**: Navigate to a URL
- **playwright-browser_navigate_back**: Go back to the previous page

### Interaction
- **playwright-browser_click**: Click on elements
- **playwright-browser_type**: Type text into input fields
- **playwright-browser_hover**: Hover over elements
- **playwright-browser_drag**: Drag and drop elements
- **playwright-browser_press_key**: Press keyboard keys
- **playwright-browser_select_option**: Select options in dropdowns
- **playwright-browser_fill_form**: Fill multiple form fields

### Inspection
- **playwright-browser_snapshot**: Capture accessibility snapshot of the page
- **playwright-browser_take_screenshot**: Take screenshots (viewport or full page)
- **playwright-browser_console_messages**: Get console messages
- **playwright-browser_network_requests**: View network requests

### Waiting
- **playwright-browser_wait_for**: Wait for text to appear/disappear or time to pass

### Dialog Handling
- **playwright-browser_handle_dialog**: Handle browser dialogs (alert, confirm, prompt)

### File Operations
- **playwright-browser_file_upload**: Upload files

### Browser Management
- **playwright-browser_tabs**: Manage browser tabs
- **playwright-browser_resize**: Resize the browser window
- **playwright-browser_close**: Close the page

### JavaScript Execution
- **playwright-browser_evaluate**: Execute JavaScript in the browser context

## How MCP Tools Were Used

In this project, MCP tools were used to:

1. **Navigate to the application**: Used `playwright-browser_navigate` to open http://localhost:5173
2. **Capture screenshots**: Used `playwright-browser_take_screenshot` to document the UI
3. **Interact with elements**: Used `playwright-browser_click` to click buttons
4. **Fill forms**: Used `playwright-browser_type` to enter text in the search field
5. **Inspect page structure**: Used `playwright-browser_snapshot` to get the accessibility tree

## Example Usage

### Example 1: Navigate and Take Screenshot

```javascript
// MCP Tool: playwright-browser_navigate
{
  "url": "http://localhost:5173"
}

// MCP Tool: playwright-browser_take_screenshot
{
  "filename": "homepage.png",
  "fullPage": true
}
```

### Example 2: Search Functionality

```javascript
// Type in search box
// MCP Tool: playwright-browser_type
{
  "element": "Search textbox",
  "ref": "e9",
  "text": "hammer"
}

// Click search button
// MCP Tool: playwright-browser_click
{
  "element": "Search button",
  "ref": "e10"
}
```

### Example 3: Get Page Structure

```javascript
// MCP Tool: playwright-browser_snapshot
{} // No parameters needed
```

This returns the accessibility tree showing all interactive elements.

## Running Tests

### Standard Playwright Tests

Run the regular Playwright tests:

```bash
npm test
```

This runs all test files in the `playwright/` directory using the standard Playwright Test framework.

### Using MCP Tools

MCP tools are invoked by AI agents or MCP clients. They provide the same browser automation capabilities but can be called programmatically without writing test code.

**Benefits of MCP Tools:**
- No need to write test code for one-off automation tasks
- AI agents can interact with your application
- Useful for debugging and exploratory testing
- Can be integrated into CI/CD pipelines through MCP clients

## Test Files

- **`playwright/example.spec.ts`**: Sample Playwright tests from the official documentation
- **`playwright/playwright-sanity.spec.ts`**: Basic sanity check test
- **`playwright/mcp-automation-test.spec.ts`**: Comprehensive tests for the Home Store app that demonstrate MCP-compatible automation patterns
- **`seed.spec.ts`**: Template for generating new tests (located in project root)

## Screenshots Captured

During MCP tool usage, the following screenshots were captured:

1. **Homepage**: Full page screenshot showing the complete Home Store interface
   - Navigation menu with all departments
   - Hero section with welcome message
   - Shop by Department cards
   - Featured Products
   - Services section
   - Footer navigation

2. **Search Interaction**: Screenshot showing the search functionality with "hammer" typed in the search box

## Running the Application

Before running tests, start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173

## CI/CD Integration

The Playwright configuration is set up for CI environments:
- Retry failed tests 2 times on CI
- Run tests sequentially on CI
- Fail the build if `test.only` is accidentally left in code

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
