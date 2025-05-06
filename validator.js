// validator.js
const fs = require('fs');
const path = require('path');

// Define all the pages we need to validate
const pages = [
  { name: 'index', title: 'OneSimplePixel Archaeological Report' },
  { name: 'project_overview', title: 'Project Overview' },
  { name: 'technical_architecture', title: 'Technical Architecture' },
  { name: 'user_experience', title: 'User Experience Analysis' },
  { name: 'project_timeline', title: 'Project Timeline' },
  { name: 'file_catalog', title: 'File Catalog' },
  { name: 'archaeological_conclusions', title: 'Archaeological Conclusions' }
];

// Directory path
const dirPath = '/Users/ngoldbla/Downloads/OneSimplePixelEval';

// Fix common HTML issues
function fixHTML(html) {
  let fixedHTML = html;
  
  // Fix unclosed tags
  fixedHTML = fixedHTML.replace(/<p>(.*?)<h[1-6]/gm, '<p>$1</p><h');
  
  // Fix nested paragraphs
  fixedHTML = fixedHTML.replace(/<p>(.*?)<p>/gm, '<p>$1</p><p>');
  
  // Fix unclosed list items
  fixedHTML = fixedHTML.replace(/<li>(.*?)<\/ul>/gm, '<li>$1</li></ul>');
  
  // Fix extra closing tags
  fixedHTML = fixedHTML.replace(/<\/p><\/p>/g, '</p>');
  
  // Fix multiple paragraph breaks
  fixedHTML = fixedHTML.replace(/<\/p>\s*<p>/g, '</p><p>');
  
  // Fix empty paragraphs
  fixedHTML = fixedHTML.replace(/<p><\/p>/g, '');
  
  // Fix code block formatting
  fixedHTML = fixedHTML.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, p1) => {
    const codeContent = p1.trim();
    return `<pre><code>${codeContent}</code></pre>`;
  });
  
  return fixedHTML;
}

// Process each HTML file
pages.forEach(page => {
  const htmlPath = path.join(dirPath, `${page.name}.html`);
  
  try {
    // Read the HTML file
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Fix common issues
    const fixedHTML = fixHTML(htmlContent);
    
    // Write the fixed HTML file
    fs.writeFileSync(htmlPath, fixedHTML);
    
    console.log(`Validated and fixed ${page.name}.html`);
  } catch (error) {
    console.error(`Error processing ${page.name}.html:`, error.message);
  }
});

console.log('\nAll HTML files validated and fixed!');