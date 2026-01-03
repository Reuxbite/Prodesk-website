# Google Search Console & Analytics Setup Guide

## Step 1: Submit to Google Search Console

### Why?
Google Search Console is the direct line between your website and Google. It helps you:
- Monitor if pages are indexed
- See which keywords bring traffic
- Fix crawl errors
- Submit your sitemap

### How to Set Up

1. **Go to:** https://search.google.com/search-console

2. **Sign in** with your Google account (create one if needed)

3. **Add Property:**
   - Click "Add property"
   - Enter: `https://prodesksolutions.in`
   - Click "Continue"

4. **Verify Ownership** (Choose one method):

   **Method A: DNS TXT Record** (Recommended)
   - Google gives you a TXT record
   - Go to GoDaddy DNS settings
   - Add the TXT record
   - Return to GSC and click "Verify"
   - This takes 5-30 minutes

   **Method B: HTML File**
   - Download HTML file from GSC
   - Upload to `/public/` folder in your project
   - Push to GitHub
   - Return to GSC and click "Verify"

   **Method C: Meta Tag**
   - Copy meta tag from GSC
   - Add to `app/layout.tsx` `<head>`
   - Push to GitHub
   - Return to GSC and click "Verify"

5. **Verify Successfully?** ✅
   - You'll see your property dashboard

### Submit Sitemap

After verification:

1. In Google Search Console, go to **Sitemaps** (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for processing (usually instant)

You should see:
- Status: "Success"
- URLs submitted: 3

### Monitor Indexing

1. Go to **Coverage** (left menu)
2. You should see:
   - Valid: 3 (or increasing)
   - Excluded: 0
   - Error: 0

If pages aren't indexed after 2 weeks:
- Check "Status" tab for errors
- Request indexing by clicking "Inspect URL"
- Click "Test live URL"
- Then "Request indexing"

## Step 2: Set Up Google Analytics

### Why?
Google Analytics tracks:
- How many people visit your site
- Where they're coming from
- What pages they view
- How long they stay
- Whether they contact you

### How to Set Up

1. **Go to:** https://analytics.google.com

2. **Create Account:**
   - Click "Start measuring"
   - Name: "Prodesk Solutions"
   - Website: "prodesksolutions.in"
   - Industry: "Business & Professional Services"
   - Or similar

3. **Create Web Stream:**
   - Name: "Main Website"
   - URL: `https://prodesksolutions.in`
   - Click "Create Stream"

4. **Copy Tracking Code:**
   - You'll get a Measurement ID: `G-XXXXXXXXXX`
   - Keep this safe

5. **Add to Website:**
   - For Next.js, add to `app/layout.tsx`:
   ```tsx
   // Add this in the <head> section
   <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
   <script
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `,
     }}
   />
   ```
   - Replace `G-XXXXXXXXXX` with your Measurement ID

6. **Push to GitHub:**
   - Commit and push your changes
   - Wait for deployment (5 minutes)

7. **Verify it's working:**
   - Go to https://prodesksolutions.in
   - In Google Analytics, go to **Realtime** → **Overview**
   - You should see "1 user" = you visiting the site
   - If it shows your visit, it's working! ✅

### Wait for Data
- Analytics takes 24-48 hours to collect meaningful data
- Be patient, it will start showing data after 1-2 days

## Step 3: Create Google Business Profile

### Why?
Google Business Profile helps with:
- Google Maps visibility
- Local search rankings
- Customer reviews
- Business information display

### How to Set Up

1. **Go to:** https://business.google.com

2. **Claim Your Business:**
   - Search: "Prodesk Solutions"
   - If found: Click "Claim this business"
   - If not found: Click "Create a business"

3. **Fill in Information:**
   - Business name: `Prodesk Solutions`
   - Category: `Recruitment Service` (or `Recruitment Consultancy`)
   - Phone: `+91 9321146067`
   - Email: `Prodesksolutions1710@gmail.com`
   - Website: `https://prodesksolutions.in`
   - Address: (Add if you have a physical office)

4. **Verify Ownership:**
   - Google usually sends a postcard
   - Or verify via phone/email
   - Follow the instructions Google provides

5. **Complete Your Profile:**
   - Add business hours: Mon-Fri, 9:00 AM - 6:00 PM IST
   - Add photos
   - Add service areas (if applicable)
   - Write a short description

6. **Request Reviews:**
   - Ask clients to leave reviews
   - Google Business Profile ratings help rankings

## Step 4: Monitor Your Keywords

### Monthly Check-in

In **Google Search Console**:

1. Go to **Search Results** (left menu)
2. Look at **Queries** tab
3. See which keywords bring traffic
4. Note the top performers

### Keywords to Track

```
Primary Keywords:
- recruitment services
- recruitment consultancy
- hiring services
- recruitment services India
- hiring support
- talent acquisition services
- recruitment for startups
- fit-based hiring

Target:
- Position: Top 3
- Impressions: Growing month over month
- Click-through rate: > 3%
```

### Create Spreadsheet
Track monthly:
- Date
- Keyword
- Position (rank in Google)
- Impressions (how many saw it)
- Clicks (how many clicked)
- CTR (click-through rate)

## Step 5: Monitor Analytics

### Weekly Check-in

In **Google Analytics**:

1. Go to **Home** dashboard
2. Check:
   - **Users:** How many people visited
   - **Sessions:** Total visits
   - **Pages per session:** Engagement
   - **Avg. session duration:** How long they stayed
   - **Bounce rate:** % of people who left immediately

### Goals to Set Up

In Google Analytics, create goals for:
- Contact form submission
- Specific page visits (e.g., recruitment page)
- Scroll depth (people reading content)

## Step 6: Long-term SEO Monitoring

### Weekly Tasks
- [ ] Check if site is up
- [ ] Monitor page load speed

### Monthly Tasks
- [ ] Review Google Search Console data
- [ ] Check keyword rankings
- [ ] Review Google Analytics traffic
- [ ] Look for new keyword opportunities
- [ ] Check for crawl errors

### Quarterly Tasks
- [ ] Review top-performing pages
- [ ] Optimize underperforming pages
- [ ] Analyze competitor sites
- [ ] Update stale content
- [ ] Check for broken links

## Expected Timeline

```
Day 1: Set up GSC + Analytics
Day 1-7: Wait for indexing
Week 2: First data in Analytics
Week 2-4: First keywords start ranking
Month 1: See initial traffic
Month 2-3: Keywords moving into top 10
Month 3-6: Keywords in top 3
Month 6+: Stable growth
```

## Quick Links

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Google Business Profile: https://business.google.com
- GoDaddy DNS: https://www.godaddy.com/
- Your Sitemap: https://prodesksolutions.in/sitemap.xml
- Your robots.txt: https://prodesksolutions.in/robots.txt

## Troubleshooting

### Pages Not Indexed?
- Check Google Search Console → Coverage tab
- Look for errors
- Click "Inspect URL" to test
- Click "Request Indexing"
- Wait 1-2 weeks

### No Analytics Data?
- Verify tracking code is on site
- Check if Measurement ID is correct
- Go to your site in a new tab
- Check Realtime → Overview in Analytics
- Wait 24-48 hours for data

### Rankings Not Improving?
- This is normal! SEO takes 3-6 months
- Keep writing good content
- Build more internal links
- Keep optimizing for keywords
- Be patient 🙂

## Questions?

Contact Google Support:
- Search Console Help: https://support.google.com/webmasters
- Analytics Help: https://support.google.com/analytics
- Business Profile Help: https://support.google.com/business

---

**Remember:** SEO is a marathon, not a sprint. Results take 3-6 months to show. Keep optimizing, monitoring, and improving!

Good luck! 🚀
