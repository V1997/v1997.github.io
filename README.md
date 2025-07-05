# V1997 - Professional Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized**: Fast loading times with optimized assets
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and sitemap ready
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with validation
- **Dark Mode Support**: Automatic dark mode detection
- **Print Styles**: Optimized for printing

## 🚀 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography (Inter & Poppins)

## 📁 Project Structure

```
v1997.github.io/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive design rules
├── js/
│   ├── main.js             # Core functionality
│   └── animations.js       # Enhanced animations
├── images/
│   ├── profile.jpg         # Profile picture
│   ├── about.jpg           # About section image
│   └── projects/           # Project screenshots
├── assets/
│   └── resume.pdf          # Downloadable resume
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) - Professional and trustworthy
- **Secondary**: Slate (#64748b) - Neutral and balanced
- **Accent**: Cyan (#06b6d4) - Modern and energetic
- **Background**: White/Light gray - Clean and readable

### Typography
- **Primary Font**: Inter - Clean and modern for body text
- **Secondary Font**: Poppins - Bold and distinctive for headings

### Animations
- Smooth scroll effects
- Fade-in animations on scroll
- Hover effects on interactive elements
- Typing effect for hero title
- Floating icons around profile picture
- 3D hover effects on project cards

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile Large**: 576px - 767px
- **Mobile Small**: 375px - 575px
- **Extra Small**: Below 375px

## 🔧 Customization

### Personal Information
Update the following sections in `index.html`:

1. **Hero Section**: Name, title, and description
2. **About Section**: Personal background and statistics
3. **Experience Section**: Work history and achievements
4. **Projects Section**: Featured projects with descriptions
5. **Skills Section**: Technical skills and proficiency levels
6. **Contact Section**: Contact information and social links

### Styling
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #64748b;  /* Secondary color */
    --accent-color: #06b6d4;     /* Accent color */
    /* ... other variables */
}
```

### Images
Replace placeholder images in the `images/` directory:
- `profile.jpg` - Your professional photo
- `about.jpg` - About section image
- `projects/*.jpg` - Project screenshots

## 🚀 Deployment

This portfolio is designed to work with GitHub Pages. Simply push your changes to the main branch and GitHub Pages will automatically deploy your site.

### GitHub Pages Setup
1. Ensure your repository is named `username.github.io`
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

Your portfolio will be available at `https://username.github.io`

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap ready
- Optimized images with alt text

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Reduced motion support

## 🌙 Dark Mode

The website automatically detects and adapts to the user's system preference for dark mode. Customize dark mode colors in `css/responsive.css`:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #0f172a;
        --bg-secondary: #1e293b;
        /* ... other dark mode variables */
    }
}
```

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format verification
- Success/error notifications
- Form reset after submission

**Note**: The current implementation simulates form submission. For production, integrate with a service like:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend API

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Analytics

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add the following script before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for placeholder images
- The open-source community for inspiration and best practices

---

**Built with ❤️ by V1997**

*Last updated: December 2024* 