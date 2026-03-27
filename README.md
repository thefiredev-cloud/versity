<div align="center">

# Versity

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/versity/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/versity/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/versity?style=for-the-badge&logo=codecov)](https://codecov.io/gh/thefiredev/versity)
[![Version](https://img.shields.io/npm/v/@thefiredev/versity?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@thefiredev/versity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/discord/1234567890?style=for-the-badge&logo=discord&label=Discord)](https://discord.gg/thefiredev)

**Every junior hire. One subscription.**

[Landing Page](https://thefiredev.com/versity) · [Documentation](https://docs.thefiredev.com/versity) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/versity/issues)

</div>

---

## What is Versity?

Versity is The Infinite Intern. One subscription gives you instant access to every white-collar entry-level role on demand: junior lawyer, accountant, financial analyst, marketer, recruiter, graphic designer, and more. Swap roles in seconds. No hiring, no onboarding, no benefits, no drama.

**Every junior hire. One subscription.**

---

## Key Value Props

| | Role | What It Does |
|---|---|---|
| ⚖️ | **Junior Lawyer** | Contract review, legal research, NDA drafting, compliance checklists |
| 📊 | **Accountant** | Bookkeeping, expense categorization, financial statements, tax prep support |
| 📈 | **Financial Analyst** | Modeling, valuation, market research, pitch deck financials |
| 📣 | **Marketer** | Copy, campaigns, SEO briefs, social content, email sequences |
| 🔍 | **Recruiter** | Job descriptions, candidate screening, interview questions, offer letters |
| 🎨 | **Designer** | Brand briefs, design specs, UI copy, asset direction |
| 📋 | **Operations Analyst** | SOPs, process documentation, workflow audits |
| 🤝 | **Executive Assistant** | Scheduling, research, deck prep, correspondence |

---

## Features

### 🔄 Instant Role Switching
- Switch between any role in one command or API call
- No context loss — Versity remembers your company, projects, and preferences
- Role-specific tool access (legal databases, financial calculators, design tools)
- Custom role creation for your specific needs

### 🧠 Company Context Engine
- Upload your company docs once — Versity knows your business
- Ingests: contracts, financials, brand guidelines, SOPs, org charts
- Role-appropriate context filtering (legal sees contracts, finance sees models)
- Persistent memory across sessions and roles

### ⚖️ Legal Module
- Contract review with risk flagging
- NDA, MSA, SOW templates — customized to your business
- Legal research via case law databases
- Regulatory compliance checklists by industry
- *Not a law firm. Review by licensed counsel recommended for material matters.*

### 📊 Finance Module
- Automated bookkeeping categorization
- Financial model templates (3-statement, DCF, cap table)
- Monthly close support
- Investor update drafts
- Budget vs. actual variance analysis

### 📣 Marketing Module
- Long-form content: blog posts, whitepapers, case studies
- Short-form: social posts, email sequences, ad copy
- SEO keyword research and brief generation
- Campaign planning and channel strategy

### 🔍 Recruiting Module
- Job description drafting (inclusive language, role clarity)
- Resume screening criteria and scoring rubrics
- Interview question banks by role and level
- Offer letter templates
- Candidate outreach sequences

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                           Versity                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   User Request           Role Router          Role Modules        │
│   ┌──────────────┐      ┌─────────────┐      ┌──────────────┐  │
│   │ Chat / API   │─────▶│   Intent    │─────▶│  ⚖️ Legal    │  │
│   │ Slack Bot    │      │   Classifier│      │  📊 Finance  │  │
│   │ Web App      │      │   & Router  │      │  📣 Marketing│  │
│   └──────────────┘      └─────────────┘      │  🔍 Recruit  │  │
│                                               │  🎨 Design   │  │
│   Company Context                             │  📋 Ops      │  │
│   ┌──────────────┐                            └──────┬───────┘  │
│   │ Docs / Files │                                   │           │
│   │ Financials   │─────────────────────────────┐    │           │
│   │ Contracts    │     Context Engine           │    │           │
│   │ Brand Guide  │   ┌──────────────────┐      │    │           │
│   └──────────────┘   │  Vector Store    │◀─────┘    │           │
│                       │  (RAG Layer)     │           │           │
│                       └────────┬─────────┘           │           │
│                                │                      │           │
│                                └──────────────────────┘           │
│                                         │                          │
│                              ┌──────────▼──────────┐             │
│                              │   LLM Execution     │             │
│                              │   (role-prompted)   │             │
│                              └──────────┬──────────┘             │
│                                         │                          │
│              ┌──────────────────────────┴──────────────────┐     │
│              ▼                          ▼                   ▼     │
│   ┌────────────────┐        ┌────────────────┐   ┌──────────────┐│
│   │  Output        │        │  Integrations  │   │  Memory /    ││
│   │  Formatter     │        │  (Slack, Drive,│   │  Audit Log   ││
│   │                │        │   Notion, etc) │   │              ││
│   └────────────────┘        └────────────────┘   └──────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Pinecone](https://img.shields.io/badge/Pinecone-Vector_DB-000000?style=flat-square)](https://www.pinecone.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

---

## Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- OpenAI API key
- Pinecone account (vector storage)

### Quick Start

```bash
# Clone
git clone https://github.com/thefiredev/versity.git
cd versity

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env — add OpenAI key, Pinecone key, DB creds

# Start infrastructure
docker-compose up -d

# Migrate database
npm run db:migrate

# Start dev server
npm run dev
```

API available at `http://localhost:3003`. Web app at `http://localhost:3004`.

### Make Your First Request

```bash
# Ask for legal help
curl -X POST http://localhost:3003/api/v1/request \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "role": "lawyer",
    "task": "Review this NDA and flag any unusual clauses",
    "attachments": [{"type": "document", "url": "https://..."}]
  }'

# Switch to finance role
curl -X POST http://localhost:3003/api/v1/request \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "role": "accountant",
    "task": "Categorize last month expenses and flag anything over $500 that needs approval"
  }'
```

---

## Available Roles

| Role | Key Capabilities | Tools |
|------|-----------------|-------|
| `lawyer` | Contract review, legal research, compliance | Westlaw API, document parser |
| `accountant` | Bookkeeping, financial statements, tax prep | QuickBooks API, spreadsheet engine |
| `analyst` | Financial modeling, valuation, market research | Data APIs, model templates |
| `marketer` | Content, campaigns, SEO, social | SEO tools, content planner |
| `recruiter` | JDs, screening, interviews, offers | LinkedIn API, ATS integrations |
| `designer` | Brand specs, design briefs, asset direction | Figma API, brand guidelines |
| `ops` | SOPs, process docs, workflow audits | Document generator |
| `ea` | Scheduling, research, correspondence | Calendar API, email |

---

## API Reference

### Authentication

```
Authorization: Bearer vs_live_xxxxxxxxxxxxxxxxxxxxxxxx
```

### Endpoints

#### `POST /api/v1/request`
Submit a task to any role.

**Request body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `role` | string | Yes | Role to use (`lawyer`, `accountant`, `analyst`, etc.) |
| `task` | string | Yes | Natural language task description |
| `attachments` | array | No | Files or URLs to include |
| `context` | object | No | Additional context override |
| `stream` | boolean | No | Stream response (default: false) |

#### `GET /api/v1/roles`
List available roles with capabilities.

#### `POST /api/v1/context`
Upload company context documents.

#### `GET /api/v1/history`
Get request history with role breakdown.

#### `DELETE /api/v1/context`
Clear company context.

Full docs at [docs.thefiredev.com/versity/api](https://docs.thefiredev.com/versity/api).

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Security

See [SECURITY.md](./SECURITY.md) or email security@thefiredev.com.

---

## Legal Disclaimer

Versity is an AI assistant tool. It is **not a law firm**, **not a licensed accounting firm**, and **not a registered financial advisor**. Outputs should be reviewed by licensed professionals for any material legal, financial, or compliance matters.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

Built by **[The Fire Dev LLC](https://thefiredev.com)** — The workforce of the future, today.

[thefiredev.com](https://thefiredev.com) · [Discord](https://discord.gg/thefiredev) · [Twitter/X](https://x.com/thefiredev)

</div>
