# Frogtown Spiral & Sheet Metal Website

Official website for Frogtown Spiral & Sheet Metal, based in Toledo, Ohio.

## Overview

This is a lightweight, responsive landing page built to establish an online presence and provide a simple way for customers to request quotes.

## Features

* Responsive single-page design
* Contact form powered by EmailJS
* Fast, static hosting via GitHub Pages

## Tech Stack

* HTML
* CSS
* JavaScript
* EmailJS

## Deployment

This site is hosted using GitHub Pages.

To deploy updates:

1. Push changes to the main branch
2. GitHub Pages will automatically rebuild and publish the site

## EmailJS Configuration

All EmailJS browser-side settings are stored in `config/emailjs-config.js`.

Update these values before deploying:

```js
window.EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
};
```

The contact form fields currently map to the following EmailJS template variables:

- `name`
- `email`
- `phone`
- `message`

Important: only use the **public key** in this file. Do not place your EmailJS private key in frontend code.

## Project Structure

```
/assets/images/
/config/emailjs_config.js
/css/styles.css
/js/main.js
index.html
```

## Future Improvements

* Project gallery / portfolio
* Google Maps integration
* SEO enhancements
* Performance optimization

## License

This project is proprietary and not licensed for reuse or distribution.
