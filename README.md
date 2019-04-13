**phone-person** is a dead simple SMS sending library that uses the [Swift SMS Gateway](https://www.swiftsmsgateway.com/). Sign up for an account, set the `SWIFT_ACCOUNT_KEY` environment variable, then:

```javascript
var phonePerson = require("phone-person")

var jenny = phonePerson("15108675309")
jenny.send("I got it!")
```
