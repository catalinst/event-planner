const express = require('express');
const eventService = require('./Service');

const eventsRouter = express.Router();

eventsRouter.route('/get-events').get(getEvents);
eventsRouter.route('/get-events/subscribed').get(getEventsSubscribed);
eventsRouter.route('/update-event/:eventId').put(updateSubscriptionStatus);

function getEvents(request, response) {
  eventService.getEvents(
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
}

function getEventsSubscribed(request, response) {
  eventService.getEventsSubscribed(
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
}

function updateSubscriptionStatus(request, response) {
  const { eventId } = request.params
  const { isSubscribed } = request.body
  eventService.updateSubscriptionStatus(
    eventId,
    isSubscribed,
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
}

module.exports = eventsRouter;
