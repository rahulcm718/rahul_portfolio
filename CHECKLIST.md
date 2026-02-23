# Installation & Setup Checklist

## ✅ Pre-Installation
- [ ] Windows/Mac/Linux computer
- [ ] Internet connection
- [ ] Text editor (VS Code recommended)
- [ ] Professional headshot photo

## 📥 Installation Steps

### 1. Install Node.js
- [ ] Download Node.js from https://nodejs.org/
- [ ] Choose LTS (Long Term Support) version
- [ ] Run installer
- [ ] Complete installation
- [ ] Verify: Open PowerShell and type `node --version`

### 2. Navigate to Project
- [ ] Open PowerShell (Windows) or Terminal (Mac/Linux)
- [ ] Type: `cd r:\rahul_portfolio`
- [ ] Press Enter

### 3. Install Dependencies
- [ ] Type: `npm install`
- [ ] Wait for completion (2-5 minutes)
- [ ] Verify: `node_modules` folder appears

### 4. Update Environment File
- [ ] Open `.env` file in VS Code
- [ ] Update `EMAIL_USER` with your Gmail
- [ ] Update `EMAIL_PASS` with App Password
- [ ] Save file

## 🚀 Launch Server

### 5. Start Development Server
- [ ] Type: `npm run dev`
- [ ] See message: "Server running on http://localhost:3000"
- [ ] Keep terminal open

### 6. View Website
- [ ] Open browser (Chrome, Firefox, Edge, Safari)
- [ ] Go to: `http://localhost:3000`
- [ ] Website loads successfully
- [ ] All sections visible
- [ ] No error messages in browser console (F12)

## 🖼️ Add Profile Picture

### 7. Prepare Image
- [ ] Get professional headshot photo
- [ ] Resize to exactly 200x200 pixels
  - [ ] Use online tool: https://imageresizer.com/
  - [ ] Or use Paint/Preview app
- [ ] Export as JPEG or PNG
- [ ] Name it: `ProfilePic.jpeg`

### 8. Place Image
- [ ] Find `assets` folder in project
- [ ] Delete old profile picture
- [ ] Place new `ProfilePic.jpeg` in assets folder
- [ ] Refresh browser to see changes

## ✏️ Update Content

### 9. Edit Personal Info (index.html)
- [ ] Open `index.html` in VS Code
- [ ] Find `<h1>Rahul C M</h1>` and change to your name
- [ ] Update tagline (professional title)
- [ ] Update description (short bio)
- [ ] Update email, GitHub, LinkedIn links
- [ ] Save file
- [ ] Refresh browser to see changes

### 10. Update About Section
- [ ] Find "About Me" section
- [ ] Replace with your background
- [ ] Update bullet points with your specialties
- [ ] Save and refresh

### 11. Update Skills Section
- [ ] Review Technical Skills section
- [ ] Update with your actual skills
- [ ] Add/remove skill cards as needed
- [ ] Verify icons display correctly
- [ ] Save and refresh

### 12. Update Projects
- [ ] Replace project titles with your projects
- [ ] Update descriptions with actual details
- [ ] Change skill tags to match your technologies
- [ ] Add links to GitHub/live projects if available
- [ ] Save and refresh

## 🧪 Testing

### 13. Test Responsiveness
- [ ] Press F12 to open Developer Tools
- [ ] Click device toggle (mobile icon)
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1200px+)
- [ ] All elements display correctly

### 14. Test Navigation
- [ ] Click navbar links
- [ ] Smooth scroll to sections works
- [ ] No broken links
- [ ] All social links work
- [ ] Email link opens default email client

### 15. Test Contact Form
- [ ] Scroll to Contact section
- [ ] Fill out form with test data
- [ ] Click "Send Message"
- [ ] Success notification appears
- [ ] If email configured: Check email inbox

### 16. Test On Different Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if Mac)
- [ ] Edge (if Windows)
- [ ] Mobile browser

## 📧 Email Setup (Optional)

### 17. Configure Gmail
- [ ] Go to https://myaccount.google.com
- [ ] Select Security from left menu
- [ ] Enable "2-Step Verification"
- [ ] Go to https://support.google.com/accounts/answer/185833
- [ ] Select Mail and Windows (or your OS)
- [ ] Copy 16-character App Password
- [ ] Paste into `.env` file as `EMAIL_PASS`
- [ ] Save `.env` file

### 18. Test Email
- [ ] Restart server (Ctrl+C, then `npm run dev`)
- [ ] Fill contact form with real email
- [ ] Submit form
- [ ] Check email inbox in 1-2 minutes
- [ ] Email received successfully

## 🌐 Prepare for Deployment

### 19. Create GitHub Account (Optional)
- [ ] Go to https://github.com
- [ ] Sign up
- [ ] Create new repository: `portfolio`
- [ ] Upload project files

### 20. Choose Deployment Platform
- [ ] Render: https://render.com (recommended)
  - [ ] Sign up with GitHub
  - [ ] Create Web Service
  - [ ] Connect repository
  - [ ] Deploy
- [ ] OR Netlify: https://netlify.com (frontend only)
  - [ ] Drag and drop folder
  - [ ] Deploy

### 21. Get Live URL
- [ ] Copy deployment URL
- [ ] Share with others
- [ ] Test all features online
- [ ] Verify email still works

## 🎉 Final Checks

### 22. Quality Assurance
- [ ] Professional headshot visible
- [ ] All text content is accurate
- [ ] No typos or grammatical errors
- [ ] All links work
- [ ] Fast loading time
- [ ] Mobile friendly
- [ ] Contact form functional
- [ ] Social links redirect correctly

### 23. Backup & Version Control
- [ ] Push to GitHub
- [ ] Create local backup copy
- [ ] Document any customizations
- [ ] Keep `.env` file safe (never share)

### 24. Share Portfolio
- [ ] Update LinkedIn profile
- [ ] Share GitHub link
- [ ] Send to recruiters
- [ ] Update resume with portfolio URL
- [ ] Post on social media

## 🚀 Production Deployment

### 25. Domain Registration (Optional)
- [ ] Buy domain: https://namecheap.com or similar
- [ ] Point to deployment platform
- [ ] Update DNS records
- [ ] Verify HTTPS/SSL enabled
- [ ] Test with custom domain

### 26. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking code to HTML
- [ ] Monitor visitor statistics
- [ ] Track form submissions

### 27. Maintenance
- [ ] Update content regularly
- [ ] Keep dependencies updated: `npm update`
- [ ] Monitor server logs
- [ ] Backup database/files
- [ ] Check for security issues: `npm audit`

---

## Troubleshooting Checklist

### Website Won't Load
- [ ] Terminal shows "Server running on http://localhost:3000"
- [ ] Browser shows full URL: `http://localhost:3000`
- [ ] Try different browser
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Restart server

### Images Not Showing
- [ ] Check file exists in `assets/` folder
- [ ] Verify filename matches HTML (case-sensitive)
- [ ] Image is square (200x200) for profile
- [ ] Try refreshing browser (Ctrl+F5)
- [ ] Check browser console for errors (F12)

### Email Not Sending
- [ ] Verify Gmail credentials in `.env`
- [ ] Confirm 2FA enabled and App Password generated
- [ ] Check spam/promotions folder
- [ ] Restart server after `.env` changes
- [ ] Check server console for errors

### Server Won't Start
- [ ] Kill existing process: `netstat -ano | findstr :3000`
- [ ] Delete `node_modules` folder
- [ ] Run `npm install` again
- [ ] Try different port: Change `PORT=3001` in `.env`

### Dependencies Won't Install
- [ ] Check internet connection
- [ ] Clear npm cache: `npm cache clean --force`
- [ ] Update npm: `npm install -g npm@latest`
- [ ] Delete `package-lock.json`
- [ ] Run `npm install` again

---

## Success Indicators ✅

Your portfolio is ready when:
- [ ] Website loads on localhost:3000
- [ ] Professional profile picture displays
- [ ] Your name and info show correctly
- [ ] All sections are visible and styled
- [ ] Navigation works smoothly
- [ ] Contact form submits successfully
- [ ] No console errors (F12)
- [ ] Mobile view looks good
- [ ] All links are functional
- [ ] Website is deployed online

---

**Estimated Time**: 1-3 hours from start to live website

**Congratulations!** You now have a professional portfolio! 🎉
