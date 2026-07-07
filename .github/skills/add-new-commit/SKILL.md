---
name: add-new-commit
description: "Use this skill when the user says to push changes, push up the code, or add this commit. It stages the relevant changes, creates a fresh commit with its own concise message, and pushes the current branch to the remote without waiting for confirmation."
---

# Add a New Commit

Use this workflow when the user wants the current work committed and pushed as a new, separate commit.

## Goal

Prepare and publish the current work by:
- staging the changed files
- creating one new commit with its own concise message that explains the change clearly
- pushing the current branch to its remote branch without asking the user to click continue or confirm each step

## Workflow

1. Review the current git status and branch name.
2. Check for changed, staged, and untracked files.
3. Stage all relevant changes so they are ready to commit.
4. If there are no changes to commit, report that clearly and stop.
5. Create a single concise commit message in imperative mood that explains the main change, for example:
   - `feat: add task filters`
   - `fix: correct todo persistence`
   - `chore: update extension settings`
6. Create a new, separate commit from the staged changes immediately using that message. Do not amend, squash, or replace an existing commit.
7. Push the current branch to the remote branch it is tracking, or create the upstream branch if needed.
8. Proceed autonomously and do not pause for manual confirmation unless the push fails and requires user action.
9. If the push is rejected, report the error and the required next step clearly.

## Commit Message Guidance

- Keep the message short, specific, and descriptive.
- Prefer a conventional style when it fits the change.
- Avoid vague wording like "update files" or "misc changes".
- Make the message describe the actual outcome of the work.

## Important Behavior

- Create a fresh, separate commit every time this skill is used; never amend an existing commit.
- Use a new commit message for that commit rather than reusing or editing a previous message.
- Do not rely on the user to click continue or approve the next step.
- Handle the commit and push flow directly.
- If there is a conflict or push issue, explain it briefly and provide the next action needed.
