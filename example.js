const newspk = require("newspk");

(async () => {
    let limit = 5;              // will fetch 5 most recent news
    let lang = "english";       // for english
    // let lang = "urdu";       // for urdu

    let news = await newspk.news(limit, lang);
    console.log(news)           // An array of object with properties "title", "thumbnail", "body"

})();