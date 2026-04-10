/**
 * Lenovo A/B Test – Static File Server
 * Zero dependencies — uses only Node.js built-ins.
 *
 * Usage:
 *   node server.js          (default port 3000)
 *   PORT=5000 node server.js
 *
 * Routes:
 *   http://localhost:3000/              → A/B test landing page
 *   http://localhost:3000/variant_a/    → Variant A home
 *   http://localhost:3000/variant_a/laptops.html  → Variant A results
 *   http://localhost:3000/variant_b/    → Variant B home
 *   http://localhost:3000/variant_b/laptops.html  → Variant B results
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT     = parseInt(process.env.PORT || '5000', 10);
const BASE_DIR = __dirname;

const MIME = {
  '.html' : 'text/html; charset=utf-8',
  '.css'  : 'text/css; charset=utf-8',
  '.js'   : 'application/javascript; charset=utf-8',
  '.json' : 'application/json',
  '.png'  : 'image/png',
  '.jpg'  : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.gif'  : 'image/gif',
  '.svg'  : 'image/svg+xml',
  '.ico'  : 'image/x-icon',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
};

// ── Helper: send a file ────────────────────────────────────
function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 – Not Found: ' + filePath.replace(BASE_DIR, ''));
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 – Internal Server Error');
      }
      return;
    }
    const ext         = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type' : contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
}

// ── Request handler ────────────────────────────────────────
const server = http.createServer((req, res) => {
  // Strip query string and decode
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    urlPath = req.url.split('?')[0];
  }

  // Directory → index.html
  if (urlPath === '/' || urlPath === '') {
    return serveFile(res, path.join(BASE_DIR, 'index.html'));
  }
  if (urlPath.endsWith('/')) {
    urlPath += 'index.html';
  }

  // Resolve to absolute file path
  const filePath = path.normalize(path.join(BASE_DIR, urlPath));

  // Security: block path traversal
  if (!filePath.startsWith(BASE_DIR + path.sep) && filePath !== BASE_DIR) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 – Forbidden');
    return;
  }

  // If path has no extension, try appending .html
  if (!path.extname(filePath)) {
    const withHtml = filePath + '.html';
    if (fs.existsSync(withHtml)) {
      return serveFile(res, withHtml);
    }
  }

  serveFile(res, filePath);
});

// ── Start ──────────────────────────────────────────────────
server.listen(PORT, '0.0.0.0', () => {
  const line = '─'.repeat(52);
  console.log(`\n${line}`);
  console.log('  🚀  Lenovo A/B Test Server');
  console.log(line);
  console.log(`  Landing page  →  http://localhost:${PORT}/`);
  console.log(`  Variant A     →  http://localhost:${PORT}/variant_a/`);
  console.log(`  Variant B     →  http://localhost:${PORT}/variant_b/`);
  console.log(`  Laptops A     →  http://localhost:${PORT}/variant_a/laptops.html`);
  console.log(`  Laptops B     →  http://localhost:${PORT}/variant_b/laptops.html`);
  console.log(`${line}\n`);
  console.log('  Press Ctrl+C to stop.\n');
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌  Port ${PORT} is already in use.`);
    console.error(`   Try:  PORT=3001 node server.js\n`);
  } else {
    console.error('\n❌  Server error:', err.message);
  }
  process.exit(1);
});
