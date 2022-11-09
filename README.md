# newspk
## Description
A basic nodejs based news website (dawn) scraper. You can use this API to fetch latest news in English, Dutch or Urdu language. It uses node-fetch and jsdom dependencies and hence is a very light-weighted package.

## REST API
<a href="https://newspk.herokuapp.com">API</a>

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
    let limit = 5;              // max-allowed: 15, may return unexpected errors on limit violation
    let lang = "english";       // for english
    // let lang = "urdu";       // for urdu

    let news = await newspk.news(limit, lang);
    console.log(news)           // An array of object with properties "title", "thumbnail", "body", "created_at", "unique id"

})();

```

### ALTERNATIVELY, you can run example.js file.

### Feel free to contribute to the repository.
