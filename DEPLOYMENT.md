# Deployment Guide

Learn how to get your website live on the internet in minutes!

## Quick Deploy Options (Easiest)

### Option 1: Netlify (Recommended) ⭐

**Time: 2 minutes**

1. Go to https://netlify.com
2. Sign up with GitHub/Google/email
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your website folder
5. Done! Your site is live

**Your URL will be:** `something-random-12345.netlify.app`

**To use custom domain:**
- Buy domain from GoDaddy, Namecheap, etc.
- In Netlify: Site settings → Domain management → Add custom domain

---

### Option 2: Vercel

**Time: 2 minutes**

1. Go to https://vercel.com
2. Sign up with GitHub/Google
3. Click "Create new project"
4. Select your website folder
5. Click "Deploy"

**Features:**
- Super fast
- Free SSL certificate
- Analytics included

---

### Option 3: GitHub Pages (Free Forever)

**Time: 5 minutes**

1. Create GitHub account at https://github.com
2. Create new repository named `username.github.io`
3. Upload your files:
   - index.html
   - styles.css
   - script.js
   - README.md
4. Your site is live at `https://username.github.io`

---

### Option 4: Firebase Hosting

**Time: 5 minutes**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize project
firebase init hosting

# Deploy
firebase deploy
```

---

## Deploy Using Git (Advanced)

### Step 1: Initialize Git
```bash
cd /Users/thefamily/Desktop/nick\ website
git init
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create repository "nick-website"
3. Copy the commands they show

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Initial portfolio website"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository
2. Settings → Pages
3. Select main branch
4. Site goes live!

---

## Custom Domain Setup

### 1. Buy a Domain

Popular registrars:
- Namecheap.com
- GoDaddy.com
- Google Domains
- Cloudflare.com

**Suggested domain names:**
- nicholasbella.com
- nicdesigner.com
- designbynicholas.com

### 2. Connect to Netlify

1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Netlify will show DNS settings
5. In your domain registrar:
   - Go to DNS settings
   - Add the records Netlify shows
   - Wait 24-48 hours for activation

### 3. Connect to GitHub Pages

1. Go to your repository Settings
2. Pages section
3. Under "Custom domain" enter your domain
4. Update DNS records in domain registrar

---

## Using Your Own Server

### Option 1: cPanel Hosting (~$5/month)

1. Buy hosting from Bluehost, SiteGround, etc.
2. Use File Manager or FTP
3. Upload files to public_html folder
4. Site goes live!

### Option 2: VPS (Advanced)

1. Buy VPS from DigitalOcean, Linode, Vultr (~$5/month)
2. Connect via SSH
3. Set up web server (Nginx/Apache)
4. Upload files
5. Configure domain DNS

---

## Free & Professional Options Comparison

| Option | Cost | Setup Time | Custom Domain | Features |
|--------|------|-----------|---------------|----------|
| Netlify | Free | 2 min | ✅ | Analytics, CDN, SSL |
| Vercel | Free | 2 min | ✅ | Fast, Analytics |
| GitHub Pages | Free | 5 min | ✅ | Version control |
| Firebase | Free | 5 min | ✅ | Database support |
| Netlify Domain | ~$12/yr | 2 min | ✅ | Included SSL |

---

## Recommended Setup

### Beginner (Start Here)
1. **Deploy:** Netlify
2. **Cost:** $0
3. **Domain:** Free Netlify domain initially
4. **Time:** 2 minutes

### Professional (Recommended)
1. **Deploy:** Netlify
2. **Domain:** nicholasbella.com (~$12/year)
3. **Email:** your-name@nicholasbella.com via Gmail
4. **Cost:** ~$12/year
5. **Time:** 30 minutes total

### Advanced (Custom)
1. **Deploy:** Your own VPS
2. **Domain:** Custom
3. **Email:** Custom email server
4. **Cost:** ~$60/year
5. **Time:** 2-3 hours

---

## Step-by-Step: Deploy on Netlify (Easiest)

### 1. Prepare Your Files
Make sure you have:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ README.md

### 2. Create Netlify Account
- Go to https://netlify.com
- Click "Sign up"
- Choose sign up method (GitHub/Google/email)
- Complete signup

### 3. Deploy Website
- Click "Add new site" → "Deploy manually"
- Drag your entire website folder into the area
- Wait for upload to complete
- Your site is now live! 🎉

### 4. Get Your URL
- Netlify assigns random URL: `something.netlify.app`
- Share this with clients
- Test all features

### 5. Optional: Add Custom Domain
- Go to "Site settings" → "Domain management"
- Click "Add custom domain"
- Enter domain (e.g., nicholasbella.com)
- Update DNS in your domain registrar

---

## Testing After Deployment

✅ **Check:**
1. All pages load correctly
2. Navigation works
3. Payment buttons open correctly
4. Commission toggle works
5. Tip jar functions
6. Responsive on mobile (use browser dev tools)

---

## Common Issues & Fixes

### Site shows 404 error
- Make sure index.html is in root folder
- Check file names are lowercase

### Styling looks broken
- Verify styles.css path is correct
- Check CSS file is uploaded
- Clear browser cache (Ctrl+Shift+Del)

### Payment system not working
- Check script.js file is in root folder
- Verify email address in script.js
- Test in different browser

### Domain not pointing to site
- DNS changes take 24-48 hours
- Check DNS records match registrar settings
- Verify domain is correct spelling

---

## Next Steps

1. ✅ Deploy to Netlify (2 min)
2. ✅ Test all features work
3. ✅ Buy custom domain if desired
4. ✅ Share link with people
5. ✅ Start receiving commissions!

---

## Support Resources

- **Netlify Help:** docs.netlify.com
- **Vercel Guide:** vercel.com/docs
- **GitHub Pages:** pages.github.com
- **Firebase Docs:** firebase.google.com/docs

---

**You're ready to go live! 🚀**

Deploy now and start accepting commissions today!
