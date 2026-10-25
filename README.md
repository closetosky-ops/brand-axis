# Brand Axis — reference build

This build treats the approved Brand Axis reference collage as the design source of truth.

## Pages
- `/` Home
- `/services.html` Services
- `/brand-analysis/` Brand Analysis
- `/content-direction/` Content Direction
- `/creative-production/` Creative Production
- `/about.html` About
- `/work.html` Work
- `/contact.html` Contact
- `/admin/` Portfolio admin

## Netlify
This is a static site. Use branch `main`, no build command, publish directory `.`.

## Portfolio admin
The Work page reads `data/work.json`. The `/admin/` page uses Decap CMS to edit that file and upload project images to `assets/uploads`.

To enable the same admin workflow used for Chicagoland Axis on Netlify:
1. Enable Netlify Identity.
2. Set registration to **Invite only**.
3. Enable **Git Gateway**.
4. Invite your email as an Identity user.
5. Visit `/admin/`, log in, open **Work → Portfolio Projects**, add/edit projects, and publish.

Categories are intentionally fixed to: Strategy, Content, Creative, Personal Brand, Business.

## Contact
- brand.axis@icloud.com
- (312) 631-1234
