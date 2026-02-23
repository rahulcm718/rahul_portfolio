# Deploy Your Cricket Analyst Portfolio to Vercel

Vercel is perfect for Node.js apps and very easy to deploy. Get your live portfolio URL in 5 minutes!

---

## Step 1: Go to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Vercel to access your GitHub account

---

## Step 2: Import Your GitHub Repository

1. After login, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Paste your repo URL: `https://github.com/YOUR_USERNAME/rahul_portfolio`
4. Click **"Continue"**

---

## Step 3: Configure Project

You'll see a form. Fill it like this:

| Field | Value |
|-------|-------|
| **Project Name** | `rahulcm-portfolio` |
| **Framework Preset** | `Other` (leave as default) |
| **Root Directory** | `.` (or leave empty) |
| **Build Command** | `npm install` |
| **Output Directory** | `.` (or empty) |
| **Environment Variables** | (see next step) |

Click **"Deploy"** and wait!

---

## Step 4: Add Environment Variables (Optional - For Email)

If you want the **contact form email** to work:

1. After deployment starts, go to **Settings** → **Environment Variables**
2. Add two variables:

```
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-app-password
```

**To get Gmail App Password:**
- Enable 2-factor authentication on your Gmail account
- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Generate an "App password" for Mail
- Paste it in `EMAIL_PASS`

3. Click **"Save"** — Vercel redeploys automatically

---

## Step 5: Get Your Live URL

After deployment finishes (2–5 minutes), you'll see:

```
# Deploy Your Portfolio to Vercel (clearer steps)

This file shows a concise, practical checklist to get your portfolio from GitHub → Vercel → your own domain.

If Vercel shows "No Production Deployment" in the dashboard (as in your screenshot), it means you haven't set a production deployment yet — either set a production branch or promote a preview deployment to production. See "Production deployment" below.

---

## Quick checklist (what to do now)

- Confirm your repo is connected in the Vercel project (you already did this).
- Push a commit to the branch you want to be deployed (e.g., `main` / `master`) to trigger a deployment.
- If you see a preview deployment but "No Production Deployment", either set the branch as the Production Branch or promote the latest preview to production.
- Add a custom domain (optional) and update DNS records at your registrar.

---

## 1 — Trigger a deployment

1. Make a small change, commit and push to your repository branch (example `main`):

```powershell
git add .
git commit -m "Trigger Vercel deploy"
git push origin main
```

2. In Vercel dashboard → Project → Deployments, you should see a new deployment start. Click the deployment to view build logs.

If nothing appears, open Project → Settings → Git and confirm the repository and branch are correct.

---

## 2 — Production deployment (why you might see "No Production Deployment")

- Option A — Set a Production Branch:
  1. Go to Project → Settings → Git
  2. Set **Production Branch** to the branch you want (e.g., `main`).
  3. Push to that branch; Vercel will create a production deployment automatically.

- Option B — Promote a preview to production:
  1. Go to Project → Deployments
  2. Find the preview you want to promote
  3. Click the three-dot menu → **Promote to Production**

Either option will create the production deployment and your site will be served from `https://<project>.vercel.app`.

---

## 3 — Static site notes (no build command required)

If your site is a plain static portfolio with `index.html`, `style.css` and `script.js` at the repo root, Vercel will serve it without a build command. Recommended settings:

- Build Command: (leave empty)
- Output Directory: (leave empty or set to `.`)

If your project requires building (React/Vite/Next), set the appropriate Build Command (e.g., `npm run build`) and Output Directory (e.g., `build` or `.next`).

---

## 4 — Add a custom domain (recommended)

1. Buy a domain from any registrar (Namecheap, Google Domains, GoDaddy, Cloudflare, etc.).
2. In Vercel dashboard → Project → Settings → Domains → **Add** your domain (example: `yourname.com`).
3. Vercel will show DNS instructions. Choose ONE of the two approaches below.

Option A — Point DNS records (recommended, simpler):

- For apex (yourname.com): add an A record pointing to `76.76.21.21`.
- For www (www.yourname.com): add a CNAME pointing to `cname.vercel-dns.com`.

Example DNS records at registrar:

- Type: A | Host: @ | Value: 76.76.21.21 | TTL: automatic
- Type: CNAME | Host: www | Value: cname.vercel-dns.com | TTL: automatic

Option B — Use Vercel nameservers (Vercel manages DNS):

- Change your domain's NS records to the nameservers Vercel shows. This hands DNS to Vercel and simplifies management.

After adding records, return to Vercel and click **Verify** (or Vercel will verify automatically). SSL certificate issuance is automatic after verification.

---

## 5 — Make domain primary and enforce HTTPS

1. Once verified, in Project → Settings → Domains, set the new domain as **Primary**.
2. Enable **Enforce HTTPS** to redirect HTTP → HTTPS.
3. Optionally create redirects (apex → www or vice versa) by configuring redirects in Vercel or setting the primary domain to your preferred hostname.

---

## 6 — DNS verification commands (Windows PowerShell)

Use these to confirm DNS updates have propagated:

```powershell
Resolve-DnsName yourname.com -Type A
Resolve-DnsName www.yourname.com -Type CNAME

# Or using nslookup
nslookup -type=A yourname.com
nslookup -type=CNAME www.yourname.com
```

Expected results:

- `yourname.com` A record → `76.76.21.21`
- `www.yourname.com` CNAME → `cname.vercel-dns.com`

DNS changes typically propagate in minutes but can take up to 24–48 hours depending on registrar TTLs.

---

## 7 — Quick troubleshooting

- If verification fails: re-check for stray records (old A records or conflicting CNAMEs) and remove them.
- If site shows old content: clear browser cache or confirm Vercel build used latest commit.
- If SSL not issued: ensure domain verifies and that no conflicting DNS records exist.

---

## 8 — If you want me to help (what I need)

- Provide the domain name (e.g., `yourname.com`) and your registrar (Namecheap, GoDaddy, Cloudflare, etc.).
- Tell me if you want apex or `www` as primary (I recommend `www` → `www.yourname.com` as primary and redirect apex to it).

I can:
- Check DNS publicly and tell you exactly which records to add/remove.
- Create a small `scripts/deploy.ps1` or `scripts/deploy.sh` that POSTs to a Vercel hook (if you prefer manual deploys).
- Update this repository's `VERCEL_DEPLOYMENT.md` further with screenshots or registrar-specific steps.

---

## Short checklist to finish (copy-paste)

1. Push a commit to `main`.
2. In Vercel: Project → Settings → Git → set `main` as Production Branch (or Promote a preview).
3. (Optional) Add custom domain in Vercel and add A / CNAME records at registrar.
4. Verify DNS with `Resolve-DnsName` or `nslookup`.

---

If you want, tell me your domain and registrar now and I will check DNS and give exact records to add.
