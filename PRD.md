# Product Requirements Document
## R.R Eye Centre - Landing Page

---

## 1. PROJECT OVERVIEW

**Project Name:** R.R Eye Centre Website  
**Business Type:** Eyewear Retail + Eye Care Services  
**Location:** NandanPura, Jhansi City, Uttar Pradesh  
**Contact:** 9343787439  
**Primary Goal:** Drive foot traffic to the physical store with an elegant, premium brand presence  
**Target Audience:** Local residents in Jhansi seeking fashion eyewear and prescription glasses

---

## 2. BRAND POSITIONING

**Brand Promise:** "See Better, Look Better"

**Key Differentiators:**
- **Experience** - Owner is a doctor at government hospital
- **Affordability** - Competitive pricing without compromise
- **Quality** - Reliable products with professional service

**Tone & Feel:** Elegant, professional, trustworthy, premium yet approachable

---

## 3. DESIGN SYSTEM

### Color Palette
```css
/* Light Mode */
--primary: hsl(0 55.7789% 39.0196%)      /* Warm red */
--secondary: hsl(43.0769 90.6977% 91.5686%) /* Soft yellow */
--background: hsl(24 33.3333% 97.0588%)   /* Cream */
--accent: hsl(48.0000 96.4912% 88.8235%)  /* Golden yellow */
--foreground: hsl(0 0% 10.1961%)          /* Dark gray */
```

### Typography
- **Headings:** Libre Baskerville (serif) - elegant, classic
- **Body:** Poppins (sans-serif) - modern, readable
- **Accent:** IBM Plex Mono (monospace) - technical touch

### Visual Style
- Clean, spacious layouts with breathing room
- Soft shadows for depth
- Warm, elegant aesthetic
- Mobile-first responsive design
- Bento grid layout for modern appeal

---

## 4. WEBSITE STRUCTURE - BENTO GRID LAYOUT

### Layout Philosophy
A bento grid creates visual hierarchy through varied card sizes, making the page feel dynamic and premium. Cards can be different heights and widths, creating an elegant, asymmetric layout.

---

### SECTION 1: Hero Section
**Layout:** Full-width hero banner (not part of bento grid)

**Content:**
```
Headline: "See Better, Look Better"
Subheadline: "Premium Eyewear & Professional Eye Care in Jhansi"
CTA Primary: "Visit Our Store"
CTA Secondary: "Call Now" → tel:+919343787439
Background: Elegant eyewear hero image (placeholder)
```

**Design Specs:**
- Height: 70vh on desktop, 60vh on mobile
- Overlay: Subtle gradient for text contrast
- Animation: Fade-in on load
- CTA buttons: Primary (solid red), Secondary (outline)

---

### SECTION 2: Why Choose Us (Bento Grid)
**Layout:** 3-column bento grid on desktop, 1-column stack on mobile

**Grid Structure:**
```
Desktop (3 columns):
┌─────────────┬─────────────┬─────────────┐
│             │             │             │
│   Expert    │   Quality   │  Affordable │
│    Care     │  Products   │   Pricing   │
│             │             │             │
│  (Medium)   │  (Medium)   │  (Medium)   │
└─────────────┴─────────────┴─────────────┘
```

**Content:**

**Card 1: Expert Care**
```
Icon: Medical cross / Stethoscope
Heading: "Expert Care"
Body: "Our team, led by a qualified doctor from a government hospital, provides professional eye testing and personalized consultations. Your vision is in trusted hands."
Badge: "Doctor-Led"
```

**Card 2: Quality Products**
```
Icon: Award / Quality badge
Heading: "Quality Products"
Body: "From trendy sunglasses to precision prescription glasses, we offer a wide selection of quality eyewear that combines style with functionality."
Badge: "Premium Selection"
```

**Card 3: Affordable Pricing**
```
Icon: Price tag / Rupee symbol
Heading: "Affordable Pricing"
Body: "We believe everyone deserves clear vision and great style. That's why we offer competitive prices without compromising on quality."
Badge: "Best Value"
```

**Design Specs:**
- Equal height cards
- Subtle shadow on hover
- Icons: 48px, primary color
- Padding: 32px
- Background: White cards on cream background

---

### SECTION 3: Our Services (Bento Grid)
**Layout:** Asymmetric bento grid - 2 large + 4 small cards

**Grid Structure:**
```
Desktop (3 columns × 2 rows):
┌─────────────────────┬─────────────────────┬───────────┐
│                     │                     │           │
│  Fashion Eyewear    │ Prescription Glasses│ Eye Check │
│     (Large)         │      (Large)        │  (Small)  │
│                     │                     │           │
├───────────┬─────────┴───────────┬─────────┴───────────┤
│           │                     │                     │
│   Kids    │   Sports & Safety   │   Blue Light       │
│ (Small)   │      (Medium)       │     (Medium)       │
│           │                     │                     │
└───────────┴─────────────────────┴─────────────────────┘
```

**Content:**

**Large Card 1: Fashion Eyewear**
```
Icon: Sunglasses (large, 64px)
Heading: "Fashion Eyewear"
Body: "Elevate your style with our curated collection of fashionable sunglasses and frames. From classic to contemporary, find the perfect pair."
Background: Gradient overlay on image
Image: Stylish sunglasses showcase (placeholder)
CTA: "Explore Styles" (subtle link)
```

**Large Card 2: Prescription Glasses**
```
Icon: Eyeglasses (large, 64px)
Heading: "Prescription Glasses"
Body: "Custom-made lenses tailored to your exact prescription. Distance, reading, computer glasses, or specialized eyewear - we've got you covered."
Background: Gradient overlay on image
Image: Prescription glasses display (placeholder)
CTA: "Get Your Prescription" (subtle link)
```

**Small Card 3: Eye Checkup**
```
Icon: Eye / Medical cross
Heading: "Eye Checkup"
Body: "Professional eye testing with modern equipment"
Background: Solid primary color with white text
```

**Small Card 4: Kids Eyewear**
```
Icon: Child with glasses
Heading: "Kids Eyewear"
Body: "Safe, durable, and fun designs for children"
Background: Solid accent color
```

**Medium Card 5: Sports & Safety**
```
Icon: Shield
Heading: "Sports & Safety"
Body: "Protective eyewear for sports and work. UV protection and impact resistance."
Background: White card
```

**Medium Card 6: Blue Light Glasses**
```
Icon: Computer screen
Heading: "Blue Light Protection"
Body: "Reduce digital eye strain with our computer glasses. Essential for modern work."
Background: White card
```

**Design Specs:**
- Large cards: 2 columns wide, image background
- Medium cards: 1 column wide, standard height
- Small cards: 1 column wide, compact height
- Gap between cards: 16px
- All cards have rounded corners (8px)
- Hover effect: Lift + shadow

---

### SECTION 4: How It Works (Bento Grid)
**Layout:** 4-column horizontal flow

**Grid Structure:**
```
Desktop (4 equal columns):
┌────────────┬────────────┬────────────┬────────────┐
│            │            │            │            │
│  Step 1    │  Step 2    │  Step 3    │  Step 4    │
│  Visit Us  │ Eye Checkup│ Choose     │  Custom    │
│            │            │  Frames    │  Fitting   │
└────────────┴────────────┴────────────┴────────────┘
```

**Content:**

**Step 1: Visit Us**
```
Number: "01"
Icon: Location pin
Heading: "Visit Us"
Body: "Step into our store in NandanPura and explore our collection in person."
```

**Step 2: Eye Checkup**
```
Number: "02"
Icon: Eye / Medical
Heading: "Eye Checkup"
Body: "Get a professional eye examination if you need prescription lenses."
```

**Step 3: Choose Frames**
```
Number: "03"
Icon: Glasses / Frame
Heading: "Choose Frames"
Body: "Browse and try our wide range of stylish and comfortable frames."
```

**Step 4: Custom Fitting**
```
Number: "04"
Icon: Checkmark / Tools
Heading: "Custom Fitting"
Body: "We'll create your perfect glasses with precision-made lenses."
```

**Design Specs:**
- Connected with dotted line or arrow
- Number in large serif font (Libre Baskerville), primary color
- Icon: 40px, secondary color
- Cards have subtle background, no shadows
- Progressive reveal on scroll (animation)

---

### SECTION 5: Gallery Showcase (Bento Grid)
**Layout:** Asymmetric masonry-style grid

**Grid Structure:**
```
Desktop (4 columns × 3 rows - Pinterest style):
┌───────┬───────────┬───────┬───────────┐
│       │           │       │           │
│  Img1 │   Img2    │ Img3  │   Img4    │
│       │ (tall)    │       │ (tall)    │
├───────┴───────┬───┴───────┴───────┬───┤
│               │                   │   │
│     Img5      │       Img6        │I7 │
│    (wide)     │      (wide)       │   │
├───────┬───────┴───────┬───────────┴───┤
│       │               │               │
│  Img8 │      Img9     │     Img10     │
│       │   (landscape) │  (landscape)  │
└───────┴───────────────┴───────────────┘
```

**Content:**
```
Headline: "Discover Your Style"
Subheadline: "Explore our collection of eyewear that blends fashion with function"

Images (10 placeholders):
1. Fashion sunglasses - portrait
2. Shop interior testing area - tall
3. Kids eyewear close-up - portrait
4. Prescription glasses wall - tall
5. Lifestyle shot with sunglasses - wide landscape
6. Multiple frames display - wide landscape
7. Blue light glasses on desk - square
8. Sports eyewear - portrait
9. Elegant frame close-up - landscape
10. Customer trying frames - landscape
```

**Design Specs:**
- Varied aspect ratios for visual interest
- Subtle zoom on hover
- Rounded corners (8px)
- Optional lightbox on click
- Gap: 12px
- Mobile: 2 columns, equal heights

---

### SECTION 6: Location & Contact (Bento Grid)
**Layout:** 2-column asymmetric layout

**Grid Structure:**
```
Desktop (2 columns, 60/40 split):
┌───────────────────────────────┬─────────────────┐
│                               │                 │
│        Google Map             │  Contact Info   │
│         (Large)               │    (Medium)     │
│                               │                 │
│                               │  • Address      │
│        Embedded Map           │  • Phone        │
│        or Map Image           │  • Hours        │
│                               │  • Directions   │
│                               │                 │
└───────────────────────────────┴─────────────────┘
```

**Content:**

**Left Card: Map**
```
Embedded Google Map
Location: R.R Eye Centre, NandanPura, Jhansi
Fallback: Static map image with marker
Height: 500px
Interactive: Yes (zoom, pan)
```

**Right Card: Contact Information**
```
Heading: "Visit Us Today"
Tagline: "Experience the difference at R.R Eye Centre"

Address:
R.R Eye Centre
NandanPura, Jhansi
Uttar Pradesh

Contact:
📞 Phone: 9343787439 (clickable: tel:+919343787439)
💬 WhatsApp: 9343787439 (clickable: https://wa.me/919343787439)

Working Hours:
Monday - Saturday: 10:00 AM - 8:00 PM
Sunday: Closed
[Note: Placeholder hours, update when confirmed]

CTA Buttons:
1. "Call Now" (Primary button, large)
2. "WhatsApp Us" (Secondary button, large)
3. "Get Directions" (Link to Google Maps)
```

**Design Specs:**
- Map card: Minimal padding, full bleed image
- Contact card: Generous padding (40px), white background
- Phone/WhatsApp buttons: Large, icon + text, easy to tap
- Mobile: Stack vertically, map on top
- Icons next to each piece of info

---

### SECTION 7: Footer
**Layout:** Simple centered footer, not bento grid

**Content:**
```
Logo/Brand: "R.R Eye Centre"
Tagline: "Your Vision, Our Expertise"

Quick Links:
• About Us
• Services  
• Contact

Contact:
📞 9343787439
📍 NandanPura, Jhansi

Copyright: © 2024 R.R Eye Centre. All rights reserved.

Optional:
Social Media Icons (placeholder for future)
- Facebook
- Instagram
- WhatsApp
```

**Design Specs:**
- Background: Dark gray or primary color (dark mode)
- Text: White or cream
- Padding: 48px vertical
- Center-aligned
- Minimal design

---

## 5. RESPONSIVE BREAKPOINTS

### Desktop (1024px+)
- Full bento grid layouts as specified
- Multi-column grids
- Hover effects enabled

### Tablet (768px - 1023px)
- Services: 2 columns instead of 3
- How It Works: 2 × 2 grid
- Gallery: 3 columns
- Contact: 2 columns maintained

### Mobile (320px - 767px)
- All bento grids collapse to single column
- Cards stack vertically
- Hero: 60vh height
- Buttons: Full width
- Gallery: 2 columns only
- Map: Reduced height (300px)

---

## 6. INTERACTIVE ELEMENTS

### Animations
1. **Hero:** Fade-in on page load (0.8s)
2. **Cards:** Slide-up on scroll (staggered, 0.3s delay between)
3. **Hover:** Lift effect on cards (translateY -4px)
4. **CTAs:** Scale on hover (1.05x)

### Micro-interactions
- Phone number: Ripple effect on tap
- WhatsApp button: Pulse animation (subtle)
- Gallery images: Smooth zoom on hover (1.1x)
- Service cards: Shadow intensity increase on hover

---

## 7. COPY & CONTENT

### Hero Section
```
Headline: "See Better, Look Better"
Subheadline: "Premium Eyewear & Professional Eye Care in Jhansi"
```

### Services Copy

**Fashion Eyewear:**
"Elevate your style with our curated collection of fashionable sunglasses and frames. From classic aviators to contemporary designs, find the perfect pair that reflects your personality."

**Prescription Glasses:**
"Get custom-made lenses tailored to your exact prescription. Whether you need distance vision, reading glasses, specialized eyewear for computers, or long-range glasses, we've got you covered with precision optics."

**Eye Checkup:**
"Comprehensive eye testing using modern equipment. Our expert team, led by a qualified government hospital doctor, will assess your vision and recommend the best solutions for your eye health."

**Kids Eyewear:**
"Safe, durable, and fun eyewear designed for children. Because young eyes deserve the best care, protection, and style as they grow."

**Sports & Safety:**
"Protective eyewear for sports and work. Stay safe while staying active with our specialized range featuring UV protection and impact resistance."

**Blue Light Glasses:**
"Protect your eyes from digital strain. Perfect for those long hours in front of computer screens. Essential for modern work and study."

### Contact Section
```
Headline: "Visit Us Today"
Subheadline: "Experience the difference at R.R Eye Centre"

Body: "Ready to find your perfect eyewear? Visit our store in NandanPura, Jhansi. Our expert team is here to help you see clearly and look great."
```

---

## 8. TECHNICAL SPECIFICATIONS

### Platform
**Builder:** Google AntiGravity (no-code)

### Performance Requirements
- Page load time: < 3 seconds
- Mobile performance score: > 85
- Image optimization: WebP format preferred
- Lazy loading: Enabled for all images below fold

### SEO Optimization
```
Title: "R.R Eye Centre - Premium Eyewear & Eye Care in Jhansi"

Meta Description: "Visit R.R Eye Centre in NandanPura, Jhansi for stylish eyewear and professional eye care. Expert service, quality products, affordable prices. Call 9343787439"

Keywords: eyewear jhansi, specs shop jhansi, eye checkup jhansi, prescription glasses jhansi, sunglasses jhansi, nandanpura opticals

H1: "R.R Eye Centre - Premium Eyewear in Jhansi"
H2: Multiple (Why Choose Us, Our Services, How It Works, etc.)
```

### Accessibility
- Alt text for all images
- WCAG AA contrast compliance
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on interactive elements

### Mobile Optimization
- Touch targets: Minimum 48×48px
- Click-to-call enabled: `tel:+919343787439`
- WhatsApp deep link: `https://wa.me/919343787439`
- Viewport meta tag configured
- No horizontal scrolling

---

## 9. PLACEHOLDER IMAGE REQUIREMENTS

### Image Specifications

**Hero Image** (1920×1080)
- Subject: Elegant eyewear display with warm lighting
- Style: Premium, professional
- Mood: Inviting, sophisticated

**Service Card Images** (800×600)
- Fashion Eyewear: Stylish sunglasses on display
- Prescription Glasses: Professional glasses collection
- Background: Soft, neutral

**Gallery Images** (Various sizes)
- All images: High-quality, professional
- Color tone: Warm, inviting
- Style: Consistent aesthetic across all

**Icons** (SVG, line-style)
- Medical cross, Eye, Glasses, Sunglasses
- Child, Shield, Computer, Location
- Award, Price tag, Checkmark
- Style: Consistent line weight (2px)
- Color: Primary or secondary from theme

---

## 10. CALL-TO-ACTION STRATEGY

### Primary CTA
**"Visit Our Store"**
- Placement: Hero section, Services section
- Style: Solid primary color, white text
- Size: Large (48px height on mobile)

### Secondary CTA  
**"Call Now"**
- Placement: Hero section, Contact section, sticky mobile button
- Style: Outline or secondary color
- Link: `tel:+919343787439`
- Icon: Phone icon

### Tertiary CTA
**"WhatsApp Us"**
- Placement: Contact section
- Style: WhatsApp green (#25D366)
- Link: `https://wa.me/919343787439`
- Icon: WhatsApp icon

### CTA Design Principles
- High contrast with background
- Clear, action-oriented text
- Icons for quick recognition
- Adequate white space around buttons
- Hover/active states for feedback

---

## 11. DEVELOPMENT CHECKLIST

### Phase 1: Setup
- [ ] Create Google AntiGravity project
- [ ] Import custom theme (colors, fonts)
- [ ] Set up responsive breakpoints
- [ ] Configure basic SEO settings

### Phase 2: Build Sections
- [ ] Hero section with CTAs
- [ ] Why Choose Us (3-card bento)
- [ ] Services (6-card asymmetric bento)
- [ ] How It Works (4-step process)
- [ ] Gallery (masonry bento grid)
- [ ] Contact & Map (2-column layout)
- [ ] Footer

### Phase 3: Content
- [ ] Add all copy/text content
- [ ] Insert placeholder images
- [ ] Add icons for services
- [ ] Configure Google Maps embed

### Phase 4: Functionality
- [ ] Test click-to-call: `tel:+919343787439`
- [ ] Test WhatsApp link: `https://wa.me/919343787439`
- [ ] Test map interactions
- [ ] Test "Get Directions" button
- [ ] Add smooth scroll (if supported)

### Phase 5: Polish
- [ ] Add animations (fade-in, slide-up)
- [ ] Implement hover effects
- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Optimize images for web
- [ ] Add loading indicators if needed

### Phase 6: Testing
- [ ] Test on real mobile device (Android)
- [ ] Test on real mobile device (iOS)
- [ ] Test on tablet
- [ ] Test on desktop (Chrome, Firefox)
- [ ] Test all CTAs work properly
- [ ] Check page load speed
- [ ] Verify accessibility (keyboard nav, contrast)

### Phase 7: Launch Prep
- [ ] Final review of all content
- [ ] Share preview with shop owner
- [ ] Collect feedback
- [ ] Make final adjustments
- [ ] Prepare for future photo replacement

---

## 12. POST-LAUNCH ROADMAP

### Immediate (Week 1-2)
- Get testimonial/review from shop owner
- Replace placeholder images with real photos
- Visit shop to take professional photos
- Add real working hours

### Short-term (Month 1)
- Add customer testimonials
- Create Google My Business listing
- Link website to GMB
- Add real product photos

### Medium-term (Month 2-3)
- Instagram integration (if shop starts posting)
- Add "Featured Products" section
- Implement basic analytics
- Collect customer feedback

### Long-term (Month 3+)
- Consider online appointment booking
- Add promotional banners (for offers)
- Expand gallery with customer photos
- Consider blog/tips section

---

## 13. SUCCESS METRICS

### Portfolio Goals
- ✅ Professional-looking landing page
- ✅ Real business use case
- ✅ Demonstrates design skills
- ✅ Shows understanding of business needs

### Business Goals
- Drive foot traffic to physical store
- Increase phone inquiries (9343787439)
- Establish online presence
- Build brand credibility

### Future Tracking (Optional)
- Page views
- Click-through rate on "Call Now"
- WhatsApp conversation starts
- Google Maps direction requests

---

## 14. NOTES & REMINDERS

### Key Points
1. **Mobile-first:** Most users in Jhansi will view on mobile
2. **Click-to-call is critical:** Make phone/WhatsApp buttons prominent
3. **Elegant, not flashy:** Premium feel, not over-designed
4. **Fast loading:** Compress all images, optimize performance
5. **Real photos matter:** Plan to replace placeholders ASAP

### Conversation with Shop Owner
When showing the site, emphasize:
- Professional online presence
- Easy for customers to find and contact
- Shows all services clearly
- Mobile-friendly design
- No cost to them (built for portfolio)

### Portfolio Presentation
When showcasing this project:
- Explain the business context
- Show mobile and desktop versions
- Highlight the bento grid design choice
- Mention client satisfaction (after getting feedback)
- Show before/after (no website → professional site)

---

## 15. DESIGN INSPIRATION

### Bento Grid References
- Apple.com (services section)
- Stripe.com (feature showcases)
- Linear.app (product pages)

### Eyewear Industry References
- Warby Parker (clean, modern)
- Ray-Ban (premium feel)
- Lenskart (Indian market understanding)

### Color & Style Direction
- Warm, inviting tones (reds, oranges, creams)
- Elegant serif headings
- Clean sans-serif body text
- Generous white space
- Subtle shadows and depth

---

## 16. FINAL THOUGHTS

This landing page is designed to:
- Showcase R.R Eye Centre as a premium, professional business
- Make it incredibly easy for customers to visit or contact
- Work perfectly on mobile devices (primary use case)
- Serve as a strong portfolio piece
- Be easily updatable with real content later

The bento grid layout gives it a modern, design-forward feel that stands out from typical local business websites, while remaining functional and user-friendly.

---

**Ready to build! 🚀**

Use this PRD as your complete blueprint. Build section by section in Google AntiGravity, and you'll have a professional landing page that drives real results.