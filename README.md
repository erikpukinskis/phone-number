
Set the PLIVO_AUTH_ID and PLIVO_AUTH_TOKEN environment variables, then:

```javascript
var phoneNumber = require("phone-number")

var jenny = phoneNumber("15108675309")
jenny.send("I got it!")
```
