# Quick Start Guide

Welcome to your new portfolio website! Here's everything you need to know to get started.

## 📁 What You Have

Your website folder contains:

```
nick website/
├── index.html           ← Main website (open this in browser)
├── styles.css           ← Styling and design
├── script.js            ← Interactive features
├── config.json          ← Your information (edit this!)
├── README.md            ← Full documentation
├── DEPLOYMENT.md        ← How to go live
├── PAYMENT_INTEGRATION.md ← Payment setup
└── QUICK_START.md       ← This file
```

---

## 🚀 Get Started in 3 Steps

### Step 1: Test Locally (1 minute)
1. Open `index.html` in your web browser
2. Scroll through the website
3. Test buttons and features

### Step 2: Customize (5 minutes)
1. Open `config.json` in a text editor
2. Update your information:
   - `name`: Your name
   - `email`: Your email (commission payments go here!)
   - `services`: Your services and prices
   - `bio`: About yourself
3. Save the file

### Step 3: Deploy (2 minutes)
1. Go to https://netlify.com
2. Sign up for free
3. Drag your website folder onto Netlify
4. Your site is now live! 🎉

---

## 📝 Website Sections

### 1. Navigation Bar
- Sticky menu that follows you while scrolling
- Links to all major sections
- Your name/logo on left

### 2. Hero Section
- Big welcome message
- Your tagline
- Call-to-action buttons

### 3. About Me
- Your bio
- 4 main skills highlighted
- Professional introduction

### 4. Services & Pricing
- What you offer
- Starting prices
- "Order Now" buttons for each service

### 5. Commission Status
- Shows if you're accepting commissions
- Green dot = OPEN (accepting)
- Red dot = CLOSED (not accepting)
- Toggle button to switch status

### 6. Support Me / Tip Jar
- Donation options
- Preset amounts ($5, $10, $20, $50)
- Custom tip input
- Same secure email system as payments

### 7. Contact
- Your email address
- Direct contact link

---

## 💳 Payment System Explained

### How Payments Work

1. Customer clicks "Order Now" or selects tip amount
2. Modal form opens
3. They enter their details and project description
4. They click "Proceed to Payment"
5. Their email client opens with pre-filled email
6. They send the email to you
7. **You receive their payment request with full details**

### What You Receive

When someone sends a payment email, you'll get:
- Their name and email
- Service they want
- Amount they're paying
- Project description
- Details about what they need

Then you can:
- Respond with payment instructions
- Send them a PayPal link
- Direct them to Stripe
- Or use any payment method you prefer

---

## 🔧 Customizing Your Site

### Change Your Email
Open `config.json` and update:
```json
"email": "your-email@gmail.com"
```

Also update in `script.js` (search for: `nicholasbella300@gmail.com`)

### Update Services
Edit `config.json` and modify the services array:
```json
"services": [
  {
    "name": "Your Service",
    "description": "What you offer",
    "price": 100,
    "id": "service-id"
  }
]
```

### Change Colors
Edit the colors in `config.json`:
```json
"colors": {
  "primary": "#YOUR_COLOR",
  "secondary": "#YOUR_COLOR"
}
```

Then update `styles.css` `:root` section to match.

### Edit Your Bio
Update in `config.json`:
```json
"bio": "Your new bio here..."
```

---

## ⚙️ Admin Functions

### Toggle Commission Status

1. Scroll to "Commission Status" section
2. Click "Toggle Status" button
3. Status switches between OPEN and CLOSED
4. Status is saved (stays even if you refresh page)

**Note:** When closed, users cannot place orders.

---

## 📱 Mobile Friendly

Your website automatically adapts to:
- Desktop computers
- Tablets
- Mobile phones

Test on your phone to verify everything looks good!

---

## 🌐 Go Live

### Option 1: Netlify (Easiest - Recommended)

1. Visit https://netlify.com
2. Sign up for free
3. Drag your website folder here
4. Get instant live URL
5. Share the link!

**Takes 2 minutes.**

### Option 2: Your Own Server

1. Upload files via FTP or control panel
2. Your site goes live on your domain
3. Use custom email addresses

See `DEPLOYMENT.md` for full instructions.

---

## ✨ Features Breakdown

| Feature | How It Works | Status |
|---------|-------------|--------|
| Payment System | Email-based, no coding needed | ✅ Working |
| Commissions | Toggle open/closed, status displayed | ✅ Working |
| About Section | Shows your bio and skills | ✅ Working |
| Tip Jar | Preset + custom amounts | ✅ Working |
| Mobile Friendly | Works on all devices | ✅ Working |
| Fast Loading | Optimized for speed | ✅ Working |

---

## 🎨 Styling Tips

### Change Main Color
Edit `styles.css` line ~9:
```css
--primary-color: #6366f1;  /* Change this */
```

### Change Gradient Colors
Edit `styles.css` for `.navbar` and `.hero` sections:
```css
background: linear-gradient(135deg, #YourColor1, #YourColor2);
```

### Update Fonts
Edit `styles.css` body:
```css
font-family: 'Your Font', sans-serif;
```

---

## 🔒 Security Notes

⚠️ **Current Setup:**
- Email-based system (simple and secure)
- No database (local storage only)
- No sensitive data stored

✅ **Safe to use for:**
- Small portfolios
- Indie developers
- Starting out

---

## 💡 Pro Tips

1. **Add Portfolio Gallery** - Create additional HTML pages showing your work
2. **Social Links** - Update `config.json` to add links to your socials
3. **Newsletter** - Add subscription form for updates
4. **Blog Section** - Share your work and process
5. **Testimonials** - Add client reviews section

---

## 🐛 Troubleshooting

### Buttons not working?
- Check that all files are in same folder
- Refresh browser (Ctrl+F5 to clear cache)
- Try different browser

### Commission status not saving?
- Make sure JavaScript is enabled
- Try clearing browser cookies
- Use a different browser

### Payment form not opening?
- Check email address in config.json
- Verify script.js file exists
- Try incognito/private browsing mode

### Mobile view looks bad?
- Check browser zoom (should be 100%)
- Rotate phone to landscape
- Try different phone/tablet

---

## 📞 Next Steps

1. ✅ Open `index.html` and test
2. ✅ Update `config.json` with your info
3. ✅ Deploy to Netlify
4. ✅ Share your link
5. ✅ Start getting commissions!

---

## 📚 Full Documentation

- **README.md** - Complete feature list
- **DEPLOYMENT.md** - How to go live
- **PAYMENT_INTEGRATION.md** - Advanced payment options
- **config.json** - Your website data

---

## ❓ Questions?

Check the other documentation files or visit:
- https://netlify.com/docs
- https://developer.mozilla.org/en-US/docs/Web/HTML

---

## 🎉 You're Ready!

Your website is ready to go live. Start with Netlify for free hosting, customize your information, and begin accepting commissions!

**Good luck! 🚀**

---

*Created for Nicholas Bella - Designer & Developer*
