const express = require('express');
const path = require('path');
const config = require('./config');
const parsePosts = require('./parser/parsePosts');

const port = process.env.PORT || 3030;
const app = express();

app.get('/api/posts', async (req, res) => {
    const posts = [];
    for (const key in config) {
        const data = await parsePosts(config[key].url, config[key]);
        posts.push(...data);
    }
    res.status(200).json(posts);
});

const server = app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server has been started on http://localhost:${server.address().port}`);
});