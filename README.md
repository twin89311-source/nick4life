# Nicholas Bella - Portfolio Website

A professional portfolio website for designer and developer showcasing services, commission status, and payment capabilities.

## Features

✅ **Working Payment System** - Users can submit commission requests
✅ **Commission Status Display** - Toggle between open/closed status
✅ **About Me Section** - Bio and service highlights
✅ **Tip Jar/Donations** - Support button with custom amounts
✅ **Service Pricing** - Showcase services with starting prices
✅ **Responsive Design** - Mobile-friendly layout

## Files

- `index.html` - Main website structure
- `styles.css` - Complete styling with animations
- `script.js` - JavaScript functionality for payments and interactions
- `README.md` - This file

## How It Works

### Payment System

The website uses a email-based payment system:

1. Users click "Order Now" on a service
2. They fill out their details and project description
3. The system creates an email draft that opens their default email client
4. The email is pre-filled with all the payment information
5. They send it to: **nicholasbella300@gmail.com**

### Commission Status

- Click "Toggle Status" button to switch between OPEN/CLOSED
- Status is saved in browser localStorage
- Displays a visual indicator (green dot = open, red dot = closed)
- If commissions are closed, users cannot place orders

### Tip Jar

- Users can choose preset amounts ($5, $10, $20, $50)
- Or enter a custom amount
- Follows the same email process as payments

## How to Use

1. Open `index.html` in your web browser
2. Navigate through sections using the menu
3. To open/close commissions, scroll to "Commission Status" section
4. Click "Toggle Status" to change the status
5. To process payments, click "Order Now" or select a tip amount

## Customization

### Change Email
Edit the email address in `script.js` (line ~88):
```javascript
to_email: 'your-email@gmail.com'
```

### Edit Services & Pricing
Modify services in `index.html` in the Services section (lines ~87-104):
```html
<div class="service-item">
    <h3>Your Service</h3>
    <p>Starting at $XX</p>
    <button onclick="openPayment('service', XX)" class="btn btn-primary">Order Now</button>
</div>
```

### Change Colors
Edit CSS variables in `styles.css` (lines ~9-17):
```css
:root {
    --primary-color: #6366f1;  /* Main color */
    --secondary-color: #ec4899; /* Accent color */
    /* ... */
}
```

## Advanced Payment Integration

For production use, consider integrating with:

### Option 1: Stripe
- More secure payment processing
- Card payment support
- Better for handling sensitive payment data

### Option 2: PayPal
- Widely trusted payment processor
- Integration via buttons
- Handles payment collection

### Option 3: Gumroad
- Perfect for digital products and services
- Simple integration
- Handles everything for you

## How Payment Emails Work

When a user submits a payment:

1. Their email client opens automatically
2. Pre-filled email with:
   - Service details
   - Amount
   - Their information
   - Project description
3. They review and send to your Gmail
4. You receive the payment request with customer contact info
5. You can then collect payment via:
   - PayPal link
   - Bank transfer
   - Cryptocurrency
   - Other payment method

## Local Testing

Simply open `index.html` in any modern web browser. No server required!

## Browser Compatibility

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## Features Breakdown

### Section 1: Navigation & Hero
- Sticky navigation bar
- Eye-catching hero section
- Call-to-action buttons

### Section 2: About Me
- Your bio and description
- Service highlights in card format
- Professional presentation

### Section 3: Services
- Service listings with pricing
- Direct "Order Now" buttons
- Modal form for payment requests

### Section 4: Commission Status
- Visual indicator (green/red dot)
- Toggle button (admin only)
- Real-time status display

### Section 5: Support Me
- Tip jar with preset amounts
- Custom tip input
- Same secure email system

### Section 6: Contact
- Email contact information
- Direct email link

## Data Storage

Payment data is stored in:
- Browser `localStorage` - for commission status
- Payment history JSON - accessible via browser console

To view payment history in browser console:
```javascript
JSON.parse(localStorage.getItem('paymentHistory'))
```

## Tips & Tricks

1. **Share Your Site**: Upload to Netlify, Vercel, or GitHub Pages for free
2. **Customize Colors**: Change primary colors in CSS to match your brand
3. **Add More Services**: Duplicate service items and update details
4. **Track Commissions**: Check your email for payment requests
5. **Monitor Tips**: View localStorage to see donation history

## Support

For questions or to report issues, contact: nicholasbella300@gmail.com

---

Created for Nicholas Bella - Designer & Developer
