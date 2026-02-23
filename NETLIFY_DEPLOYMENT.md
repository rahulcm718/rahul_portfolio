# Deploy Your Cricket Analyst Portfolio to Netlify

Follow these steps to deploy your portfolio live with a custom domain (free `netlify.app` subdomain or your own domain).

---

## Step 1: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Netlify to access your GitHub account
5. Complete signup

---

## Step 2: Create a New Site from Your GitHub Repo

1. After login, you'll see your Netlify dashboard
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** as your Git provider
4. Search for and select **`rahul_portfolio`** (your repository)
5. Click **"Connect & authorize"**

---

## Step 3: Configure Build Settings

Netlify should auto-detect your settings, but verify:

- **Base directory:** (leave empty)
- **Build command:** `npm run build` (or `npm install` if no build script)
- **Publish directory:** `.` (root folder, since Express serves index.html)

Click **"Deploy site"**

---

## Step 4: Wait for Deployment

Netlify will:
1. Clone your repo
2. Run `npm install`
3. Build your site
4. Deploy it automatically

You'll see a URL like: `https://YOUR-SITE-NAME.netlify.app`

---

## Step 5: Configure Environment Variables (Email Setup)

If you want the **contact form email** to work:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Edit variables"**
3. Add two variables:
   ```
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASS = your-app-password
   ```

**To get Gmail App Password:**
- Enable 2-factor authentication on your Gmail account
- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Generate an "App password" for Mail
- Paste it in `EMAIL_PASS`

4. Netlify redeploys automatically with these variables

---

## Step 6: Customize Your Domain

### Option A: Free Netlify Subdomain
1. Go to **Site settings** → **Domain management**
2. Click **"Edit site name"**
3. Change to something like: `rahulcm` (becomes `rahulcm.netlify.app`)
4. Save

### Option B: Custom Domain (e.g., `rahulcm.com`)
1. **Buy a domain** from:
   - [Namecheap](https://namecheap.com) (~$10–15/year)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)

2. In Netlify, go to **Site settings** → **Domain management**
3. Click **"Add custom domain"**
4. Enter your domain (e.g., `rahulcm.com`)
5. Netlify provides **nameservers** — copy them
6. Go to your domain registrar (Namecheap, GoDaddy, etc.)
7. Update **Nameservers** to point to Netlify's servers
8. Wait 24–48 hours for DNS to propagate
9. Netlify auto-generates an **SSL certificate** (HTTPS is free)

---

## Step 7: Verify Deployment

1. Open your Netlify URL (e.g., `https://rahulcm.netlify.app`)
2. Check that:
   - ✅ Homepage loads with your profile pic
   - ✅ Project links navigate to project pages
   - ✅ Screenshots display fully
   - ✅ Contact form works (if email configured)
   - ✅ All navigation links work

---

## Step 8: Auto-Deployments (Optional)

Netlify **automatically redeploys** whenever you push to `main` branch:

```powershell
# Make changes locally
git add .
git commit -m "Update portfolio description"
git push origin main

# Netlify detects the push and redeploys automatically!
```

Monitor deployments in Netlify dashboard → **Deploys** tab.

---

## Troubleshooting

### Site shows error or blank page
- Check **Deploys** tab for build errors
- Ensure `package.json` has correct `start` script
- Verify `server.js` listens on `process.env.PORT || 3000`

### Contact form not working
- Verify email environment variables are set
- Check browser console for fetch errors
- Test locally first: `npm run dev`

### Custom domain not working
- Wait 24–48 hours for DNS propagation
- Check domain registrar's nameserver settings match Netlify
- Go to [whatsmydns.net](https://whatsmydns.net) to verify DNS

### Images not showing
- Ensure image paths in `server.js` are relative (e.g., `/assets/...`)
- Check file names match exactly (case-sensitive on Linux servers)

---

## Next Steps

1. **Monitor analytics:** Netlify has built-in analytics dashboard
2. **Add a custom logo/favicon:** Update `<link rel="icon">` in `index.html`
3. **SEO improvements:** Add meta tags for social sharing
4. **Performance:** Use Netlify's **Lighthouse CI** for performance audits

---

## Support

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Community:** [community.netlify.com](https://community.netlify.com)

---

**Your portfolio is now live! Share your site URL with recruiters and peers.** 🚀
