# Portfolio Component Usage Guide

This document explains how to use the Portfolio component as a reusable React component.

## Basic Usage

```jsx
import Portfolio from './assets/components/Portfolio'

export default function App() {
  return <Portfolio />
}
```

## Component Structure

The Portfolio component is a self-contained, feature-complete portfolio that includes:

1. **Header** - Name, tagline, theme toggle, and CTA
2. **About Section** - Bio and skills with hover effects
3. **Work Experience** - Timeline of jobs with achievements
4. **Projects Grid** - Showcase of completed projects
5. **Contact Section** - Email-based contact CTA
6. **Footer** - Copyright and credits

## Customizing Data

### Update Work Experience

Open `src/assets/components/Portfolio.jsx` and modify the `WORK_EXPERIENCE` array:

```jsx
const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Senior React Developer",
    company: "Tech Company — Full-time",
    location: "San Francisco, CA",
    duration: "2 years",
    bullets: [
      "Led development of core features",
      "Mentored junior developers",
      "Improved performance by 40%",
    ],
  },
  // Add more jobs...
];
```

### Update Projects

Modify the `PROJECTS` array to showcase your work:

```jsx
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    desc: "Full-stack marketplace with payment processing and seller dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    url: "https://yourproject.com",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    desc: "Real-time analytics with interactive charts and data visualization.",
    tech: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    url: "https://yourproject.com",
  },
  // Add more projects...
];
```

### Update Skills

Find the skills array in the About section (around line 240) and customize:

```jsx
{[
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  // Add your skills
].map((s) => (...))}
```

### Update Contact Email

Search for `oluwaseyijimoh128@gmail.com` and replace with your email:

```jsx
// In the Contact section
<a href="mailto:your-email@example.com">
  Send me an Email
</a>
```

## Styling Customization

### Change Color Theme

The component uses gamer green (#00FF41) throughout. To change the theme:

1. **Global Color** - Replace all instances of:
   - `green-500` with `blue-500`
   - `green-600` with `blue-600`
   - `green-400` with `blue-400`
   - `green-700` with `blue-700`

2. **Color Values** - If using custom colors, update in styles:
   ```css
   /* In the <style> tag */
   box-shadow: 0 4px 12px rgba(0, 255, 65, 0.3);  /* Green */
   box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);  /* Blue */
   ```

### Modify Animation Speed

Adjust animation durations in the `<style>` tag:

```css
.fade-in {
  animation: fadeInUp 0.6s ease-out forwards;  /* Change 0.6s */
}

.gamer-btn:hover {
  transition: all 0.3s ease;  /* Change 0.3s */
}
```

### Change Font Sizes

Modify Tailwind classes for heading and text sizes:

```jsx
// Header
<h1 className="text-5xl sm:text-6xl font-semibold">  {/* Larger */}

// Section headings
<h2 className="text-3xl font-semibold">  {/* Larger */}
```

## Advanced Customization

### Add Social Media Links

In the Contact section, add social icons:

```jsx
<div className="mt-8 flex flex-col items-center gap-6">
  <a href="mailto:your-email@example.com" className="gamer-btn ...">
    Send me an Email
  </a>
  
  <div className="flex gap-3 mt-4">
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <span className="text-2xl">GitHub</span>
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <span className="text-2xl">LinkedIn</span>
    </a>
  </div>
</div>
```

### Customize Section Visibility

Hide sections by wrapping them in a conditional:

```jsx
{false && (
  <section id="projects">
    {/* Projects section */}
  </section>
)}
```

### Add Smooth Scroll Behavior

Add to your global CSS:

```css
html {
  scroll-behavior: smooth;
}
```

### Integrate with a Backend

To add a contact form that submits to a backend:

```jsx
// Replace the email link with a form
<form onSubmit={async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }),
  });
  // Handle response
}}>
  <input name="name" placeholder="Your Name" required />
  <input name="email" type="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Message" required />
  <button type="submit">Send</button>
</form>
```

## Dark Mode Customization

### Disable Dark Mode

Remove the theme toggle and simplify:

```jsx
// Remove this button
<button onClick={() => setDark(!dark)}>
  {dark ? "☀️ Light" : "🌙 Dark"}
</button>

// Change the main className
className="bg-white text-slate-900 min-h-screen"
// Or
className="bg-slate-900 text-slate-100 min-h-screen"
```

### Custom Theme Colors

Create a custom theme context if using this in multiple places:

```jsx
const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## Performance Optimization

The component already includes:
- Lazy scroll animations (Intersection Observer)
- CSS-based animations (GPU accelerated)
- Minimal re-renders with proper useState usage
- No unused dependencies

For additional optimization:
1. Memoize if needed: `React.memo(Portfolio)`
2. Use `useCallback` for event handlers if needed
3. Consider lazy loading images

## Browser Compatibility

The component supports:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

For older browsers, ensure Tailwind CSS 4 compatibility.

## Troubleshooting

### Styles not applying?
1. Ensure Tailwind CSS is installed: `npm install tailwindcss`
2. Check `tailwind.config.js` includes `src/**/*.jsx`
3. Import the component in a file with Tailwind CSS available

### Animations not working?
1. Check browser supports CSS animations
2. Ensure JavaScript is enabled
3. Check browser console for errors

### Dark mode not persisting?
Add localStorage persistence:

```jsx
const [dark, setDark] = useState(() => {
  return JSON.parse(localStorage.getItem('darkMode') ?? 'false')
})

useEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(dark))
}, [dark])
```

## Support

For issues, questions, or feature requests, visit the GitHub repository or email oluwaseyijimoh128@gmail.com
