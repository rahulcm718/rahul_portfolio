# Cricket Analyst Portfolio Website

A professional, modern portfolio website for cricket analysts showcasing projects, skills, and experience in cricket data analytics and statistical modeling.

## 🎯 Features

- **Responsive Design**: Mobile-friendly, works on all devices
- **Modern UI**: Clean, professional dark theme with smooth animations
- **Interactive Contact Form**: Backend-powered email integration
- **Project Showcase**: Display cricket analytics projects with detailed descriptions
- **Skills Section**: Organized technical and domain-specific skills
- **Navigation**: Smooth scrolling navigation bar
- **API Backend**: Express.js server for handling contact submissions

## 📁 Project Structure

```
rahul_portfolio/
├── index.html              # Main HTML file
├── style.css               # Enhanced styling
├── script.js               # Frontend interactivity
├── server.js               # Express backend server
├── package.json            # Node.js dependencies
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── assets/
    └── ProfilePic.jpeg    # Profile picture (200x200px)
```

## 🖼️ Image Recommendations & Setup

### Profile Picture (Required)
- **Location**: `assets/ProfilePic.jpeg`
- **Dimensions**: 200x200 pixels (square format)
- **Format**: JPEG or PNG
- **Quality**: High-quality professional headshot
- **Recommendations**:
  - Use a professional photo with a clean background
  - Neutral lighting, facing camera
  - Business casual or formal attire
  - Crop to focus on face and shoulders

### Project Images (Optional but Recommended)
Create these images in `assets/` folder:
- `project1.png` - Screenshot of IPL analysis dashboard
- `project2.png` - Chart showing win probability model results
- `project3.png` - Player rating visualization

**Specifications**:
- Dimensions: 600x400 pixels (or larger)
- Format: PNG with transparency preferred
- Quality: 72 DPI for web

### How to Add Images to Your Portfolio

#### Add Project Images to HTML
Modify the project cards in `index.html` to include images:

```html
<div class="project-card">
    <img src="assets/project1.png" alt="IPL Analytics" class="project-image">
    <div class="project-badge">Analytics</div>
    <h3>IPL Performance Analytics</h3>
    ...
</div>
```

#### Add CSS for Project Images
Add this to `style.css`:

```css
.project-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    margin: -30px -30px 20px -30px;
}
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git (optional)

### 1. Install Dependencies

```bash
cd r:\rahul_portfolio
npm install
```

### 2. Configure Environment Variables

Edit `.env` file:

```env
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**For Gmail Email Integration**:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the 16-character password in `.env`

### 3. Run the Server

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

Server will run at: `http://localhost:3000`

## 📊 How to Update Portfolio Content

### Update Personal Information
Edit `index.html`:
- Change name, title, and description in hero section
- Update About section content
- Modify contact email/links in Contact section

### Update Skills
Replace or add skills in the Skills section:
```html
<div class="skill-card">
    <i class="fas fa-icon-name"></i>
    <h4>Skill Name</h4>
    <p>Skill description</p>
</div>
```

Available Font Awesome icons: https://fontawesome.com/icons

### Update Projects
Edit project cards with:
- New project titles
- Updated descriptions
- Latest technologies used
- Links to GitHub/live demos

## 🔗 API Endpoints

### Contact Form
**POST** `/api/contact`

Request body:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here"
}
```

### Portfolio Data
**GET** `/api/portfolio`

Returns structured portfolio information as JSON.

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #38bdf8;        /* Main accent color */
    --secondary-color: #0ea5e9;      /* Hover color */
    --dark-bg: #0f172a;              /* Background */
    --card-bg: #1e293b;              /* Card background */
    --text-light: #f1f5f9;           /* Text color */
}
```

### Change Fonts
Update font-family in `style.css`:

```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

### Add More Sections
Use existing section structure:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2>New Section Title</h2>
        <!-- Content -->
    </div>
</section>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔒 Security Notes

- Never commit `.env` file with real credentials
- Use environment variables for sensitive data
- Validate all user inputs on backend
- Use HTTPS in production

## 📈 Future Enhancements

- [ ] Add database to store contact submissions
- [ ] Create admin dashboard for content management
- [ ] Implement project gallery with filters
- [ ] Add blog section for cricket analytics insights
- [ ] Integrate with GitHub API to show repositories
- [ ] Add testimonials/recommendations section
- [ ] Implement email notifications for form submissions
- [ ] Create dark/light theme toggle

## 🌐 Deployment

### Deploy to Netlify
1. Build static files (no build step needed)
2. Connect GitHub repository
3. Deploy frontend to Netlify
4. Deploy backend to separate service (Heroku, Render, etc.)

### Deploy to Heroku (Backend)
```bash
heroku create your-portfolio-api
git push heroku main
```

### Environment Variables on Heroku
```bash
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASS=your_app_password
```

## 📞 Contact Information

- **Email**: rahulcm718@gmail.com
- **GitHub**: github.com/rahulcm718
- **LinkedIn**: linkedin.com/in/rahul-c-m-21902b258/

## 📝 License

MIT License - Feel free to use this template for your own portfolio

## 🎓 Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Express.js Documentation](https://expressjs.com/)
- [Nodemailer Guide](https://nodemailer.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive)

---

Made with ❤️ for Cricket Analytics
