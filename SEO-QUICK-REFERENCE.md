# SEO Quick Reference Guide

## Files You Need to Know

| File | Purpose | Location |
|------|---------|----------|
| `robots.txt` | Tells search engines what to crawl | `/public/robots.txt` |
| `sitemap.xml` | Lists all pages for search engines | `/public/sitemap.xml` |
| `layout.tsx` | Global metadata + schema | `app/layout.tsx` |
| `page.tsx` | Homepage metadata | `app/page.tsx` |
| `recruitment/page.tsx` | Recruitment page (NEW) | `app/recruitment/page.tsx` |
| `contact/page.tsx` | Contact page metadata | `app/contact/page.tsx` |

---

## Meta Tags Implemented

### Homepage
```
Title: "Recruitment Services India | Prodesk Solutions"
Description: "Prodesk Solutions provides recruitment services for startups and growing businesses. We help you hire thoughtfully with a fit-first approach to recruitment consultancy."
Canonical: https://prodesksolutions.in
```

### Recruitment Page
```
Title: "Recruitment Services | Recruitment Consultancy | Prodesk Solutions"
Description: "Our recruitment services help startups and growing businesses hire thoughtfully. We offer recruitment consultancy with a fit-first approach to hiring. Learn about our recruitment process and how we source candidates."
Canonical: https://prodesksolutions.in/recruitment
```

### Contact Page
```
Title: "Contact Prodesk | Recruitment Services"
Description: "Get in touch with Prodesk Solutions. We're here to discuss your recruitment needs and hiring support. Contact us today for a consultation."
Canonical: https://prodesksolutions.in/contact
```

---

## Keywords Optimization

### Primary Keywords (Integrated)
```
✓ recruitment services (3-4x per page)
✓ recruitment consultancy (2x)
✓ hiring services (2x)
✓ hiring support (2x)
✓ recruitment services India (1x homepage)
✓ fit-based hiring (2x)
✓ talent acquisition services (1x)
✓ recruitment for startups (1x)
```

### Where They're Used
```
Meta Titles: 2-3 keywords each
Meta Descriptions: 2-3 keywords each
H1: 1 main keyword
H2s: Natural keyword variations
Body Content: 1-2x per section
Links: Keywords in anchor text
Footer: 3 keyword-rich links
```

---

## Schema.org Structured Data

### Organization
```json
{
  "name": "Prodesk Solutions",
  "url": "https://prodesksolutions.in",
  "telephone": "+919321146067",
  "email": "Prodesksolutions1710@gmail.com",
  "areaServed": "India"
}
```

### Service (Recruitment Page)
```json
{
  "type": "Service",
  "name": "Recruitment Services",
  "serviceType": "Recruitment Consultancy",
  "areaServed": "India"
}
```

### FAQ (Recruitment Page)
3 FAQs structured for Google rich snippets

---

## Internal Links Structure

### Navigation
```
Home → Recruitment Services (link added)
       → How We Work
       → Why Prodesk
       → About
       → Contact Us
```

### Footer (High Authority)
```
Services:
  - Recruitment Services → /recruitment
  - Recruitment Consultancy → /recruitment
  - Hiring Support → /recruitment
```

### Homepage
```
Intro paragraph includes: 
"Learn more about our recruitment services and consultancy approach"
→ Links to /recruitment
```

---

## Google Search Console TODO

```
1. Create property: https://search.google.com/search-console
2. Add: https://prodesksolutions.in
3. Verify ownership (DNS, HTML file, or meta tag)
4. Submit sitemap: https://prodesksolutions.in/sitemap.xml
5. Monitor: Coverage tab for indexing status
6. Track: Keyword performance monthly
```

---

## Google Analytics TODO

```
1. Create property: https://analytics.google.com
2. Add tracking code to layout.tsx
3. Deploy to GitHub
4. Wait 24-48 hours
5. Check: Realtime → Overview
6. Track: Users, traffic sources, pages
```

---

## Keyword Ranking Targets

| Keyword | Current | Target (3-6 months) |
|---------|---------|-------------------|
| recruitment services | Not indexed | Top 3 |
| recruitment services India | Not indexed | Top 3 |
| recruitment consultancy | Not indexed | Top 3 |
| hiring services | Not indexed | Top 5 |
| hiring support | Not indexed | Top 5 |
| fit-based hiring | Not indexed | Page 1 |

---

## Mobile Responsiveness

✅ Mobile-first design
✅ Responsive images
✅ Touch-friendly buttons
✅ Fast on mobile networks
✅ Proper viewport settings

---

## Page Speed Optimization

✅ Next.js automatic code splitting
✅ Image lazy loading
✅ CSS minification
✅ JavaScript minification
✅ Next.js Image component

---

## Monthly SEO Checklist

```
Week 1:
[ ] Check Google Search Console coverage
[ ] Review Google Analytics traffic
[ ] Monitor top keywords

Week 2:
[ ] Check for crawl errors in GSC
[ ] Review top-performing pages

Week 3:
[ ] Analyze traffic sources
[ ] Check mobile usability

Week 4:
[ ] Review keyword rankings
[ ] Plan content updates
[ ] Look for optimization opportunities
```

---

## Common SEO Issues & Fixes

| Issue | Fix |
|-------|-----|
| Not indexed | Check robots.txt, verify in GSC, check coverage |
| Low clicks | Improve meta description, check CTR |
| No impressions | Add internal links, check indexing |
| Slow page | Compress images, check Lighthouse |
| Mobile issues | Test on mobile, check viewport settings |

---

## Useful URLs

| Tool | URL |
|------|-----|
| Google Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |
| Google Business Profile | https://business.google.com |
| Your Sitemap | https://prodesksolutions.in/sitemap.xml |
| Your robots.txt | https://prodesksolutions.in/robots.txt |
| Lighthouse (Speed Test) | https://developers.google.com/web/tools/lighthouse |
| Mobile Test | https://search.google.com/test/mobile-friendly |

---

## Documentation Files

| File | What It Contains |
|------|-----------------|
| `SEO-SUMMARY.md` | Overview of all changes |
| `SEO-IMPLEMENTATION-GUIDE.md` | Detailed technical guide |
| `SEO-CHECKLIST.md` | Task checklist |
| `GOOGLE-SETUP-GUIDE.md` | Step-by-step Google setup |

---

## Key Metrics to Track

```
Daily:
- Site is up and loading

Weekly:
- Page speed (target: < 3 sec)
- Mobile score (target: > 90)

Monthly:
- Keyword rankings
- Organic traffic
- Click-through rate
- User engagement
- Conversion rate
```

---

## Remember

✅ SEO takes **3-6 months** to show results
✅ Consistent optimization is key
✅ Track metrics monthly
✅ Update content regularly
✅ Build backlinks gradually
✅ Monitor competitors
✅ Keep human tone (no AI fluff)

---

**Status:** Ready to deploy
**Last Updated:** January 3, 2026

Good luck! 🚀
