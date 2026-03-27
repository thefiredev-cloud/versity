# Contributing to Versity

## How to Contribute

### Reporting Bugs
Open a GitHub issue with clear reproduction steps.

### Feature Requests
Open a GitHub issue with the `enhancement` label. Describe the workflow/role use case.

### Pull Requests
1. Fork and create a branch: `feat/your-feature` or `fix/your-bug`
2. Add tests for new functionality
3. npm test and npm run lint must pass
4. Conventional commits: feat:, fix:, docs:, refactor:, test:
5. Open PR against main

### Development Setup
```
git clone https://github.com/thefiredev/versity.git
cd versity
npm install
cp .env.example .env
docker-compose up -d
npm run dev
```

### Adding a New Role
1. Create src/roles/your-role.ts implementing the Role interface
2. Add role config to src/core/role-registry.ts
3. Add system prompt to src/roles/prompts/your-role.md
4. Write unit tests in src/roles/__tests__/your-role.test.ts
5. Document capabilities in README

## Questions?
Discord or GitHub Discussions.
