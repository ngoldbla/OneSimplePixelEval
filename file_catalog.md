# OneSimplePixel File Catalog

This catalog documents the key files in the OneSimplePixel project archive, organized by category and function.

## Core Database Files

- `/1mp.sql/1mp.sql` - Main database structure and data dump
- `/1mp.sql/1mp_new_beginning.sql` - Updated database schema
- `/ospbackup/ospbackup/beta/data/db_1mp_beta.sql` - Beta version database structure

## Website Files - Production Version

### Main Pages

- `/ospbackup/ospbackup/index.php` - Main entry point for the website
- `/ospbackup/ospbackup/about.html` - About page explaining the project concept
- `/ospbackup/ospbackup/news.html` - News and updates about the project
- `/ospbackup/ospbackup/contact.html` - Contact information
- `/ospbackup/ospbackup/terms.html` - Terms of service
- `/ospbackup/ospbackup/stuff.html` - Merchandise page (links to CafePress)

### Interactive Components

- `/ospbackup/ospbackup/picker.html` - Pixel selection interface
- `/ospbackup/ospbackup/picker.js` - JavaScript for pixel selection functionality
- `/ospbackup/ospbackup/quick_zoom.html` - Zooming interface for pixel navigation
- `/ospbackup/ospbackup/zoom.js` - JavaScript for zoom functionality
- `/ospbackup/ospbackup/country.js` - Country selection functionality
- `/ospbackup/ospbackup/validate.js` - Form validation scripts

### Backend Utilities

- `/ospbackup/ospbackup/utils/build_1mp.php` - Script for generating the pixel image

### Images and Assets

- `/ospbackup/ospbackup/images/1mp.gif` - Main pixel canvas image
- `/ospbackup/ospbackup/images/1mp_1125_011207.gif` - Pixel canvas snapshot (Jan 12, 2007)
- `/ospbackup/ospbackup/images/1mp_1129_011207.gif` - Another pixel canvas snapshot (Jan 12, 2007)
- `/ospbackup/ospbackup/images/card_logo.gif` - Logo for the site
- `/ospbackup/ospbackup/images/sel.gif` - Selection indicator graphic
- `/ospbackup/ospbackup/images/terms.gif` - Terms of service graphic

## Website Files - Beta Version

### Main Pages

- `/ospbackup/ospbackup/beta/www/index.php` - Beta version main page
- `/ospbackup/ospbackup/beta/www/about.html` - Beta about page
- `/ospbackup/ospbackup/beta/www/news.html` - Beta news page
- `/ospbackup/ospbackup/beta/www/contact.html` - Beta contact page
- `/ospbackup/ospbackup/beta/www/terms.html` - Beta terms page
- `/ospbackup/ospbackup/beta/www/stuff.html` - Beta merchandise page

### Interactive Components

- `/ospbackup/ospbackup/beta/www/picker.html` - Beta pixel selection interface
- `/ospbackup/ospbackup/beta/www/picker.js` - Beta JavaScript for selection
- `/ospbackup/ospbackup/beta/www/quick_zoom.html` - Beta zoom interface
- `/ospbackup/ospbackup/beta/www/zoom.js` - Beta zoom functionality
- `/ospbackup/ospbackup/beta/www/country.js` - Beta country selection
- `/ospbackup/ospbackup/beta/www/validate.js` - Beta form validation

## Design Files

- `/pixel_add_interface.round.02.pdf` - Detailed design document for pixel interface (Round 2)
- `/design/assets/adsense.160x600.gif` - Advertisement banner design

## Data Tracking Files

- `/osp_pixels.xls` - Pixel tracking spreadsheet (general)
- `/osp_pixels_12_01.xls` - Pixel tracking from December 1, 2006
- `/osp_03.25.07.xls` - Pixel tracking from March 25, 2007

## Miscellaneous

- `/hacks/1mp_hacks.gif` - Unknown purpose, possibly showing hacking attempts
- `/ospbackup/ospbackup/googlebff8784e00043b6b.html` - Google site verification
- `/ospbackup/ospbackup/y_key_237e96298fc7f77e.html` - Yahoo site verification

## Key File Groups by Function

### User Interface

- Pixel picker interface: `picker.html`, `picker.js`
- Zoom navigation: `quick_zoom.html`, `zoom.js`
- Form validation: `validate.js`
- Country selection: `country.js`

### Backend Processing

- Database structure: `1mp.sql`, `1mp_new_beginning.sql`
- Image generation: `build_1mp.php`

### Design Evolution

- Interface designs: `pixel_add_interface.round.02.pdf`
- Asset designs: Files in `/design/`

### Data Management

- Excel tracking: `osp_pixels.xls`, `osp_pixels_12_01.xls`, `osp_03.25.07.xls`
- Database dumps: SQL files throughout the project

## File Analysis

The file structure reveals a project with:

1. **Multiple Development Environments**: Production and beta versions maintained in parallel
2. **Regular Backups**: Database dumps and Excel tracking files at different points in time
3. **Iterative Design Process**: Design files showing multiple rounds of interface refinement
4. **Standard Web Technologies**: PHP, JavaScript, HTML, and CSS as the primary building blocks
5. **Organized Development**: Separation of utilities, assets, and public-facing components