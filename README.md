# Revival Fire Forge

Lovable Project Specification

ConquerWorld Apostolic Renaissance (CAR) Website

Project Overview

Build a modern, responsive website for ConquerWorld Apostolic Renaissance (CAR), a Spirit-led youth ministry dedicated to revival, evangelism, discipleship, and raising a generation on fire for Jesus Christ.

The website should present CAR as a vibrant global movement rather than a traditional church organization. It should inspire visitors through bold visuals, clear messaging, and engaging content while making it easy to connect with the ministry.

The primary objectives of the website are:

Introduce ConquerWorld Apostolic Renaissance to the world.

Make the Daily Devotional easily accessible.

Encourage visitors to submit prayer requests.

Promote upcoming ministry events.

Encourage financial partnership with the ministry.

Showcase the ministry's programs and vision.

All written content should be based on the ministry content provided, including the mission, vision, objectives, founder profile, programs, giving information, prayer requests, testimonies, and contact information.

Design Direction

The website should feel like a modern international youth revival movement.

Avoid the appearance of a traditional church website.

The visual style should communicate:

Revival

Fire

Hope

Victory

Youthfulness

Excellence

Global impact

Use:

cinematic full-screen hero sections

bold typography

flowing gradients

subtle glowing effects

smooth animations

modern cards

clean spacing

immersive imagery

The overall experience should feel energetic while remaining professional and easy to navigate.

Branding

Primary Colors

Orange (#FF6B00)

Deep Orange

Fire Gradient (Orange → Red → Gold)

Secondary Colors

White

Dark charcoal

Light cream backgrounds

Accent Colors

Gold

Warm glow effects

Typography

Use modern fonts such as:

Poppins

Inter

Space Grotesk

Headings should be large, bold, and inspiring.

Body text should prioritize readability.

Images

The ministry already has:

Official logo

Apostle John Wiseman photographs

Ministry photographs

Use these wherever appropriate.

For any missing imagery, use high-quality placeholders that reflect:

youth worship

revival meetings

evangelism

conferences

prayer

Bible study

outreach

Avoid generic church stock photos.

Technology Stack

Develop using:

Next.js (App Router)

React

TypeScript

Tailwind CSS

shadcn/ui

Framer Motion

React Hook Form

Zod

Google Sheets API

Resend (preferred) for emails

ESLint

Prettier

Do not build a traditional CMS or admin dashboard.

Content Management Strategy

Instead of building an admin dashboard or CMS, the website will use Google Sheets as its content management system.

This approach allows ministry staff to update website content using a familiar spreadsheet interface without requiring technical knowledge.

The website should securely read data from Google Sheets using a Google Service Account.

Sensitive credentials must remain on the server and must never be exposed to the browser.

The application should expose a dedicated service layer responsible for retrieving and transforming Google Sheets data before it is consumed by the website.

UI components should never communicate directly with Google Sheets.

The architecture should allow Google Sheets to be replaced with another backend in the future without affecting the rest of the application.

Google Sheets Integration

Create a private Google Spreadsheet for the ministry.

Each major type of content should have its own worksheet.

Worksheet 1 — Daily Devotionals

Columns:

ID

Date

Title

Scripture

Author

Featured Image URL

Summary

Full Content (Markdown supported)

WhatsApp Channel Link

Published (Yes/No)

Requirements:

Display only published devotionals.

Automatically identify the newest published devotional as Today's Devotional.

Support Previous and Next devotional navigation.

Render Markdown correctly.

Display featured images.

Display the WhatsApp Channel button using the URL stored in the sheet.

Worksheet 2 — Events

Columns:

ID

Event Name

Date

Time

Venue

Speaker

Description

Featured Image URL

Registration Link

Status (Upcoming, Past, Cancelled)

Published (Yes/No)

Requirements:

Display only published events.

Automatically separate Upcoming Events from Past Events.

Hide cancelled events unless configured otherwise.

Display countdown timers for upcoming events.

Display event images.

Worksheet 3 — Testimonials

Visitors submit testimonies through the website via email.

Approved testimonies are manually copied into this sheet.

Columns:

ID

Name

Testimony

Date

Photo URL

Published (Yes/No)

Only display approved testimonies.

Worksheet 4 — Ministry Resources

Future-proof the application by creating a worksheet for ministry resources.

Columns:

ID

Title

Category

Description

Download URL

Image URL

Published

Although only the Daily Devotional will initially use this structure, the architecture should make it easy to add books, study guides, sermon notes, and other resources later.

Google Sheets Architecture

Create reusable services for accessing spreadsheet data.

Suggested project structure:

/app
/components
/lib
    googleSheets.ts
    devotionals.ts
    events.ts
    testimonials.ts
/types


The Google Sheets service should:

authenticate with the Service Account

fetch worksheet data

validate the returned data

convert rows into typed objects

cache responses where appropriate

gracefully handle unavailable spreadsheets

All pages should consume data from these reusable services instead of querying Google Sheets directly.

Content Refresh Strategy

The website should be optimized for performance while still reflecting updates made in Google Sheets.

Use Next.js caching and Incremental Static Regeneration (ISR).

Recommended refresh interval:

Devotionals: every 15 minutes

Events: every 30 minutes

Testimonials: every hour

This avoids unnecessary API calls while ensuring updates appear automatically.

Future support for Google Sheets webhooks or manual cache revalidation should be easy to add.

Forms

Do not save form submissions in Google Sheets.

All forms should send emails directly to Apostle John using Resend.

Forms include:

Prayer Request

Fields:

Name

Email

Phone (optional)

Prayer Category

Prayer Request

Upon submission:

send a private email

display a success message

do not publish the request

Testimony Submission

Fields:

Name

Email

Testimony

Send as a private email.

Approved testimonies can later be copied into the Testimonials worksheet.

Contact Form

Fields:

Name

Email

Subject

Message

Send directly to the ministry email.

Each form should include:

server-side validation

spam protection (Cloudflare Turnstile preferred)

loading states

success messages

error handling

Website Pages

Home

Include:

Full-screen hero

Ministry tagline

Mission statement

Call-to-action buttons:

About Us

Submit Prayer Request

Read Today's Devotional

Additional sections:

About CAR

Mission

Vision

Core Values

Objectives

Programs

Upcoming Events

Latest Devotional

Testimonials

Partner With Us

Give

Prayer CTA

About CAR

Present:

Ministry story

Mission

Vision

Purpose

Objectives

Core Values

Scripture inspiration

Timeline of the ministry

Programs

Create visually engaging cards for:

Conferences

Online Courses

Youth for Jesus Devotional

Global Outreach

Market Evangelism

Door-to-Door Ministry

Campus Outreach

Radio Ministry

Bus/Taxi Evangelism

Each card should include:

image

icon

summary

Learn More button

Events

Display:

Upcoming Events

Past Events

Each event includes:

title

speaker

date

venue

description

featured image

Register button

Daily Devotional

Create an immersive reading experience.

Include:

featured image

title

scripture

devotional content

Previous/Next navigation

WhatsApp Channel button

Prayer Requests

Encouraging introduction.

Private submission form.

Clear confirmation after successful submission.

Testimonies

Display approved testimonies from Google Sheets.

Also provide a submission form that sends testimonies privately by email.

Partner With Us

Present partnership opportunities:

Prayer Support

Financial Giving

Mission Partnerships

Resource Support

Use inspiring imagery of outreach and revival.

Give

Create a dedicated giving page.

Present giving methods using attractive information cards:

MTN Mobile Money

Airtel Money

Bank Transfer

Include all giving details provided by the ministry.

Include a prominent Give Online button linking to the ministry's online giving page.

Contact

Display:

Address

Email addresses

Phone number

X

LinkedIn

Include:

Contact form

Embedded Google Map

Navigation

Sticky navigation.

Desktop menu:

Home

About

Programs

Events

Devotional

Prayer

Testimonies

Give

Contact

Mobile should use a modern animated full-screen menu.

Footer

Include:

Logo

Mission statement

Quick links

Contact information

Social media

Copyright

"Built for the Glory of God"

Animations

Use Framer Motion throughout the site.

Include:

fade-in on scroll

page transitions

hover animations

glowing buttons

animated counters

subtle floating backgrounds

gentle particle effects

Animations should enhance the experience without reducing performance.

Performance

The website should be:

mobile-first

fully responsive

SEO optimized

accessible (WCAG AA)

optimized images

optimized fonts

Lighthouse score above 95

Overall Experience

The final website should feel like the digital home of a global revival movement. Visitors should immediately understand the ministry's mission, be inspired to engage with its vision, read the Daily Devotional, submit prayer requests, participate in upcoming events, and partner financially. Every page should reflect excellence, spiritual passion, and the theme of revival and the fire of God while remaining fast, intuitive, and easy to maintain through Google Sheets.

This specification is detailed enough for Lovable to generate a high-quality first version while keeping the architecture simple, maintainable, and easy for the ministry to update without a CMS.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://conquer-world.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3f71d566-bbdf-4ee5-99b2-19d943bb69ec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
