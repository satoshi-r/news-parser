const unirest = require('unirest');
const cherio = require('cherio');

async function parsePosts(url, elems) {
    return new Promise(async (resolve, reject) => {
        await unirest.get(url).end(({
            body,
            error
        }) => {
            const $ = cherio.load(body);
            const domain = url.match(/\/\/(.*?)\//)[1];
            const posts = [];
            const titles = [];
            const links = [];

            $(elems.title).each((i, title) => {
                titles.push($(title).text().trim());
            });

            $(elems.link).each((i, link) => {
                links.push(`http://${domain}${$(link).attr("href")}`);
            });

            for (let index = 0; index < titles.length; index++) {
                posts.push({
                    id: index,
                    name: elems.name,
                    title: titles[index],
                    link: links[index],
                    url: elems.url
                });
            }

            if (error) {
                reject(error);
            }

            resolve(posts);
        });
    });
}

module.exports = parsePosts;