var library = require("module-library")(require)

module.exports = library.export(
  "phone-person",
  ["make-request"],
  function(makeRequest) {

    function PhonePerson(number) {
      this.number = number
    }

    PhonePerson.prototype.send = function(text) {
      function handleResponse(status, response) {
        console.log("Message sent?", status)
      }

      if (!process.env.SWIFT_ACCOUNT_KEY) {
        console.log("\nFAILED TO TEXT: "+text+" -> to "+this.number+"\n\nNo Swift SWIFT_ACCOUNT_KEY environment variable was set. Go to smsgateway.ca to get an account key.")
        return
      }

      var url = "https://secure.smsgateway.ca/services/message.svc/"+process.env.SWIFT_ACCOUNT_KEY+"/"+this.number

      makeRequest({
        "method": "POST",
        "url": url,
        "data": {
          "MessageBody": text}},
        handleResponse)

      console.log("sent!", this.number)
    }

    return function phonePerson(number) {
      return new PhonePerson(number)
    }
  }
)