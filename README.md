# Sprint3_SDD

This repository uses [GitHub Spec Kit](https://github.com/github/spec-kit) for Specification-Driven Development (SDD).

## What is Spec-Driven Development?

Spec-Driven Development flips the traditional software development approach. Instead of writing code first and documentation second, SDD treats specifications as executable documents that directly guide AI agents to generate working implementations.

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

### Project Structure

- `.github/agents/` - Spec Kit agent definitions for GitHub Copilot
- `.github/prompts/` - Prompt templates for spec-driven commands
- `.specify/memory/` - Project constitution and memory
- `.specify/templates/` - Templates for specs, plans, tasks, and checklists
- `.specify/scripts/` - Helper scripts for automation
- `.vscode/settings.json` - VS Code settings for Spec Kit integration

## Learn More

- [Spec Kit GitHub Repository](https://github.com/github/spec-kit)
- [Spec Kit Documentation](https://github.github.com/spec-kit/)
- [Quickstart Guide](https://github.com/github/spec-kit/blob/main/docs/quickstart.md)