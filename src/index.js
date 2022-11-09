//    THIS NEWS SCRAPER HAS BEEN MADE BY MAZAN LABEEB
// DON'T FORGET TO GIVE CREDITS
// USE FOR EDUCATIONAL PRUPOSES ONLY 


const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var striptags = require('striptags');

let getnews = async function (url) {
    const response = await fetch(url);
    const body = await response.text();
    const dom = new JSDOM(body);
    let b = dom.window.document.querySelector('.story__content');
    let db = "";
    for (var i = 0; i < b.children.length; i++) {
        if (b.children[i].tagName == "P") {
            db += striptags(b.children[i].innerHTML.trim());
        }
    }
    return db;
};


let exe = async function (no = 5, lang = "urdu") {
    if (lang.toLowerCase() == "urdu") {
        var response = await fetch('https://www.dawnnews.tv/latest-news');
    } else {
        var response = await fetch('https://www.dawn.com/latest-news');

    }
    const body = await response.text();
    const dom = new JSDOM(body);
    let a = dom.window.document.getElementsByClassName('story__link');
    let b = dom.window.document.getElementsByClassName('media__item');
    let created_at = dom.window.document.getElementsByClassName('timeago');
    var content = [];
    for (let i = 0; i < no; i++) {
        let unique_id = b[i].firstChild.href.split('/')[4];
        await getnews(b[i].firstChild.href).then((data) => {
            content.push({
                "title": a[i].innerHTML,
                "thumbnail": b[i].firstChild.firstChild.firstChild.src,
                "body": data,
                "unique_id": unique_id,
                "created_at": created_at[i].title
            });
        })

    }

    return content;

};

let exe = async function (no = 5, lang = "dutch") {
    if (lang.toLowerCase() == "dutch") {
        var response = await fetch('https://www.hln.be/net-binnen');
    } else {
        var response = await fetch('https://www.dawn.com/latest-news');

    }
    const body = await response.text();
    const dom = new JSDOM(body);
    let a = dom.window.document.getElementsByClassName('story__link');
    let b = dom.window.document.getElementsByClassName('media__item');
    let created_at = dom.window.document.getElementsByClassName('timeago');
    var content = [];
    for (let i = 0; i < no; i++) {
        let unique_id = b[i].firstChild.href.split('/')[4];
        await getnews(b[i].firstChild.href).then((data) => {
            content.push({
                "title": a[i].innerHTML,
                "thumbnail": b[i].firstChild.firstChild.firstChild.src,
                "body": data,
                "unique_id": unique_id,
                "created_at": created_at[i].title
            });
        })

    }

    return content;

};


module.exports.news = function (no, lang) {
    return new Promise((resolve, reject) => {
        let a = exe(no, lang);
        resolve(a);
    })
}
