# Contributing to Job Listing Portal

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Run tests (if available)
pnpm test

# Build for production
pnpm build
```

## Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use strict mode

### React
- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Follow React best practices

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design
- Test in both light and dark modes

### Code Quality
- Write clean, readable code
- Add comments for complex logic
- Follow the existing code structure
- Use meaningful variable and function names

## Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(filter): add salary range filter
fix(export): resolve PDF generation issue
docs(readme): update installation instructions
```

## Pull Request Guidelines

1. **Description**: Provide a clear description of what your PR does
2. **Testing**: Describe how you tested your changes
3. **Screenshots**: Include screenshots for UI changes
4. **Breaking Changes**: Clearly mark any breaking changes
5. **Documentation**: Update relevant documentation

## Code Review Process

1. All PRs require at least one review
2. Address all review comments
3. Keep PRs focused and small
4. Rebase on main before merging
5. Squash commits if requested

## Bug Reports

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, Node version
6. **Screenshots**: If applicable

## Feature Requests

When requesting features, include:

1. **Use Case**: Why is this feature needed?
2. **Proposed Solution**: How should it work?
3. **Alternatives**: Other solutions considered
4. **Additional Context**: Any other relevant information

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
