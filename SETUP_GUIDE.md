# Environment Setup & Troubleshooting

This guide helps you set up the development environment and troubleshoot common issues.

## Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Check version: `node --version`

2. **pnpm** (recommended) or npm
   - Install pnpm: `npm install -g pnpm`
   - Check version: `pnpm --version`

3. **Git**
   - Download: https://git-scm.com/
   - Check version: `git --version`

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd job-listing-portal
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Run Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

The application should now be running at `http://localhost:5173`

### 4. Build for Production

```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

### 5. Preview Production Build

```bash
# Using pnpm
pnpm preview

# Or using npm
npm run preview
```

## Common Issues & Solutions

### Issue 1: Port Already in Use

**Error**: `Port 5173 is already in use`

**Solution**:
```bash
# Kill the process using the port (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
pnpm dev --port 3000
```

### Issue 2: Module Not Found

**Error**: `Cannot find module 'package-name'`

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json
pnpm install
```

### Issue 3: TypeScript Errors

**Error**: Various TypeScript type errors

**Solution**:
```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
pnpm build
```

### Issue 4: Tailwind Styles Not Loading

**Error**: Styles not appearing

**Solution**:
1. Check `src/styles/tailwind.css` exists
2. Verify it's imported in your main file
3. Clear browser cache
4. Restart dev server

### Issue 5: API Fetch Errors

**Error**: `Failed to fetch jobs`

**Solution**:
1. Check internet connection
2. Verify API endpoint is accessible: `https://api.jsonfakery.com/jobs/paginated`
3. Check browser console for CORS errors
4. Try clearing browser cache

### Issue 6: Build Errors

**Error**: Build fails with various errors

**Solution**:
```bash
# Clean and rebuild
rm -rf dist
rm -rf node_modules/.vite
pnpm build
```

## Environment Variables

This project doesn't require environment variables, but if you need to add any:

1. Create `.env` file in root:
```bash
VITE_API_URL=https://api.jsonfakery.com
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## IDE Setup

### VS Code (Recommended)

**Recommended Extensions**:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

**Settings** (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Performance Tips

### Development

1. **Use pnpm**: Faster than npm
2. **Hot Module Replacement**: Enabled by default in Vite
3. **Lazy Loading**: Components are already optimized

### Production

1. **Tree Shaking**: Automatically handled by Vite
2. **Code Splitting**: Enabled by default
3. **Minification**: Enabled in production builds
4. **Compression**: Enable on your hosting platform

## Browser Compatibility

This application supports:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

Not supported:
- Internet Explorer

## Testing the Application

### Manual Testing Checklist

1. **Loading State**
   - [ ] Skeleton loaders appear while fetching data

2. **Filtering**
   - [ ] Search works with debounce (500ms)
   - [ ] Location filter works
   - [ ] Employment type multi-select works
   - [ ] Job category filter works
   - [ ] Remote toggle works
   - [ ] Salary range slider works
   - [ ] Min openings filter works
   - [ ] Created within filter works

3. **Filter Summary**
   - [ ] Active filters are displayed
   - [ ] Filters can be removed individually
   - [ ] "Clear All" works

4. **Sorting**
   - [ ] All 5 sort options work correctly

5. **Pagination**
   - [ ] Page numbers work
   - [ ] Next/Previous buttons work
   - [ ] Filters persist across pages

6. **Infinite Scroll**
   - [ ] Toggle between pagination and infinite scroll
   - [ ] More items load on scroll
   - [ ] Loading indicator appears

7. **Export**
   - [ ] CSV export works
   - [ ] PDF export works
   - [ ] Exports include filtered data only

8. **Dark Mode**
   - [ ] Toggle works
   - [ ] Preference persists after reload

9. **Mobile Responsiveness**
   - [ ] Mobile filter drawer works
   - [ ] Layout adjusts for small screens
   - [ ] All features work on mobile

10. **Error Handling**
    - [ ] Error message shows on API failure
    - [ ] Empty state shows when no results

## Debugging Tips

### Browser DevTools

1. **Network Tab**: Check API calls
2. **Console Tab**: Look for errors
3. **React DevTools**: Inspect component state
4. **Performance Tab**: Check for bottlenecks

### Common Debug Commands

```bash
# Check for outdated packages
pnpm outdated

# Update dependencies
pnpm update

# Audit for security issues
pnpm audit

# Check bundle size
pnpm build
du -sh dist/
```

## Getting Help

If you encounter issues not covered here:

1. Check the console for error messages
2. Search the issue on Stack Overflow
3. Check GitHub Issues for similar problems
4. Review the official documentation:
   - React: https://react.dev/
   - Vite: https://vitejs.dev/
   - Tailwind CSS: https://tailwindcss.com/
   - TypeScript: https://www.typescriptlang.org/

## Performance Monitoring

### Lighthouse

Run Lighthouse audit:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Click "Generate report"

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

### Bundle Analysis

To analyze bundle size:

```bash
pnpm build
# Then upload dist folder to https://bundlephobia.com/
```

## Deployment Verification

Before submitting, verify:

1. Build succeeds without errors
2. Production preview works locally
3. All features work in production build
4. No console errors
5. Lighthouse scores are good
6. Works on mobile devices

---

**Need more help?** Open an issue on GitHub or contact the team.
