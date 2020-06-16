
const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://localhost:4200'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let AllMetas = [];
    let metas = $('meta');
    Array.from(metas).forEach(meta=> {
          var dumMeta = {};
          var attributes = meta.getAttributeNames();
          attributes.forEach(function(attr) {
              dumMeta[attr] = meta.getAttribute(attr);
          });
          AllMetas.push(dumMeta);
          return AllMetas;

    })

    

    console.log(AllMetas);
});