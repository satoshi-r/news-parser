const express = require('express');
const cors = require('cors'); 
const config = require('./config');
const parsePosts = require('./parser/parsePosts');

const port = process.env.PORT || 3000;
const app = express();

const whitelist = ['https://collect-media.netlify.app/'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.get('/api/posts', cors(corsOptions), async (req, res) => {
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