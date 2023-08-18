import axios from 'axios'

const api = {

  fetchCategories: async () => {
    const URL = 'http://localhost:4000/categories/get-categories'
    return await axios.get(URL)
      .then((res) => res)
      .catch((err) => err)
  },

  fetchEvents: async () => {
    const URL = 'http://localhost:4000/events/get-events'
    return await axios.get(URL)
      .then((res) => res)
      .catch((err) => err)
  },

  fetchUserEvents: async () => {
    const URL = 'http://localhost:4000/events/get-events/subscribed'
    return await axios.get(URL)
      .then((res) => res)
      .catch((err) => err)
  },

  subscribeEvent: async (_id) => {
    const URL = 'http://localhost:4000/events/update-event/' + _id
    return await axios.put(URL, { isSubscribed: true })
      .then((res) => res)
      .catch((err) => err)
  },

  unsubscribeEvent: async (_id) => {
    const URL = 'http://localhost:4000/events/update-event/' + _id
    return await axios.put(URL, { isSubscribed: false })
      .then((res) => res)
      .catch((err) => err)
  },
}

export default api
