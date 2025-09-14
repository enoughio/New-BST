# Security Policy

## Reporting Security Vulnerabilities

We take security seriously. If you discover a security vulnerability, please report it to us responsibly.

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. Email security concerns to: [security@bharatstorytellers.com] or repository maintainers
3. Include detailed information about the vulnerability
4. Allow reasonable time for the issue to be addressed before public disclosure

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes            |
| < Latest| ❌ No             |

## Security Guidelines for Contributors

### Code Review Requirements

All code changes must undergo security review:

1. **Automated Security Scanning**: All PRs must pass automated security checks
2. **Manual Security Review**: Security-sensitive changes require manual review
3. **Dependency Scanning**: All dependencies must be scanned for known vulnerabilities
4. **Secrets Detection**: No secrets, API keys, or credentials in code

### Security Best Practices

#### Authentication & Authorization
- Use strong authentication mechanisms
- Implement proper session management
- Follow principle of least privilege
- Validate all user inputs

#### Data Protection
- Encrypt sensitive data at rest and in transit
- Use HTTPS for all communications
- Implement proper data validation and sanitization
- Follow GDPR and privacy regulations

#### Input Validation
- Validate all user inputs server-side
- Use parameterized queries to prevent SQL injection
- Sanitize HTML content to prevent XSS
- Implement proper CSRF protection

#### Dependencies & Third-party Code
- Keep all dependencies up to date
- Use dependency scanning tools
- Review third-party code before integration
- Monitor for security advisories

#### Infrastructure Security
- Use secure deployment practices
- Implement proper logging and monitoring
- Regular security updates
- Secure configuration management

## Security Review Checklist

Before approving any PR, ensure:

- [ ] No hardcoded secrets or credentials
- [ ] All user inputs are properly validated
- [ ] SQL queries use parameterized statements
- [ ] XSS prevention measures are in place
- [ ] CSRF protection is implemented where needed
- [ ] Authentication and authorization are properly implemented
- [ ] Error messages don't leak sensitive information
- [ ] Logging doesn't include sensitive data
- [ ] Dependencies are up to date and secure
- [ ] Code follows secure coding guidelines

## Incident Response

In case of a security incident:

1. **Immediate Response**: Assess and contain the threat
2. **Investigation**: Determine scope and impact
3. **Communication**: Notify affected users appropriately
4. **Resolution**: Implement fixes and verify effectiveness
5. **Post-Incident**: Review and improve security measures

## Security Tools and Automation

This repository uses automated security tools:

- **CodeQL**: Static code analysis for security vulnerabilities
- **Dependabot**: Automated dependency updates
- **Secret Scanning**: Detection of committed secrets
- **SAST**: Static Application Security Testing
- **Dependency Scanning**: Known vulnerability detection

## Contact

For security-related questions or concerns, please contact the security team or repository maintainers.