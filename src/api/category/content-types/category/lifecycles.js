const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNum = process.env.MYNUM;
const twilioNum = process.env.TWILIONUM;
const client = require('twilio')(accountSid, authToken);

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await client.messages.create({
        body: 'Hello , this is message from Tevh service. Dit me m',
        from: twilioNum,
        to: myNum,
      });
      console.log('SMS sent successfully');
    } catch (err) {
      console.error(err);
    }
  },
};
