const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'iskon', 'app', 'page.jsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Add imports at the top
if (!code.includes('import Header')) {
  code = `import Header from "../components/Header";\nimport Footer from "../components/Footer";\n\n` + code;
}

// 2. Remove function Footer()
const footerStart = code.indexOf('function Footer() {');
const homeStart = code.indexOf('export default function Home() {');
if (footerStart !== -1 && homeStart !== -1 && footerStart < homeStart) {
  code = code.slice(0, footerStart) + code.slice(homeStart);
}

// 3. Replace header content
const heroBlock = code.indexOf('<header className="hero-block">');
const visualBlock = code.indexOf('<div className="hero-visual">');
const heroBlockEnd = heroBlock + '<header className="hero-block">'.length;

if (heroBlock !== -1 && visualBlock !== -1 && heroBlock < visualBlock) {
  code = code.slice(0, heroBlockEnd) + '\n        <Header />\n        ' + code.slice(visualBlock);
}

// 4. Replace <Footer /> tag since Footer function is gone, we just use the imported one.
// Actually <Footer /> is already used in page.jsx. Let's check if it exists:
// In Step 15 line 899: <Footer />
// Since the imported component is named Footer, the <Footer /> tag will work out of the box!

fs.writeFileSync(filePath, code);
console.log('Refactoring complete!');
