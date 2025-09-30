# Nischella Reddy Konda - Portfolio

A premium, cinematic single-page portfolio showcasing data science expertise with 3D background effects, unique animations, and accessible design.

## 🚀 Tech Stack

- **React 18** with **Vite** for blazing-fast development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for buttery-smooth animations
- **react-three-fiber + drei** for subtle 3D background effects
- **Radix UI** for accessible primitives
- **Lucide React** for beautiful icons
- **TypeScript** for type safety

## 🎨 Features

- ✨ **Cinematic Preloader** - "L O A D I N G" animation with parallax letters
- 🌐 **3D Background** - Subtle low-poly particle system with cursor parallax
- 🎭 **Unique Section Animations** - Each section has distinct animation personality
- 📊 **Creative Skill Meters** - Honeycomb fill, shard bar, and glyph meters
- 🎯 **3D Project Cards** - Hover-tilt cards with glare effects
- 🎓 **Flip-Card Education** - Interactive flip animation
- 📱 **Accessible Mobile Menu** - ARIA-compliant with focus trap and body scroll lock
- 🌓 **Light/Dark Theme** - Respects `prefers-color-scheme` with localStorage persistence
- ⚡ **Performance Optimized** - Code splitting, lazy loading, <2.5s LCP
- ♿ **Accessible** - Semantic HTML, ARIA labels, focus management, skip-to-content

## 🎨 Design System

**Color Palette** (No blue/purple/violet):
- Deep Charcoal `#0B0F19`
- Emerald `#22C55E`
- Lime `#84CC16`
- Amber `#F59E0B`
- Tangerine `#F97316`
- Crimson `#DC2626`
- Warm Gray `#1F2937` / `#374151`

**Animations:**
- 250-600ms transitions with spring easing
- Header with friction and shadow morph
- Hero with staggered text reveal
- Timeline with magnetic nodes
- Swipeable project cards
- Flip-card education
- Floating labels in contact form

## 📁 Project Structure

```
src/
├── components/
│   ├── Preloader.tsx         # Cinematic loading animation
│   ├── Background3D.tsx      # 3D particle background
│   ├── Header.tsx            # Sticky header with mobile menu
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # Type-in about section
│   ├── Experience.tsx        # Timeline with expandable cards
│   ├── Skills.tsx            # Three creative meters
│   ├── Projects.tsx          # 3D hover-tilt cards
│   ├── Education.tsx         # Flip-card animation
│   ├── Certifications.tsx    # Grid of certificates
│   ├── Contact.tsx           # Contact form + info
│   └── Footer.tsx            # Footer with social links
├── data/
│   └── content.ts            # All portfolio data (editable)
├── hooks/
│   └── useTheme.tsx          # Theme toggle hook
└── pages/
    └── Index.tsx             # Main page composition
```

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add profile image:**
   - Place your profile photo at `public/assets/profile.jpg`
   - Recommended: 400x400px or larger, circular crop

4. **Edit content:**
   - Open `src/data/content.ts`
   - Update all personal information, experience, skills, projects, etc.

5. **Start development server:**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:8080](http://localhost:8080)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or use the Vercel dashboard:
1. Import your GitHub repository
2. Vercel auto-detects Vite
3. Click "Deploy"

### Deploy to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Follow the prompts

Or drag and drop `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

## 🎯 Content Editing

All content is in `src/data/content.ts`. Edit this single file to update:
- Personal information
- Work experience
- Skills & percentages
- Projects
- Education
- Certifications
- Contact details

## ♿ Accessibility

- **Keyboard Navigation:** Full keyboard support with visible focus states
- **Screen Readers:** ARIA labels, semantic HTML, alt text on images
- **Reduced Motion:** Respects `prefers-reduced-motion` media query
- **Color Contrast:** WCAG AA compliant in both themes
- **Focus Management:** Skip-to-content link, focus trap in mobile menu

## 🔧 Performance

- **Code Splitting:** Dynamic imports for optimal bundle size
- **Image Optimization:** Lazy loading with proper sizing
- **Tree Shaking:** Only imports used components
- **3D Performance:** Limited draw calls, paused on tab blur
- **Lighthouse Score:** ≥90 across all categories on mid-range mobile

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Nischella Reddy Konda**
- Email: knischella14@gmail.com
- LinkedIn: [linkedin.com/in/nischellak](https://www.linkedin.com/in/nischellak)
- Portfolio: [nischellareddykonda-applywizz.vercel.app](https://nischellareddykonda-applywizz.vercel.app/)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
