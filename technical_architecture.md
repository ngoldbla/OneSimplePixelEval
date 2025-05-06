# Technical Architecture of OneSimplePixel

## System Architecture

The OneSimplePixel project appears to use a standard LAMP (Linux, Apache, MySQL, PHP) stack architecture, common for web applications of its era (2006-2007).

### Components

1. **Web Server**: Likely Apache based on file structure and common web server technology of the time
2. **Database**: MySQL database
3. **Server-side Programming**: PHP (pre-version 5 conventions)
4. **Client-side Technologies**: HTML, JavaScript, CSS
5. **Image Processing**: PHP GD library for pixel manipulation and image generation

## Database Schema

The project uses a MySQL database with a primary table structure:

```sql
CREATE TABLE `1mp` (
  `x` int(11) NOT NULL default '0',
  `y` int(11) NOT NULL default '0',
  `count` int(11) NOT NULL auto_increment,
  `pixelName` varchar(24) NOT NULL default '',
  `pixelColor` varchar(6) NOT NULL default '',
  `pixelDescription` text NOT NULL,
  `humanEmail` varchar(100) NOT NULL default '',
  `update` tinyint(1) NOT NULL default '0',
  `verified` tinyint(1) NOT NULL default '0',
  `humanCountry` varchar(50) NOT NULL default '',
  `humanIP` varchar(20) NOT NULL default '',
  `DateTime` datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY (`count`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
```

### Database Fields

- **x, y**: Pixel coordinates on the 1000×1000 canvas
- **count**: Auto-incremented unique identifier
- **pixelName**: User-provided name for the pixel (max 24 chars)
- **pixelColor**: Hexadecimal color value (without # prefix)
- **pixelDescription**: User-provided description/meaning for the pixel
- **humanEmail**: Email address for updates notification
- **update**: Boolean flag for notification opt-in
- **verified**: Verification status flag
- **humanCountry**: Country association for the pixel
- **humanIP**: IP address of the submitter
- **DateTime**: Timestamp of submission

## File Structure

The project has a relatively complex file structure that suggests multiple iterations and development phases:

### Main Components

1. **Web Root (`ospbackup/`)**: 
   - Contains public-facing website files
   - HTML templates for static pages
   - JavaScript for interactive features
   - Image assets

2. **Utility Scripts (`utils/`)**: 
   - Backend processing scripts
   - Image generation (`build_1mp.php`)
   - Database operations
   - Verification scripts

3. **Design Assets (`design/`)**:
   - Interface mockups (.xcf GIMP files)
   - OmniGraffle interface designs
   - Visual assets for the site
   - Versioned design files

4. **Database Files (`1mp.sql/`)**:
   - SQL dump files
   - Table creation scripts
   - Data backups

5. **Beta Version (`ospbackup/beta/`)**:
   - Earlier version of the site
   - Testing environment
   - Includes WordPress installation package

## Key Technical Processes

### Pixel Image Generation

The `build_1mp.php` script outlines the image generation process:

1. Create a 1000×1000 pixel GIF canvas with white background
2. Query the database for all pixel entries
3. For each entry, convert the stored hex color to RGB values
4. Set individual pixels on the canvas based on x,y coordinates and color
5. Output the composite image as a GIF file

```php
// Simplified process from build_1mp.php
$im = imagecreate(1000, 1000);
$bgcolor = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
imagefill($im, 0, 0, $bgcolor);

// Query database for pixels
$sql = 'SELECT * FROM 1mp';
$result = mysql_query($sql, $db);

while ($row = mysql_fetch_assoc($result)) {
    $c = imagecolorexact($im, 
        hexdec(substr($row["pixelColor"], 0,2)), 
        hexdec(substr($row["pixelColor"], 2,2)), 
        hexdec(substr($row["pixelColor"], 4,2)));
    imagesetpixel($im, $row["x"], $row["y"], $c);
}

// Output final image
imageGIF($im, "../images/1mp_rebuilt.gif", 100);
imagedestroy($im);
```

### User Interface

Based on the preserved design files and HTML templates, the user interface featured:

1. **Pixel Selection Interface**: 
   - Interactive canvas for selecting available pixels
   - Hover states to show pixel availability
   - Zoom functionality for precise selection

2. **Information Entry Forms**:
   - Fields for pixel name, description, color
   - Country selection
   - Email entry for notifications
   - Terms acceptance

3. **Navigation**:
   - Pixel browsing interface
   - Zoom controls
   - Information display for claimed pixels

## Security Considerations

The codebase shows some security considerations typical of its era:

1. Database credentials hardcoded in scripts (not a best practice today)
2. Limited input validation visible in the code snippets
3. Storage of user IP addresses and email information
4. CAPTCHA implementation for bot prevention

## Development Evolution

File naming conventions and directory structure suggest an organic development process:

1. Multiple iterations of database structure (multiple SQL files)
2. Interface design revisions (multiple versioned design files)
3. Backup copies of critical scripts before modifications
4. Beta testing environment separate from production

## Technical Challenges

Based on the code and structure, the developers likely faced these technical challenges:

1. **Performance optimization** for a potentially large database of pixel entries
2. **Image generation efficiency** when recreating the 1000×1000 canvas
3. **Interactive interface development** for pixel selection in 2006-era browsers
4. **Concurrent user management** to prevent pixel collision/overwrites
5. **Backup and restoration** procedures for continued operation