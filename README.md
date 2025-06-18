# The Gym - AI Club

Repository for The Gym's weekly AI Club sessions. Each folder contains materials for a specific session, including presentations, exercises, and solutions.

## Structure

- Each session has its own folder (`session-X-topic-name/`)
- Inside each session folder:
  - `README.md` with session overview
  - `challenges/` containing hands-on activities
  - `exercises/` containing individual submissions of hands-on activities
  - `solutions/` with reference implementations
  - `presentation/` with slides or notes

## Sessions

| Session | Topic | Date | Materials |
|---------|-------|------|-----------|
| 1 | Understanding AI Coding Assistants | April 24, 2025 | [Link](./session-1-ai-coding-assistants/) |
| 2 | Mastering VSCode Copilot Chat Modes | April 30, 2025 | [Link](./session-2-mastering-copilot-chat) |
| 3 | Mastering VSCode Copilot Chat Modes - Practice | May 07, 2025 | [Link](./session-3-mastering-copilot-chat-practice) |
| 4 | Prompt Engineering for Software Developers | May 14, 2025 | [Link](./session-4-prompt-engineering-for-developers/README.md) |
| 5 | Debugging code with AI assistance | May 28, 2025 | [Link](./session-5-debugging-with-ai/challenges/README.md) |
| 6 | Prompt Anatomy & Best Practices | June 18, 2025 | [Link](./session-6-prompt-anatomy/README.md) |

## Setup Instructions

1. Clone this repository
```bash
   git clone https://github.com/thegym/the-gym-ai-club.git
   cd the-gym-ai-club
   git checkout sessions
```

2. Create a feature-branch with this format `session-x-topic-your-name`
```bash
   git checkout -b session-x-sessionName-your-name
```

3. Navigate to the current session
    
    ```bash
    cd session-x-[session-name]
    ```
    
4. Create a folder with your name inside exercises folder of the with session: `session-6-prompt-anatomy/exercises/[your-name]/`
5. Follow the session-specific README for detailed instructions
6. Create a PR titled: `SESSION x: [YOUR NAME] - [session-name] Solutions`. Merge target: `sessions` branch

## Contributing

If you'd like to contribute exercises or improvements:

1. Fork this repository
2. Create a feature branch
3. Submit a pull request with your changes

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Setup Guide](https://code.visualstudio.com/docs/setup/setup-overview)
- [Prompt Engineering Cheatsheet](https://www.superhuman.ai/c/prompts-cheat-sheet)
