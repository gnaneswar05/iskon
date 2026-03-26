const fs = require('fs');
const path = require('path');

const cssPath = path.join('e:', 'iskon', 'app', 'globals.css');
const newCSS = `

/* --- NEW HEADER STYLES --- */
.top-bar {
  background: var(--brand); 
  color: var(--white);
  min-height: 80px;
  padding: 10px 0;
}
.top-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 100%;
}
.top-logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
}
.top-bar__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.top-bar__links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.top-bar__pills {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-login-top {
  font-family: var(--font-gilroy-sb);
  font-size: 16px;
  line-height: 1.25;
  color: var(--brand);
  background: var(--white);
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pill {
  background: rgba(0, 0, 0, 0.15); 
  color: var(--white) !important; 
  font-family: var(--font-gilroy-med);
  font-weight: 500;
  padding: 0 16px;
  height: 44px;
  min-height: auto;
}
.pill__dot {
  margin: 0 6px;
  font-size: 20px;
  line-height: 1;
}
.nav-bar {
  background: var(--white);
  min-height: 54px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.nav-bar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-height: 54px;
}
.main-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px 32px; 
  font-family: var(--font-gilroy-med);
  font-size: 15px; 
  text-transform: capitalize; 
  color: var(--nav-muted);
  width: 100%;
  margin: 0;
}
.nav-item {
  color: var(--nav-muted);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}
.nav-item:hover {
  opacity: 0.8;
}
.nav-item--active {
  background: #c54a3a; 
  color: var(--white) !important;
  padding: 8px 24px;
  border-radius: 6px;
}
.nav-item--active:hover {
  opacity: 1;
  background: #a93c2d;
}
.nav-item--dropdown {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
`;

let currentCSS = fs.readFileSync(cssPath, 'utf8');
if (!currentCSS.includes('/* --- NEW HEADER STYLES --- */')) {
  fs.appendFileSync(cssPath, newCSS);
  console.log('CSS appended successfully');
} else {
  console.log('CSS already contains the new styles');
}
