const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
  name: String,
  description: String,
  startDate: String,
  endDate: String,
  imagePath: String,
  categories: [new Schema({
    name: String,
  })],
  isSubscribed: Boolean,
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event