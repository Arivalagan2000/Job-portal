# 📥 Installation Guide - Job Listing Portal

Complete step-by-step guide to download, setup, and run the Job Listing Portal in VS Code.

---

## 🎯 Quick Overview

This guide will help you:
1. Install required software (Node.js, Git, VS Code)
2. Download and setup the project
3. Configure VS Code with recommended extensions
4. Run the project locally
5. Start developing!

**Estimated Time**: 15-20 minutes

---

## ✅ Prerequisites Checklist

Before starting, ensure you have:

- [ ] **Computer**: Windows, Mac, or Linux
- [ ] **Internet Connection**: For downloading dependencies
- [ ] **Basic Terminal Knowledge**: How to run commands
- [ ] **Text Editor**: VS Code (recommended)

---

## 📋 Step-by-Step Installation

### Step 1: Install Required Software

#### 1.1 Install Node.js

**What is Node.js?** 
Node.js allows you to run JavaScript on your computer and comes with npm (Node Package Manager).

**Download & Install:**

1. Visit: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer
4. Follow the installation wizard (use default settings)

**Verify Installation:**

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

#### 1.2 Install Git

**What is Git?** 
Git helps you download and manage code from repositories.

**Download & Install:**

1. Visit: https://git-scm.com/downloads
2. Download for your operating system
3. Run the installer
4. Use default settings (recommended)

**Verify Installation:**

```bash
git --version
# Should show: git version 2.x.x
```

#### 1.3 Install Visual Studio Code

**What is VS Code?** 
A powerful, free code editor from Microsoft with great support for JavaScript/TypeScript.

**Download & Install:**

1. Visit: https://code.visualstudio.com/
2. Download for your operating system
3. Run the installer
4. **Important**: Check "Add to PATH" during installation (Windows)

**Verify Installation:**

```bash
code --version
# Should show version number
```

---

### Step 2: Download the Project

#### Option A: Using Git (Recommended)

1. **Create a projects folder** (if you don't have one):
   ```bash
   # On Windows
   cd C:\Users\YourName\Documents
   mkdir projects
   cd projects

   # On Mac/Linux
   cd ~/Documents
   mkdir projects
   cd projects
   ```

2. **Clone the repository**:
   ```bash
   git clone [your-repository-url]
   cd job-listing-portal
   ```

#### Option B: Download ZIP File

1. Go to the repository website
2. Click the green **Code** button
3. Click **Download ZIP**
4. Extract the ZIP file to your desired location
5. Open terminal and navigate to the extracted folder:
   ```bash
   cd path/to/job-listing-portal
   ```

---

### Step 3: Install Project Dependencies

**What are dependencies?** 
Libraries and packages that the project needs to run (React, TypeScript, Tailwind, etc.)

1. **Navigate to project folder** (if not already there):
   ```bash
   cd job-listing-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   **Expected output:**
   ```
   added 1234 packages in 2m
   ```

   **Note:** This downloads ~200MB of packages and may take 2-5 minutes.

3. **Verify installation**:
   ```bash
   # Check if node_modules folder was created
   ls node_modules  # Mac/Linux
   dir node_modules # Windows
   ```

---

### Step 4: Open Project in VS Code

1. **Open VS Code from terminal**:
   ```bash
   code .
   ```

   Or **open manually**:
   - Open VS Code
   - File → Open Folder
   - Select the `job-listing-portal` folder

2. **You should see**:
   - File explorer on the left with all project files
   - Welcome screen in the center

---

### Step 5: Install VS Code Extensions

#### Quick Method (Recommended)

When you open the project, VS Code will prompt:
> "This workspace has extension recommendations"

Click **Install All** to install all recommended extensions automatically.

#### Manual Method

Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open Extensions panel.

Search and install these extensions:

1. **ESLint** by Microsoft
   - ID: `dbaeumer.vscode-eslint`
   - Purpose: JavaScript/TypeScript linting

2. **Prettier - Code formatter** by Prettier
   - ID: `esbenp.prettier-vscode`
   - Purpose: Auto-format code on save

3. **Tailwind CSS IntelliSense** by Tailwind Labs
   - ID: `bradlc.vscode-tailwindcss`
   - Purpose: Autocomplete for Tailwind classes

4. **ES7+ React/Redux/React-Native snippets** by dsznajder
   - ID: `dsznajder.es7-react-js-snippets`
   - Purpose: React code snippets

#### Verify Extensions

1. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
2. Look for green checkmarks next to installed extensions

---

### Step 6: Configure API Settings

1. **Open file**: `/src/config/app.config.ts`

2. **Review configuration**:
   ```typescript
   export const APP_CONFIG = {
     API: {
       MODE: 'live', // 'live' or 'mock'
       BASE_URL: 'https://jsonfakery.com/jobs',
     },
     CACHE: {
       ENABLED: true,
       TTL: 5 * 60 * 1000,
     },
     PAGINATION: {
       ITEMS_PER_PAGE: 12,
     },
   };
   ```

3. **Choose mode**:
   - **`'live'`**: Use real API (requires internet)
   - **`'mock'`**: Use local mock data (works offline)

---

### Step 7: Start Development Server

1. **Open integrated terminal** in VS Code:
   - View → Terminal
   - Or press `` Ctrl+` `` (backtick key)

2. **Start the server**:
   ```bash
   npm run dev
   ```

3. **Expected output**:
   ```
   VITE v6.3.5  ready in 324 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```

4. **Open in browser**:
   - Click the link: http://localhost:5173/
   - Or manually open browser and navigate to `localhost:5173`

5. **You should see**:
   - Job Listing Portal running
   - Search bar at the top
   - Filters on the left
   - Job cards in a grid

---

### Step 8: Test the Application

#### Test Basic Features

1. **Search**: Type "developer" in the search bar
2. **Filter**: Select a location from the dropdown
3. **Sort**: Change sorting to "Salary: High to Low"
4. **Toggle View**: Click grid/list icons
5. **Dark Mode**: Click the moon icon in header
6. **Pagination**: Navigate between pages

#### Test Export Features

1. Click **Export CSV** in the header
2. Click **Export PDF** in the header
3. Check your Downloads folder for exported files

---

## 🎨 VS Code Tips & Shortcuts

### Essential Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| **Open file** | `Ctrl+P` | `Cmd+P` |
| **Command palette** | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| **Toggle terminal** | `` Ctrl+` `` | `` Cmd+` `` |
| **Format document** | `Shift+Alt+F` | `Shift+Option+F` |
| **Find in files** | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| **Toggle sidebar** | `Ctrl+B` | `Cmd+B` |
| **Split editor** | `Ctrl+\` | `Cmd+\` |

### Useful Features

1. **IntelliSense**: Auto-completion as you type (Ctrl+Space)
2. **Go to Definition**: Right-click → Go to Definition (F12)
3. **Peek Definition**: Alt+F12
4. **Rename Symbol**: F2
5. **Format on Save**: Enabled by default (saves time!)

---

## 🔧 Common Commands

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Git Commands

```bash
# Check status
git status

# Create new branch
git checkout -b feature/my-feature

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to repository
git push origin feature/my-feature
```

---

## 🐛 Troubleshooting

### Issue 1: "npm: command not found"

**Solution**: Node.js not installed or not in PATH
- Reinstall Node.js
- Restart terminal/VS Code
- Verify with `node --version`

### Issue 2: "Port 5173 already in use"

**Solution**: Another process is using the port

**Windows:**
```bash
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill -9
```

### Issue 3: Module not found errors

**Solution**: Dependencies not installed properly

```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 4: VS Code extensions not working

**Solution**: Reload VS Code
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "Reload Window"
- Press Enter

### Issue 5: TypeScript errors

**Solution**: Restart TypeScript server
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "TypeScript: Restart TS Server"
- Press Enter

### Issue 6: Tailwind classes not autocompleting

**Solution**: 
1. Install Tailwind CSS IntelliSense extension
2. Reload VS Code
3. Check that `tailwind.config.js` exists

### Issue 7: API not loading jobs

**Solution**: 
- Check internet connection
- Switch to mock mode in `app.config.ts`:
  ```typescript
  MODE: 'mock'
  ```
- Restart development server

---

## 📚 Project Structure Overview

```
job-listing-portal/
├── src/                       # Source code
│   ├── app/                   # React components
│   │   ├── components/        # Reusable components
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   └── ...           # Custom components
│   │   └── App.tsx           # Main app component
│   ├── config/               # Configuration files
│   ├── data/                 # Mock data
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API services
│   ├── styles/               # CSS files
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
├── public/                   # Static assets
├── node_modules/             # Dependencies (auto-generated)
├── .vscode/                  # VS Code settings
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite config
```

---

## 🎓 Next Steps

### Learn the Codebase

1. **Start with**: `/src/app/App.tsx` - Main component
2. **Explore**: `/src/app/components/` - Individual components
3. **Understand**: `/src/utils/jobFilters.ts` - Filter logic
4. **Check**: `/src/services/jobsApi.ts` - API calls

### Make Your First Change

1. **Open**: `/src/app/components/FigmaHeader.tsx`
2. **Find**: The title text
3. **Change**: "CareerHub" to your own name
4. **Save**: File (Ctrl+S)
5. **See**: Changes reflect immediately in browser!

### Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## ✅ Installation Complete Checklist

- [ ] Node.js installed and verified
- [ ] Git installed and verified
- [ ] VS Code installed
- [ ] Project downloaded/cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Project opened in VS Code
- [ ] VS Code extensions installed
- [ ] API configured in `app.config.ts`
- [ ] Development server running (`npm run dev`)
- [ ] Application opened in browser (localhost:5173)
- [ ] Tested basic features (search, filter, export)
- [ ] Ready to start developing! 🎉

---

## 💬 Need Help?

### Common Resources

1. **Check README.md**: Comprehensive project documentation
2. **Check API_INTEGRATION.md**: API details
3. **VS Code Docs**: https://code.visualstudio.com/docs
4. **Stack Overflow**: Search for error messages
5. **GitHub Issues**: Report bugs or ask questions

### Community Support

- Create an issue on GitHub
- Ask in project discussions
- Check existing documentation

---

## 🚀 You're Ready!

Congratulations! You've successfully set up the Job Listing Portal on your local machine. 

**Happy coding! 💻✨**

---

*Last updated: February 23, 2026*
