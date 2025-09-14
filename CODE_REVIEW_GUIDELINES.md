# Code Review Guidelines

## Overview

This document outlines the code review process and standards for the Bharat Storytellers website project. All code changes must undergo thorough review with special attention to security, quality, and best practices.

## Review Process

### 1. Pre-Review Checklist (Author)

Before submitting a PR for review:

- [ ] Code is self-tested and working
- [ ] All automated tests pass
- [ ] Code follows project style guidelines
- [ ] Security checklist completed
- [ ] Documentation updated if needed
- [ ] PR template filled out completely

### 2. Review Requirements

- **Mandatory**: At least one code review approval required
- **Security-sensitive changes**: Additional security team review required
- **Major changes**: Architecture review required
- **Breaking changes**: Team lead approval required

### 3. Review Timeline

- **Standard PRs**: 48 hours for initial review
- **Urgent/Hotfix PRs**: Same day review
- **Security fixes**: Immediate review (within 4 hours)

## Security Review Priorities

### High Priority (Blocking)

These issues must be resolved before merge:

1. **Secrets and Credentials**
   - No hardcoded passwords, API keys, tokens
   - No credentials in configuration files
   - Proper environment variable usage

2. **Input Validation**
   - All user inputs validated server-side
   - SQL injection prevention (parameterized queries)
   - XSS prevention (input sanitization, output encoding)
   - Path traversal prevention

3. **Authentication & Authorization**
   - Proper authentication mechanisms
   - Authorization checks before sensitive operations
   - Session management security
   - Password security (hashing, complexity)

4. **Data Protection**
   - Sensitive data encryption
   - Secure data transmission (HTTPS)
   - Proper error handling (no information leakage)
   - Logging security (no sensitive data in logs)

### Medium Priority (Should Fix)

1. **Dependencies**
   - Up-to-date dependencies
   - Known vulnerability checks
   - Minimal dependency principle

2. **Configuration Security**
   - Secure defaults
   - Proper configuration management
   - Environment-specific configurations

3. **Error Handling**
   - Graceful error handling
   - No stack traces in production
   - Proper logging levels

### Low Priority (Nice to Have)

1. **Code Quality**
   - Clean code principles
   - Performance optimizations
   - Documentation improvements

## Code Quality Standards

### 1. Readability
- Clear variable and function names
- Appropriate comments for complex logic
- Consistent formatting
- Logical code organization

### 2. Maintainability
- Single responsibility principle
- DRY (Don't Repeat Yourself)
- Proper error handling
- Modular design

### 3. Performance
- Efficient algorithms
- Optimized database queries
- Proper caching strategies
- Resource management

### 4. Testing
- Unit tests for new functionality
- Integration tests for complex features
- Edge case coverage
- Test maintainability

## Review Comments Guidelines

### For Reviewers

#### Comment Types
- **Must Fix**: Critical issues that block merge
- **Should Fix**: Important improvements
- **Consider**: Suggestions for improvement
- **Question**: Seeking clarification
- **Nitpick**: Minor style or preference issues

#### Comment Format
```
**[Type]**: Description of issue
Suggested solution or alternative approach
```

#### Example Comments
```
**Must Fix**: This SQL query is vulnerable to injection attacks.
Use parameterized queries instead: `SELECT * FROM users WHERE id = ?`

**Should Fix**: This function is doing too many things.
Consider breaking it into smaller, focused functions.

**Consider**: Using a Map here might be more efficient than iterating through the array.

**Question**: Why are we using setTimeout here instead of the built-in async/await?
```

### For Authors

#### Responding to Comments
- Address all "Must Fix" comments before requesting re-review
- Respond to each comment (even if just "Done" or "Fixed")
- Explain decisions for "Consider" suggestions not implemented
- Ask for clarification if comment is unclear

#### Resolving Comments
- Only resolve comments after addressing them
- Leave explanation when resolving without implementing suggestion
- Re-request review after addressing all blocking comments

## Security-Specific Review Areas

### 1. Authentication Flow
- Login/logout mechanisms
- Password handling
- Session management
- Multi-factor authentication
- Account lockout policies

### 2. Authorization Logic
- Role-based access control
- Permission checks
- Resource ownership validation
- API endpoint protection

### 3. Data Handling
- Input validation and sanitization
- Output encoding
- Database interactions
- File upload security
- Data encryption

### 4. API Security
- Rate limiting
- CORS configuration
- Request validation
- Response security headers
- API authentication

### 5. Frontend Security
- XSS prevention
- CSRF protection
- Content Security Policy
- Secure cookie handling
- Client-side validation (never trust alone)

## Common Security Issues to Watch For

### 1. Input Validation Issues
```javascript
// ❌ Bad: No validation
app.post('/user', (req, res) => {
  const query = `SELECT * FROM users WHERE name = '${req.body.name}'`;
  // SQL injection vulnerability
});

// ✅ Good: Parameterized query
app.post('/user', (req, res) => {
  const query = 'SELECT * FROM users WHERE name = ?';
  db.query(query, [req.body.name]);
});
```

### 2. XSS Vulnerabilities
```javascript
// ❌ Bad: Direct HTML insertion
element.innerHTML = userInput;

// ✅ Good: Text content or escaped HTML
element.textContent = userInput;
// or use proper HTML escaping library
```

### 3. Authentication Issues
```javascript
// ❌ Bad: No authorization check
app.delete('/admin/user/:id', (req, res) => {
  deleteUser(req.params.id);
});

// ✅ Good: Proper authorization
app.delete('/admin/user/:id', requireAdmin, (req, res) => {
  deleteUser(req.params.id);
});
```

### 4. Secrets Exposure
```javascript
// ❌ Bad: Hardcoded secret
const apiKey = 'sk-1234567890abcdef';

// ✅ Good: Environment variable
const apiKey = process.env.API_KEY;
```

## Tools and Automation

### Automated Checks
- **CodeQL**: Static code analysis
- **Dependabot**: Dependency updates
- **Trivy**: Vulnerability scanning
- **Semgrep**: SAST scanning
- **TruffleHog**: Secret detection

### Manual Review Tools
- GitHub's security tab
- PR diff view
- Security checklist
- Threat modeling (for major features)

## Escalation Process

### When to Escalate
1. Security vulnerability discovered
2. Disagreement on security issue severity
3. Complex security implementation needed
4. Compliance requirement questions

### Escalation Contacts
1. **Security Team**: For security-related issues
2. **Tech Lead**: For architectural decisions
3. **DevOps Team**: For infrastructure security
4. **Compliance Officer**: For regulatory concerns

## Training and Resources

### Required Reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)
- Project-specific security documentation

### Regular Training
- Monthly security awareness sessions
- Code review best practices workshops
- Threat modeling training
- Security tool usage training

## Metrics and Improvement

### Track These Metrics
- Average time to review
- Security issues found in review
- Post-deployment security issues
- Review coverage percentage

### Continuous Improvement
- Monthly review process retrospectives
- Security incident post-mortems
- Tool effectiveness evaluation
- Process refinement based on feedback

---

**Remember**: Security is everyone's responsibility. When in doubt, always err on the side of caution and escalate security concerns.