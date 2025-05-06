// fix_lists.js
const fs = require('fs');
const path = require('path');

// Define all the pages to fix
const pages = [
  'index', 
  'project_overview', 
  'technical_architecture', 
  'user_experience', 
  'project_timeline', 
  'file_catalog', 
  'archaeological_conclusions'
];

// Directory path
const dirPath = '/Users/ngoldbla/Downloads/OneSimplePixelEval';

// Fix specific list issues
function fixListIssues(html) {
  let fixedHTML = html;
  
  // Fix paragraphs inside list items
  fixedHTML = fixedHTML.replace(/<ul>\s*<p>\s*/g, '<ul>');
  fixedHTML = fixedHTML.replace(/<\/p>\s*<\/ul>/g, '</ul>');
  fixedHTML = fixedHTML.replace(/<li>([^<]*)<\/li>/g, '<li>$1</li>');
  
  // Remove empty <p> tags
  fixedHTML = fixedHTML.replace(/<p>\s*<\/p>/g, '');
  
  return fixedHTML;
}

// Process each HTML file
pages.forEach(page => {
  const htmlPath = path.join(dirPath, `${page}.html`);
  
  try {
    // Read the HTML file
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Fix list issues
    const fixedHTML = fixListIssues(htmlContent);
    
    // Write the fixed HTML file
    fs.writeFileSync(htmlPath, fixedHTML);
    
    console.log(`Fixed list issues in ${page}.html`);
  } catch (error) {
    console.error(`Error processing ${page}.html:`, error.message);
  }
});

console.log('\nAll list issues fixed!');