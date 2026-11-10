const http=require('http'),fs=require('fs'),path=require('path');
const root='D:/chatgpt/Shanghai-Trip-Delivery';
const allowed=new Set(['index.html','version.txt']);
http.createServer((req,res)=>{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname.slice(1))||'index.html';if(!allowed.has(name)){res.writeHead(404);return res.end('Not found');}fs.readFile(path.join(root,name),(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Content-Type',name.endsWith('.html')?'text/html; charset=utf-8':'text/plain; charset=utf-8');res.end(data);});}).listen(8000,'0.0.0.0');
