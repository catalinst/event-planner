const eventModel = require('./Model')

const eventService = {

  getEvents: (success, fail) => {
    eventModel.find()
      .then(data => success(data))
      .catch(error => fail(error))
  },

  getEventsSubscribed: (success, fail) => {
    eventModel.find({ isSubscribed: true })
      .then(data => success(data))
      .catch(error => fail(error))
  },

  updateSubscriptionStatus: (eventId, status, success, fail) => {
    eventModel.findOneAndUpdate(
      { _id: eventId },
      { isSubscribed: status },
      { returnDocument: 'after' }
    )
      .then(data => success(data))
      .catch(error => fail(error))
  },

}

module.exports = eventService
