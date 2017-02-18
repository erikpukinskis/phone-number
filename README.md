
Set the PLIVO_AUTH_ID and PLIVO_AUTH_TOKEN environment variables, then:

```javascript
var phonePerson = require("phone-person")

var jenny = phonePerson("15108675309")
jenny.send("I got it!")
```
