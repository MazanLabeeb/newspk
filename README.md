# newspk

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
(async () => {
    let limit = 5;              // will fetch 5 most recent news
    let lang = "english";       // for english
    // let lang = "urdu";       // for urdu

    let news = await newspk.news(limit, lang);
    console.log(news)           // An array of object with properties "title", "thumbnail", "body"

})();
```

### ALTERNATIVELY, you can run example.js file.
