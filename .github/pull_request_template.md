## Description
Brief description of the changes in this PR.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Security improvement
- [ ] Performance improvement
- [ ] Refactoring
- [ ] Test update

## Security Checklist
**All items must be checked before approval:**

### Code Security
- [ ] No hardcoded secrets, API keys, passwords, or tokens
- [ ] All user inputs are properly validated and sanitized
- [ ] SQL queries use parameterized statements (no SQL injection risks)
- [ ] XSS prevention measures implemented where applicable
- [ ] CSRF protection implemented for state-changing operations
- [ ] Proper authentication and authorization checks
- [ ] Error messages don't leak sensitive information
- [ ] Logging doesn't include sensitive data (passwords, tokens, PII)

### Dependencies & Third-party Code
- [ ] All new dependencies reviewed for security issues
- [ ] Dependencies are from trusted sources
- [ ] No known vulnerabilities in dependencies (check automated scans)
- [ ] Minimal dependencies principle followed

### Data Protection
- [ ] Sensitive data encrypted at rest and in transit
- [ ] Proper data validation implemented
- [ ] Privacy regulations compliance considered (GDPR, etc.)
- [ ] Data retention policies followed

### Infrastructure & Configuration
- [ ] Secure configuration practices followed
- [ ] No sensitive configuration in version control
- [ ] Environment variables used for sensitive configuration
- [ ] Proper error handling without information disclosure

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Security tests included where applicable
- [ ] All existing tests pass
- [ ] Manual testing completed

## Code Quality
- [ ] Code follows project style guidelines
- [ ] Code is well-documented
- [ ] No code duplication
- [ ] Functions/methods have single responsibility
- [ ] Code is readable and maintainable

## Performance
- [ ] No performance regressions introduced
- [ ] Efficient algorithms and data structures used
- [ ] Database queries optimized if applicable
- [ ] Caching implemented where appropriate

## Documentation
- [ ] README updated if needed
- [ ] API documentation updated if applicable
- [ ] Security documentation updated if needed
- [ ] Deployment documentation updated if needed

## Deployment
- [ ] Changes are backward compatible (or migration plan provided)
- [ ] Environment variables documented
- [ ] Database migrations tested
- [ ] Rollback plan considered

## Review Requirements
- [ ] Code reviewed by at least one team member
- [ ] Security review completed for security-sensitive changes
- [ ] Architecture review completed for major changes
- [ ] All automated checks pass (CI/CD, security scans, tests)

## Additional Notes
Add any additional information that reviewers should know about this PR.

## Breaking Changes
If this PR introduces breaking changes, describe them here and provide migration instructions.

## Screenshots/Videos
Include screenshots or videos if this PR changes the UI or user experience.

---

**Note**: This PR cannot be merged until all required checklist items are completed and all automated security checks pass.