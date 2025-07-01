
🛠️ Technology PRD: Hartanto Foundation Website Redesign

Version: 1.1
Owner: Hartanto Foundation Tech Team
Last Updated: 2025-06-30

⸻

🎯 Objective

Redesign the Hartanto Foundation’s official website with a modern, mobile-first, and accessible design using Next.js and Tailwind CSS. The goal is to enhance public awareness of the foundation’s work against human trafficking, improve engagement, and simplify navigation for donors, partners, and beneficiaries.

⸻

🧱 Tech Stack

Layer	Technology	Purpose
Frontend Framework	Next.js (v15+)	React-based framework with SSR and routing
Styling	Tailwind CSS v4	Utility-first CSS for responsive design
Optional CMS	Sanity / Contentful / Strapi	Headless CMS integration (future phase)
Carousel Library	Swiper.js	Hero slider with touch & autoplay support
Hosting	Vercel or Netlify	JAMstack CI/CD and deployment
Media Optimization	Next.js <Image> / Cloudinary	For performance-optimized images


⸻

🗺️ Sitemap (Revised Based on Original Website)

Page	Path	Description
Home CLC FHD	/	Hero carousel, foundation intro, highlights, key CTAs
Mission and Objectives	/mission	Foundation’s vision, values, and objectives
Meditation Center	/meditation-center	Programs and initiatives for inner peace and rehabilitation
Scholarship	/scholarship	Scholarship criteria, application steps, and stories
Donate to CLC	/donate	Donation methods, recurring gift options, fundraising campaigns
Press & Media	/press-media	Articles, press kits, photo galleries, and event media
Contact Us	/contact	Contact form, address, Google Map embed, social media links


⸻

🎨 Design Language

🎨 Color Palette

Role	Hex	Description
Primary	#003049	Navy blue for header/footer & trust
Accent / CTA	#D62828	Crimson red for buttons & highlights
Background	#FDF0D5	Soft beige to keep warm & hopeful tone
Borders & Elements	#E0E0E0	Light gray for subtle structure
Text / Clean	#FFFFFF	For sections and contrast

Typography
•	Headings: Serif font (e.g., Playfair Display)
•	Body text: Clean sans-serif (e.g., Inter or Open Sans)

⸻

📱 Mobile-First Responsive Design
•	Built using Tailwind’s responsive utilities (sm, md, lg, etc.)
•	Mobile menu as hamburger + animated slide-in
•	Carousel and call-to-action buttons must be fully touch-friendly
•	Image-heavy sections use responsive layouts with aspect ratio control

⸻

🎠 Hero Section: Carousel Slider

Features:
•	Swiper.js integration
•	Auto-play (with 5s interval) and manual navigation
•	Each slide includes:
•	Background image with gradient overlay
•	Headline text (e.g., mission statement or campaign message)
•	Subtitle or tagline
•	Primary CTA button (e.g., “Learn More”, “Donate Now”)

⸻

🔌 Optional: CMS Integration (Phase 2)

To allow non-technical staff to update:
•	Hero images and headlines
•	News / media posts
•	Scholarship info

CMS	Notes
Sanity	Flexible, real-time content editing
Contentful	Easy UI, secure model schema
Strapi	Self-hosted, fully customizable

Implementation:
•	Use getStaticProps or getServerSideProps to fetch from CMS
•	Consider static regeneration for press/media section

⸻

✅ Functional Requirements
•	SEO-optimized meta tags (OG + Twitter Cards)
•	Accessible navigation (keyboard-friendly, screen reader ready)
•	Embed Google Maps in Contact page
•	Integrated donation buttons (external links or Stripe)
•	Image optimization and lazy loading
•	Lighthouse performance score ≥ 90

⸻

🧪 Non-Functional Requirements
•	⚡ Fast load time (< 2.5s FCP on 3G)
•	🔒 Secure HTTPS-only content with CSP
•	🌐 Easily expandable to multilingual support (i18n ready)
•	🔁 Vercel automatic preview deployments for PRs

⸻

🗓️ Project Phases

Phase	Deliverables
Phase 1	Core site (static content), hero slider, responsive design
Phase 2	CMS integration for content (press, media, carousel, text blocks)
Phase 3	Add multilingual support, animations, enhanced accessibility


⸻
