# EvenntHive Developer Quick Reference

## 🎨 Brand Colors (Quick Copy)

```css
/* Background */
background: #181818;

/* Primary (Buttons & Highlights) */
background: #F8B000;

/* Header & Footer */
background: #2A4145;

/* Text */
color: #ededed;
```

## 🎯 Tailwind Classes for Brand Colors

Use these Tailwind classes throughout the app:

```tsx
// Background
className="bg-background"

// Primary button
className="bg-primary hover:bg-primary-hover"

// Header/Footer
className="bg-header-footer"

// Text
className="text-foreground"
```

## ✍️ Spelling Reminder

**ALWAYS USE**: EvenntHive (double 'n')  
**NEVER USE**: EventHive, Eventhive, EvenHive

## 📍 Geography Focus

When writing content, reference:
- **Primary Cities**: Grand Island, Kearney, Hastings
- **Region**: Central Nebraska
- **Characteristic**: At least 1 hour from major metros

## 🗣️ Voice & Tone Checklist

**Approachable Expertise**
- [ ] Clear and accessible language
- [ ] Professional but not intimidating
- [ ] Helpful for beginners, credible for pros

**Connector Energy**
- [ ] Optimistic tone
- [ ] Solution-focused
- [ ] Grounded in real logistics
- [ ] Empowering language

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 📂 Key Files

| File | Purpose |
|------|---------|
| `brand.config.ts` | Single source of truth for brand DNA |
| `app/globals.css` | Brand colors and global styles |
| `app/layout.tsx` | Site-wide metadata and fonts |
| `/docs` | Brand voice and content strategy docs |

## 🎨 Design Patterns

### Button (Primary)
```tsx
<button className="bg-primary hover:bg-primary-hover text-background font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
  Click Me
</button>
```

### Button (Secondary)
```tsx
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 rounded-lg transition-all">
  Learn More
</button>
```

### Card
```tsx
<div className="bg-background p-8 rounded-lg border border-header-footer hover:border-primary transition-colors">
  {/* Content */}
</div>
```

### Section Header
```tsx
<h2 className="text-3xl font-bold text-foreground text-center mb-12">
  Section Title
</h2>
```

## 🧩 Component Structure

Keep components organized:

```
app/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections (Hero, Features, etc.)
│   └── layout/       # Layout components (Header, Footer)
├── lib/              # Utilities and helpers
└── [route]/          # Route-specific pages
```

## 📝 Content Writing Tips

1. **Start with the user benefit**: What's in it for Grand Island, Kearney, or Hastings residents?
2. **Use active voice**: "Connect with vendors" not "Vendors can be connected with"
3. **Be specific**: Reference actual cities and challenges
4. **Stay optimistic**: Acknowledge challenges, then provide solutions
5. **Include calls-to-action**: Guide users to the next step

## 🔧 Troubleshooting

**Colors not showing?**
- Check that `app/globals.css` is imported in `app/layout.tsx`
- Verify Tailwind classes match those defined in `@theme inline`

**TypeScript errors?**
- Run `npx tsc --noEmit` to check for type issues
- Check that `next-env.d.ts` exists

**Page not updating?**
- Clear `.next` folder: `rm -rf .next` (Mac/Linux) or `rmdir /s .next` (Windows)
- Restart dev server

## 🌟 Quick References

- **Local dev**: http://localhost:3000
- **Brand config**: [brand.config.ts](file:///c:/Users/DEV%20PROFILE/Dev/Projects/evennthive-web/brand.config.ts)
- **Main docs**: [/docs](file:///c:/Users/DEV%20PROFILE/Dev/Projects/evennthive-web/docs)

---

*Keep this guide handy for consistent development!*
