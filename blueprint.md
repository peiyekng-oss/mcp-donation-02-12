# WeCare Application Blueprint

## Overview

WeCare is a web application designed to connect corporate donors with surplus goods to NGOs that can distribute them to people in need. The platform aims to turn surplus into social impact.

## Project Structure & Style

*   **`index.html`**: Main entry point.
*   **`main.js`**: Main JavaScript file, imports and registers web components.
*   **`style.css`**: Global stylesheet with CSS variables for colors, fonts, and shadows.
*   **`header.js`**: Web component for the site header.
*   **`assets/brand-logo.png`**: The official brand logo image.
*   **`blueprint.md`**: This file, outlining the project's design and plans.

### Design System

*   **Primary Color (Forest Green)**: `#1E392A`
*   **Secondary Color (Leaf Green)**: `#5A8266`
*   **Accent Color (Terracotta)**: `#C5755A`
*   **Fonts**: A modern, clean, sans-serif font family.
*   **Logo**: The brand logo is now a PNG image (`assets/brand-logo.png`) and should be used in the header.

## Current Plan: Fix Broken Logo Image

**Problem:** The brand logo is not displaying in the header. This is because the image path in the `header.js` web component is incorrect, even after moving the logo to the `assets` directory.

**Steps to Resolve:**

1.  **Verify File Structure:** Confirm that `assets/brand-logo.png` exists.
2.  **Correct Image Path:** Modify `header.js` to use the correct, absolute path to the image (`/assets/brand-logo.png`). Using a root-relative path will ensure the image is found regardless of the page the component is on.
3.  **Redeploy:** Deploy the application with the corrected path.
