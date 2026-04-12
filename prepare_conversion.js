const fs = require('fs');
const path = require('path');

const images = ['football', 'baseball', 'basketball', 'hockey', 'soccer'];
let imagesData = {};

images.forEach(name => {
    try {
        const filePath = path.join('public', 'images', name + '.png');
        if (fs.existsSync(filePath)) {
            const base64 = fs.readFileSync(filePath).toString('base64');
            imagesData[name] = base64;
            console.log(`Read ${name}.png (${base64.length} chars)`);
        } else {
            console.log(`Missing: ${name}.png`);
        }
    } catch (e) {
        console.error(`Error reading ${name}:`, e.message);
    }
});

const html = `
<!DOCTYPE html>
<html>
<head><title>WebP Converter</title></head>
<body>
    <div id="status">Converting...</div>
    <div id="output" style="word-break: break-all; opacity: 0;"></div>
    <script>
        const data = ${JSON.stringify(imagesData)};
        const results = {};
        const names = Object.keys(data);
        
        async function convertAll() {
            for (const name of names) {
                const img = new Image();
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.src = 'data:image/png;base64,' + data[name];
                });
                
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                results[name] = canvas.toDataURL('image/webp', 0.85);
                console.log('Converted ' + name);
            }
            
            const out = document.getElementById('output');
            out.textContent = JSON.stringify(results);
            document.getElementById('status').textContent = 'DONE';
            console.log('---START---');
            console.log(out.textContent);
            console.log('---END---');
        }
        
        convertAll();
    </script>
</body>
</html>
`;

fs.writeFileSync('converter.html', html);
console.log('Generated converter.html');
