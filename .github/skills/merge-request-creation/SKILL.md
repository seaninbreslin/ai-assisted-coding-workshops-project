---
name: merge-request-creation
description: "Use this skill when the user asks to create an MR, open an MR, create a PR, or open a PR. It helps prepare and submit a single pull request by pushing the current branch, creating one focused commit, and drafting a clear PR title and a fuller description. The workflow should continue autonomously without waiting for another prompt unless the user explicitly asks to stop."
---

# Create a Merge Request

Use this workflow when the user wants to open a single pull request for the current work.

## Goal

Create one PR that includes:
- a concise, clear commit message
- a short, readable PR title that states what changed
- a richer PR description that explains the change in more depth

## Workflow

1. Review the current git status and branch name.
2. Proceed through the workflow autonomously without waiting for another prompt unless the user explicitly asks to stop.
3. If there are local changes, stage the relevant files and create one focused commit.
4. Use a short, clear commit message in imperative mood and conventional style when appropriate, for example:
   - `feat: add task filters`
   - `fix: correct todo persistence`
   - `chore: update extension settings`
5. Keep the commit message concise and specific; avoid vague wording.
6. Push the branch to the remote if it is not already published.
7. Open one pull request for that branch.
8. Use a short PR title that is easy to read and clearly states what changed, such as `Add task filters` or `Fix todo persistence`.
9. Write a PR description that is more detailed than the title and covers:
   - a summary of the change
   - the main updates included
   - why the change matters
   - any validation or testing done

## PR Description Template

Use this structure when drafting the PR body:

## Summary
Briefly describe the problem solved or the feature added.

## What changed
- bullet list of the main changes
- mention the most important files or behaviors affected

## Why
Explain the reason for the change and the outcome expected.

## Validation
- note any tests, checks, or manual verification performed

## Guidance

- Prefer one focused commit rather than multiple unrelated commits.
- Keep the PR title concise, readable, and specific; it should be a short string that states what changed.
- Make the PR description more detailed than the title so reviewers understand the intent and scope quickly.
- If the branch name is unclear, derive the title from the implemented change rather than the raw branch text.
