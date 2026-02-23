# Deployment Guide

## Quick Start - Local Development

### 1. Install Node.js
Download from https://nodejs.org/ (LTS version recommended)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser

---

## Production Deployment Options

### Option 1: Deploy to Render (Recommended - Free)

#### Steps:
1. Create account at https://render.com
2. Connect GitHub repository
3. Create new Web Service
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add EMAIL_USER and EMAIL_PASS
5. Deploy!

### Option 2: Deploy to Heroku

#### Prerequisites:
- Heroku CLI installed
- Git repository

#### Steps:
```bash
# Login to Heroku
heroku login

# Create app
heroku create your-portfolio-name

# Set environment variables
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASS=your_app_password

# Deploy
git push heroku main
```

### Option 3: Deploy to DigitalOcean

#### Steps:
1. Create Droplet (Ubuntu 20.04)
2. SSH into server
3. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
4. Clone repository and install dependencies
5. Use PM2 to manage process:
```bash
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

---

## Environment Configuration

### Local Development (.env)
```
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Production
Set environment variables in deployment platform:
- Render: Dashboard → Environment
- Heroku: `heroku config:set KEY=VALUE`
- DigitalOcean: `/etc/environment` or PM2 ecosystem file

---

## Domain Setup

### Add Custom Domain to Render
1. Go to project settings
2. Add custom domain
3. Update DNS records at your registrar:
   - CNAME: `your-domain.com` → `your-app.onrender.com`

### Add Custom Domain to Heroku
```bash
heroku domains:add www.your-domain.com
```

---

## SSL/HTTPS Setup

- **Render**: Automatic SSL
- **Heroku**: Automatic with Heroku domain
- **Custom Domain**: Use Cloudflare (free)
  1. Add site to Cloudflare
  2. Update nameservers at registrar
  3. Enable "Flexible SSL"

---

## Monitoring & Maintenance

### View Logs
```bash
# Heroku
heroku logs --tail

# Render - Check in dashboard

# DigitalOcean with PM2
pm2 logs
```

### Update Code
```bash
git add .
git commit -m "Update portfolio"
git push origin main  # Auto-deploys on Render/Heroku
```

---

## Performance Optimization

1. **Minify CSS/JS**: Use build tools like Webpack or Gulp
2. **Image Optimization**: Compress images online (TinyPNG, ImageOptim)
3. **CDN**: Use Cloudflare for static files
4. **Caching**: Add cache headers in server.js

---

## Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Email Not Sending
- Verify Gmail credentials
- Check if 2FA is enabled
- Ensure App Password is generated (not regular password)
- Check spam folder

### "Cannot GET /"
- Ensure `index.html` is in project root
- Check `server.js` is properly serving static files

### Module Not Found
```bash
rm -rf node_modules
npm install
```

---

## Security Checklist

- [ ] `.env` file not committed to git
- [ ] Enable HTTPS/SSL
- [ ] Add input validation on backend
- [ ] Set up CORS properly
- [ ] Use rate limiting for API endpoints
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Use environment variables for all secrets

---

## Next Steps

1. Upload profile picture to `assets/` folder
2. Update portfolio content in `index.html`
3. Configure email settings in `.env`
4. Test locally: `npm run dev`
5. Deploy to production
6. Share your portfolio!
