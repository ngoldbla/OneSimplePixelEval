// converter.js
const fs = require('fs');
const path = require('path');

// Define all the pages we need to convert
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

// Simple markdown to HTML conversion
function convertMarkdownToHTML(markdown) {
  let html = markdown;
  
  // Replace headers
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
  
  // Replace links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
  
  // Replace emphasis
  html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
  
  // Replace lists
  let inList = false;
  const lines = html.split('\n');
  html = lines.map(line => {
    // Unordered list
    if (line.match(/^- (.+)$/)) {
      const content = line.replace(/^- (.+)$/, '$1');
      if (!inList) {
        inList = true;
        return `<ul>\n  <li>${content}</li>`;
      }
      return `  <li>${content}</li>`;
    } else if (inList) {
      inList = false;
      return `</ul>\n${line}`;
    }
    return line;
  }).join('\n');
  
  if (inList) {
    html += '\n</ul>';
  }
  
  // Replace code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Replace inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Replace paragraphs
  const paragraphLines = html.split('\n');
  let inParagraph = false;
  html = paragraphLines.map(line => {
    // Skip lines that are already HTML tags or empty lines
    if (line.trim() === '' || line.match(/^<[^>]+>/)) {
      if (inParagraph) {
        inParagraph = false;
        return '</p>\n' + line;
      }
      return line;
    } else if (!inParagraph && !line.match(/^<\//)) {
      inParagraph = true;
      return '<p>' + line;
    }
    return line;
  }).join('\n');
  
  if (inParagraph) {
    html += '</p>';
  }
  
  // Convert .md links to .html
  html = html.replace(/\.md/g, '.html');
  
  return html;
}

// Create HTML template
function createHTMLTemplate(title, content, currentPage) {
  const navLinks = pages.map(page => {
    const activeClass = page.name === currentPage ? ' class="active"' : '';
    return `      <a href="${page.name}.html"${activeClass}>${page.title}</a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - OneSimplePixel Archaeological Report</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>OneSimplePixel Archaeological Report</h1>
    <p>A forensic reconstruction of a 2006-2007 collaborative web art experiment</p>
  </header>
  
  <nav>
${navLinks}
  </nav>
  
  <main>
    ${content}
  </main>
  
  <footer>
    <p>Archaeological Report Generated 2025</p>
  </footer>
</body>
</html>`;
}

// Process each Markdown file
pages.forEach(page => {
  const mdPath = path.join(dirPath, `${page.name}.md`);
  const htmlPath = path.join(dirPath, `${page.name}.html`);
  
  try {
    // Read the markdown file
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    
    // Convert markdown to HTML
    const htmlContent = convertMarkdownToHTML(mdContent);
    
    // Embed HTML in the template
    const fullHTML = createHTMLTemplate(page.title, htmlContent, page.name);
    
    // Write the HTML file
    fs.writeFileSync(htmlPath, fullHTML);
    
    console.log(`Converted ${page.name}.md to ${page.name}.html`);
  } catch (error) {
    console.error(`Error processing ${page.name}.md:`, error.message);
  }
});

console.log('\nAll files converted successfully!');