# Customization Reference

Quick reference for customizing your website without breaking anything.

## 📝 Easy Text Changes

### Change Your Name
In `index.html`, find this line:
```html
<div class="logo">Nicholas Bella</div>
```
Replace `Nicholas Bella` with your name.

### Change Page Title
In `index.html`, find this line:
```html
<title>Nicholas Bella - Designer & Developer</title>
```
Change to your title. This shows in browser tab.

### Change Hero Message
In `index.html`, find the hero section:
```html
<h1>Welcome to My Portfolio</h1>
<p>Designer & Developer | Scripting • Modeling • GUI • Graphics</p>
```
Update both lines with your message.

### Change About Section
In `index.html`, find:
```html
<p class="about-text">
    Hello, I am Nicholas and I am a Designer/Developer...
</p>
```
Replace with your own bio (keep the `<p>` and `</p>` tags).

### Change Service Names & Prices
In `index.html`, find the Services section:
```html
<div class="service-item">
    <h3>Custom Scripting</h3>
    <p>Starting at $50</p>
    <button onclick="openPayment('scripting', 50)" class="btn btn-primary">Order Now</button>
</div>
```

**To change:**
1. Change `<h3>` text to service name
2. Change `$50` to your price
3. Change both instances of `50` to your price
4. Keep 'scripting' the same (used in code)

### Change Email
Search for `nicholasbella300@gmail.com` and replace with your email in:
- `index.html` (contact section)
- `script.js` (payment system)
- `README.md` (documentation)

---

## 🎨 Style Changes

### Change Colors
Edit `styles.css` and find this section:
```css
:root {
    --primary-color: #6366f1;        /* Main color */
    --secondary-color: #ec4899;      /* Accent color */
    --dark-bg: #0f172a;              /* Dark background */
    --light-bg: #f1f5f9;             /* Light background */
    --text-dark: #1e293b;            /* Dark text */
    --text-light: #64748b;           /* Light text */
}
```

Pick new colors (use https://htmlcolorcodes.com to find hex codes).

### Change Fonts
In `styles.css`, find `body` section:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Popular font families:
- `'Arial', sans-serif` - Clean and simple
- `'Georgia', serif` - Professional
- `'Trebuchet MS', sans-serif` - Modern
- `'Comic Sans MS', cursive` - Fun (not recommended for professional)

### Change Button Size
In `styles.css`, find `.btn`:
```css
.btn {
    padding: 0.75rem 2rem;  /* Change these numbers */
}
```
- First number = top/bottom padding
- Second number = left/right padding
- Larger = bigger button

### Change Border Radius (Roundness)
In `styles.css`, find `.btn`:
```css
border-radius: 0.5rem;  /* Change this */
```
- `0rem` = square corners
- `0.5rem` = slightly rounded (current)
- `1rem` = very rounded
- `2rem` = circles for small elements

---

## 🏗️ Adding New Sections

### Add a New Service

1. In `index.html`, find the services grid:
```html
<div class="services-list">
    <!-- Services go here -->
</div>
```

2. Copy and paste an existing service block:
```html
<div class="service-item">
    <h3>Your Service Name</h3>
    <p>Starting at $100</p>
    <button onclick="openPayment('yourservice', 100)" class="btn btn-primary">Order Now</button>
</div>
```

3. Update:
   - Service name in `<h3>`
   - Price in `<p>`
   - Both instances of price in button (first is ID, second is amount)

### Add a New Skill Card

In the About section, find:
```html
<div class="services-grid">
    <!-- Skill cards go here -->
</div>
```

Add:
```html
<div class="service-card">
    <h3>Your Skill</h3>
    <p>Description of your skill</p>
</div>
```

### Add a New Section

After contact section, add:
```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2>My Portfolio</h2>
        <!-- Your content here -->
    </div>
</section>
```

Then in CSS, add styling:
```css
.portfolio {
    padding: 4rem 2rem;
    background: white;
}

.portfolio h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--primary-color);
}
```

---

## 🔗 Add Social Links

Find the contact section and add:
```html
<div class="social-links">
    <a href="https://twitter.com/yourname" target="_blank">Twitter</a>
    <a href="https://instagram.com/yourname" target="_blank">Instagram</a>
    <a href="https://github.com/yourname" target="_blank">GitHub</a>
</div>
```

Then add CSS:
```css
.social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
}

.social-links a {
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}
```

---

## 📸 Add Images

### Add to Hero Section
In `index.html`, before `</section>` in hero:
```html
<img src="your-image.jpg" alt="Description" class="hero-image">
```

Then in CSS:
```css
.hero-image {
    max-width: 300px;
    border-radius: 1rem;
    margin-top: 2rem;
}
```

### Add Portfolio Gallery
```html
<section class="portfolio">
    <div class="container">
        <h2>My Work</h2>
        <div class="gallery">
            <img src="image1.jpg" alt="Project 1">
            <img src="image2.jpg" alt="Project 2">
            <img src="image3.jpg" alt="Project 3">
        </div>
    </div>
</section>
```

CSS:
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.gallery img {
    width: 100%;
    border-radius: 1rem;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
}
```

---

## 🎯 Change Commission Amounts

Edit tip jar amounts in `index.html`:
```html
<button onclick="openTipJar(5)" class="btn btn-secondary">$5</button>
<button onclick="openTipJar(10)" class="btn btn-secondary">$10</button>
<button onclick="openTipJar(20)" class="btn btn-secondary">$20</button>
<button onclick="openTipJar(50)" class="btn btn-secondary">$50</button>
```

Change numbers to your preferred amounts.

---

## ✏️ Edit Navigation Menu

In `index.html`, find:
```html
<ul class="nav-menu">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#commissions">Commissions</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

**To add link:**
```html
<li><a href="#portfolio">Portfolio</a></li>
```

**To remove link:**
Delete the entire `<li>...</li>` line.

---

## 🚨 Common Mistakes to Avoid

❌ **DON'T:**
- Delete `<div class="container">` - breaks layout
- Remove `id="section-name"` - breaks navigation links
- Delete `<script src="script.js"></script>` - breaks functionality
- Delete closing tags `</div>`, `</section>`, `</p>`

✅ **DO:**
- Keep file names exact (index.html, styles.css, script.js)
- Keep folder structure same
- Test in browser after changes
- Backup original files first

---

## 🧪 Testing Changes

After making changes:

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Refresh browser** (F5 or Cmd+R)
3. **Hard refresh** to clear cache (Ctrl+Shift+R or Cmd+Shift+R)
4. **Check mobile view** (F12, then mobile icon)
5. **Test all buttons** to ensure they work

---

## 💾 Backup Your Work

Before making big changes:

1. Right-click the file
2. Select "Duplicate"
3. Rename to "filename-backup.html"
4. Make changes to original
5. If something breaks, restore from backup

---

## 📖 HTML Structure Reference

```
<section>                  ← Start of section
  <div class="container">  ← Keeps content centered
    <h2>Title</h2>         ← Section heading
    <p>Text</p>            ← Paragraph
    <button>...</button>    ← Button
    <a href="">Link</a>    ← Link
  </div>
</section>                 ← End of section
```

---

## 🎓 Learning Resources

- HTML: https://www.w3schools.com/html/
- CSS: https://www.w3schools.com/css/
- Colors: https://htmlcolorcodes.com
- Fonts: https://fonts.google.com

---

## 🆘 Need Help?

If something breaks:
1. Check spelling of file names
2. Verify all tags are closed
3. Check for missing quotes
4. Validate HTML: https://validator.w3.org/

---

That's it! You can customize almost anything without breaking the website. Have fun! 🎨
