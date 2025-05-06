# OneSimplePixel Project Overview

## Introduction

OneSimplePixel (OSP) is a web-based collaborative pixel art project created by "onesimple", an idea company, in late 2006 and launched on January 1, 2007. Unlike other million-pixel advertising pages popular during that time, OneSimplePixel had a more experimental and philosophical purpose.

## Project Concept

The concept of OneSimplePixel was to create a collaborative canvas where users could claim individual pixels, assign them colors, names, and descriptions, and see what would emerge from this collective creation. The website posed philosophical questions about the nature of collective creation:

- What will we create?
- What will it mean?
- Is it possible?
- Will we learn something about ourselves from this?
- Will the resulting image be a random collection of pixels or will we create a pattern?

As stated on the website: "simply stated, this question cannot be answered until the project is complete."

## Technical Implementation

The project consists of a web application with the following components:

1. **Database Structure**: A MySQL database (named `onesi3_1mp`) with a primary table `1mp` that stores pixel information:
   - x, y coordinates
   - Pixel name (limited to 24 characters)
   - Pixel color (hex value)
   - Pixel description (text field)
   - User email
   - User country
   - User IP address
   - Timestamp

2. **Web Interface**: PHP-based website with several key pages:
   - Home page with the pixel canvas
   - Pixel picker interface
   - About page
   - News page
   - Merchandise page (linking to CafePress)

3. **Pixel Interface**: Users could:
   - Select available pixels
   - Name their pixel
   - Write a description
   - Choose a color
   - Associate with a country
   - Provide email for updates

4. **Backend Processing**: PHP scripts to:
   - Process pixel submissions
   - Generate the collective image
   - Verify user inputs
   - Create backups of the database

## Development Timeline

- **Concept creation**: Late October 2006
- **Development start**: November 22, 2006
- **Initial release**: January 1, 2007
- **Continued updates**: Through at least March 25, 2007 (based on file dates)

## Project Evolution

Based on the file structure and versioning, the project went through several iterations:

1. Initial beta release
2. Live production version
3. Multiple interface design iterations (evidenced by design files)
4. Database schema updates and backups

The project appears to have been maintained at least through early 2007, with multiple backups and versions of the codebase preserved.

## Cultural Context

OneSimplePixel emerged during the era of collaborative internet art experiments and pixel-based advertising websites like the "Million Dollar Homepage". However, unlike commercial variants, OneSimplePixel positioned itself as a philosophical and artistic experiment in collective creation.

## Legacy

The preserved files represent a snapshot of early web-based collaborative art, showing both the technical implementation and conceptual thinking behind such projects in the mid-2000s era of the internet.