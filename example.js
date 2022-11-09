const newspk = require("newspk");

(async () => {
    let limit = 5;              // max-allowed: 15
    let lang = "english";       // for english
    // let lang = "urdu";       // for urdu
    // let lang = "dutch";      // for dutch

    let news = await newspk.news(limit, lang);
    console.log(news)           // An array of object with properties "title", "thumbnail", "body", "created_at", "unique id"

})();
