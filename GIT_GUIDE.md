# Git Quick Reference for Job Portal Submission

## Initial Setup

```bash
# Initialize git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Job Listing Portal with full features"

# Create GitHub repository (via GitHub CLI or web interface)
# Then add remote
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main
```

## Recommended Commit History

Here's a suggested commit history for a professional submission:

```bash
# 1. Project setup
git add package.json vite.config.ts tsconfig.json
git commit -m "chore: initialize project with Vite, React, TypeScript, and Tailwind"

# 2. Type definitions
git add src/types/
git commit -m "feat: add TypeScript interfaces for Job and Filters"

# 3. API service
git add src/services/
git commit -m "feat: implement API service with caching for job data"

# 4. Utility functions
git add src/utils/
git commit -m "feat: add filter, sort, and export utility functions"

# 5. UI components
git add src/app/components/ui/
git commit -m "feat: integrate shadcn/ui component library"

# 6. Core components
git add src/app/components/JobCard.tsx src/app/components/JobSkeleton.tsx
git commit -m "feat: create JobCard and skeleton loading components"

# 7. Filter components
git add src/app/components/FilterPanel.tsx src/app/components/FilterSummary.tsx src/app/components/MobileFilterDrawer.tsx
git commit -m "feat: implement comprehensive filtering system with mobile support"

# 8. Sort and pagination
git add src/app/components/SortControl.tsx src/app/components/PaginationControls.tsx
git commit -m "feat: add sorting and pagination controls"

# 9. Infinite scroll
git add src/app/components/InfiniteScrollTrigger.tsx
git commit -m "feat: implement infinite scroll with toggle"

# 10. Export functionality
git add src/app/components/ExportButtons.tsx
git commit -m "feat: add CSV and PDF export functionality"

# 11. Dark mode
git add src/app/components/DarkModeToggle.tsx
git commit -m "feat: implement dark mode with localStorage persistence"

# 12. Scroll to top
git add src/app/components/ScrollToTop.tsx
git commit -m "feat: add scroll to top button for better UX"

# 13. Main app
git add src/app/App.tsx
git commit -m "feat: integrate all features in main App component"

# 14. Styles
git add src/styles/
git commit -m "style: configure Tailwind CSS theme and global styles"

# 15. Deployment configs
git add vercel.json netlify.toml .github/
git commit -m "chore: add deployment configurations for Vercel, Netlify, and GitHub Actions"

# 16. Documentation
git add README.md CONTRIBUTING.md LICENSE .gitignore
git commit -m "docs: add comprehensive documentation and contribution guidelines"

# Final push
git push -u origin main
```

## Quick Commands

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "your message here"

# Push to remote
git push

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Tag a release
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"
git push --tags
```

## Making the Repository Private

1. **Via GitHub Web**:
   - Go to repository Settings
   - Scroll to "Danger Zone"
   - Click "Change visibility"
   - Select "Private"

2. **Invite Collaborator**:
   - Go to Settings → Collaborators
   - Add: rishabh@windmark.co

## Pre-submission Checklist

- [ ] All code is committed
- [ ] README.md is complete with setup instructions
- [ ] Deployed URL is added to README
- [ ] Repository is set to private
- [ ] Collaborator (rishabh@windmark.co) is invited
- [ ] All features are tested and working
- [ ] Code is well-documented
- [ ] No console errors in production build
- [ ] Both light and dark modes work
- [ ] Responsive design tested on mobile, tablet, desktop

## Useful Git Aliases (Optional)

Add to `~/.gitconfig`:

```
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    ca = commit -a
    ps = push
    pl = pull
    lg = log --oneline --graph --decorate
```

Then use: `git st`, `git co`, etc.
