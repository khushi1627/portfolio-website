# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Designed for BCA students and Full Stack Web Developers to showcase their skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Sticky Navigation**: Easy access to all sections
- **Interactive Components**: Hover effects and micro-interactions
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized assets and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with dark mode toggle
│   ├── Hero.jsx        # Landing section with intro
│   ├── About.jsx       # About section with bio
│   ├── Skills.jsx      # Technical skills with progress bars
│   ├── Projects.jsx    # Project showcase with filters
│   ├── Resume.jsx      # Resume and experience section
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with social links
├── pages/
│   └── Home.jsx        # Main page component
├── assets/
│   └── images/         # Image assets
├── App.jsx             # Root component
└── index.css           # Global styles and Tailwind
```

## 🎨 Sections

1. **Navbar**: Sticky navigation with theme toggle and social links
2. **Hero**: Introduction with profile image and CTA buttons
3. **About**: Personal bio, education, and career objectives
4. **Skills**: Technical skills categorized with progress indicators
5. **Projects**: Project showcase with filtering and live demos
6. **Resume**: Experience, education, and certifications
7. **Contact**: Contact form with validation
8. **Footer**: Social links and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **Hero.jsx**: Update name, tagline, and social links
2. **About.jsx**: Update bio, education, and career objective
3. **Skills.jsx**: Adjust skill levels and add new technologies
4. **Projects.jsx**: Replace with your actual projects
5. **Resume.jsx**: Update experience, education, and certifications
6. **Contact.jsx**: Update contact information
7. **index.html**: Update meta tags and title

### Adding Your Projects

1. Replace project data in `Projects.jsx`
2. Add project images to `src/assets/images/`
3. Update GitHub and live demo links

### Profile Image

1. Replace `src/assets/images/profile.jpg` with your photo
2. Recommended size: 400x400px
3. Use high-quality, professional photo

## 🌟 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🎨 Customization Tips

### Colors

Update the Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Fonts

The project uses Inter font. Update in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Animations

Customize animations in `index.css` or component files using Framer Motion.

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for beautiful icons

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
