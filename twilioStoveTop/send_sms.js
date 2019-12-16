// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC0b57f2bce57db79edf2bed68e5ed7a74';
const authToken = '3ef9369f8c656af0487cc148a42050f6';
const client = require('twilio')(accountSid, authToken);

const client_num = process.argv.find((arg)=>arg.startsWith("--number=")).slice(9);

if (!client_num) {
  console.log("number not provided");
  process.exit();
}

console.log('sending to ' + client_num);

client.messages
  .create({
    to: client_num,
    body: 'Your stove is on fire!',
    from: '+14842827218',
   })
  .then(message => console.log(message.sid))
  .catch(error => console.log("Failure"));
