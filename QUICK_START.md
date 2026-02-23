# Quick Start Guide

## 5-Minute Setup

### Step 1: Install Node.js
Download from: https://nodejs.org/
Choose the LTS (Long Term Support) version

### Step 2: Navigate to Project
Open PowerShell in your project folder:
```
cd r:\rahul_portfolio
```

### Step 3: Install Dependencies
```
npm install
```

### Step 4: Start Server
```
npm run dev
```

### Step 5: Open in Browser
Go to: http://localhost:3000

Done! 🎉

---

## What Each File Does

| File | Purpose |
|------|---------|
| `index.html` | Your portfolio content and structure |
| `style.css` | Professional styling and layout |
| `script.js` | Interactivity (smooth scroll, contact form) |
| `server.js` | Backend server for email handling |
| `package.json` | List of required packages |
| `.env` | Secret settings (emails, API keys) |

---

## 📸 Add Your Profile Picture

1. Find a professional headshot photo
2. Resize to 200x200 pixels (square)
3. Save as `ProfilePic.jpeg` 
4. Place in the `assets/` folder
5. Replace existing image

**Tools to resize**:
- Online: https://imageresizer.com/
- Windows: Use Photos app → Edit
- Free software: GIMP, Paint.NET

---

## ✏️ Edit Your Content

### Change Your Name & Title
Open `index.html`, find this section and edit:
```html
<h1>Rahul C M</h1>
<p class="tagline">Cricket Analyst | Data Science Enthusiast | Sports Analytics Expert</p>
```

### Update About Section
Find "About Me" section and replace text with your own

### Update Projects
Replace project titles, descriptions, and skills

### Update Contact Info
Find email, GitHub, and LinkedIn links and update

---

## 🚀 Deploy Online

### Option 1: Render (Easiest)
1. Go to https://render.com
2. Sign up with GitHub
3. Create new Web Service
4. Connect your repository
5. It deploys automatically!

### Option 2: Netlify (Frontend Only)
If you don't need email backend:
1. Go to https://netlify.com
2. Drag and drop your project folder
3. Done!

---

## ⚙️ Email Setup (Optional)

To send emails from contact form:

1. Create/use Gmail account
2. Enable 2-Factor Authentication
3. Generate App Password: https://support.google.com/accounts/answer/185833
4. Edit `.env` file:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_char_password
```
5. Restart server

---

## 📱 Test Responsiveness

Your site works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

Test by resizing browser window or using browser dev tools (F12 → Toggle Device)

---

## 🆘 Common Issues & Fixes

### "Cannot find module 'express'"
```
npm install
```

### Port 3000 already in use
```
# Change PORT in .env to 3001
PORT=3001
```

### Images not loading
- Check image files exist in `assets/` folder
- Verify file extensions match (case-sensitive on some servers)

### Contact form not working
- Check email settings in `.env`
- Look at server console for error messages

---

## 📚 Learn More

- Express.js: https://expressjs.com/
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/

---

## Next Steps

1. ✅ Get Node.js running
2. ✅ Start the server (`npm run dev`)
3. ✅ Add your profile picture
4. ✅ Update your content
5. ✅ Test locally
6. ✅ Deploy online

You're ready to share your portfolio! 🎊
