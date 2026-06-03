# Frogtown Spiral & Sheet Metal Website

Official website for Frogtown Spiral & Sheet Metal, a pending-launch spiral ductwork and custom sheet metal business serving Toledo, Ohio and surrounding areas.

This project was built as a lightweight public-facing business website to establish an online presence, present planned services, and provide general contact information while the business prepares for launch.

## Current Status

The website is currently deployed in a **pending business launch** state.

The live production page does **not** accept new orders or quote requests at this time. The previous active-business version, including the original quote/contact form workflow, is preserved in the `active-business` branch.

## Live Site

This site is hosted using GitHub Pages.

Deployment branch:

```text
prod
```

## Overview

This is a lightweight, responsive single-page website built with plain HTML, CSS, and JavaScript. The project was designed to give the business a professional web presence with minimal hosting cost and a simple deployment workflow.

The site originally included an EmailJS-powered contact form for quote requests. After the business moved back into a pending-launch state, the production page was updated to remove active quote intake and instead display general inquiry contact information.

## Features

Current production version:

* Responsive single-page layout
* Pending-launch business status messaging
* General inquiry contact section
* Click-to-call phone link
* Mailto email link
* GitHub Pages deployment from the `prod` branch
* Preserved branch history for active and pending business states

Original active-business version:

* Quote/contact form
* EmailJS browser-side contact form integration
* Active quote request messaging
* Original business launch content

## Tech Stack

* HTML
* CSS
* JavaScript
* GitHub Pages
* EmailJS, preserved in the active-business version

## Branch Structure

| Branch                    | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| `main`                    | Current production-equivalent code                                           |
| `prod`                    | GitHub Pages deployment branch                                               |
| `pending-business-launch` | Current pending-launch website version                                       |
| `active-business`         | Previous active-business website with original form and business information |

## Deployment

GitHub Pages is configured to deploy from:

```text
Branch: prod
Folder: /root
```

To deploy updates:

1. Make and test changes locally.
2. Commit changes on the appropriate working branch.
3. Merge or fast-forward the approved version into `prod`.
4. Push `prod` to GitHub.
5. GitHub Pages automatically rebuilds and publishes the site.

Example:

```bash
git switch prod
git merge --ff-only pending-business-launch
git push origin prod
```

## EmailJS Configuration

The original active-business version used EmailJS for browser-side contact form submissions.

EmailJS browser-side settings are stored in:

```text
config/emailjs-config.js
```

Example configuration:

```js
window.EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
};
```

The original contact form fields mapped to the following EmailJS template variables:

* `name`
* `email`
* `phone`
* `message`

Important: only use the EmailJS public key in frontend code. Do not place private keys, passwords, or sensitive credentials in this repository.

## Project Structure

```text
/assets/images/
  logo.png

/config/
  emailjs-config.js

/css/
  styles.css

/js/
  main.js

index.html
README.md
```

## Future Improvements

Potential future improvements include:

* Re-enable quote request workflow when the business is operational
* Add project gallery or fabrication examples
* Add custom domain configuration
* Add local SEO improvements
* Add Google Business Profile integration
* Add Google Maps or service-area section
* Improve performance and image optimization
* Add structured data for local business search visibility

## License and Use

This project is proprietary and is not licensed for reuse, redistribution, or derivative works.

This repository is public for business visibility, portfolio demonstration, and project transparency. Viewing the source code does not grant permission to copy, reuse, redistribute, or commercially deploy this work without written permission from the repository owner.

## Project Credit

Website design, implementation, repository setup, branch/deployment workflow, GitHub Pages deployment, and EmailJS contact form integration were completed by [Alex Schlotterer](https://github.com/aschlot2).