# newspk
## Description
A basic nodejs based news website (dawn) scraper. You can use this API to fetch latest news in English or Urdu language. It uses node-fetch and jsdom dependencies and hence is a very light-weighted package.

## INSTALLATION
You need to install node nodejs and npm package on your machine before using this package.

After installing nodejs and npm, install this package using the command:
```
npm install newspk
```

### Include this module as:
```
const newspk = require("newspk");
```

### Basic Usage:

```
const newspk = require("newspk");

(async () => {
    let limit = 5;              // max-allowed: 15
    let lang = "english";       // for english
    // let lang = "urdu";       // for urdu

    let news = await newspk.news(limit, lang);
    console.log(news)           // An array of object with properties "title", "thumbnail", "body", "created_at"

})();

```

### ALTERNATIVELY, you can run example.js file.

### Feel free to contribute to the repository.
