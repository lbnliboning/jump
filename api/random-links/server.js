// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

// 假设你的link.txt文件在服务器的根目录下
const linksPath = __dirname + '/link.txt';

app.get('/api/random-links', (req, res) => {
    fs.readFile(linksPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file');
        }
        // 假设每行是一个链接，去除空格和换行符
        const links = data.split('\n').map(line => line.trim());
        res.json(links);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
