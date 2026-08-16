# RTT Jogja Landing Page

## Project Definition

RTT Jogja Landing Page is the public home and work archive for RTT Jogja. It will be published at `https://rttjogja.github.io` from the root of this repository.

The site should answer two questions for a first-time visitor:

1. What is RTT Jogja and why does it exist?
2. What conversations, events, media, and projects has RTT Jogja produced?

This README is the canonical project definition. Update it whenever the product scope, content model, or publishing rules change.

## What RTT Jogja Is

RTT Jogja, or Round Table Talk Jogja, is a Yogyakarta community program that brings academia and industry together in an informal setting. It creates conversations, relationships, and practical opportunities around entrepreneurship, innovation, technology, hospitality, property management, education, and personal growth.

The concise mission published by the RTT Jogja channels is:

> Create more entrepreneurs in Jogja.

The broader program description emphasizes intellectual conversations with future leaders, university collaboration, and turning dialogue into development and opportunity.

## Website Goal

Create one credible, easy-to-browse place that:

- explains RTT Jogja's purpose and character;
- lists all publicly documented RTT Jogja work, rather than only selected highlights;
- preserves links to the original Instagram, YouTube, Bukit Vista, and GitHub sources;
- makes older work discoverable alongside current work;
- can be updated through AFK Research and published automatically from `main`.

## Content Language

The website is English-only for the first release. Navigation, explanations, archive summaries, metadata, and calls to action should use clear, accessible English.

Original Indonesian titles may remain unchanged when they are the published title of a source. An English summary should provide enough context without altering the original work.

## Primary Audiences

- Students and early-career people in Jogja who are interested in entrepreneurship and meaningful conversations.
- Academics, university organizations, industry practitioners, and potential collaborators.
- People who attended an RTT session and want to revisit or share its ideas.
- Anyone evaluating what RTT Jogja has already created.

## Proposed Site Structure

1. **Hero** - a clear statement of what RTT Jogja is, its mission, and a primary route into the archive.
2. **About RTT Jogja** - the academia-industry community model, the kinds of conversations RTT hosts, and why the program exists.
3. **Stories and Events** - individual Bukit Vista articles and other published event records, newest first.
4. **Videos** - videos from RTT Jogja and relevant older Bukit Vista Careers publications, newest first.
5. **Instagram Posts** - publicly available RTT Jogja Instagram posts, newest first.
6. **Public Projects** - all public RTT Jogja GitHub repositories and presentations, newest first.
7. **Themes** - entrepreneurship, innovation, technology and AI, leadership and organizations, education, hospitality, property management, and personal growth.
8. **Channels** - direct links to the official Instagram, YouTube, Bukit Vista archive, and GitHub organization.
9. **Follow or Join** - clear calls to follow RTT Jogja's channels, send an Instagram DM, or email `rttjogja@gmail.com` to contact the team or ask to join an RTT session.

## Calls to Action

The website has two primary visitor actions:

1. **Follow RTT Jogja** through [Instagram](https://www.instagram.com/rttjogja) and [YouTube](https://www.youtube.com/@rttjogja).
2. **Contact or join RTT** by sending an Instagram DM or emailing [rttjogja@gmail.com](mailto:rttjogja@gmail.com).

The site does not need a registration system for the first release. Requests to join an RTT session are handled personally by the team through DM or email.

## Content Model

Every archive entry should use the same basic record where the source provides the information:

- title;
- publication or event date;
- type: `event`, `story`, `video`, `project`, or `presentation`;
- short editorial summary;
- themes;
- people or partner organizations;
- thumbnail or preview image where reuse is permitted;
- original source name and URL;
- optional related entries when one event produced several posts or videos.

The archive uses separate sections for stories and events, videos, Instagram posts, and public projects. Entries are not mixed into one feed.

Each section is ordered newest first. Entries with a verified source date appear in descending date order within their section. Entries without a verified date appear after dated entries and must not be assigned a guessed date merely to control their position.

Archive entries are displayed as visual cards in a responsive grid. A card should include, when available:

- a source image or thumbnail that may be reused;
- the published title;
- the published or event date;
- a short English description;
- a visible source label such as YouTube, Instagram, Bukit Vista, or GitHub;
- one clear link to view the original publication.

Cards should still work when no reusable image is available. In that case, use a consistent source-specific visual treatment rather than inventing an image. On mobile, cards should form an easy-to-read single-column list; wider screens may use multiple columns.

Video entries are listings only. The website does not embed or play videos. Each video listing should show its published title, available date and summary information, source channel, and a link that opens the original YouTube video.

The original public URL remains the canonical source. The site is a record of what has already been published, not an attempt to reconstruct a separate authoritative event history.

Each archive entry should preserve the title, date, and description published by its own source. If Instagram, YouTube, Bukit Vista, or GitHub describe the same activity differently, the website keeps those source-specific details instead of choosing one version as the truth. Related entries may be connected so visitors can see that they concern the same activity.

The site may add a clearly identified English summary to help visitors browse the archive, but should not silently correct, combine, or invent source details. It must not rehost media without clear permission.

## Implementation Approach

The first release will be a build-free static website using:

- `index.html` for the page structure;
- `styles.css` for layout, visual design, and responsive behavior;
- `script.js` for archive rendering, newest-first sorting, mobile navigation, and show-all controls;
- `data.js` as the simple version-controlled archive collection;
- `assets/rtt-jogja-logo.jpg` for the official profile logo;
- a root `.nojekyll` file so GitHub Pages serves the static files without Jekyll processing.

There will be no frontend framework, package manager, generated build directory, database, or required local build command. A contributor should be able to understand and edit the website directly from the repository files.

Archive content must be separated from presentation code. Adding a work item should normally require editing only the archive data file rather than duplicating HTML markup.

### Current implementation status

The first complete static page is implemented. It currently renders 47 public records: 15 stories, 29 videos, one Instagram reel, and two public projects. The desktop and mobile layouts, navigation, archive expansion controls, and browser console have been verified locally.

Publishing is not active yet because this local repository still needs to be connected to `RTTJogja/RTTJogja.github.io` and configured as a GitHub Pages branch source.

## Visual Direction

The site should feel energetic, youthful, and entrepreneurial. It should communicate curiosity, initiative, useful conversations, and the excitement of building new ideas in Jogja.

The design should:

- use bold, confident typography and a lively but controlled color palette;
- make real RTT work and people the visual focus;
- use strong card layouts, clear section identities, and varied composition;
- feel welcoming to students and early-career builders;
- remain credible for academics, industry practitioners, and potential partners;
- avoid looking like a formal corporate brochure, a generic startup template, or a childish event page;
- use motion sparingly for meaningful page and card reveals without slowing browsing.

Entrepreneurship should be expressed through momentum, experimentation, collaboration, and visible outcomes rather than generic business imagery such as stock-photo handshakes or office towers.

## Initial Public Inventory

This inventory was discovered on 16 August 2026 and is the starting point for the website's complete archive.

### Bukit Vista RTT Jogja archive

The existing [Round Table Talk Jogja page](https://www.bukitvista.com/round-table-talk-jogja) describes the program and currently lists 15 stories dated from 12 February through 26 May 2024. Topics include:

- education and university collaboration;
- property knowledge and property-management innovation;
- AI in property management;
- digital-society partnerships;
- culture, tourism, and development;
- work-life harmony;
- hospitality technology;
- graduate job-market challenges;
- Gen Z and the future of property management;
- entrepreneurial ecosystems and university partnerships.

These stories should be represented as individual archive entries, not collapsed into one link.

### Video archives

- [RTT Jogja YouTube](https://www.youtube.com/@rttjogja) currently describes its purpose as “Create more entrepreneurs” and contains the short **Vision and Trust in Entrepreneurship**.
- [Bukit Vista Careers Shorts](https://www.youtube.com/@bukitvistacareers/shorts) currently contains 28 videos with RTT or Round Table in their titles, published from February through July 2026. Their topics include computer science, organizations, future entrepreneurs, CEO and executive-assistant work, entrepreneurship, AI, the economy, innovation, leadership, commitment, decision-making, personal growth, semiconductors, usefulness, and finding direction.
- [RTT Jogja Instagram](https://www.instagram.com/rttjogja) currently contains one public reel, published on 15 August 2026, and links back to the Bukit Vista RTT Jogja page.

### Public projects

The [RTT Jogja GitHub organization](https://github.com/RTTJogja) currently has two public repositories:

- [ditya](https://github.com/RTTJogja/ditya) - a Next.js and Firebase scheduling product, described in its project documentation as Verdant Schedule. It guides participants through meeting availability and gives administrators real-time availability analysis.
- [dcse-summer-ppt-public](https://github.com/RTTJogja/dcse-summer-ppt-public) - the public release of a 54-slide lecture deck, **Empowering the Tri Dharma with AI Agents**, including AI-agent foundations, academic workflow design, implementation, and AFK Research examples.

Every repository that is publicly visible under the RTT Jogja GitHub organization is considered part of the public work archive. Private repositories must not be listed or described. When another repository becomes public, the next content-discovery update should add it to the website.

## Content Maintenance

The first implementation should use a version-controlled content collection in this repository as the website's source of truth.

1. Use AFK Research to review the public source channels and find new or changed work.
2. Add or update normalized archive records in the repository.
3. Verify titles, dates, summaries, and original URLs.
4. Preview the static files locally and verify the relevant links and responsive layout.
5. Commit and push the website and content changes directly to `main`.
6. GitHub Pages publishes the new version automatically.

This workflow deliberately separates **content discovery** from **site deployment**. Social platforms are not assumed to provide stable, unauthenticated APIs, so a new social post does not appear on the website until AFK Research records it and the change reaches `main`.

## Publishing Requirements

- The production URL is `https://rttjogja.github.io`.
- The eventual GitHub repository must be `RTTJogja/RTTJogja.github.io` for the GitHub organization site URL to work.
- `main` is the source of truth for the live website.
- GitHub Pages must use **Deploy from a branch**, with `main` and `/(root)` selected as the publishing source.
- A push to `main` automatically publishes the current root static files without a custom GitHub Actions workflow.
- Direct pushes to `main` are allowed to keep the AFK Research editing workflow simple. Pull requests may still be used when review is useful.
- The local repository does not yet have a Git remote configured, so repository connection and Pages configuration are still required.

## Scope

### In scope for the first release

- A responsive public landing page.
- A clear explanation of RTT Jogja.
- A complete initial archive from the known public sources.
- Separate newest-first sections for stories and events, videos, Instagram posts, and public projects.
- Responsive visual cards for every archive entry.
- An energetic, youthful, entrepreneurship-focused visual identity.
- Direct links to original sources and social channels.
- Basic metadata for search engines and link previews.
- English-language navigation, descriptions, summaries, and calls to action.
- A build-free implementation using HTML, CSS, browser JavaScript, and version-controlled archive data.
- Automatic deployment from `main` to GitHub Pages.

### Not yet in scope

- A CMS or private admin dashboard.
- User accounts.
- Copying full Instagram, YouTube, or Bukit Vista content into this repository.
- Embedded video players or on-site video playback.
- Automatic live synchronization with social platforms.
- Event registration, newsletters, or application forms; joining is handled through DM or email.
- A custom domain beyond `rttjogja.github.io`.

## Success Criteria

- A first-time visitor can understand RTT Jogja within the opening screen and About section.
- Every known public RTT Jogja work item has an archive entry with a functioning original-source link.
- Visitors can distinguish events and stories, videos, projects, and presentations.
- Visitors see the newest published work first in every archive section and can continue into older work.
- Archive cards remain readable and useful with or without an image.
- Every video entry links to its original YouTube page without embedding a player.
- Visitors can easily follow the official channels, send an Instagram DM, or email the team.
- A visitor who wants to join RTT understands that they should ask through DM or `rttjogja@gmail.com`.
- The site works well on mobile and desktop.
- Updating an archive record and pushing it to `main` publishes the change without a manual deployment step.
- The archive makes source provenance and uncertain information explicit.
- Every archive entry reflects what its canonical source published, even when another source differs.
- The site uses clear English while preserving original source titles where appropriate.

## Working Vocabulary

- **RTT Jogja** - the community program and publisher represented by this website.
- **Work archive** - the complete website collection of public RTT Jogja outputs and documented activities.
- **Archive entry** - one normalized website record for an event, story, video, project, or presentation.
- **Source channel** - an external public location from which archive entries are discovered, such as Instagram, YouTube, Bukit Vista, or GitHub.
- **Public project** - any repository that everyone can view under the RTT Jogja GitHub organization.
- **Canonical source** - the original public URL that substantiates an archive entry.
- **Published record** - the title, date, description, and media presented by a canonical source, preserved without trying to reconcile it with other sources.
- **Content discovery** - researching source channels and translating verified public material into archive records.
- **Join request** - a message sent through Instagram DM or email by someone who wants to participate in an RTT session.
- **Deployment** - building and publishing the committed repository state to GitHub Pages.
