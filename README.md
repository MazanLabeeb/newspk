# newspk

## include this module using the 
```
const newspk = require("newspk");
```

## Basic Usage

```
let limit = 5;              // will fetch 5 most recent news
let lang = "english";       // available language   URDU or ENGLISH
newspk.news(limit,lang).then((data)=>{
    console.log(data);      // An array of object with properties "title", "thumbnail", "body"
});
```
