# Dr Mahir Ibon — Single-page medical portfolio

A responsive, single-page portfolio for `mahiribon.hydrospec.info`, built with plain HTML, CSS, and JavaScript. There is no build step or framework.

## Files
- `index.html` — all sections in one page, SEO metadata, structured data, contact form
- `assets/style.css` — responsive design, animation, mobile layout
- `assets/app.js` — bilingual toggle, mobile navigation, scroll progress, reveal animation
- `robots.txt` and `sitemap.xml` — search engine basics

## Publish with GitHub + Cloudflare Pages
1. Extract the ZIP.
2. Upload the contents of this folder to the root of a new GitHub repository. `index.html` must be in the repository root.
3. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
4. Use the following settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` or `.` (choose the root directory option Cloudflare presents)
5. Deploy, then open the Pages project and add the custom domain `mahiribon.hydrospec.info`.
6. Follow Cloudflare's DNS instructions if it does not configure the record automatically.

## Before launch
- The hero image is currently an illustrated placeholder, not a real portrait. Replace the `.portrait-placeholder` element in `index.html` with an `<img>` using a real, approved professional photo and add suitable `object-fit` CSS. No photo was invented or included.
- CV download is intentionally omitted until the CV is edited and supplied.
- No awards, clinical procedures, or BMDC registration details have been invented. Add them only after confirmation.
- Check all contact details before publishing.

## Contact form
The form uses FormSubmit (`https://formsubmit.co/mahiribon@hydrospec.info`). On the first test submission, FormSubmit may send an activation/confirmation email to that inbox. Open it and activate the form, then submit a second test. Test delivery and check spam before sharing the site publicly. FormSubmit is a third-party service; its availability and privacy terms apply.

## Bilingual content
The top-right language control toggles the English and Bangla copy already included in the page. Update both `data-en` and `data-bn` values together when editing bilingual text.

## Important accuracy notes
- Wording states that the MBBS final examination was passed in 2026 and that internship is in progress, as provided.
- The clinical interest is described as surgery; no specialty is claimed.
- BMDC registration is not claimed or implied.
- The CV and achievements are not shown as complete because the required verified content was not supplied.
- This is a professional introduction, not a medical advice or appointment-booking website.


## Recent refinements
- Added the supplied portrait to the hero card (`assets/mahir-ibon.jpg`).
- Added SSC and HSC education milestones from the supplied CV.
- Added a canonical URL and social preview image metadata.
- Added an optimized white-coat portrait (`assets/mahir-ibon-clinical.jpg`) for the redesigned CV PDF, provided separately.
- Private family details, blood group, religion, height, date of birth, and exact residential address are intentionally not published on the public website.


### CV PDF
The portfolio includes `assets/mahir-ibon-cv.pdf`, viewable in the CV section and downloadable from the hero and CV section buttons.


### Latest update
The CV uses the newly supplied white-coat portrait. Subtle rounded corners have been added to the CV portrait and common website UI elements.
