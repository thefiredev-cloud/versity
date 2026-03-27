# Security Policy

## Supported Versions
| Version | Supported |
|---------|-----------|
| 1.x     | Yes       |
| < 1.0   | No        |

## Reporting a Vulnerability
Do not open a public GitHub issue for security vulnerabilities.

Email: security@thefiredev.com

We respond within 48 hours and provide a fix timeline within 7 days.
90-day coordinated disclosure window. Researchers credited in release notes unless anonymity requested.

## Data Handling
Versity processes sensitive documents (contracts, financials, HR materials). We take data security seriously:
- All documents encrypted at rest (AES-256)
- TLS 1.3 in transit
- Tenant isolation enforced at the database layer
- No document content used for model training without explicit opt-in
