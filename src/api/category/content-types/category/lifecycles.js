


module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
    
      console.log('SMS sent successfully');
    } catch (err) {
      console.error(err);
    }
  },
};
