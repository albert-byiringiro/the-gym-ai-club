# Session 6: Prompt Anatomy and Basic Challenges

## AI Club - The Gym | May 14, 2025

---

## Session Overview (60 minutes)
- **10 min:** Quick wins and challenges from previous week
- **20 min:** Hands-on demonstration and explanation
- **25 min:** Workshop/Practice time
- **5 min:** Assignment and next week preview

---

## Slide 1: Quick Wins & Challenges Check-in (10 min)
### Interactive Discussion
**"Let's hear from you - what's working and what's frustrating?"**

#### Common Wins 🎉
- Fast code generation for simple functions
- Quick debugging assistance with Copilot
- Documentation help and comments

#### Common Challenges 😤
- Inconsistent output quality
- Too generic solutions that need heavy modification
- AI doesn't understand project context
- Spending more time fixing AI code than writing it yourself

**Activity:** Go around the room - everyone shares one AI interaction from this week (good or bad)

---

## Slide 2: The Hidden Cost of Bad Prompts
### Reality Check
**Most developers waste 60% of their AI interactions due to poor prompting**

#### ❌ What We Usually Do
```
"Create a login component"
```
**Result:** Generic, no validation, missing types, doesn't match our design system

#### ✅ What We Should Do
```
You are a senior React developer working with React 19, TypeScript, and TailwindCSS 4.

Create a login component for our dashboard app with:
- Email and password fields with proper validation
- Loading states during authentication
- Error handling for failed login attempts
- Responsive design using TailwindCSS 4
- TypeScript interfaces for props and form data
- Accessibility features (ARIA labels, keyboard navigation)

Follow our design system: use blue-600 for primary actions, rounded-lg borders, and shadow-sm for form elements.

Return the component with proper JSDoc comments and a usage example.
```

**The difference:** 5 minutes of thoughtful prompting saves 30 minutes of modifications

---

## Slide 3: Anatomy of a Perfect Prompt
### The 6 Essential Components

```
[ROLE] You are a senior React developer with TypeScript expertise

[CONTEXT] Working on a e-commerce dashboard using React 19 + Vite + TailwindCSS 4

[TASK] Create a product card component that displays product info and handles cart actions

[FORMAT] TypeScript component with JSDoc, responsive design, proper prop types

[CONSTRAINTS] Must be accessible, handle loading states, follow our design system

[EXAMPLES] 
Input: { name: "MacBook Pro", price: 1299, image: "/mac.jpg", inStock: true }
Output: Card with image, title, price, add-to-cart button with loading state
```

**The Formula:** Context + Task + Format + Constraints + Examples = Predictable Excellence

---

## Slide 4: Live Demo - Transformation in Action (15 min)
### 🎯 Challenge: Create a REST API data fetching hook

**We'll transform this together, live!**

#### Before: Vague Request
```
"Create a hook to fetch data from an API"
```

#### After: Let's Build This Together!
**Follow along as we apply the 6-component framework:**

1. **ROLE:** What expertise do we need?
2. **CONTEXT:** What's our tech stack and project needs?
3. **TASK:** What specific functionality?
4. **FORMAT:** How should the code be structured?
5. **CONSTRAINTS:** What requirements must we meet?
6. **EXAMPLES:** What inputs/outputs do we expect?

**Live Demo Project:** Create `useApiData` hook for product fetching
- We'll start with a bad prompt
- Transform it using our framework
- Test it with Claude/Copilot
- Compare the results

---

## Slide 5: The 6 Essential Components Deep Dive

### 1. Role & Expertise
```
"You are a senior React developer with 5+ years TypeScript experience"
"You are a Node.js backend specialist familiar with microservices"
"You are a frontend architect who prioritizes performance and accessibility"
```

### 2. Context & Background
```
"Working on a React 19 + TypeScript + Vite project"
"Using TailwindCSS 4 for styling with a custom design system"
"Building components for a dashboard that handles 10k+ users"
"Integration with REST APIs and real-time WebSocket connections"
```

### 3. Specific Task
```
❌ "Create a form"
✅ "Create a user registration form with email verification flow"

❌ "Fix this component"  
✅ "Optimize this React component to prevent unnecessary re-renders when props change"
```

### 4. Output Format
```
"Return TypeScript component with JSDoc comments"
"Include unit tests using Vitest and React Testing Library"
"Provide both the component and usage examples"
"Structure as: interface, component, export, and example usage"
```

### 5. Constraints & Requirements
```
"Must be mobile-responsive and accessible (WCAG 2.1 AA)"
"Handle loading, error, and success states"
"Use React 19 features like useActionState for form handling"
"Follow our ESLint config and Prettier formatting"
"Bundle size should be under 5KB gzipped"
```

### 6. Examples & Patterns
```
"Input data structure: { id: string, name: string, email: string, role: 'admin' | 'user' }"
"Expected output: Table with sorting, filtering, and pagination"
"Follow this existing pattern: [show similar component]"
```

---

## Slide 6: Context is King 👑

### Technical Context Template
```
Tech Stack:
- React 19 with TypeScript 5.4
- Vite 5.2 for build tooling  
- TailwindCSS 4 for styling
- Zustand for state management
- React Query for server state
- Vitest + Testing Library for tests
```

### Business Context Template  
```
Project: E-commerce admin dashboard
Users: Internal staff managing 10k+ products
Performance: Must load in <2 seconds
Accessibility: WCAG 2.1 AA compliance required
Browser Support: Modern browsers (Chrome 100+, Firefox 100+)
```

**Pro Tip:** Create a context template for your team and reuse it!

---

## Slide 7: Workshop Time - Prompt Dissection (25 min)

### 🎯 Hands-On Activity: Transform Your Real Prompts

#### Part 1: Individual Work (15 min)
**Pick one of these scenarios (or use your own real example):**

1. **Component Creation Challenge**
   - Bad prompt: "Create a modal component"
   - Your task: Apply the 6-component framework
   - Context: React 19 + TypeScript dashboard app

2. **API Integration Challenge**  
   - Bad prompt: "Help me connect to an API"
   - Your task: Create structured prompt for data fetching
   - Context: Product management system

3. **Bug Fixing Challenge**
   - Bad prompt: "Fix this React component error"
   - Your task: Structure a debugging prompt
   - Context: Performance issue with re-renders

**Instructions:**
1. Write your improved prompt using all 6 components
2. Test it with your preferred AI tool (Claude, Copilot, ChatGPT)
3. Document the before/after results

#### Part 2: Share & Learn (10 min)
- **Partner up** and share your transformations
- **Compare results** - which improvements had the biggest impact?
- **Identify patterns** - what components made the most difference?

---

## Slide 8: 5 High-Impact Prompt Patterns for Developers

### 1. Component Generation Pattern
```
You are a [ROLE: senior React developer].

Create a [COMPONENT TYPE] component for [PROJECT CONTEXT] that:
- [SPECIFIC FUNCTIONALITY]
- [DESIGN REQUIREMENTS] 
- [TECHNICAL CONSTRAINTS]
- [ACCESSIBILITY NEEDS]

Use [TECH STACK] and follow [CODING STANDARDS].
Include [OUTPUT FORMAT] and [TESTING REQUIREMENTS].

Example usage: [SHOW EXPECTED USAGE]
```

### 2. Debugging Pattern
```
You are a [ROLE: TypeScript expert] debugging a React 19 application.

Debug this component that [SPECIFIC PROBLEM]:
[CODE BLOCK]

Context:
- [ENVIRONMENT/SETUP]
- [EXPECTED BEHAVIOR] 
- [ACTUAL BEHAVIOR]
- [ERROR MESSAGES]

Provide:
1. Root cause analysis
2. Step-by-step fix
3. Prevention strategies
4. Improved code with comments
```

### 3. Code Review Pattern
```
You are a [ROLE: senior developer] reviewing React/TypeScript code.

Review this [COMPONENT TYPE] for:
- Performance optimizations
- TypeScript best practices  
- Accessibility compliance
- Security vulnerabilities
- Code maintainability

Code:
[CODE BLOCK]

Provide:
1. Issues found with severity levels
2. Specific improvement suggestions
3. Refactored code examples
4. Best practice explanations
```

### 4. Architecture Pattern
```
You are a [ROLE: frontend architect] designing [SYSTEM TYPE].

Design a solution for [REQUIREMENTS] considering:
- [TECHNICAL CONSTRAINTS]
- [SCALE REQUIREMENTS]
- [PERFORMANCE NEEDS]
- [MAINTENANCE CONCERNS]

Tech stack: [SPECIFIC TECHNOLOGIES]

Provide:
1. High-level architecture diagram
2. Component breakdown
3. Data flow patterns
4. Implementation roadmap
```

### 5. Testing Pattern
```
You are a [ROLE: testing specialist] using Vitest and React Testing Library.

Create comprehensive tests for this [COMPONENT TYPE]:
[CODE BLOCK]

Test scenarios:
- [HAPPY PATH SCENARIOS]
- [ERROR CONDITIONS]
- [EDGE CASES]
- [USER INTERACTIONS]

Include:
1. Unit tests for component logic
2. Integration tests for user flows
3. Accessibility tests
4. Performance tests if applicable
```

---

## Slide 9: Real-World Success Stories

### Database Query Hook Optimization
**Challenge:** Custom hook causing infinite re-renders
```
You are a React performance expert specializing in custom hooks.

Optimize this useProductData hook that's causing infinite re-renders:
[HOOK CODE]

Requirements:
- Eliminate unnecessary API calls
- Implement proper dependency arrays
- Add caching for repeated requests
- Handle race conditions
- Use React 19 best practices

Current performance: 15+ API calls per page load
Target: 1 API call with proper caching
```
**Result:** Reduced API calls by 93% and eliminated re-render issues

### Component Security Review
**Challenge:** User input component with potential XSS vulnerabilities
```
You are a security-focused React developer.

Review this user-generated content component for security vulnerabilities:
[COMPONENT CODE]

Focus on:
- XSS prevention
- Input sanitization  
- Safe HTML rendering
- CSRF protection
- Content Security Policy compliance

We're using DOMPurify and our CSP headers are [CSP CONFIG].
Provide secure refactored component with explanations.
```
**Result:** Identified and fixed 4 security vulnerabilities before production

---

## Slide 10: Common Prompt Mistakes to Avoid

### ❌ The 5 Deadly Prompt Mistakes

1. **Being Too Vague**
   - Bad: "Make this component better"
   - Good: "Optimize this component for performance by memoizing expensive calculations and reducing re-renders"

2. **Missing Context**
   - Bad: "Fix this React hook"  
   - Good: "Fix this React 19 hook that's causing memory leaks in our dashboard app"

3. **Wrong Expectations**
   - Bad: "Build me a complete e-commerce app"
   - Good: "Create a product listing component with pagination and filtering"

4. **Ignoring Constraints**
   - Bad: "Create a form component"
   - Good: "Create a form component following our design system, accessible, with proper TypeScript types"

5. **No Examples**
   - Bad: "Handle user data"
   - Good: "Handle user data like: `{id: 1, name: 'John', email: 'john@example.com', role: 'admin'}`"

---

## Slide 11: This Week's Mission 🎯

### Build Your Personal Prompt Library

Create and test **10 prompt templates** for your daily development tasks:

#### Required Templates:
1. **Component Generation** (2 templates)
   - Basic component with props
   - Complex component with state management

2. **Debugging & Optimization** (2 templates)  
   - Performance debugging
   - Runtime error debugging

3. **Code Review** (2 templates)
   - Security-focused review
   - Performance-focused review

4. **API Integration** (2 templates)
   - REST API hook creation
   - Error handling and loading states

5. **Testing** (2 templates)
   - Unit test generation
   - Integration test scenarios

#### Success Criteria:
- **Test each template 3+ times** this week
- **Document what works** and what needs improvement  
- **Rate each result:** Quality (1-10), Relevance (1-10), Time Saved (minutes)
- **Share your best template** in the AI Club repo

---

## Slide 12: Tools & Resources

### Recommended AI Tools
- **Claude (Anthropic):** Best for complex reasoning and architecture
- **GitHub Copilot:** Excellent IDE integration and context awareness  
- **Cursor:** AI-first coding environment
- **ChatGPT:** Good general-purpose coding assistance

### This Week's Resources
- **Prompt Template Spreadsheet:** Track your 10 templates
- **Testing Framework:** Rate and improve your prompts
- **AI Club Repo:** Share solutions and learn from others
- **Slack Channel:** `#ai-club` for questions and discussions

### Session Materials
All materials will be in: `session-4-prompt-engineering-for-developers/`
- Presentation slides and notes
- Exercise templates and examples  
- Solution examples for reference
- Prompt library template

---

## Slide 13: Assignment & Next Week Preview

### This Week's Assignment
1. **Fork the AI Club repo** and create your branch: `session-4-prompt-engineering-YOUR-NAME`
2. **Complete the exercises** in the `/exercises` folder
3. **Build your 10-template prompt library** using the provided template
4. **Test each template 3+ times** and document results
5. **Submit a PR** with your solutions and learnings

### Exercise Preview (in repo):
- **Exercise 1:** Component prompt transformation challenge
- **Exercise 2:** Debug prompt creation for common React issues  
- **Exercise 3:** Create specialized prompts for your current project
- **Exercise 4:** A/B test different prompt variations

### Next Week: Advanced Prompting Techniques
- Few-shot learning and examples
- Chain-of-thought prompting for complex problems
- System prompts and persistent context
- Temperature and parameter tuning for different use cases

**Come Prepared With:**
- Your best prompt from this week's homework
- One challenging coding problem you want to solve with AI
- Questions about optimizing your prompt results

---

## Questions & Discussion

### Key Takeaways
1. **Structure matters:** The 6-component framework transforms generic requests into precise instructions
2. **Context is king:** Technical and business context dramatically improves output quality  
3. **Practice builds mastery:** Your prompt library will be your secret weapon
4. **Measure and improve:** Track what works and iterate on your templates

### Discussion Topics
- What aspects of prompting do you want to explore more?
- Which of the 6 components do you think will have the biggest impact?
- What specific challenges from your current projects should we address?

**Thank you! Let's build amazing things with AI! 🚀**