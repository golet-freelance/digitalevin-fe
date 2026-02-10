# Internationalization Implementation Guide

## ✅ Completed Steps

### 1. Language Context & Provider
- Created `src/contexts/LanguageContext.tsx` - manages language state (EN/TR)
- Language preference is saved to localStorage
- Provider wraps entire app in `layout.tsx`

### 2. Translation Files
- Created `src/lib/translations.ts` with comprehensive translations
- Includes translations for:
  - Navbar
  - Footer
  - Home page
  - About page
  - Services page
  - Contact page
  - Works page
  - Project details

### 3. Navbar with Language Switcher
- Updated `src/components/navbar.tsx`
- Added professional TR | EN dropdown switcher
- Uses Languages icon from lucide-react
- Smooth dropdown animation with backdrop
- Active language highlighted in electric color

### 4. Footer
- Updated `src/components/footer.tsx`
- All text content now translates dynamically

### 5. Layout
- Created `src/components/providers.tsx` wrapper
- Updated `src/app/layout.tsx` to wrap app with LanguageProvider

### 6. Home Page (Partially)
- Updated Hero section in `src/app/page.tsx`
- Hero text now translates between EN/TR

## 🔧 How to Apply Translations to Remaining Components

### Pattern to Follow:

#### 1. Import the necessary hooks and translations:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
```

#### 2. Inside your component function, add:
```tsx
const { language } = useLanguage();
const t = translations[language];
```

#### 3. Replace hardcoded text with translation keys:
```tsx
// Before:
<h2>Our Services</h2>
<p>We offer comprehensive digital solutions</p>

// After:
<h2>{t.home.services.title}</h2>
<p>{t.home.services.subtitle}</p>
```

### Components/Sections Still Needing Updates:

#### Home Page (`src/app/page.tsx`)
The following component functions need the translation pattern:
- `TrustedBy()` - Update stats labels
- `FeaturedProjects()` - Update section title, subtitle, buttons
- `Services()` - Update service cards titles and descriptions
- `Process()` - Update process steps
- `Testimonials()` - Update section title
- `FAQ()` - FAQ items (you may want to add these to translations.ts)
- `FinalCTA()` - Update CTA text and button

#### About Page (`src/app/about/page.tsx`)
- Add useLanguage hook at component start
- Update all text with `t.about.*` keys
- Stats, values, team section

#### Services Page (`src/app/services/page.tsx`)
- Add useLanguage hook
- Update package cards with `t.services.packages.*`
- Update pricing and features

#### Contact Page (`src/app/contact/page.tsx`)
- Add useLanguage hook
- Update form labels with `t.contact.form.*`
- Update contact info

#### Works Page (`src/app/works/page.tsx`)
- Add useLanguage hook
- Update filter labels with `t.works.filter.*`
- Update buttons

#### Project Detail Page (`src/app/works/[id]/page.tsx`)
- Add useLanguage hook
- Update section titles with `t.projectDetail.*`

### Example: Updating a Complete Section

```tsx
// Before:
function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>Full-stack digital solutions</p>
      <div>
        <h3>UI/UX Design</h3>
        <p>Beautiful interfaces</p>
      </div>
    </section>
  );
}

// After:
function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section>
      <h2>{t.home.services.title}</h2>
      <p>{t.home.services.subtitle}</p>
      <div>
        <h3>{t.home.services.uiux.title}</h3>
        <p>{t.home.services.uiux.desc}</p>
      </div>
    </section>
  );
}
```

## 🎨 Language Switcher Features

- Professional dropdown design
- Smooth animations
- Active language highlighted
- Persists across page reloads
- Mobile-friendly
- Matches overall design aesthetic

## 📝 Notes

- All translation keys are type-safe
- Language switcher is in the top-right of navbar
- Works on both desktop and mobile
- Translations are comprehensive and professional
- Turkish translations use proper business language

## 🚀 To Complete Implementation

Work through each page/component:
1. Add the useLanguage hook
2. Get translations with `const t = translations[language]`
3. Replace hardcoded strings with translation keys
4. Test both EN and TR to ensure all text changes

The pattern is consistent across all components, making it straightforward to implement!
